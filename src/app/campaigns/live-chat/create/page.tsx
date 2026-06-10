"use client";
import { ArrowLeft, Bold, Italic, Link as LinkIcon, List, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";

export default function CreateLiveChatCampaignPage() {
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
              <h1 className={styles.title}>Create a live chat campaign</h1>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className={styles.cancelBtn} onClick={() => router.back()}>Hủy</button>
            <button className={styles.primaryBtn}>Lưu chiến dịch</button>
          </div>
        </div>
        
        <div style={{ padding: '32px', backgroundColor: 'var(--bg-white)', margin: '24px', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'left', flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Tiêu đề</label>
              <input type="text" className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }} placeholder="Vui lòng điền tiêu đề của chiến dịch" />
            </div>
            
            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Tin nhắn</label>
              <div style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', padding: '8px 12px', borderBottom: '1px solid var(--border-color)', backgroundColor: '#f9fafb', gap: '12px' }}>
                  <Bold size={16} style={{ color: '#6b7280', cursor: 'pointer' }} />
                  <Italic size={16} style={{ color: '#6b7280', cursor: 'pointer' }} />
                  <LinkIcon size={16} style={{ color: '#6b7280', cursor: 'pointer' }} />
                  <List size={16} style={{ color: '#6b7280', cursor: 'pointer' }} />
                  <Eye size={16} style={{ color: '#6b7280', cursor: 'pointer' }} />
                </div>
                <textarea className={styles.inputField} rows={4} style={{ width: '100%', padding: '12px', border: 'none', resize: 'none', outline: 'none' }} placeholder="Vui lòng điền thông điệp của chiến dịch"></textarea>
                <div style={{ textAlign: 'right', padding: '4px 12px 8px', fontSize: '12px', color: '#9ca3af' }}>0 / 200</div>
              </div>
            </div>

            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Chọn Hộp thư đến</label>
              <select className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <option>Chọn Hộp thư đến</option>
                <option>Inbox 1</option>
              </select>
            </div>

            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Gửi bởi</label>
              <select className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <option>Bot</option>
                <option>User</option>
              </select>
            </div>

            <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>URL</label>
              <input type="text" className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }} placeholder="Vui lòng nhập URL" />
            </div>

            <div className={styles.formGroup}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Thời gian trên trang (Giây)</label>
              <input type="number" className={styles.inputField} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }} placeholder="10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
