"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";

export default function CreateSmsCampaignPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className={styles.iconBtn} onClick={() => router.back()}>
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className={styles.title}>Tạo Chiến dịch SMS</h1>
              <div className={styles.subtitle}>Soạn thảo tin nhắn SMS Brandname</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className={styles.cancelBtn} onClick={() => router.back()}>Hủy</button>
            <button className={styles.primaryBtn}>Bắt đầu gửi SMS</button>
          </div>
        </div>
        
        <div className={styles.contentArea} style={{ padding: '32px', display: 'block', backgroundColor: 'var(--bg-white)', maxWidth: '800px', margin: '0 auto', borderRadius: '8px', marginTop: '24px', border: '1px solid var(--border-color)' }}>
          <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Tên chiến dịch</label>
            <input type="text" className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }} placeholder="Ví dụ: KM Khai trương..." />
          </div>
          <div className={styles.formGroup}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Nội dung SMS (Tiếng Việt không dấu)</label>
            <textarea className={styles.inputField} rows={4} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', resize: 'none' }} placeholder="Nhap noi dung..."></textarea>
            <div style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px', textAlign: 'right' }}>0 / 160 ký tự</div>
          </div>
        </div>
      </div>
    </div>
  );
}
