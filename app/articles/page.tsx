// app/articles/page.tsx
import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60; // ISR：60 秒重新抓一次（可調）

export default async function ArticlesPage() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, cover_image, published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('[ArticlesPage] Supabase error:', error.message);
    return (
      <div className="section">
        <h1>最新文章</h1>
        <p>載入文章失敗，請稍後再試。</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="section">
        <h1>最新文章</h1>
        <p>還沒有文章，敬請期待。</p>
      </div>
    );
  }

  return (
    <section className="section articles-section">
      <h1 className="section-title">最新文章</h1>

      <div className="articles-list">
        {posts.map((post) => (
          <article key={post.id} className="article-card">
            {post.cover_image && (
              <div className="article-cover">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  width={180}
                  height={110}
                  className="article-cover-img"
                />
              </div>
            )}

            <div className="article-content">
              <h2 className="article-title">
                <Link href={`/articles/${post.slug}`}>{post.title}</Link>
              </h2>

              {post.published_at && (
                <p className="article-meta">
                  {new Date(post.published_at).toLocaleDateString('zh-TW')}
                </p>
              )}

              {post.excerpt && <p className="article-excerpt">{post.excerpt}</p>}

              <Link href={`/articles/${post.slug}`} className="article-more">
                繼續閱讀 →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
