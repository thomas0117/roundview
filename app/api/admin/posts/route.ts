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

  const payload = await req.json();

  const { title, slug, excerpt, coverImage, content, publishedAt, isPublished = true } = payload;

  if (!title || !slug || !content) {
    return NextResponse.json({ error: '缺少必要欄位（標題、slug 或內文）。' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('posts')
    .insert({
      title,
      slug,
      excerpt: excerpt ?? null,
      cover_image: coverImage ?? null,
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

  const payload = await req.json();
  const { id, title, slug, excerpt, coverImage, content, publishedAt, isPublished = true } = payload;

  if (!id) {
    return NextResponse.json({ error: '缺少文章 ID。' }, { status: 400 });
  }

  if (!title || !slug || !content) {
    return NextResponse.json({ error: '缺少必要欄位（標題、slug 或內文）。' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('posts')
    .update({
      title,
      slug,
      excerpt: excerpt ?? null,
      cover_image: coverImage ?? null,
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
