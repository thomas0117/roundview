'use client';

import { useMemo, useState } from 'react';
import ArticleGrid, { ArticleGridPost } from './ArticleGrid';

interface ArticleListWithFilterProps {
  posts: ArticleGridPost[];
}

export default function ArticleListWithFilter({ posts }: ArticleListWithFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((post) => post.tags?.includes(activeTag));
  }, [activeTag, posts]);

  return (
    <div className="article-filter-wrapper">
      {tags.length > 0 && (
        <div className="article-filter-bar" role="group" aria-label="標籤篩選">
          <button
            type="button"
            className={`article-filter-tag ${activeTag === null ? 'is-active' : ''}`}
            onClick={() => setActiveTag(null)}
          >
            全部文章
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`article-filter-tag ${activeTag === tag ? 'is-active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <ArticleGrid posts={filteredPosts} />
    </div>
  );
}
