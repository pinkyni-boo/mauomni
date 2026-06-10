"use client";

import { Users, Filter, Plus, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../page.module.css";

export default function AudiencesPage() {
  const router = useRouter();
  const [audiences, setAudiences] = useState([
    {
      id: 1,
      title: "Khách hàng VIP 2026",
      description: "Tệp khách hàng có tổng chi tiêu trên 10 triệu trong năm nay.",
      sent: "1,200",
      read: "Khách hàng",
      status: "Tự động cập nhật"
    },
    {
      id: 2,
      title: "Đã quan tâm nhưng chưa mua",
      description: "Tệp khách đã nhắn tin hỏi về sản phẩm nhưng chưa chốt đơn sau 7 ngày.",
      sent: "8,500",
      read: "Khách hàng",
      status: "Cố định"
    }
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Tệp Khách hàng</h1>
            <div className={styles.subtitle}>Quản lý và phân khúc đối tượng mục tiêu cho các chiến dịch.</div>
          </div>
          <button className={styles.primaryBtn} onClick={() => router.push('/campaigns/audiences/create')}>
            <Plus size={18} /> Tạo tệp mới
          </button>
        </div>
        
        <div className={styles.cardsContainer}>
          {audiences.map(aud => (
            <div key={aud.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.cardTitle}>{aud.title}</div>
                  <div className={styles.cardStatus} style={{ backgroundColor: aud.status === "Cố định" ? "#f3f4f6" : "#dcfce7", color: aud.status === "Cố định" ? "#4b5563" : "#16a34a" }}>{aud.status}</div>
                </div>
              </div>
              <div className={styles.cardDesc}>{aud.description}</div>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{aud.sent}</div>
                  <div className={styles.statLabel}>{aud.read}</div>
                </div>
              </div>
              <div className={styles.cardActions}>
                <button className={styles.actionBtn}>
                  <Filter size={14} /> Điều kiện lọc
                </button>
                <button className={styles.actionBtn}>
                  <Upload size={14} /> Cập nhật CSV
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
