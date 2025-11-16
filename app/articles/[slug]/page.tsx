// app/articles/[slug]/page.tsx
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

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
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle();

  if (error) {
    console.error('[ArticlePage] Supabase error:', error.message);
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="section article-detail">
      <div className="article-detail-inner">
        <h1 className="article-detail-title">{post.title}</h1>

        {post.published_at && (
          <p className="article-detail-meta">
            發佈於 {new Date(post.published_at).toLocaleDateString('zh-TW')}
          </p>
        )}

        {post.cover_image && (
          <div className="article-detail-cover">
            <img src={post.cover_image} alt={post.title} />
          </div>
        )}

        <div className="article-detail-content">
          {post.content?.split('\n').map((p: string, idx: number) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
