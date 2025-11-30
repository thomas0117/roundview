import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>ROUNDVIEW · 環境行動觀測站</h1>
            <p>
              用易讀的圖表與專題文章，整理台灣與世界的氣候變遷、能源轉型與環境保育資訊。
              依照主題切分成多個專屬分頁，方便探索與 SEO 擴充。
            </p>
            <div className="hero-actions">
              <Link href="/overview" className="btn-primary">
                立即查看總覽
              </Link>
              <Link href="/articles" className="btn-secondary">
                閱讀最新文章
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h2>主題導覽</h2>
            <ul>
              <li>🌡 暖化指標：核心數據一頁掌握</li>
              <li>⚡ 國家比較：政策、目標與進展</li>
              <li>📰 專題文章：以故事化整理關鍵議題</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2>依主題探索</h2>
            <p>每個主題都有獨立分頁與路由，方便未來擴充更多圖表、文章與 SEO 設定。</p>
          </div>

          <div className="card-grid">
            <div className="info-card">
              <h3>總覽</h3>
              <p>網站使命、資料來源與正在追蹤的焦點議題。</p>
              <Link className="btn-link" href="/overview">
                前往 /overview
              </Link>
            </div>
            <div className="info-card">
              <h3>暖化指標</h3>
              <p>聚焦全球升溫、再生能源與碳匯等核心指標。</p>
              <Link className="btn-link" href="/indicators">
                前往 /indicators
              </Link>
            </div>
            <div className="info-card">
              <h3>國家比較</h3>
              <p>對照台灣與國際各地的氣候行動、政策與評級。</p>
              <Link className="btn-link" href="/countries">
                前往 /countries
              </Link>
            </div>
            <div className="info-card">
              <h3>專題文章</h3>
              <p>故事化解讀氣候與環境議題，持續從 Supabase 同步更新。</p>
              <Link className="btn-link" href="/articles">
                前往 /articles
              </Link>
            </div>
            <div className="info-card">
              <h3>關於 ROUNDVIEW</h3>
              <p>網站願景、團隊介紹與參與方式。</p>
              <Link className="btn-link" href="/about">
                前往 /about
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
