"use client";

import { Mail, Play, Pause, Settings, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../page.module.css";

export default function EmailPage() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: "Bản tin Weekly Newsletter",
      description: "Gửi bản tin cập nhật thị trường và các mẹo kinh doanh hữu ích vào sáng thứ 2.",
      sent: "25,000",
      read: "3,200",
      status: "Đang chạy"
    }
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Chiến dịch Email</h1>
            <div className={styles.subtitle}>Quản lý các chiến dịch Email Marketing.</div>
          </div>
          <button className={styles.primaryBtn} onClick={() => router.push('/campaigns/email/create')}>
            <Plus size={18} /> Tạo chiến dịch Email
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
                  <div className={styles.statLabel}>Mở mail</div>
                </div>
              </div>
              <div className={styles.cardActions}>
                <button className={styles.actionBtn}>
                  {camp.status === "Đang chạy" ? <Pause size={14} /> : <Play size={14} />} 
                  {camp.status === "Đang chạy" ? "Tạm dừng" : "Tiếp tục"}
                </button>
                <button className={styles.actionBtn}>
                  <Settings size={14} /> Thiết kế Email
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
