"use client";

import { Smartphone, Play, Pause, Settings, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../page.module.css";

export default function SmsPage() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: "Chúc mừng sinh nhật khách hàng",
      description: "Gửi SMS chúc mừng sinh nhật kèm mã giảm giá 100k tự động mỗi ngày.",
      sent: "450",
      read: "99%",
      status: "Đang chạy"
    }
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Chiến dịch SMS</h1>
            <div className={styles.subtitle}>Quản lý các chiến dịch gửi SMS Brandname.</div>
          </div>
          <button className={styles.primaryBtn} onClick={() => router.push('/campaigns/sms/create')}>
            <Plus size={18} /> Tạo chiến dịch SMS
          </button>
        </div>
        
        <div className={styles.cardsContainer}>
          {campaigns.map(camp => (
            <div key={camp.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.cardTitle}>{camp.title}</div>
                  <div className={styles.cardStatus} style={{ backgroundColor: camp.status === "Đã xong" ? "#f3f4f6" : "#dcfce7", color: camp.status === "Đã xong" ? "#4b5563" : "#16a34a" }}>{camp.status}</div>
                </div>
              </div>
              <div className={styles.cardDesc}>{camp.description}</div>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{camp.sent}</div>
                  <div className={styles.statLabel}>Đã gửi</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{camp.read}</div>
                  <div className={styles.statLabel}>Tỷ lệ nhận</div>
                </div>
              </div>
              <div className={styles.cardActions}>
                <button className={styles.actionBtn}>
                  {camp.status === "Đang chạy" ? <Pause size={14} /> : <Play size={14} />} 
                  {camp.status === "Đang chạy" ? "Tạm dừng" : "Tiếp tục"}
                </button>
                <button className={styles.actionBtn}>
                  <Settings size={14} /> Cấu hình
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
