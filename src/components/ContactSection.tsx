export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-layout">
        <div className="contact-text">
          <h2>聯絡洽詢</h2>
          <p>
            如果你正在規劃 CDP、數據中台、EC &amp; O2O 或社群商務相關專案，歡迎用下面的方式跟我聊聊，
            我會根據你的目標與現況，提出實際可行的建議與合作模式。
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:phoenix.data.cdp@example.com">phoenix.data.cdp@example.com</a>
            </li>
            <li>
              <span className="contact-label">LinkedIn</span>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                連結將放實際個人檔案
              </a>
            </li>
          </ul>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('感謝你的訊息！目前為示意表單，送出不會真正傳送。');
          }}
        >
          <div className="form-row">
            <label>
              公司／品牌名稱
              <input type="text" name="company" placeholder="例如：XXX 科技、YYY 餐飲集團" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              姓名
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              想討論的主題
              <select name="topic" defaultValue="cdp">
                <option value="cdp">CDP／數據中台規劃</option>
                <option value="analytics">數據分析與標籤設計</option>
                <option value="o2o">EC &amp; O2O 流程優化</option>
                <option value="community">社群商務與人脈平台</option>
                <option value="other">其他合作機會</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              簡要說明
              <textarea
                name="message"
                rows={4}
                placeholder="請簡單描述你目前的現況、遇到的挑戰與希望達成的目標。"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            送出洽詢
          </button>
        </form>
      </div>
    </section>
  );
}

