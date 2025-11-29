import { supabaseAdmin } from '@/lib/supabaseAdminClient';
import { NextResponse } from 'next/server';

const ADMIN_SECRET = process.env.ADMIN_SECRET;

function unauthorized(message = 'Unauthorized') {
  return NextResponse.json({ error: message }, { status: 401 });
}

export async function POST(req: Request) {
  if (!ADMIN_SECRET) {
    console.error('ADMIN_SECRET is not configured.');
    return NextResponse.json(
      { error: 'Server configuration error. Please contact administrator.' },
      { status: 500 }
    );
  }

  const token = req.headers.get('x-admin-token');
  if (!token || token !== ADMIN_SECRET) {
    return unauthorized();
  }

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

  return NextResponse.json({ message: '文章已建立', post: data });
}
