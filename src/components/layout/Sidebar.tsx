"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Bot, 
  MessageSquare, 
  Users, 
  Megaphone, 
  ShoppingCart, 
  BarChart2, 
  HelpCircle, 
  Settings,
  Database,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Activity,
  Zap,
  Workflow
} from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    "Cuộc trò chuyện": true
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-width', isCollapsed ? '80px' : '260px');
  }, [isCollapsed]);

  const navItems = [
    { name: "Đào tạo Bot", icon: <Bot size={20} />, href: "/" },
    { 
      name: "Hộp thư đến", 
      icon: <MessageSquare size={20} />, 
      href: "#",
      subItems: [
        { name: "Tất cả cuộc trò chuyện", href: "/conversations?tab=all" },
        { name: "Kênh", href: "/conversations?tab=channels" },
        { name: "Nhóm", href: "/conversations?tab=groups" },
        { name: "Tích hợp nền tảng", href: "/conversations?tab=integrations" }
      ]
    },
    { 
      name: "Liên hệ", 
      icon: <Users size={20} />, 
      href: "#",
      subItems: [
        { name: "Tất cả", href: "/contacts?tab=all" },
        { name: "Hoạt động", href: "/contacts?tab=active" }
      ]
    },
    { 
      name: "CRM", 
      icon: <Database size={20} />, 
      href: "#",
      subItems: [
        { name: "Quản lý khách/Học viên", href: "/crm/customers" },
        { name: "Form thông tin KH", href: "/crm/forms" }
      ]
    },
    { 
      name: "Tự động hóa", 
      icon: <Workflow size={20} />, 
      href: "#",
      subItems: [
        { name: "Trả lời Comment", href: "/automation/comments" },
        { name: "Nhắc nợ tự động", href: "/automation/reminders" },
        { name: "Gửi lịch/Ưu đãi", href: "/automation/schedules" },
        { name: "Quy trình (Flows)", href: "/automation/flows" }
      ]
    },
    { 
      name: "Chiến dịch", 
      icon: <Megaphone size={20} />, 
      href: "#",
      subItems: [
        { name: "Live Chat", href: "/campaigns/live-chat" },
        { name: "Tệp Khách hàng", href: "/campaigns/audiences" },
        { name: "Zalo ZBS", href: "/campaigns/zalo" },
        { name: "Facebook (FMM) 🔥", href: "/campaigns/facebook" },
        { name: "Email", href: "/campaigns/email" },
        { name: "SMS", href: "/campaigns/sms" }
      ]
    },
    { 
      name: "Đơn hàng", 
      icon: <ShoppingCart size={20} />, 
      href: "#",
      subItems: [
        { name: "Quản lý sản phẩm", href: "/orders/products" },
        { name: "Chốt đơn Livestream", href: "/orders/livestream" },
        { name: "In-chat Checkout", href: "/orders/checkout" },
        { name: "Cài đặt đơn hàng", href: "/orders/settings" }
      ]
    },
    { name: "Báo cáo", icon: <BarChart2 size={20} />, href: "/bao-cao" },
    { name: "Hạn mức sử dụng", icon: <Activity size={20} />, href: "/han-muc" },
    { name: "Nâng cấp dịch vụ", icon: <Zap size={20} />, href: "/nang-cap" },
  ];

  const bottomItems: any[] = [
    { name: "Trung tâm trợ giúp", icon: <HelpCircle size={20} />, href: "/help-center" },
    { 
      name: "Cài đặt", 
      icon: <Settings size={20} />, 
      href: "#",
      subItems: [
        { name: "Cài đặt chung", href: "/settings/general" },
        { name: "Thành viên & Quyền", href: "/settings/members" },
        { name: "Thanh toán & Gói", href: "/settings/billing" },
        { name: "Tích hợp", href: "/settings/integrations" },
        { name: "Cài đặt bảo mật", href: "/settings/security" }
      ]
    },
  ];

  const toggleSubMenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setExpandedMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      <button 
        className={styles.floatToggleBtn} 
        onClick={() => setIsCollapsed(!isCollapsed)}
        title={isCollapsed ? "Mở rộng" : "Thu gọn"}
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className={styles.header}>
        <img src="https://markeeai.com/logo.svg" alt="Markee Logo" className={styles.logo} />
        {!isCollapsed && <span className={styles.brandName}>Markee Chat</span>}
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const isExpanded = expandedMenus[item.name];
            
            return (
              <li key={index} className={styles.navItem} title={isCollapsed ? item.name : undefined}>
                <Link 
                  href={item.href} 
                  className={`${styles.navLink} ${isActive && !item.subItems ? styles.active : ""}`}
                  onClick={(e) => {
                    if (item.subItems) {
                      toggleSubMenu(item.name, e);
                    }
                  }}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  {!isCollapsed && <span className={styles.name}>{item.name}</span>}
                  
                  {!isCollapsed && item.subItems && (
                    <div className={styles.chevronBtn}>
                      <ChevronDown size={16} className={`${styles.chevron} ${isExpanded ? styles.expanded : ""}`} />
                    </div>
                  )}
                </Link>
                
                {item.subItems && isExpanded && !isCollapsed && (
                  <ul className={styles.subList}>
                    {item.subItems.map((sub, idx) => (
                      <li key={idx} className={styles.subItem}>
                        <Link href={sub.href} className={styles.subLink}>
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.footer}>
        <ul className={styles.navList}>
          {bottomItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const isExpanded = expandedMenus[item.name];
            
            return (
              <li key={index} className={styles.navItem} title={isCollapsed ? item.name : undefined}>
                <Link 
                  href={item.href} 
                  className={`${styles.navLink} ${isActive && !item.subItems ? styles.active : ""}`}
                  onClick={(e) => {
                    if (item.subItems) {
                      toggleSubMenu(item.name, e);
                    }
                  }}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  {!isCollapsed && <span className={styles.name}>{item.name}</span>}
                </Link>
                
                {item.subItems && isExpanded && (
                  <ul className={styles.popupMenu}>
                    {item.subItems.map((sub: any, idx: number) => (
                      <li key={idx} className={styles.subItem}>
                        <Link 
                          href={sub.href} 
                          className={styles.subLink}
                          onClick={() => setExpandedMenus(prev => ({ ...prev, [item.name]: false }))}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
