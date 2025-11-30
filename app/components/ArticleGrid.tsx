import Image from 'next/image';
import Link from 'next/link';

export type ArticleGridPost = {
  id: string;
  slug?: string | null;
  title: string;
  excerpt?: string | null;
  summary?: string | null;
  cover_image?: string | null;
  coverUrl?: string | null;
  category?: string | null;
  published_at?: string | null;
  created_at?: string | null;
  createdAt?: string | null;
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
        const cover = post.cover_image ?? post.coverUrl;
        const date = post.published_at ?? post.createdAt ?? post.created_at;
        const href = post.slug ? `/articles/${post.slug}` : `/posts/${post.id}`;
        const excerpt = post.excerpt ?? post.summary;

        return (
          <Link key={post.id} href={href} className="article-card-grid">
            <div className="article-card-grid__media">
              {cover ? (
                <Image
                  src={cover}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              ) : (
                <div className="article-card-grid__placeholder">自然觀測</div>
              )}
            </div>

            <div className="article-card-grid__body">
              <div className="article-card-grid__meta">
                <span className="article-card-grid__category">
                  {post.category || '未分類'}
                </span>
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
