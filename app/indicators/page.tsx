export default function IndicatorsPage() {
  return (
    <>
      <section className="section section-band section-band-forest">
        <div className="section-content">
          <div className="section-header">
            <h1>暖化與環境指標</h1>
            <p>用簡單的卡片呈現關鍵環境指標，後續可接 API 或 Supabase 的實際數據。</p>
          </div>

          <div className="card-grid">
            <div className="info-card">
              <h3>全球升溫預估</h3>
              <p>示意：目前政策軌跡約落在 2.4°C～2.8°C 之間，後續可串接 IPCC 或 Climate Action Tracker。</p>
              <span className="tag">示意資料</span>
            </div>
            <div className="info-card">
              <h3>台灣再生能源佔比</h3>
              <p>示意：再生能源占總發電量的 XX%，未來可改成即時資料並加上縣市分布。</p>
              <span className="tag">即將上線</span>
            </div>
            <div className="info-card">
              <h3>森林覆蓋與碳匯</h3>
              <p>示意：整理台灣與世界的森林覆蓋率變化，並搭配保育計畫與自然碳匯地圖。</p>
              <span className="tag">規劃中</span>
            </div>
          </div>

          <div className="band-grid">
            <div className="band-card">
              <h3>指標雷達圖</h3>
              <p>預留「升溫、能源、森林、韌性」等維度的雷達圖，展示不同國家或年份的差異。</p>
              <div className="tag-row">
                <span className="tag tag-animated">互動示意</span>
                <span className="tag tag-animated">資料串接</span>
              </div>
            </div>
            <div className="band-card">
              <h3>場景推演</h3>
              <p>列出「基準情境」「加速減排」「極端事件」三種路徑，未來可與動畫或情境故事搭配。</p>
              <div className="progress-rows">
                <div className="progress-row">
                  <span>基準情境</span>
                  <div className="progress-bar">
                    <span style={{ width: '45%' }} />
                  </div>
                  <span className="progress-number">45%</span>
                </div>
                <div className="progress-row">
                  <span>加速減排</span>
                  <div className="progress-bar">
                    <span style={{ width: '58%' }} />
                  </div>
                  <span className="progress-number">58%</span>
                </div>
                <div className="progress-row">
                  <span>極端事件</span>
                  <div className="progress-bar">
                    <span style={{ width: '36%' }} />
                  </div>
                  <span className="progress-number">36%</span>
                </div>
              </div>
            </div>
            <div className="band-card">
              <h3>個人追蹤清單</h3>
              <p>預留「收藏指標」「設定提醒」「下載 CSV」的按鈕，示範互動功能的排版。</p>
              <div className="pill-stack">
                <span className="pill pill-live">提醒：月更新</span>
                <span className="pill pill-trend">追蹤：3 個指標</span>
                <span className="pill pill-spotlight">導出：CSV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-sky">
        <div className="section-content">
          <div className="section-header">
            <h2>資料說明與更新節奏</h2>
            <p>讓讀者知道每個指標的資料來源、更新頻率與未來會新增的欄位。</p>
          </div>

          <div className="stripe-grid">
            <div className="stripe">
              <h4>資料來源表</h4>
              <p>國際：IPCC、IEA、UNFCCC；本地：能源局、環境部、林業署。預計在每條指標卡旁邊標註。</p>
            </div>
            <div className="stripe">
              <h4>更新頻率</h4>
              <p>升溫軌跡：半年；能源占比：月；森林碳匯：年。每次更新會在 Changelog 留紀錄。</p>
            </div>
            <div className="stripe">
              <h4>互動路線</h4>
              <p>預計增加「比較模式」「下載報表」「訂閱提醒」，並用深淺底色區分不同操作區。</p>
            </div>
          </div>

          <div className="contrast-panels">
            <div className="contrast-card dark">
              <h4>資料可信度</h4>
              <p>每個指標附上版本號、校對人與來源鏈接，讓讀者知道資料是怎麼來的。</p>
            </div>
            <div className="contrast-card light">
              <h4>未來欄位</h4>
              <p>預留「不確定度」「區域差異」等欄位，方便之後接更多資料集。</p>
            </div>
            <div className="contrast-card dark">
              <h4>行動按鈕</h4>
              <p>放置分享、下載與訂閱按鈕，維持條帶分明的視覺導引。</p>
            </div>
            <div className="contrast-card light">
              <h4>開放 API</h4>
              <p>未來開放 API key 申請，並提供速率限制、範例程式碼與 SDK 區塊。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
