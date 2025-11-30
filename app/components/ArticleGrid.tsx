import Image from 'next/image';
import Link from 'next/link';

export type ArticleGridPost = {
  id: string | number;
  slug?: string | null;
  title: string;
  excerpt?: string | null;
  cover_image?: string | null;
  tags?: string[] | null;
  published_at?: string | null;
  created_at?: string | null;
};

interface ArticleGridProps {
  posts: ArticleGridPost[];
}

const formatDate = (dateString?: string | null) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? '' : date.toLocaleDateString('zh-TW');
};

export default function ArticleGrid({ posts }: ArticleGridProps) {
  return (
    <div className="articles-grid">
      {posts.map((post) => {
        const cover = post.cover_image;
        const date = post.published_at ?? post.created_at;
        const href = post.slug ? `/articles/${post.slug}` : `/posts/${post.id}`;
        const primaryTag = post.tags?.[0];
        const excerpt = post.excerpt;

        return (
          <Link key={post.id} href={href} className="article-card-grid">
            <div className="article-card-grid__media">
              {cover ? (
                <Image
                  src={cover}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="article-card-grid__image"
                  priority={false}
                />
              ) : (
                <div className="article-card-grid__placeholder">自然觀測</div>
              )}
            </div>

            <div className="article-card-grid__body">
              <div className="article-card-grid__meta">
                <span className="article-card-grid__category">{primaryTag || '未分類'}</span>
                {date && <span className="article-card-grid__date">{formatDate(date)}</span>}
              </div>

              <h3 className="article-card-grid__title">{post.title}</h3>

              {excerpt && <p className="article-card-grid__excerpt">{excerpt}</p>}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
