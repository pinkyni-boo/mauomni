"use client";

import { MessageSquare, Play, Pause, Settings, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../page.module.css";

export default function ZaloZbsPage() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: "Chăm sóc KH cũ tháng 6",
      description: "Gửi mã giảm giá 20% cho khách hàng đã mua sản phẩm trong tháng 5 qua Zalo ZBS.",
      sent: "1,240",
      read: "850",
      status: "Đang chạy"
    },
    {
      id: 2,
      title: "Thông báo lịch nghỉ Lễ",
      description: "Gửi thông báo lịch nghỉ Lễ Quốc Khánh đến toàn bộ tệp KH Zalo.",
      sent: "5,000",
      read: "4,200",
      status: "Đã xong"
    }
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Zalo ZBS</h1>
            <div className={styles.subtitle}>Quản lý các chiến dịch gửi tin nhắn Zalo Broadcast.</div>
          </div>
          <button className={styles.primaryBtn} onClick={() => router.push('/campaigns/zalo/create')}>
            <Plus size={18} /> Tạo chiến dịch Zalo
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
                  <div className={styles.statLabel}>Đã đọc</div>
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
