"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";

export default function CreateZaloCampaignPage() {
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
              <h1 className={styles.title}>Tạo Chiến dịch Zalo</h1>
              <div className={styles.subtitle}>Thiết lập nội dung và cấu hình gửi tin nhắn ZBS</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className={styles.cancelBtn} onClick={() => router.back()}>Hủy</button>
            <button className={styles.primaryBtn}>Bắt đầu gửi</button>
          </div>
        </div>
        
        <div style={{ padding: '32px', backgroundColor: 'var(--bg-white)', margin: '24px', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'left', flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', textAlign: 'left' }}>Tên chiến dịch</label>
              <input type="text" className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }} placeholder="Nhập tên chiến dịch..." />
            </div>
            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', textAlign: 'left' }}>Tệp khách hàng mục tiêu</label>
              <select className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <option>Tất cả khách hàng Zalo</option>
                <option>Khách hàng mua hàng trong 30 ngày qua</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', textAlign: 'left' }}>Nội dung tin nhắn</label>
              <textarea className={styles.inputField} rows={6} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', resize: 'none' }} placeholder="Nhập nội dung tin nhắn Zalo Broadcast..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
