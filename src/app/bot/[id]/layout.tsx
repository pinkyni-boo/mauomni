"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Grid, Database, Activity, Bot, Image as ImageIcon, MessageSquare, History, PenTool, Globe, Copy } from "lucide-react";
import { use } from "react";
import styles from "./layout.module.css";

export default function BotLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const pathname = usePathname();
  const { id: botId } = use(params);

  const quickSetup = [
    { name: "Tích hợp nền tảng", icon: <Globe size={18} />, href: `/bot/${botId}/integration` },
    { name: "Tổng quan", icon: <Grid size={18} />, href: `/bot/${botId}/overview` },
    { name: "Dữ liệu huấn luyện", icon: <Database size={18} />, href: `/bot/${botId}/training-data` },
    { name: "Kịch bản chốt sale", icon: <Activity size={18} />, href: `/bot/${botId}/sales-script` },
    { name: "Test bot", icon: <Bot size={18} />, href: `/bot/${botId}/test` },
  ];

  const advancedSettings = [
    { name: "Thư viện ảnh", icon: <ImageIcon size={18} />, href: `/bot/${botId}/gallery` },
    { name: "Tin nhắn nhanh", icon: <MessageSquare size={18} />, href: `/bot/${botId}/quick-replies` },
    { name: "Lịch sử chỉnh sửa", icon: <History size={18} />, href: `/bot/${botId}/history` },
  ];

  const development = [
    { name: "Tool Ads Facebook", icon: <PenTool size={18} />, href: `/bot/${botId}/ads` },
    { name: "Website", icon: <Globe size={18} />, href: `/bot/${botId}/website` },
  ];

  // Helper to determine title
  let title = "Tổng quan";
  if (pathname.includes('/overview')) title = "Tổng quan";
  else if (pathname.includes('/training-data')) title = "Tôi phải thêm câu hỏi bằng cách nào";
  else if (pathname.includes('/sales-script')) title = "Kịch bản chốt sales";
  else if (pathname.includes('/gallery')) title = "Thư viện ảnh";

  return (
    <div className={styles.botLayout}>
      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <div className={styles.topHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/">
              <button className={styles.backBtn}><ArrowLeft size={18} /></button>
            </Link>
            <h1 className={styles.pageTitle}>{title}</h1>
          </div>
          <div className={styles.headerActions}>
            <select className={styles.versionSelect}>
              <option>Bot phiên bản 2</option>
              <option>Bot phiên bản 1</option>
            </select>
            <button className={styles.secondaryBtn}>
              <Copy size={14} /> Nhân bản bot
            </button>
            <button className={styles.primaryBtn}>
              Lưu thay đổi
            </button>
          </div>
        </div>
        <div className={styles.contentArea}>
          {children}
        </div>
      </div>

      {/* Secondary Sidebar */}
      <div className={styles.secondarySidebar}>
        <div className={styles.botHeader}>
          <div className={styles.botProfile}>
            <div className={styles.botAvatar}>B</div>
            <span>bot-demo</span>
            <ChevronDown size={14} style={{ color: '#6b7280' }} />
          </div>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, paddingBottom: '24px' }}>
          <div className={styles.menuGroup}>
            <div className={styles.menuTitle}>Thiết lập nhanh</div>
            {quickSetup.map(item => (
              <Link key={item.href} href={item.href} className={`${styles.menuItem} ${pathname.includes(item.href) ? styles.active : ''}`}>
                {item.icon} {item.name}
              </Link>
            ))}
          </div>

          <div className={styles.menuGroup}>
            <div className={styles.menuTitle}>Cài đặt nâng cao</div>
            {advancedSettings.map(item => (
              <Link key={item.href} href={item.href} className={`${styles.menuItem} ${pathname.includes(item.href) ? styles.active : ''}`}>
                {item.icon} {item.name}
              </Link>
            ))}
          </div>

          <div className={styles.menuGroup}>
            <div className={styles.menuTitle}>Development</div>
            {development.map(item => (
              <Link key={item.href} href={item.href} className={`${styles.menuItem} ${pathname.includes(item.href) ? styles.active : ''}`}>
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
