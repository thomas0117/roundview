export default function IndicatorsPage() {
  return (
    <section className="section">
      <div className="section-content">
        <div className="section-header">
          <h1>暖化與環境指標</h1>
          <p>用簡單的卡片呈現關鍵環境指標，後續可接 API 或 Supabase 的實際數據。</p>
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
  );
}
