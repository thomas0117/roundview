// app/articles/[slug]/page.tsx
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  tags: string[] | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
};

type ArticlePageParams = {
  slug: string;
};

// 👉 注意：這裡的 params 是 Promise，要先 await
export async function generateMetadata({ params }: { params: Promise<ArticlePageParams> }) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from('posts')
    .select('title, excerpt, cover_image')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle();

  if (!post) return {};

  return {
    title: post.title + '｜環境保育專欄',
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

// 👉 這裡一樣，params 是 Promise
export default async function ArticlePage({ params }: { params: Promise<ArticlePageParams> }) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from('posts')
    .select(
      'id, title, slug, excerpt, content, cover_image, tags, is_published, published_at, created_at'
    )
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle<Post>();

  if (error) {
    console.error('[ArticlePage] Supabase error:', error.message);
  }

  if (!post) {
    notFound();
  }

  const displayDate = formatDate(post.published_at ?? post.created_at);

  return (
    <article className="w-full max-w-3xl mx-auto px-4 py-10">
      {post.cover_image && (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6">
          <Image src={post.cover_image} alt={post.title} fill className="object-cover" />
        </div>
      )}

      <p className="text-sm text-emerald-800/80 mb-2">{displayDate}</p>

      <h1 className="text-3xl font-semibold text-emerald-950 mb-4 leading-snug">{post.title}</h1>

      {post.excerpt && (
        <p className="text-base text-emerald-900/90 mb-6 leading-relaxed">{post.excerpt}</p>
      )}

      <div className="prose prose-emerald max-w-none text-emerald-950">
        {post.content
          ?.split('\n')
          .filter((paragraph) => paragraph.trim().length > 0)
          .map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
      </div>
    </article>
  );
}

function formatDate(value: string | null) {
  if (!value) return '';

  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}
