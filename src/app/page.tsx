"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  ArrowUpRight, 
  LayoutGrid, 
  List, 
  Plus, 
  Search, 
  ListFilter, 
  ChevronDown, 
  X,
  PlaySquare
} from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import CreateBotModal from "@/components/bot/CreateBotModal";

export default function BotTrainingPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showGuide, setShowGuide] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // "newest", "oldest", "name"
  const [filterBy, setFilterBy] = useState("all"); // "all", "active", "paused"

  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Close dropdowns when clicking outside (simple approach: close on any click in body if open, handled via simple blur or overlay, but easiest is just simple toggle for mockup)
  // For a robust mockup, let's just use simple toggles.

  // Demo bots state
  const [bots, setBots] = useState([
    {
      id: "1",
      name: "bot-demo",
      badge: "Trả lời tin nhắn",
      status: "active",
      createdAt: new Date("2026-06-10T15:00:00").getTime(),
      dateStr: "10/06/2026 - 03:00 PM",
      avatarColor: "#fce8e8",
      iconColor: "#DF2E38",
      initial: "B"
    },
    {
      id: "2",
      name: "IELTS Consultant",
      badge: "Đang hoạt động",
      status: "active",
      createdAt: new Date("2026-06-09T10:15:00").getTime(),
      dateStr: "09/06/2026 - 10:15 AM",
      avatarColor: "#eff6ff",
      iconColor: "#3B82F6",
      initial: "I"
    },
    {
      id: "3",
      name: "Bot Khuyến mãi Hè",
      badge: "Tạm dừng",
      status: "paused",
      createdAt: new Date("2026-06-01T08:00:00").getTime(),
      dateStr: "01/06/2026 - 08:00 AM",
      avatarColor: "#f3f4f6",
      iconColor: "#9CA3AF",
      initial: "K"
    }
  ]);

  const handleAddBot = (newBotData: any) => {
    const newBot = {
      id: newBotData.id,
      name: newBotData.name,
      badge: newBotData.objective === "Tư vấn" ? "Đang tư vấn" : "Vừa khởi tạo",
      status: "active",
      createdAt: Date.now(),
      dateStr: new Date().toLocaleDateString("vi-VN") + " - " + new Date().toLocaleTimeString("vi-VN", {hour: '2-digit', minute:'2-digit'}),
      avatarColor: "#f0fdf4",
      iconColor: "#22c55e",
      initial: newBotData.name.charAt(0).toUpperCase()
    };
    
    setBots([newBot, ...bots]);
  };

  // Filter and Sort Logic
  const filteredBots = bots
    .filter(bot => bot.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(bot => filterBy === "all" ? true : bot.status === filterBy)
    .sort((a, b) => {
      if (sortBy === "newest") return b.createdAt - a.createdAt;
      if (sortBy === "oldest") return a.createdAt - b.createdAt;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topBanner}>
        Bạn đang sử dụng gói miễn phí
        <a href="#" className={styles.upgradeLink}>
          Nâng cấp ngay <ArrowUpRight size={14} />
        </a>
      </div>

      <div className={styles.headerRow}>
          <h1 className={styles.pageTitle}>
            <Bot size={32} /> Đào tạo Bot
          </h1>
          
          <div className={styles.headerActions}>
            <div className={styles.viewToggle}>
              <button 
                className={`${styles.toggleBtn} ${viewMode === "grid" ? styles.active : ""}`} 
                title="Grid View"
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                className={`${styles.toggleBtn} ${viewMode === "list" ? styles.active : ""}`} 
                title="List View"
                onClick={() => setViewMode("list")}
              >
                <List size={18} />
              </button>
            </div>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
              <Plus size={18} />
              Tạo Chatbot
            </button>
          </div>
        </div>

        <div className={styles.filterRow}>
          <div className={styles.searchWrapper}>
            <Search size={16} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Tìm kiếm bot theo tên" 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className={styles.dropdownWrapper}>
            <button 
              className={styles.filterBtn}
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              onBlur={() => setTimeout(() => setShowSortDropdown(false), 200)}
            >
              <ListFilter size={16} />
              {sortBy === "newest" ? "Mới nhất" : sortBy === "oldest" ? "Cũ nhất" : "Tên A-Z"}
            </button>
            {showSortDropdown && (
              <div className={styles.dropdownMenu}>
                <div className={`${styles.dropdownItem} ${sortBy === "newest" ? styles.dropdownActive : ""}`} onClick={() => setSortBy("newest")}>Mới nhất</div>
                <div className={`${styles.dropdownItem} ${sortBy === "oldest" ? styles.dropdownActive : ""}`} onClick={() => setSortBy("oldest")}>Cũ nhất</div>
                <div className={`${styles.dropdownItem} ${sortBy === "name" ? styles.dropdownActive : ""}`} onClick={() => setSortBy("name")}>Tên A-Z</div>
              </div>
            )}
          </div>
          
          <div className={styles.dropdownWrapper}>
            <button 
              className={styles.filterBtn}
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              onBlur={() => setTimeout(() => setShowFilterDropdown(false), 200)}
            >
              {filterBy === "all" ? "Tất cả phân loại" : filterBy === "active" ? "Đang hoạt động" : "Tạm dừng"}
              <ChevronDown size={16} />
            </button>
            {showFilterDropdown && (
              <div className={styles.dropdownMenu}>
                <div className={`${styles.dropdownItem} ${filterBy === "all" ? styles.dropdownActive : ""}`} onClick={() => setFilterBy("all")}>Tất cả phân loại</div>
                <div className={`${styles.dropdownItem} ${filterBy === "active" ? styles.dropdownActive : ""}`} onClick={() => setFilterBy("active")}>Đang hoạt động</div>
                <div className={`${styles.dropdownItem} ${filterBy === "paused" ? styles.dropdownActive : ""}`} onClick={() => setFilterBy("paused")}>Tạm dừng</div>
              </div>
            )}
          </div>
        </div>

      <div className={`${styles.mainLayout} ${!showGuide ? styles.fullWidth : ""}`}>
        <div className={viewMode === "grid" ? styles.botGrid : styles.botList}>
          {filteredBots.length > 0 ? (
            filteredBots.map((bot) => (
              <Link href={`/bot/${bot.id}/overview`} key={bot.id} style={{textDecoration: 'none'}}>
                <div className={`${styles.botCard} ${viewMode === "list" ? styles.botCardList : ""}`}>
                  <div className={styles.botCardHeader}>
                    <div className={styles.botProfile}>
                      <div className={styles.botAvatar} style={{ backgroundColor: bot.avatarColor, color: bot.iconColor }}>
                        {bot.initial}
                      </div>
                      <span className={styles.botName}>{bot.name}</span>
                    </div>
                    <span className={`${styles.botBadge} ${bot.status === "paused" ? styles.badgePaused : ""}`}>
                      {bot.badge}
                    </span>
                  </div>
                  
                  <div className={styles.botCardFooter}>
                    <span className={styles.botDateLabel}>Ngày cập nhật</span>
                    <span className={styles.botDateValue}>{bot.dateStr}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className={styles.emptyState}>
              Không tìm thấy bot nào phù hợp.
            </div>
          )}
        </div>

        {showGuide && (
          <div className={styles.guideSection}>
            <div className={styles.guideHeader}>
              <span className={styles.guideTitle}>Hướng dẫn</span>
              <button className={styles.closeBtn} onClick={() => setShowGuide(false)} title="Đóng hướng dẫn">
                <X size={18} />
              </button>
            </div>
            
            <div className={styles.videoThumbWrapper}>
              <div className={styles.videoThumbText}>
                HƯỚNG DẪN DÙNG CHATBOT AI TỪ A-Z
              </div>
              <PlaySquare size={24} className={styles.playIcon} />
            </div>

            <div className={styles.guideText}>
              <div className={styles.guideSubTitle}>
                Hướng dẫn dùng AI Chatbot và cách đào tạo kịch bản
              </div>
              <div className={styles.guideDesc}>
                Cách khởi tạo AI Chatbot cho doanh nghiệp của bạn từ A đến Z, xem ngay tại đây!
              </div>
            </div>
          </div>
        )}
      </div>

      <CreateBotModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddBot} 
      />
    </div>
  );
}
