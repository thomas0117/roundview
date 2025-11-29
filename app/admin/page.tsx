'use client';

import { FormEvent, useState } from 'react';

const initialForm = {
  title: '',
  slug: '',
  excerpt: '',
  coverImage: '',
  content: '',
  publishedAt: '',
  isPublished: true,
};

export default function AdminPage() {
  const [adminToken, setAdminToken] = useState('');
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    if (!adminToken) {
      setStatus({ type: 'error', message: '請先輸入管理員密鑰。' });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || '新增文章失敗');
      }

      setStatus({ type: 'success', message: '文章已建立並同步到 Supabase！' });
      setForm(initialForm);
    } catch (err) {
      setStatus({ type: 'error', message: err instanceof Error ? err.message : '發生未知錯誤' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section admin-section">
      <div className="admin-card">
        <h1 className="section-title">管理員專區：新增文章</h1>

        <p className="admin-hint">請輸入後端設定的管理員密鑰並填寫文章內容。</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <label className="admin-label">
            管理員密鑰
            <input
              type="password"
              className="admin-input"
              value={adminToken}
              onChange={(e) => setAdminToken(e.target.value)}
              placeholder="輸入後端提供的密鑰"
            />
          </label>

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
            首圖（URL）
            <input
              type="text"
              className="admin-input"
              value={form.coverImage}
              onChange={(e) => handleChange('coverImage', e.target.value)}
            />
          </label>

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
            {isSubmitting ? '建立中…' : '建立文章'}
          </button>
        </form>
      </div>
    </section>
  );
}
