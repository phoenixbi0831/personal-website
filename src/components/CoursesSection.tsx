const courses = [
  {
    id: 'cdp-strategy',
    title: 'CDP／數據中台策略到實作工作坊',
    level: '企業內訓 · 1~2 日',
    description:
      '從業務目標反推資料架構，拆解 CDP 與數據中台的角色分工、核心模組與落地路線圖，搭配實際案例討論。',
    price: '請洽詢（依規模報價）'
  },
  {
    id: 'data-labels',
    title: '會員標籤與數據應用設計',
    level: '實戰班 · 6 小時',
    description:
      '一步步帶你從原始欄位設計出可用的會員標籤體系，並用實際情境演練「看到標籤之後的下一步行動」。',
    price: 'NT$ 18,000／場起'
  },
  {
    id: 'o2o-flow',
    title: 'EC & O2O 服務動線與數據優化',
    level: '實體＋線上 · 1 日',
    description:
      '以實際門市與 EC 流程為範例，從顧客體感、內場動線到數據指標，設計一套可以持續優化的 O2O 服務流程。',
    price: 'NT$ 22,000／場起'
  }
];

export function CoursesSection() {
  return (
    <section id="courses" className="section courses-section">
      <div className="section-header">
        <h2>課程資訊</h2>
        <p>所有課程皆可依產業情境客製，以下為常見課程模組與參考價格。</p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <article key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p className="course-level">{course.level}</p>
            <p className="course-description">{course.description}</p>
            <div className="course-footer">
              <span className="course-price">{course.price}</span>
              <a href="#contact" className="course-cta">
                洽談合作
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

