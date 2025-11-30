import { supabaseAdmin } from '@/lib/supabaseAdminClient';
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';

const ADMIN_SECRET = process.env.ADMIN_SECRET;
const POST_IMAGE_BUCKET = process.env.SUPABASE_POST_IMAGE_BUCKET || 'post-images';

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

export async function POST(req: Request) {
  const authError = requireAdmin(req);
  if (authError) return authError;

  const formData = await req.formData();
  const file = formData.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: '缺少圖片檔案。' }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const fileExt = file.name.split('.').pop() || 'png';
  const filePath = `covers/${randomUUID()}.${fileExt}`;

  const { data, error } = await supabaseAdmin.storage.from(POST_IMAGE_BUCKET).upload(filePath, Buffer.from(arrayBuffer), {
    cacheControl: '3600',
    contentType: file.type || undefined,
    upsert: false,
  });

  if (error) {
    console.error('[AdminUploadCover] Supabase error:', error.message);
    return NextResponse.json({ error: '圖片上傳失敗，請稍後再試。' }, { status: 500 });
  }

  const { data: publicUrl } = supabaseAdmin.storage.from(POST_IMAGE_BUCKET).getPublicUrl(data.path);

  if (!publicUrl?.publicUrl) {
    return NextResponse.json({ error: '無法取得圖片網址。' }, { status: 500 });
  }

  return NextResponse.json({
    message: '圖片已上傳',
    path: data.path,
    publicUrl: publicUrl.publicUrl,
  });
}
