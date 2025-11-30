'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';

type AdminPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  content: string;
  publishedAt: string | null;
  isPublished: boolean;
};

type AdminForm = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  isPublished: boolean;
};

const initialForm: AdminForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  publishedAt: '',
  isPublished: true,
};

export default function AdminPage() {
  const [adminToken, setAdminToken] = useState('');
  const [form, setForm] = useState(initialForm);
  const [coverPreview, setCoverPreview] = useState('');
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = <K extends keyof AdminForm>(field: K, value: AdminForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCoverChange = (file: File | null) => {
    setCoverFile(file);
    setCoverPreview(file ? URL.createObjectURL(file) : '');
  };

  const ensureToken = () => {
    if (!adminToken) {
      setStatus({ type: 'error', message: '請先輸入管理員密鑰。' });
      return false;
    }
    return true;
  };

  const fetchPosts = async () => {
    if (!ensureToken()) return;
    setStatus(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'GET',
        headers: { 'x-admin-token': adminToken },
      });

      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.error || '載入文章失敗');
      }

      setPosts(body.posts || []);
    } catch (err) {
      setStatus({ type: 'error', message: err instanceof Error ? err.message : '發生未知錯誤' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ensureToken()) return;

    if (!coverFile && !coverPreview) {
      setStatus({ type: 'error', message: '請先上傳文章首圖。' });
      return;
    }

    setStatus(null);
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('slug', form.slug);
    formData.append('excerpt', form.excerpt);
    formData.append('content', form.content);
    formData.append('isPublished', String(form.isPublished));

    if (form.publishedAt) {
      formData.append('publishedAt', form.publishedAt);
    }

    if (editingId) {
      formData.append('id', editingId.toString());
    }

    if (coverFile) {
      formData.append('coverImage', coverFile);
    } else if (coverPreview) {
      formData.append('existingCoverImage', coverPreview);
    }

    try {
      const res = await fetch('/api/admin/posts', {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'x-admin-token': adminToken,
        },
        body: formData,
      });

      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.error || '儲存文章失敗');
      }

      setStatus({
        type: 'success',
        message: editingId ? '文章已更新並同步到 Supabase！' : '文章已建立並同步到 Supabase！',
      });
      setForm(initialForm);
      setEditingId(null);
      setCoverPreview('');
      setCoverFile(null);
      fetchPosts();
    } catch (err) {
      setStatus({ type: 'error', message: err instanceof Error ? err.message : '發生未知錯誤' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (post: AdminPost) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt ?? '',
      content: post.content,
      publishedAt: post.publishedAt ? new Date(post.publishedAt).toISOString().slice(0, 16) : '',
      isPublished: post.isPublished,
    });
    setCoverPreview(post.coverImage ?? '');
    setCoverFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    if (!ensureToken()) return;

    setStatus(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken,
        },
        body: JSON.stringify({ id }),
      });

      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.error || '刪除文章失敗');
      }

      setStatus({ type: 'success', message: '文章已刪除' });
      fetchPosts();
    } catch (err) {
      setStatus({ type: 'error', message: err instanceof Error ? err.message : '發生未知錯誤' });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(initialForm);
    setCoverPreview('');
    setCoverFile(null);
    setStatus(null);
  };

  return (
    <section className="section admin-section">
      <div className="admin-card">
        <h1 className="section-title">文章管理頁</h1>
        <p className="admin-hint">輸入管理員密鑰後，可在同一頁查看、建立、編輯與刪除文章。</p>

        <div className="admin-token-row">
          <label className="admin-label token-label">
            管理員密鑰
            <input
              type="password"
              className="admin-input"
              value={adminToken}
              onChange={(e) => setAdminToken(e.target.value)}
              placeholder="輸入後端提供的密鑰"
            />
          </label>
          <button type="button" className="admin-submit" onClick={fetchPosts} disabled={isLoading}>
            {isLoading ? '載入中…' : '重新載入文章列表'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="admin-form-header">
            <h2>{editingId ? '編輯文章' : '新增文章'}</h2>
            {editingId && (
              <button type="button" className="btn-link" onClick={resetForm}>
                取消編輯
              </button>
            )}
          </div>

          <label className="admin-label">
            標題
            <input
              type="text"
              className="admin-input"
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />
          </label>

          <label className="admin-label">
            Slug（網址）
            <input
              type="text"
              className="admin-input"
              value={form.slug}
              onChange={(e) => handleChange('slug', e.target.value)}
              required
            />
          </label>

          <label className="admin-label">
            摘要
            <textarea
              className="admin-textarea"
              value={form.excerpt}
              onChange={(e) => handleChange('excerpt', e.target.value)}
              rows={3}
            />
          </label>

          <label className="admin-label">
            首圖（上傳圖片）
            <input
              type="file"
              accept="image/*"
              className="admin-input"
              onChange={(e) => handleCoverChange(e.target.files?.[0] ?? null)}
              required={!editingId}
            />
          </label>

          {coverPreview && (
            <div className="admin-cover-preview">
              <p className="admin-hint">預覽</p>
              <Image
                src={coverPreview}
                alt="文章首圖預覽"
                width={640}
                height={360}
                className="admin-cover-image"
                unoptimized
              />
              {editingId && (
                <button
                  type="button"
                  className="btn-link"
                  onClick={() => handleCoverChange(null)}
                  style={{ marginTop: '0.5rem' }}
                >
                  更換首圖
                </button>
              )}
            </div>
          )}

          <label className="admin-label">
            內文
            <textarea
              className="admin-textarea"
              value={form.content}
              onChange={(e) => handleChange('content', e.target.value)}
              rows={10}
              required
            />
          </label>

          <label className="admin-label">
            發佈日期（預設為現在）
            <input
              type="datetime-local"
              className="admin-input"
              value={form.publishedAt}
              onChange={(e) => handleChange('publishedAt', e.target.value)}
            />
          </label>

          <label className="admin-checkbox">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => handleChange('isPublished', e.target.checked)}
            />
            立即發佈
          </label>

          {status && (
            <p className={`admin-status ${status.type === 'success' ? 'success' : 'error'}`}>
              {status.message}
            </p>
          )}

          <button type="submit" className="admin-submit" disabled={isSubmitting}>
            {isSubmitting ? '儲存中…' : editingId ? '更新文章' : '建立文章'}
          </button>
        </form>
      </div>

      <div className="admin-card">
        <div className="section-header">
          <h2>文章列表</h2>
          <p>所有資料由 Supabase 讀寫，後續可接權限控管與版本紀錄。</p>
        </div>

        {posts.length === 0 ? (
          <p className="admin-hint">目前沒有文章或尚未載入，請先輸入密鑰並重新載入列表。</p>
        ) : (
          <div className="article-list admin-list">
            {posts.map((post) => (
              <article key={post.id} className="article-item admin-list-item">
                <div>
                  <h3>{post.title}</h3>
                  <p className="article-meta">
                    slug：{post.slug} ｜ {post.isPublished ? '已發佈' : '草稿'}
                  </p>
                  {post.publishedAt && (
                    <p className="article-meta">
                      發布時間：{new Date(post.publishedAt).toLocaleString('zh-TW')}
                    </p>
                  )}
                  {post.excerpt && <p className="article-excerpt">{post.excerpt}</p>}
                </div>

                <div className="admin-actions">
                  <button className="btn-secondary" onClick={() => handleEdit(post)}>
                    編輯
                  </button>
                  <button className="btn-danger" onClick={() => handleDelete(post.id)}>
                    刪除
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
