export default function CountriesPage() {
  return (
    <>
      <section className="section section-band section-band-forest">
        <div className="section-content">
          <div className="section-header">
            <h1>國家比較</h1>
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

          <div className="band-grid">
            <div className="band-card">
              <h3>季度政策時間軸</h3>
              <p>列出 Q1～Q4 的主要政策事件，之後可連動到詳細的國家頁面。</p>
              <div className="progress-rows">
                <div className="progress-row">
                  <span>Q1 · 草案公布</span>
                  <div className="progress-bar">
                    <span style={{ width: '42%' }} />
                  </div>
                  <span className="progress-number">42%</span>
                </div>
                <div className="progress-row">
                  <span>Q2 · 公眾諮詢</span>
                  <div className="progress-bar">
                    <span style={{ width: '53%' }} />
                  </div>
                  <span className="progress-number">53%</span>
                </div>
                <div className="progress-row">
                  <span>Q3 · 立法進度</span>
                  <div className="progress-bar">
                    <span style={{ width: '61%' }} />
                  </div>
                  <span className="progress-number">61%</span>
                </div>
              </div>
            </div>
            <div className="band-card">
              <h3>焦點國家故事</h3>
              <p>為每個季度挑三個案例：能源轉型、適應策略、社會公正，讓讀者感受差異。</p>
              <div className="stripe-grid">
                <div className="stripe">
                  <h4>北歐城市</h4>
                  <p>以再生能源與公共運輸示範低碳生活。</p>
                </div>
                <div className="stripe">
                  <h4>東南亞島國</h4>
                  <p>面對海平面上升的適應策略與遷村計畫。</p>
                </div>
                <div className="stripe">
                  <h4>拉美城市</h4>
                  <p>透過市民預算推動氣候正義與綠色就業。</p>
                </div>
              </div>
            </div>
            <div className="band-card">
              <h3>資料匯出</h3>
              <p>預留「下載國家評級」「比較兩個國家」「收藏我的清單」的按鈕區，保持條帶視覺。</p>
              <div className="pill-stack">
                <span className="pill pill-live">CSV 匯出</span>
                <span className="pill pill-trend">PDF 報告</span>
                <span className="pill pill-spotlight">收藏國家</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-sky">
        <div className="section-content">
          <div className="section-header">
            <h2>評級方法與對照</h2>
            <p>讓讀者知道國家評級的計算方式、資料來源與不確定度處理。</p>
          </div>

          <div className="stripe-grid">
            <div className="stripe">
              <h4>評分維度</h4>
              <p>排放趨勢、政策力度、財務承諾、社會公正四個構面，各有權重示意。</p>
            </div>
            <div className="stripe">
              <h4>資料來源</h4>
              <p>國際：UNFCCC、IEA；本地：能源局、統計處。未來會在每個國家卡片旁顯示。</p>
            </div>
            <div className="stripe">
              <h4>不確定度</h4>
              <p>用條帶顏色或誤差線提醒資料的可信度，避免解讀過度精準。</p>
            </div>
          </div>

          <div className="contrast-panels">
            <div className="contrast-card dark">
              <h4>對比模式</h4>
              <p>預留「台灣 vs 日本」「台灣 vs 德國」的快速對照入口，維持深淺底色節奏。</p>
            </div>
            <div className="contrast-card light">
              <h4>開放數據</h4>
              <p>未來開放 API 與 Github 來源列表，方便研究者重現與驗證。</p>
            </div>
            <div className="contrast-card dark">
              <h4>社群回饋</h4>
              <p>邀請讀者留言補充政策新聞或修正數據，並在條帶上展示最新提案。</p>
            </div>
            <div className="contrast-card light">
              <h4>學習清單</h4>
              <p>提供延伸閱讀與外部報告，保持不同底色的閱讀節奏。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
