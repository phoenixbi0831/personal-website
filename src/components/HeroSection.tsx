//import profileImage from '../../../img/個人照片.jpeg';

export function HeroSection() {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-layout">
        <div className="hero-photo-wrapper">
          <div className="hero-photo-frame">
            <img src="/img/個人照片.jpeg" alt="Phoenix Tsai" className="hero-photo" />

          </div>
        </div>

        <div className="hero-content">
          <span className="hero-kicker">CDP 數據經理 · 數據中台顧問</span>
          <h1 className="hero-title">
            Phoenix Tsai
            <span className="hero-title-sub">把數據變成品牌成長武器</span>
          </h1>
          <p className="hero-lead">
            從 DW/BI 顧問、專案經理，到 CDP 與數據中台操盤手，我關心的不是報表做得多漂亮，
            而是這一筆資料，能不能再多幫你賺一點成長。
          </p>

          <dl className="hero-meta">
            <div className="hero-meta-item">
              <dt>專長</dt>
              <dd>CDP 顧客數據管理、數據標籤體系、EC &amp; O2O 流程優化、社群商務設計</dd>
            </div>
            <div className="hero-meta-item">
              <dt>角色</dt>
              <dd>數據經理、架構顧問、專案總管、跨部門協作教練</dd>
            </div>
            <div className="hero-meta-item">
              <dt>服務對象</dt>
              <dd>零售、餐飲、金融、EC 與成長型品牌團隊</dd>
            </div>
          </dl>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              預約洽談
            </a>
            <a href="#achievements" className="btn btn-ghost">
              看代表成就
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

