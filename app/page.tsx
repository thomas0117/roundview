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
            <div className="hero-badges">
              <span className="pill pill-spotlight">靈感來自 C40 Cities 的綠色城市能量</span>
              <span className="pill pill-live">Live · 即時追蹤指標</span>
              <span className="pill pill-trend">Trend · 行動脈動</span>
            </div>
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
            <div className="hero-card-foot">
              <span className="tag tag-animated">透明公開</span>
              <span className="tag tag-animated">行動優先</span>
              <span className="tag tag-animated">協作城市</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-forest" id="overview">
        <div className="section-content">
          <div className="section-header">
            <h2>總覽 / Overview</h2>
            <p>快速認識 ROUNDVIEW，並在同一個分區看到網站的使命、資料來源與路線圖。</p>
          </div>

          <div className="band-grid">
            <div className="band-card">
              <h3>站點使命</h3>
              <p>用開放資料與易讀圖表，陪伴讀者理解台灣與世界的環境行動現況。</p>
              <ul>
                <li>核心追蹤：氣候變遷、能源轉型、生物多樣性</li>
                <li>資料來源：政府開放資料、國際報告、學術研究</li>
                <li>治理模式：公開透明、社群協作、持續迭代</li>
              </ul>
              <div className="tag-row">
                <span className="tag tag-animated">使命明確</span>
                <span className="tag tag-animated">資料透明</span>
              </div>
            </div>

            <div className="band-card">
              <h3>目前進展</h3>
              <p>把未來會長出的分頁先預留位置，方便 SEO 與資訊架構的規劃。</p>
              <div className="progress-rows">
                <div className="progress-row">
                  <span>首頁體驗</span>
                  <div className="progress-bar">
                    <span style={{ width: '82%' }} />
                  </div>
                  <span className="progress-number">82%</span>
                </div>
                <div className="progress-row">
                  <span>資料串接</span>
                  <div className="progress-bar">
                    <span style={{ width: '40%' }} />
                  </div>
                  <span className="progress-number">40%</span>
                </div>
                <div className="progress-row">
                  <span>文章庫</span>
                  <div className="progress-bar">
                    <span style={{ width: '65%' }} />
                  </div>
                  <span className="progress-number">65%</span>
                </div>
              </div>
            </div>

            <div className="band-card">
              <h3>導覽捷徑</h3>
              <p>每個分頁都附上假內容，示範未來的排版與敘事節奏。</p>
              <div className="pill-stack">
                <Link className="pill pill-link" href="/overview">
                  總覽 · 整體策略
                </Link>
                <Link className="pill pill-link" href="/indicators">
                  暖化指標 · 互動圖表
                </Link>
                <Link className="pill pill-link" href="/countries">
                  國家比較 · 深度故事
                </Link>
                <Link className="pill pill-link" href="/articles">
                  專題文章 · 觀點精選
                </Link>
                <Link className="pill pill-link" href="/about">
                  關於我們 · 參與方式
                </Link>
              </div>
            </div>
          </div>

          <div className="contrast-panels">
            <div className="contrast-card dark">
              <h4>綠色敘事路線</h4>
              <p>每季聚焦一個核心議題，形成「深色 × 淺色」的分區故事帶，快速掌握觀點。</p>
            </div>
            <div className="contrast-card light">
              <h4>資料公信力</h4>
              <p>資料來源、更新頻率、版本紀錄都公開，並使用版本號維持透明的覆盤軸。</p>
            </div>
            <div className="contrast-card dark">
              <h4>讀者導向互動</h4>
              <p>預留互動表單、行動按鈕與收藏區，讓使用者的回饋成為下一次更新的參考。</p>
            </div>
            <div className="contrast-card light">
              <h4>協作網絡</h4>
              <p>串聯 NGO、研究者、工程師的共編模式，確保數據、故事與設計一致對外。</p>
            </div>
          </div>

          <div className="stripe-grid">
            <div className="stripe">
              <h4>快速導覽故事</h4>
              <p>
                以 <strong>白色 / 薄荷綠</strong> 交錯條帶，讓讀者能一眼看到網站能提供的情境：總覽梳理、專題亮點、互動數據。
              </p>
            </div>
            <div className="stripe">
              <h4>內容版本</h4>
              <p>
                每個分頁都附上 V1.0、V1.1 的假版本說明，示範未來如何在分區上標註更新批次，並保留 Changelog 區塊。
              </p>
            </div>
            <div className="stripe">
              <h4>讀者入口</h4>
              <p>為新訪客列出「如何開始閱讀」的三步驟：1) 總覽先行 2) 追蹤指標 3) 加入社群。</p>
            </div>
          </div>

          <div className="band-grid">
            <div className="band-card">
              <h3>ROUNDVIEW 新手指南</h3>
              <p>三分鐘快速掌握：選一個主題、收藏待看、訂閱更新。每個步驟都附上示意圖與引導箭頭。</p>
              <ul>
                <li>步驟 1：從總覽認識站點定位與指標分類</li>
                <li>步驟 2：在暖化指標挑 2-3 個數據加入追蹤</li>
                <li>步驟 3：在國家比較找到感興趣的案例後回到專題</li>
              </ul>
            </div>
            <div className="band-card">
              <h3>資料可信度說明</h3>
              <p>預留「資料來源、更新日期、校對人」三欄，配合條帶底色呈現透明資訊。</p>
              <div className="progress-rows">
                <div className="progress-row">
                  <span>來源對照</span>
                  <div className="progress-bar">
                    <span style={{ width: '72%' }} />
                  </div>
                  <span className="progress-number">72%</span>
                </div>
                <div className="progress-row">
                  <span>發布紀錄</span>
                  <div className="progress-bar">
                    <span style={{ width: '54%' }} />
                  </div>
                  <span className="progress-number">54%</span>
                </div>
              </div>
            </div>
            <div className="band-card">
              <h3>社群活動預告</h3>
              <p>列出「資料黑客松」「城市走讀」「線上讀者會」等假活動，維持明暗分區的視覺節奏。</p>
              <div className="pill-stack">
                <span className="pill pill-live">10/28 線上 Demo</span>
                <span className="pill pill-trend">11/15 讀者會</span>
                <span className="pill pill-spotlight">12/03 黑客松</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-sky" id="indicators">
        <div className="section-content">
          <div className="section-header">
            <h2>暖化指標 / Indicators</h2>
            <p>以假資料示範未來的資訊架構：區塊有鮮明底色，呈現如同 Aftee 分區的清楚切割。</p>
          </div>

          <div className="card-grid three-cols">
            <div className="info-card info-card-lively">
              <h3>全球升溫趨勢</h3>
              <p>展示 1850-2024 年的全球均溫異常；之後會接上實際圖表。</p>
              <div className="mock-chart">
                <span className="chart-line" />
                <span className="chart-dot" />
              </div>
              <Link className="btn-link" href="/indicators#temperature">
                查看假圖表區
              </Link>
            </div>
            <div className="info-card info-card-lively">
              <h3>能源結構</h3>
              <p>再生能源占比、燃煤 / 燃氣配比的假數據，方便之後換上真實資料。</p>
              <ul className="mini-list">
                <li>風力 +4.1% YoY</li>
                <li>太陽能 +6.4% YoY</li>
                <li>燃煤 -2.8% YoY</li>
              </ul>
              <Link className="btn-link" href="/indicators#energy">
                暖化指標假內容
              </Link>
            </div>
            <div className="info-card info-card-lively">
              <h3>碳匯與森林</h3>
              <p>森林覆蓋率、淨碳匯、保護區比例的占位文字，強調未來的統計介面。</p>
              <div className="badge-row">
                <span className="pill pill-live">Live 模擬</span>
                <span className="pill pill-trend">Trend 模擬</span>
              </div>
              <Link className="btn-link" href="/indicators#carbon">
                立即查看占位資料
              </Link>
            </div>
          </div>

          <div className="contrast-panels">
            <div className="contrast-card dark">
              <h4>暖化儀表板構想</h4>
              <p>以深色底顯示趨勢折線與警示燈號，未來可切換不同情境與國際基準。</p>
            </div>
            <div className="contrast-card light">
              <h4>資料更新節奏</h4>
              <p>建立每月同步、季度回顧與年度總結的節奏，讓讀者感覺到穩定輸出。</p>
            </div>
            <div className="contrast-card dark">
              <h4>互動備註欄</h4>
              <p>在深色條帶內標示假想的解說氣泡，提醒未來將放入觀測重點與備註。</p>
            </div>
          </div>

          <div className="stripe-grid">
            <div className="stripe">
              <h4>即將推出的指標</h4>
              <p>預留「極端氣候事件、電動車普及率、再生能源拍賣」三個模組，之後會對接實際資料庫。</p>
            </div>
            <div className="stripe">
              <h4>情境模式切換</h4>
              <p>描述未來會加入「保守情境 / 積極情境 / 國際基準」切換，並顯示假想的圖表切換提示。</p>
            </div>
            <div className="stripe">
              <h4>指標故事化</h4>
              <p>每個指標都附一段 2-3 句的故事線，維持版面寬鬆、底色分明的敘事節奏。</p>
            </div>
          </div>

          <div className="band-grid">
            <div className="band-card">
              <h3>溫室氣體雷達</h3>
              <p>假想六大氣體的權重雷達圖，並標註哪幾個數值未來要優先補齊資料。</p>
              <ul className="mini-list">
                <li>CO₂ · 主要減碳目標</li>
                <li>CH₄ · 農業與廢棄物場域</li>
                <li>N₂O · 工業製程與肥料</li>
              </ul>
            </div>
            <div className="band-card">
              <h3>暖化風險情境</h3>
              <p>提供「升溫 1.5°C / 2°C / 3°C」的假情境說明，搭配淡色背景呈現差異。</p>
              <div className="comparison-row">
                <div>
                  <strong>升溫 1.5°C</strong>
                  <p>低度衝擊、城市韌性案例</p>
                </div>
                <div>
                  <strong>升溫 3°C</strong>
                  <p>高衝擊、需要示警標籤</p>
                </div>
              </div>
            </div>
            <div className="band-card">
              <h3>讀者自訂清單</h3>
              <p>預留「收藏指標」與「筆記」的佔位文字，提醒未來會開放個人化追蹤。</p>
              <div className="pill-stack">
                <span className="pill">收藏 5 個指標</span>
                <span className="pill">建立提醒</span>
                <span className="pill">分享給團隊</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-cream" id="countries">
        <div className="section-content">
          <div className="section-header">
            <h2>國家比較 / Countries</h2>
            <p>以不同底色區分區塊，像 Aftee 的頁籤分段；內容為假想的比較卡片。</p>
          </div>

          <div className="band-grid">
            <div className="band-card band-card-compact">
              <h3>台灣 vs. 北歐</h3>
              <p>能源轉型路線、2030 目標與電力結構示意。</p>
              <div className="comparison-row">
                <div>
                  <strong>台灣</strong>
                  <p>再生能源 27% · 燃煤 25% · 燃氣 40%</p>
                </div>
                <div>
                  <strong>北歐平均</strong>
                  <p>再生能源 54% · 燃煤 8% · 燃氣 10%</p>
                </div>
              </div>
              <Link className="btn-link" href="/countries#tw">查看佔位差異</Link>
            </div>

            <div className="band-card band-card-compact">
              <h3>政策熱度</h3>
              <p>模擬「政策熱度」標籤：碳費、綠電採購、交通減碳等議題。</p>
              <div className="tag-row">
                <span className="tag tag-animated">碳定價</span>
                <span className="tag tag-animated">綠電保證</span>
                <span className="tag tag-animated">運具轉型</span>
              </div>
              <Link className="btn-link" href="/countries#policy">政策佔位說明</Link>
            </div>

            <div className="band-card band-card-compact">
              <h3>評級示意</h3>
              <p>以假評級標籤呈現：A 級「積極減碳」、B 級「逐步推進」。</p>
              <div className="rating-chips">
                <span className="pill pill-spotlight">A 級 · 積極減碳</span>
                <span className="pill pill-live">B 級 · 逐步推進</span>
              </div>
              <Link className="btn-link" href="/countries#rating">假評級模組</Link>
            </div>
          </div>

          <div className="contrast-panels">
            <div className="contrast-card dark">
              <h4>進展里程碑</h4>
              <p>以深色卡片標記 2030、2040、2050 的假想節點，強化時間軸分段感。</p>
            </div>
            <div className="contrast-card light">
              <h4>合作城市</h4>
              <p>列出哥本哈根、雪梨、台北的示意成果，讓讀者感受到跨國網絡的比較。</p>
            </div>
            <div className="contrast-card dark">
              <h4>政策焦點備忘</h4>
              <p>深色條帶呈現「能源稅制」「工業減碳」「交通轉型」的假想提醒。</p>
            </div>
          </div>

          <div className="stripe-grid">
            <div className="stripe">
              <h4>區域亮點</h4>
              <p>以交錯底色列出「東亞減碳壓力」「北歐氣候韌性」「南美再生能源佈局」三段假文字。</p>
            </div>
            <div className="stripe">
              <h4>數據維度</h4>
              <p>強調未來比較項目：能源結構、碳定價、運具轉型、建築節能，並在此放上示意的待辦行列。</p>
            </div>
            <div className="stripe">
              <h4>比較方法</h4>
              <p>解釋會採用 <strong>相對進展</strong> 與 <strong>絕對排放</strong> 雙軸比較，並提供下載 CSV 的占位文字。</p>
            </div>
          </div>

          <div className="band-grid">
            <div className="band-card">
              <h3>政策節奏時間表</h3>
              <p>以季度為單位列出假想法規、補助公告與公聽會，維持深淺交錯的視覺分隔。</p>
              <ul>
                <li>Q1：碳費草案公佈 · 產業座談</li>
                <li>Q2：再生能源競標說明會 · 示範城市</li>
                <li>Q3：運具轉型路線圖 · 大眾參與</li>
              </ul>
            </div>
            <div className="band-card">
              <h3>焦點國家故事</h3>
              <p>假設選出三個焦點國家，提供「為何值得關注」的短段落。</p>
              <div className="pill-stack">
                <span className="pill pill-trend">丹麥 · 風電出口</span>
                <span className="pill pill-live">澳洲 · 新礦區爭議</span>
                <span className="pill pill-spotlight">台灣 · 港口轉型</span>
              </div>
            </div>
            <div className="band-card">
              <h3>下載與 API 占位</h3>
              <p>在此提醒未來會開放 CSV、JSON 與圖表內嵌的按鈕，方便媒體引用。</p>
              <Link className="btn-link" href="/countries#download">提前預覽導出格式</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-night" id="articles">
        <div className="section-content">
          <div className="section-header">
            <h2>專題文章 / Articles</h2>
            <p>以深色底營造強烈分隔，放入假內容卡片，示範未來的故事列表。</p>
          </div>

          <div className="article-band">
            <div className="article-card">
              <h3>假專題：離岸風電的下一步</h3>
              <p>介紹風場開發進度、區塊開發制度與在地共融的想像。</p>
              <div className="article-meta">更新：2024/10 · 作者：Roundview Team</div>
            </div>
            <div className="article-card">
              <h3>假專題：城市淨零競賽</h3>
              <p>比對全球城市的淨零時程與運具轉型策略，未來可接資料庫。</p>
              <div className="article-meta">更新：2024/09 · 作者：Roundview Team</div>
            </div>
            <div className="article-card">
              <h3>假專題：藍碳與海洋保護</h3>
              <p>海草床、紅樹林的潛力，搭配台灣示範案例的佔位描述。</p>
              <div className="article-meta">更新：2024/08 · 作者：Roundview Team</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-ice" id="about">
        <div className="section-content">
          <div className="section-header">
            <h2>關於我們 / About</h2>
            <p>最後一個分段維持明亮底色，呼應 Aftee 的清晰條帶效果。</p>
          </div>

          <div className="about-grid">
            <div className="info-card info-card-lively">
              <h3>團隊介紹</h3>
              <p>Roundview 是由環境愛好者、資料工程師與設計師組成的開源計畫。</p>
              <p>我們希望透過社群力量維護資料品質，並持續釋出教學。</p>
            </div>
            <div className="info-card info-card-lively">
              <h3>參與方式</h3>
              <p>透過 GitHub Issue、資料提案或主題投稿加入貢獻，這裡放置假流程。</p>
              <div className="pill-stack">
                <span className="pill">提交資料集</span>
                <span className="pill">設計互動圖</span>
                <span className="pill">撰寫專題稿</span>
              </div>
            </div>
            <div className="info-card info-card-lively">
              <h3>聯絡我們</h3>
              <p>歡迎寫信給 team@roundview.tw，或在社群平台搜尋 #roundview。</p>
              <Link className="btn-link" href="/about#contact">
                查看聯絡佔位
              </Link>
            </div>
          </div>

          <div className="contrast-panels">
            <div className="contrast-card dark">
              <h4>ROUNDVIEW 的承諾</h4>
              <p>每個季度公佈開發進度，並在深色區塊放上 QA、性能、安全的檢查清單。</p>
            </div>
            <div className="contrast-card light">
              <h4>社群暖化</h4>
              <p>用淺色底介紹讀者日與線上分享會，保持明亮、開放的參與氛圍。</p>
            </div>
            <div className="contrast-card dark">
              <h4>未來規劃</h4>
              <p>提醒會新增資料 API、訂閱通知與貢獻者致謝牆，先以假內容占位。</p>
            </div>
          </div>

          <div className="stripe-grid">
            <div className="stripe">
              <h4>品牌小故事</h4>
              <p>分享 ROUNDVIEW 名稱的由來與首批貢獻者清單，以明亮底色呈現社群精神。</p>
            </div>
            <div className="stripe">
              <h4>加入社群</h4>
              <p>列出 Slack、Discord、電子報的假連結，並說明讀者可以回報資料、提案專題。</p>
            </div>
            <div className="stripe">
              <h4>支持我們</h4>
              <p>提供贊助、媒合、共筆三種支持方式，維持條帶交錯的版型方便閱讀。</p>
            </div>
          </div>

          <div className="band-grid">
            <div className="band-card">
              <h3>工作方式</h3>
              <p>描述站點用「雙週沖刺 + 月度回顧」的節奏運作，並在每次釋出時附上透明的 Change Log。</p>
              <ul>
                <li>雙週：前端版面 / 指標模型更新</li>
                <li>月度：社群回饋整理 · 體驗測試</li>
                <li>季度：方向校正與合作夥伴對齊</li>
              </ul>
            </div>
            <div className="band-card">
              <h3>教學計畫</h3>
              <p>先放上「資料視覺化工作坊」「開放資料教室」的佔位，後續會換成實際活動連結。</p>
              <div className="pill-stack">
                <span className="pill">資料清理 101</span>
                <span className="pill">故事線設計</span>
                <span className="pill">開源貢獻入門</span>
              </div>
            </div>
            <div className="band-card">
              <h3>社群回饋牆</h3>
              <p>展示假想的感謝名單與留言，強調明亮底色與條帶交錯的社群氛圍。</p>
              <div className="stripe-grid">
                <div className="stripe">
                  <h4>來自讀者 A</h4>
                  <p>「期待看到更多城市案例，下次更新想看電力資料！」</p>
                </div>
                <div className="stripe">
                  <h4>來自夥伴 B</h4>
                  <p>「樂於協助資料校對，這個版面很清楚！」</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
