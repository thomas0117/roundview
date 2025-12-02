export default function AboutPage() {
  return (
    <>
      <section className="section section-band section-band-forest">
        <div className="section-content">
          <div className="section-header">
            <h1>關於 ROUNDVIEW</h1>
            <p>介紹理念、團隊、資料來源，以及社群如何參與共創。</p>
          </div>
          <div className="about-layout">
            <p>
              ROUNDVIEW 是一個友善的環境資訊站，透過可視化圖表與故事化文章，幫助大眾理解氣候變遷、
              能源轉型與保育議題。我們重視透明資料來源，也歡迎社群一起協作、提供修正與建議。
            </p>
            <p>
              未來這裡會介紹：
              <br />
              ・網站的理念、團隊與維護者
              <br />
              ・資料來源（例如 IPCC、國際組織、政府開放資料）
              <br />
              ・如何參與或協助改善這個網站
            </p>
          </div>

          <div className="band-grid">
            <div className="band-card">
              <h3>工作流程</h3>
              <p>從資料蒐集、校對、設計、發布到社群回饋的五步流程，維持條帶分明的紀錄。</p>
              <div className="progress-rows">
                <div className="progress-row">
                  <span>資料蒐集</span>
                  <div className="progress-bar">
                    <span style={{ width: '78%' }} />
                  </div>
                  <span className="progress-number">78%</span>
                </div>
                <div className="progress-row">
                  <span>設計排版</span>
                  <div className="progress-bar">
                    <span style={{ width: '66%' }} />
                  </div>
                  <span className="progress-number">66%</span>
                </div>
              </div>
            </div>
            <div className="band-card">
              <h3>共創夥伴</h3>
              <p>列出 NGO、研究者、工程師與設計師的協作模式，未來可連結到貢獻者名單。</p>
              <div className="pill-stack">
                <span className="pill pill-spotlight">研究協作</span>
                <span className="pill pill-trend">工程開發</span>
                <span className="pill pill-live">社群行動</span>
              </div>
            </div>
            <div className="band-card">
              <h3>透明資料室</h3>
              <p>預留「資料來源表」「更新日誌」「版本差異」三個子頁簽，方便讀者查閱。</p>
              <div className="tag-row">
                <span className="tag tag-animated">來源</span>
                <span className="tag tag-animated">Changelog</span>
                <span className="tag tag-animated">版本</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band section-band-sky">
        <div className="section-content">
          <div className="section-header">
            <h2>參與方式與社群活動</h2>
            <p>把深淺色條帶搬到參與區，示範如何收集讀者回饋與協作。</p>
          </div>

          <div className="stripe-grid">
            <div className="stripe">
              <h4>讀者回饋</h4>
              <p>每季整理「想看到的功能」「改進建議」「錯字回報」，保持透明的處理狀態。</p>
            </div>
            <div className="stripe">
              <h4>工作坊</h4>
              <p>預留「資料可視化」「政策解讀」「社群協作」三場工作坊的報名入口。</p>
            </div>
            <div className="stripe">
              <h4>共筆手冊</h4>
              <p>公開編輯規範、程式碼指引與寫作風格，方便新進協作者快速上手。</p>
            </div>
          </div>

          <div className="contrast-panels">
            <div className="contrast-card dark">
              <h4>治理原則</h4>
              <p>開源、透明、迭代。條帶區塊保留決策紀錄與社群共識。</p>
            </div>
            <div className="contrast-card light">
              <h4>貢獻回饋</h4>
              <p>列出可獲得的感謝名單、協作徽章與小禮物，鼓勵長期參與。</p>
            </div>
            <div className="contrast-card dark">
              <h4>合作提案</h4>
              <p>預留與 NGO、學校或媒體合作的提案表單，占位展示將來的行動。</p>
            </div>
            <div className="contrast-card light">
              <h4>社群頻道</h4>
              <p>Discord、Line、電子報訂閱連結都會放在這裡，維持明顯底色區隔。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
