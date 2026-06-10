import Link from "next/link";
import { 
  Bot, 
  MessageSquare, 
  Users, 
  Megaphone, 
  ShoppingCart, 
  BarChart2, 
  HelpCircle, 
  Settings 
} from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const navItems = [
    { name: "Đào tạo Bot", icon: <Bot size={20} />, href: "#", active: true },
    { name: "Tất cả cuộc trò chuyện", icon: <MessageSquare size={20} />, href: "#" },
    { name: "Quản trị thông tin học viên", icon: <Users size={20} />, href: "#" },
    { name: "Chiến dịch", icon: <Megaphone size={20} />, href: "#" },
    { name: "Quản lý đơn hàng", icon: <ShoppingCart size={20} />, href: "#" },
    { name: "Báo cáo", icon: <BarChart2 size={20} />, href: "#" },
  ];

  const bottomItems = [
    { name: "Trung tâm trợ giúp", icon: <HelpCircle size={20} />, href: "#" },
    { name: "Cài đặt", icon: <Settings size={20} />, href: "#" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <img src="https://markeeai.com/logo.svg" alt="Markee Logo" className={styles.logo} />
        <span className={styles.brandName}>Markee Chat</span>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link 
                href={item.href} 
                className={`${styles.navLink} ${item.active ? styles.active : ""}`}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.name}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <ul className={styles.navList}>
          {bottomItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link href={item.href} className={styles.navLink}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.name}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
