"use client";

import { useState } from "react";
import { Plus, Copy, Edit, ExternalLink, X, Settings2 } from "lucide-react";
import styles from "./page.module.css";

export default function CrmFormsPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  const mockForms = [
    {
      id: 1,
      title: "Thu thập thông tin học viên",
      description: "Form đăng ký lấy thông tin Tên, SĐT, Khóa học quan tâm, Trình độ để tự động lưu vào CRM.",
      responses: 145,
      conversionRate: "24%",
      status: "Đang hoạt động"
    },
    {
      id: 2,
      title: "Đăng ký nhận tài liệu IELTS",
      description: "Thu thập email để gửi tài liệu tự học IELTS miễn phí hàng tuần.",
      responses: 892,
      conversionRate: "45%",
      status: "Đang hoạt động"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Form thông tin Khách hàng</h1>
            <div className={styles.subtitle}>Tạo và quản lý các biểu mẫu thu thập dữ liệu tự động đổ về CRM.</div>
          </div>
          <button className={styles.primaryBtn} onClick={() => setShowAddModal(true)}>
            <Plus size={18} /> Tạo Form mới
          </button>
        </div>

        {/* Forms List */}
        <div className={styles.formsContainer}>
          {mockForms.map(form => (
            <div key={form.id} className={styles.formCard}>
              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.formTitle}>{form.title}</div>
                  <div className={styles.formStatus}>{form.status}</div>
                </div>
              </div>
              
              <div className={styles.formDesc}>{form.description}</div>
              
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{form.responses}</div>
                  <div className={styles.statLabel}>Phản hồi</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{form.conversionRate}</div>
                  <div className={styles.statLabel}>Tỷ lệ chuyển đổi</div>
                </div>
              </div>
              
              <div className={styles.cardActions}>
                <button className={`${styles.actionBtn} ${styles.copyBtn}`}>
                  <Copy size={14} /> Copy Link
                </button>
                <button className={styles.actionBtn}>
                  <Settings2 size={14} /> Chỉnh sửa
                </button>
                <button className={styles.actionBtn}>
                  <ExternalLink size={14} /> Xem thử
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Add Form */}
      {showAddModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Tạo Form mới</h3>
              <button className={styles.iconBtn} onClick={() => setShowAddModal(false)}><X size={18} /></button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label>Tên biểu mẫu</label>
                <input type="text" className={styles.inputField} placeholder="Ví dụ: Đăng ký tư vấn khóa học..." />
              </div>
              <div className={styles.formGroup}>
                <label>Mô tả ngắn</label>
                <input type="text" className={styles.inputField} placeholder="Mô tả mục đích của biểu mẫu này..." />
              </div>
              
              <div style={{ marginTop: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)' }}>
                Các trường dữ liệu cơ bản:
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                  <input type="checkbox" defaultChecked disabled /> Họ và tên
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                  <input type="checkbox" defaultChecked disabled /> Số điện thoại
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                  <input type="checkbox" defaultChecked /> Email
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                  <input type="checkbox" defaultChecked /> Khóa học quan tâm
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                  <input type="checkbox" /> Trình độ hiện tại
                </label>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowAddModal(false)}>Hủy</button>
              <button className={styles.primaryBtn} onClick={() => setShowAddModal(false)}>Tạo và Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
