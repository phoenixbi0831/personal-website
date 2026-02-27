import slidePicMain from '../../../img/數據分析_Phoeinx_20240327_slide4_2.jpg';
import slidePicDetail from '../../../img/數據分析_Phoeinx_20240327_slide4_4.jpg';

const achievements = [
  {
    id: 'career-span',
    title: '25 年，從寫程式到掌舵數據策略',
    description:
      '從程式設計師、DW/BI 顧問，到 CDP 數據經理與顧問，橫跨技術與決策兩個世界，專長在把技術語言翻成董事會聽得懂的成長故事。',
    tag: '職涯跨度',
    image: slidePicMain
  },
  {
    id: 'awards',
    title: '風雲人物與最佳論文獎項',
    description:
      '曾獲「年度風雲人物」、「最佳員工」與 EMBA 最優論文獎，背後都是一次次把數據變成營收與組織改變的實戰成果。',
    tag: '被看見的成就',
    image: slidePicDetail
  },
  {
    id: 'platforms',
    title: '人脈社群平台與聊天機器人實作',
    description:
      '從論文到實際系統，一個人 6 個月完成社群平台與聊天機器人架構，讓人脈互動與社群內容可以被量化與經營。',
    tag: '產品實作',
    image: slidePicMain
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="section-header">
        <h2>個人成就</h2>
        <p>滑過卡片可以看到更多說明，圖片比例為 16:9，適合簡報與 Pitch Deck 風格呈現。</p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item) => (
          <article key={item.id} className="achievement-card">
            <div className="achievement-image-wrapper">
              <img src={item.image} alt={item.title} className="achievement-image" />
              <span className="achievement-tag">{item.tag}</span>
            </div>
            <div className="achievement-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

