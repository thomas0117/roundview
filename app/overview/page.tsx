export default function OverviewPage() {
  return (
    <>
      <section className="section section-band section-band-forest">
        <div className="section-content">
          <div className="section-header">
            <h1>ROUNDVIEW 總覽</h1>
            <p>網站的使命、資料來源與目前聚焦的議題，未來可繼續擴充更多導覽模組。</p>
          </div>

          <div className="band-grid">
            <div className="band-card">
              <h3>站點定位</h3>
              <p>ROUNDVIEW 想做的是一個「友善又不太嚴肅」的環境資訊站，讓不熟悉氣候議題的讀者也能快速掌握世界脈動。</p>
              <ul>
                <li>核心議題：暖化、能源轉型、生物多樣性</li>
                <li>資料來源：政府開放資料、國際報告、學術研究</li>
                <li>設計語言：深色 / 淺色條帶交錯，保持閱讀節奏</li>
              </ul>
            </div>

            <div className="band-card">
              <h3>導覽路線</h3>
              <p>示範未來的導覽體驗：從總覽進入，再到指標追蹤、國家比較與社群故事。</p>
              <div className="stripe-grid">
                <div className="stripe">
                  <h4>步驟 1</h4>
                  <p>先在總覽理解網站使命與資料可信度。</p>
                </div>
                <div className="stripe">
                  <h4>步驟 2</h4>
                  <p>到暖化指標挑選想追蹤的數據並收藏。</p>
                </div>
                <div className="stripe">
                  <h4>步驟 3</h4>
                  <p>在國家比較找到案例故事，最後回到專題文章。</p>
                </div>
              </div>
            </div>

            <div className="band-card">
              <h3>版本記錄</h3>
              <p>每個分頁都會標記版本號與更新日期，方便讀者追蹤內容進度。</p>
              <div className="progress-rows">
                <div className="progress-row">
                  <span>V1.0 導航</span>
                  <div className="progress-bar">
                    <span style={{ width: '88%' }} />
                  </div>
                  <span className="progress-number">88%</span>
                </div>
                <div className="progress-row">
                  <span>資料透明</span>
                  <div className="progress-bar">
                    <span style={{ width: '64%' }} />
                  </div>
                  <span className="progress-number">64%</span>
                </div>
                <div className="progress-row">
                  <span>社群共編</span>
                  <div className="progress-bar">
                    <span style={{ width: '52%' }} />
                  </div>
                  <span className="progress-number">52%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contrast-panels">
            <div className="contrast-card dark">
              <h4>敘事節奏</h4>
              <p>以深淺條帶包覆每個章節，讓故事在視覺上有「呼吸感」。</p>
            </div>
            <div className="contrast-card light">
              <h4>資料公信</h4>
              <p>強調來源、更新頻率、校對流程，保持透明的信任基礎。</p>
            </div>
            <div className="contrast-card dark">
              <h4>互動介面</h4>
              <p>預留收藏、訂閱、分享等按鈕，方便讀者建立自己的追蹤清單。</p>
            </div>
            <div className="contrast-card light">
              <h4>共創社群</h4>
              <p>邀請 NGO、研究者、工程師一起協作，並公開 Changelog 與貢獻名單。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-sky">
        <div className="section-content">
          <div className="section-header">
            <h2>年度重點與路線圖</h2>
            <p>預留未來季度更新的議題清單，讓讀者知道下一步會出現什麼內容。</p>
          </div>

          <div className="band-grid">
            <div className="band-card band-card-compact">
              <h3>Q1 · 升溫門檻</h3>
              <p>解釋 1.5°C / 2°C 的差異，並用條帶呈現各國減量路徑。</p>
            </div>
            <div className="band-card band-card-compact">
              <h3>Q2 · 能源轉型</h3>
              <p>追蹤再生能源占比、電網穩定度與儲能佈局。</p>
            </div>
            <div className="band-card band-card-compact">
              <h3>Q3 · 生物多樣性</h3>
              <p>以森林覆蓋率與保育地圖呈現自然碳匯的變化。</p>
            </div>
            <div className="band-card band-card-compact">
              <h3>Q4 · 行動故事</h3>
              <p>整理社群行動與城市案例，搭配募資或志工招募入口。</p>
            </div>
          </div>

          <div className="stripe-grid">
            <div className="stripe">
              <h4>新手導覽</h4>
              <p>三步驟：1) 先看總覽 2) 追蹤暖化指標 3) 挑國家故事收藏。</p>
            </div>
            <div className="stripe">
              <h4>透明角落</h4>
              <p>預計新增「資料來源表」「版本差異表」，方便交叉驗證。</p>
            </div>
            <div className="stripe">
              <h4>社群入口</h4>
              <p>保留 Discord、Line 社群與每月讀者會報名的占位按鈕。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
