// app/articles/page.tsx
import { supabase } from '@/lib/supabaseClient';
import ArticleGrid from '../components/ArticleGrid';

export const revalidate = 60; // ISR：60 秒重新抓一次（可調）

export default async function ArticlesPage() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, cover_image, category, published_at, created_at')
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

      <ArticleGrid posts={posts} />
    </section>
  );
}
