"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";

export default function CreateFacebookCampaignPage() {
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
              <h1 className={styles.title}>Tạo Chiến dịch Facebook</h1>
              <div className={styles.subtitle}>Thiết lập kịch bản tin nhắn Messenger FMM</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className={styles.cancelBtn} onClick={() => router.back()}>Hủy</button>
            <button className={styles.primaryBtn}>Khởi động kịch bản</button>
          </div>
        </div>
        
        <div className={styles.contentArea} style={{ padding: '32px', display: 'block', backgroundColor: 'var(--bg-white)', maxWidth: '800px', margin: '0 auto', borderRadius: '8px', marginTop: '24px', border: '1px solid var(--border-color)' }}>
          <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Tên chiến dịch</label>
            <input type="text" className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }} placeholder="Ví dụ: Khuyến mãi Black Friday..." />
          </div>
          <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Luồng kịch bản (Flow)</label>
            <select className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <option>Chọn kịch bản chatbot có sẵn</option>
              <option>Kịch bản Vòng quay may mắn</option>
              <option>Kịch bản Tư vấn sản phẩm mới</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
