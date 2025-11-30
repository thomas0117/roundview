import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

export const revalidate = 60; // ISR：60 秒重新抓一次（可調）

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  tags: string[] | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date));
}

function ArticleCard({ post }: { post: Post }) {
  const displayDate = post.published_at ?? post.created_at;
  const formattedDate = formatDate(displayDate);

  return (
    <Link href={`/articles/${post.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white/90 shadow-sm ring-1 ring-lime-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative w-full overflow-hidden bg-lime-50">
          <div className="relative w-full aspect-[4/3]">
            {post.cover_image ? (
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                priority={false}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-lime-100 via-emerald-50 to-lime-50" />
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 px-5 py-4">
          <span className="text-sm font-medium text-emerald-800/80">{formattedDate}</span>
          <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">{post.title}</h3>
          {post.excerpt && (
            <p className="line-clamp-3 text-sm leading-relaxed text-slate-700">{post.excerpt}</p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold text-emerald-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

export default async function ArticlesPage() {
  const { data, error } = await supabase
    .from('posts')
    .select(
      'id, title, slug, excerpt, cover_image, tags, is_published, published_at, created_at'
    )
    .eq('is_published', true)
    .order('published_at', { ascending: false, nullsLast: true })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[ArticlesPage] Supabase error:', error.message);
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">最新文章</h1>
        <p className="text-slate-700">載入文章失敗，請稍後再試。</p>
      </section>
    );
  }

  const posts = (data ?? []) as Post[];

  if (posts.length === 0) {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">最新文章</h1>
        <p className="text-slate-700">還沒有文章，敬請期待。</p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">最新文章</h1>
        <p className="text-base text-slate-700">
          精選最新文章，感受自然與永續的靈感故事。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
