import { supabaseAdmin } from '@/lib/supabaseAdminClient';
import { NextResponse } from 'next/server';

const ADMIN_SECRET = process.env.ADMIN_SECRET;

type PostRow = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  content: string;
  published_at: string | null;
  is_published: boolean;
};

type AdminPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  content: string;
  publishedAt: string | null;
  isPublished: boolean;
};

function unauthorized(message = 'Unauthorized') {
  return NextResponse.json({ error: message }, { status: 401 });
}

function serverMisconfigured() {
  console.error('ADMIN_SECRET is not configured.');
  return NextResponse.json(
    { error: 'Server configuration error. Please contact administrator.' },
    { status: 500 }
  );
}

function normalizePost(row: PostRow): AdminPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    coverImage: row.cover_image,
    content: row.content,
    publishedAt: row.published_at,
    isPublished: row.is_published,
  };
}

function requireAdmin(req: Request) {
  if (!ADMIN_SECRET) {
    return serverMisconfigured();
  }

  const token = req.headers.get('x-admin-token');
  if (!token || token !== ADMIN_SECRET) {
    return unauthorized();
  }

  return null;
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : null;
}

function getFile(formData: FormData, key: string) {
  const value = formData.get(key);
  return value instanceof File && value.size > 0 ? value : null;
}

function generateCoverPath(slug: string, fileName: string) {
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '') || 'post';
  const extension = fileName.split('.').pop();
  const safeExt = extension ? extension.replace(/[^a-zA-Z0-9]/g, '') : 'jpg';
  return `covers/${safeSlug}-${Date.now()}.${safeExt}`;
}

async function uploadCoverImage(file: File, slug: string) {
  const filePath = generateCoverPath(slug, file.name || 'cover.jpg');

  const { error: uploadError } = await supabaseAdmin.storage
    .from('article-covers')
    .upload(filePath, file, { contentType: file.type || 'application/octet-stream' });

  if (uploadError) {
    console.error('[AdminUploadCover] Supabase Storage error:', uploadError.message);
    return { error: '上傳首圖失敗，請稍後再試。' };
  }

  const { data: publicUrlData, error: publicUrlError } = supabaseAdmin.storage
    .from('article-covers')
    .getPublicUrl(filePath);

  if (publicUrlError || !publicUrlData?.publicUrl) {
    console.error('[AdminUploadCover] Supabase public URL error:', publicUrlError?.message);
    return { error: '取得首圖網址失敗。' };
  }

  return { publicUrl: publicUrlData.publicUrl };
}

export async function GET(req: Request) {
  const authError = requireAdmin(req);
  if (authError) return authError;

  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('[AdminListPosts] Supabase error:', error.message);
    return NextResponse.json({ error: '無法取得文章列表。' }, { status: 500 });
  }

  return NextResponse.json({ posts: data?.map(normalizePost) ?? [] });
}

export async function POST(req: Request) {
  const authError = requireAdmin(req);
  if (authError) return authError;

  const formData = await req.formData();

  const title = getString(formData, 'title');
  const slug = getString(formData, 'slug');
  const excerpt = getString(formData, 'excerpt');
  const content = getString(formData, 'content');
  const publishedAt = getString(formData, 'publishedAt');
  const isPublished = getString(formData, 'isPublished') !== 'false';
  const coverImageFile = getFile(formData, 'coverImage');

  if (!title || !slug || !content) {
    return NextResponse.json({ error: '缺少必要欄位（標題、slug 或內文）。' }, { status: 400 });
  }

  if (!coverImageFile) {
    return NextResponse.json({ error: '請上傳文章首圖。' }, { status: 400 });
  }

  const { publicUrl, error: uploadError } = await uploadCoverImage(coverImageFile, slug);
  if (uploadError || !publicUrl) {
    return NextResponse.json({ error: uploadError }, { status: 500 });
  }

  const { data, error } = await supabaseAdmin
    .from('posts')
    .insert({
      title,
      slug,
      excerpt: excerpt || null,
      cover_image: publicUrl,
      content,
      published_at: publishedAt ? new Date(publishedAt).toISOString() : new Date().toISOString(),
      is_published: isPublished,
    })
    .select('*')
    .single();

  if (error) {
    console.error('[AdminCreatePost] Supabase error:', error.message);
    return NextResponse.json({ error: '新增文章失敗，請稍後再試。' }, { status: 500 });
  }

  return NextResponse.json({ message: '文章已建立', post: normalizePost(data) });
}

export async function PUT(req: Request) {
  const authError = requireAdmin(req);
  if (authError) return authError;

  const formData = await req.formData();

  const idString = getString(formData, 'id');
  const id = idString ? Number(idString) : null;
  const title = getString(formData, 'title');
  const slug = getString(formData, 'slug');
  const excerpt = getString(formData, 'excerpt');
  const content = getString(formData, 'content');
  const publishedAt = getString(formData, 'publishedAt');
  const isPublished = getString(formData, 'isPublished') !== 'false';
  const existingCoverImage = getString(formData, 'existingCoverImage');
  const coverImageFile = getFile(formData, 'coverImage');

  if (!id) {
    return NextResponse.json({ error: '缺少文章 ID。' }, { status: 400 });
  }

  if (!title || !slug || !content) {
    return NextResponse.json({ error: '缺少必要欄位（標題、slug 或內文）。' }, { status: 400 });
  }

  let coverImageUrl = existingCoverImage;

  if (coverImageFile) {
    const { publicUrl, error: uploadError } = await uploadCoverImage(coverImageFile, slug);
    if (uploadError || !publicUrl) {
      return NextResponse.json({ error: uploadError }, { status: 500 });
    }
    coverImageUrl = publicUrl;
  }

  if (!coverImageUrl) {
    return NextResponse.json({ error: '請上傳文章首圖。' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('posts')
    .update({
      title,
      slug,
      excerpt: excerpt || null,
      cover_image: coverImageUrl,
      content,
      published_at: publishedAt ? new Date(publishedAt).toISOString() : new Date().toISOString(),
      is_published: isPublished,
    })
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    console.error('[AdminUpdatePost] Supabase error:', error.message);
    return NextResponse.json({ error: '更新文章失敗，請稍後再試。' }, { status: 500 });
  }

  return NextResponse.json({ message: '文章已更新', post: normalizePost(data) });
}

export async function DELETE(req: Request) {
  const authError = requireAdmin(req);
  if (authError) return authError;

  const payload = await req.json();
  const { id } = payload;

  if (!id) {
    return NextResponse.json({ error: '缺少文章 ID。' }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from('posts').delete().eq('id', id);

  if (error) {
    console.error('[AdminDeletePost] Supabase error:', error.message);
    return NextResponse.json({ error: '刪除文章失敗，請稍後再試。' }, { status: 500 });
  }

  return NextResponse.json({ message: '文章已刪除' });
}
