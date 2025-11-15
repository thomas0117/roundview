'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: '總覽', href: '#overview' },
    { label: '暖化指標', href: '#indicators' },
    { label: '國家比較', href: '#countries' },
    { label: '專題文章', href: '#articles' },
    { label: '關於 ROUNDVIEW', href: '#about' },
  ];

  return (
    <div className="site-wrapper">
      {/* 導覽列 */}
      <header className="site-header">
        <div className="nav-inner">
          {/* 左上 LOGO */}
          <div className="logo">
            {/* 有 logo 圖片可以改這裡 */}
            {/* <Image src="/roundview-logo.svg" alt="ROUNDVIEW" width={32} height={32} /> */}
            <span className="logo-mark">R</span>
            <span className="logo-text">ROUNDVIEW</span>
          </div>

          {/* 桌機版選單 */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 手機版漢堡按鈕 */}
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="切換選單"
          >
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </button>
        </div>

        {/* 手機版下拉選單 */}
        <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="site-main">
        {/* Hero 區：滿版淡藍背景 */}
        <section id="overview" className="hero-section">
          <div className="hero-inner">
            <div className="hero-text">
              <h1>ROUNDVIEW · 環境行動觀測站</h1>
              <p>
                用簡單易懂的圖表與文章，整理台灣與世界的氣候變遷、
                能源轉型與環境保育資訊，幫助每個人看懂地球正在發生的事。
              </p>
              <div className="hero-actions">
                <a href="#indicators" className="btn-primary">
                  查看暖化指標
                </a>
                <a href="#articles" className="btn-secondary">
                  閱讀專題文章
                </a>
              </div>
            </div>

            <div className="hero-card">
              <h2>目前關注焦點</h2>
              <ul>
                <li>🌡 全球升溫趨勢與 1.5°C 門檻</li>
                <li>⚡ 再生能源在台灣的佔比變化</li>
                <li>🌳 森林保育與碳匯的重要性</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 區塊 A：暖化與環境指標（白底） */}
        <section id="indicators" className="section">
          <div className="section-content">
            <div className="section-header">
              <h2>暖化與環境指標總覽</h2>
              <p>用簡單的區塊呈現關鍵環境指標，未來可以接 API / Supabase 資料。</p>
            </div>

            <div className="card-grid">
              <div className="info-card">
                <h3>全球升溫預估</h3>
                <p>示意：目前政策軌跡約落在 2.4°C～2.8°C 之間。</p>
                <span className="tag">示意資料</span>
              </div>
              <div className="info-card">
                <h3>台灣再生能源佔比</h3>
                <p>示意：再生能源占總發電量的 XX%，未來可改成即時資料。</p>
                <span className="tag">即將上線</span>
              </div>
              <div className="info-card">
                <h3>森林覆蓋與碳匯</h3>
                <p>示意：整理台灣與世界的森林覆蓋率變化。</p>
                <span className="tag">規劃中</span>
              </div>
            </div>
          </div>
        </section>

        {/* 區塊 B：各地氣候行動（淺藍底） */}
        <section id="countries" className="section section-alt">
          <div className="section-content">
            <div className="section-header">
              <h2>看看各地的氣候行動</h2>
              <p>借鏡 climateactiontracker 的概念，未來可以做成「國家評級」系統。</p>
            </div>

            <div className="card-grid">
              <div className="country-card">
                <h3>台灣</h3>
                <p>整理台灣氣候政策、再生能源目標與最新進展。</p>
                <button className="btn-link">查看詳細（未完成）</button>
              </div>
              <div className="country-card">
                <h3>全球總覽</h3>
                <p>用簡單圖表呈現全球主要排放國與減碳承諾。</p>
                <button className="btn-link">即將開放</button>
              </div>
              <div className="country-card">
                <h3>更多地區</h3>
                <p>未來可以逐步加入：亞洲、歐洲、小島國家等。</p>
                <button className="btn-link">規劃中</button>
              </div>
            </div>
          </div>
        </section>

        {/* 區塊 C：文章列表（白底） */}
        <section id="articles" className="section">
          <div className="section-content">
            <div className="section-header">
              <h2>最新專題文章</h2>
              <p>先用假資料，之後我們會改成從 Supabase 文章系統撈資料。</p>
            </div>

            <div className="article-list">
              <article className="article-item">
                <h3>為什麼 1.5°C 這個數字這麼重要？</h3>
                <p>用生活化的例子，說明科學家口中的 1.5°C 是什麼意思，以及超過後會發生什麼事。</p>
                <span className="article-meta">專題 · 教學向 · 需 5 分鐘閱讀</span>
              </article>
              <article className="article-item">
                <h3>看懂再生能源：太陽能、風電與儲能入門</h3>
                <p>給初學者的環境科普，解釋常見再生能源技術與在台灣的發展現況。</p>
                <span className="article-meta">入門 · 圖解 · 敬請期待</span>
              </article>
            </div>
          </div>
        </section>

        {/* 區塊 D：關於（淺藍底） */}
        <section id="about" className="section section-alt">
          <div className="section-content">
            <div className="section-header">
              <h2>關於 ROUNDVIEW</h2>
            </div>
            <div className="about-layout">
              <p>
                ROUNDVIEW 想做的是一個「友善又不太嚴肅」的環境資訊站，
                讓平常沒在關注氣候議題的人，也可以輕鬆看懂世界在發生什麼事。
              </p>
              <p>
                未來這裡會介紹：
                <br />
                ・網站的理念與團隊
                <br />
                ・資料來源（例如 IPCC、國際組織、政府開放資料）
                <br />
                ・如何參與或協助改善這個網站
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} ROUNDVIEW · 環境行動觀測站</p>
        <p className="footer-sub">Demo 版介面 | 未來會接上 Supabase 與驗證碼系統</p>
      </footer>
    </div>
  );
}
