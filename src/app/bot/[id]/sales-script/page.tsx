"use client";
import { HelpCircle, Search, Trash2, Download, Upload, Plus } from "lucide-react";
import styles from "../training-data/page.module.css";

const EmptyBoxSVG = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 70L20 50L60 30L100 50L60 70Z" fill="#FEE2E2"/>
    <path d="M60 70L20 50V80L60 100V70Z" fill="#FCA5A5"/>
    <path d="M60 70L100 50V80L60 100V70Z" fill="#F87171"/>
    <path d="M60 50C60 50 70 20 90 30C110 40 80 70 60 50Z" stroke="#DF2E38" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
    <path d="M85 25L95 20L90 30L85 25Z" fill="#DF2E38"/>
  </svg>
);

export default function SalesScriptPage() {
  return (
    <div>
      <div className={styles.helpTip}>
        <HelpCircle size={16} /> Tôi phải thêm kịch bản bằng cách nào ?
      </div>

      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input type="text" className={styles.searchInput} placeholder="Nhập tên kịch bản tìm kiếm" />
        </div>
        <div className={styles.actions}>
          <button className={`${styles.iconBtn} ${styles.danger}`}><Trash2 size={16} /></button>
          <button className={styles.outlineBtn}><Download size={16} /> Xuất file kịch bản</button>
          <button className={styles.outlineBtn}><Upload size={16} /> Nhập file kịch bản</button>
          <button className={styles.primaryBtn}><Plus size={16} /> Thêm kịch bản mới</button>
        </div>
      </div>

      <div className={styles.tableInfo}>Tổng số kịch bản: 0</div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0', color: '#6b7280'}}>
        <EmptyBoxSVG />
        <div style={{marginTop: '24px', fontSize: '15px'}}>
          Không có dữ liệu. Hãy <span style={{fontWeight: 600, color: '#111827'}}>+ Thêm kịch bản mới</span> để bắt đầu xây dựng AI Chatbot của bạn.
        </div>
      </div>
    </div>
  );
}
