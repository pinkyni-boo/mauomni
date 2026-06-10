"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Bell, Globe, User, Zap } from "lucide-react";
import styles from "./Topbar.module.css";

export default function Topbar() {
  const [language, setLanguage] = useState<"VI" | "EN">("VI");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Tìm kiếm nhanh toàn hệ thống..." 
            className={styles.searchInput}
          />
        </div>
      </div>
      
      <div className={styles.right}>
        {/* Language Switcher */}
        <div className={styles.languageSwitcher}>
          <Globe size={18} className={styles.globeIcon} />
          <span 
            className={language === "VI" ? styles.langActive : styles.langInactive}
            onClick={() => setLanguage("VI")}
          >
            VI
          </span>
          <span className={styles.divider}>/</span>
          <span 
            className={language === "EN" ? styles.langActive : styles.langInactive}
            onClick={() => setLanguage("EN")}
          >
            EN
          </span>
        </div>

        {/* Notifications */}
        <div className={styles.dropdownWrapper}>
          <button 
            className={styles.iconButton}
            onClick={() => setShowNotifications(!showNotifications)}
            onBlur={() => setTimeout(() => setShowNotifications(false), 200)}
          >
            <Bell size={20} />
            <span className={styles.badge}>3</span>
          </button>
          
          {showNotifications && (
            <div className={styles.notificationDropdown}>
              <div className={styles.dropdownHeader}>Thông báo mới</div>
              <div className={styles.notificationItem}>
                <span className={styles.notifDot}></span>
                <p>Có 1 Lead mới từ Facebook.</p>
              </div>
              <div className={styles.notificationItem}>
                <span className={styles.notifDot}></span>
                <p>Bot "IELTS" vừa được cập nhật.</p>
              </div>
              <div className={styles.notificationItem}>
                <span className={styles.notifDot}></span>
                <p>Khách hàng yêu cầu hỗ trợ trực tiếp.</p>
              </div>
            </div>
          )}
        </div>

        {/* Upgrade Button */}
        <button 
          className={styles.upgradeBtn}
          onClick={() => alert("Chuyển hướng đến trang Nâng cấp gói!")}
        >
          <Zap size={16} />
          Nâng cấp gói
        </button>

        {/* Admin Profile */}
        <div className={styles.dropdownWrapper}>
          <div 
            className={styles.adminProfile}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            onBlur={() => setTimeout(() => setShowProfileMenu(false), 200)}
            tabIndex={0}
          >
            <div className={styles.avatar}>
              <User size={20} />
            </div>
            <div className={styles.adminInfo}>
              <span className={styles.adminName}>Admin User</span>
              <span className={styles.adminRole}>Quản trị viên</span>
            </div>
          </div>

          {showProfileMenu && (
            <div className={styles.profileDropdown}>
              <Link href="/settings/profile" className={styles.dropdownItem} onClick={() => setShowProfileMenu(false)}>Hồ sơ cá nhân</Link>
              <div className={styles.dropdownDivider}></div>
              <div className={styles.dropdownItemLogOut} onClick={() => { setShowProfileMenu(false); alert("Đăng xuất thành công!"); }}>Đăng xuất</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
