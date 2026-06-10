"use client";
import { HelpCircle, Search, Trash2, Download, Upload, Plus, Check, MoreHorizontal } from "lucide-react";
import styles from "./page.module.css";

export default function TrainingDataPage() {
  const faqs = [
    { id: 1, question: "Hotline công ty bạn", answer: "Hotline bên mình 0389647778", status: true },
    { id: 2, question: "Địa chỉ công ty bạn ở đâu", answer: "183 Bến Vân Đồn Phường Khánh Hội TPHCM", status: true },
    { id: 3, question: "Bạn là ai", answer: "Mình là trợ lý ảo rất thông minh có thể giúp nhiều doanh nghiệp tăng tỷ lệ chốt đơn", status: true },
  ];

  return (
    <div>
      <div className={styles.helpTip}>
        <HelpCircle size={16} /> Tôi phải thêm câu hỏi bằng cách nào ?
      </div>

      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input type="text" className={styles.searchInput} placeholder="Tìm kiếm câu hỏi..." />
        </div>
        <div className={styles.actions}>
          <button className={`${styles.iconBtn} ${styles.danger}`}><Trash2 size={16} /></button>
          <button className={styles.outlineBtn}><Download size={16} /> Xuất file FAQs</button>
          <button className={styles.outlineBtn}><Upload size={16} /> Nhập file FAQs</button>
          <button className={styles.primaryBtn}><Plus size={16} /> Thêm FAQs</button>
        </div>
      </div>

      <div className={styles.tableInfo}>Tổng số câu hỏi: 3</div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{width: '40px'}}><input type="checkbox" className={styles.checkbox} /></th>
            <th style={{width: '30%'}}>Câu hỏi</th>
            <th style={{width: '50%'}}>Trả lời</th>
            <th style={{width: '10%'}}>Trạng thái</th>
            <th style={{width: '10%', textAlign: 'center'}}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map(faq => (
            <tr key={faq.id}>
              <td><input type="checkbox" className={styles.checkbox} /></td>
              <td style={{fontWeight: 500}}>{faq.question}</td>
              <td style={{color: '#4b5563', lineHeight: '1.5'}}>{faq.answer}</td>
              <td>
                <div className={styles.statusIcon} style={{display: 'inline-flex'}}>
                  <Check size={14} strokeWidth={3} />
                </div>
              </td>
              <td style={{textAlign: 'center', color: '#9ca3af', cursor: 'pointer'}}>
                <MoreHorizontal size={18} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
