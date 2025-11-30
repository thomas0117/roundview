export default function CountriesPage() {
  return (
    <section className="section section-alt">
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
      </div>
    </section>
  );
}
