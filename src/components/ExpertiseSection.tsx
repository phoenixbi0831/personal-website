export const expertiseAreas = {
  cdp: {
    key: 'cdp',
    label: 'CDP／數據中台',
    color: '#2563eb',
    softColor: 'rgba(37, 99, 235, 0.08)',
    title: '讓你的 CDP 不只存資料，而是推動營收的引擎',
    bullets: [
      '會員、交易、數位軌跡與第三方資料整合，建立可長期維運的 CDP 與 Data Mart',
      '設計資料規範、DW／CDP 維運流程與 API 串接策略，避免「一次性專案」',
      '以「三年後要靠數據賺什麼錢」為起點反推資料架構與場景'
    ],
    metricLabel: '整合管道數',
    metricValue: '10+',
    metricNote: '金融、餐飲、零售與 EC 等跨通路案例'
  },
  analytics: {
    key: 'analytics',
    label: '數據分析／標籤',
    color: '#0f766e',
    softColor: 'rgba(15, 118, 110, 0.08)',
    title: '從「數據報表」變成「行動決策」',
    bullets: [
      '設計事實／模型／預測／外部標籤的多層次會員標籤體系',
      '從 RFM、分群到預測模型，著重在下一步行動與實際應用情境',
      '用數據說服非技術決策者，讓報表真的被每天打開'
    ],
    metricLabel: '設計標籤數',
    metricValue: '200+',
    metricNote: '涵蓋行為、價值、偏好與預測'
  },
  o2o: {
    key: 'o2o',
    label: 'EC & O2O 流程',
    color: '#ea580c',
    softColor: 'rgba(234, 88, 12, 0.08)',
    title: '把線上線下服務動線，變成可以被優化的數據流程',
    bullets: [
      '從門市櫃台與顧客等待體感出發，重畫外送／外帶流程與人力配置',
      '整合 EC、POS、Call Center、外送平台與門店營運系統',
      '用出餐時間分布、爆量時段與投訴率，持續優化體驗與營運效率'
    ],
    metricLabel: '流程優化專案',
    metricValue: '10+',
    metricNote: '顧客體感與營運效率同步提升'
  },
  community: {
    key: 'community',
    label: '社群商務／人脈平台',
    color: '#7c3aed',
    softColor: 'rgba(124, 58, 237, 0.08)',
    title: '把互動關係變成可以被經營的人脈資產',
    bullets: [
      '以 SLATES 與 4RC 拆解平台互動行為，設計留存與貢獻機制',
      '建立 PCI／CCI／SCI 等互動指標，繪製人脈關係圖譜',
      '用聊天機器人與互動指標，累積可變現的人脈與商機資料'
    ],
    metricLabel: '平台設計經驗',
    metricValue: '6+',
    metricNote: '從 EMBA 人脈到社群商務實戰'
  }
} as const;

type ExpertiseKey = keyof typeof expertiseAreas;

interface ExpertiseSectionProps {
  activeKey: ExpertiseKey;
  onChangeActiveKey: (key: ExpertiseKey) => void;
}

export function ExpertiseSection({ activeKey, onChangeActiveKey }: ExpertiseSectionProps) {
  const activeArea = expertiseAreas[activeKey];

  return (
    <section id="expertise" className="section expertise-section">
      <div className="section-header">
        <h2>擅長領域</h2>
        <p>切換不同領域，頁面色系會跟著變，對應你現在最在意的成長戰場。</p>
      </div>

      <div className="expertise-tabs" role="tablist">
        {(Object.values(expertiseAreas) as (typeof expertiseAreas)[ExpertiseKey][]).map((area) => (
          <button
            key={area.key}
            type="button"
            role="tab"
            className={`expertise-tab ${area.key === activeKey ? 'is-active' : ''}`}
            onClick={() => onChangeActiveKey(area.key as ExpertiseKey)}
          >
            <span className="expertise-tab-dot" style={{ backgroundColor: area.color }} />
            <span>{area.label}</span>
          </button>
        ))}
      </div>

      <div
        className="expertise-panel"
        style={{
          borderColor: activeArea.color,
          background: activeArea.softColor
        }}
      >
        <div className="expertise-panel-main">
          <h3>{activeArea.title}</h3>
          <ul>
            {activeArea.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="expertise-panel-metric">
          <div className="expertise-metric-label">{activeArea.metricLabel}</div>
          <div className="expertise-metric-value">{activeArea.metricValue}</div>
          <div className="expertise-metric-note">{activeArea.metricNote}</div>
        </div>
      </div>
    </section>
  );
}

