"use client";

import { useState } from "react";
import { Flag, MessageSquare, Tag, Users, BarChart2, Edit3, MessageCircle, ChevronDown, Calendar, Search, Layout, UserCircle, Inbox, Star, Clock, Bot } from "lucide-react";
import styles from "./page.module.css";

const FacebookIcon = ({ size = 24, color = "#1877F2" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073C24 5.405 18.627 0 12 0C5.373 0 0 5.405 0 12.073C0 18.095 4.418 23.086 10.125 24V15.556H7.078V12.073H10.125V9.418C10.125 6.388 11.916 4.707 14.706 4.707C16.035 4.707 17.426 4.945 17.426 4.945V7.959H15.892C14.382 7.959 13.875 8.905 13.875 9.874V12.073H17.28L16.737 15.556H13.875V24C19.582 23.086 24 18.095 24 12.073Z" />
  </svg>
);

const EmptyBoxIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 32L14 24L28 16L42 24L28 32Z" fill="#D2E0F2"/>
    <path d="M28 32L14 24V38L28 46V32Z" fill="#B3CDEB"/>
    <path d="M28 32L42 24V38L28 46V32Z" fill="#8CAEDB"/>
    <path d="M28 24C28 24 33 11 43 16C53 21 38 35 28 24Z" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" fill="none"/>
    <path d="M40 13L45 10L42 16L40 13Z" fill="#3B82F6"/>
  </svg>
);

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("Tổng quan");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) setOpenDropdown(null);
    else setOpenDropdown(name);
  };

  const generateData = (title: string, base: number) => ({
    title,
    chart: [
      { label: '01/06', v1: base + 10, v2: base + 30, v3: base },
      { label: '02/06', v1: base + 20, v2: base + 40, v3: base + 10 },
      { label: '03/06', v1: base, v2: base + 10, v3: base - 10 },
      { label: '04/06', v1: base + 30, v2: base + 50, v3: base + 20 },
      { label: '05/06', v1: base + 25, v2: base + 45, v3: base + 15 },
      { label: '06/06', v1: base + 50, v2: base + 70, v3: base + 40 },
      { label: '07/06', v1: base + 45, v2: base + 60, v3: base + 35 },
    ],
    stats: { 
      total: (base * 35).toLocaleString(), 
      conv: (base * 20).toLocaleString(), 
      cmt: (base * 8).toLocaleString(), 
      msg: (base * 7).toLocaleString() 
    }
  });

  const dataByTab = {
    'Tổng quan': generateData('Thống kê Tổng quan', 50),
    'Trang': generateData('Thống kê về Trang', 40),
    'Tương tác': generateData('Thống kê Tương tác', 60),
    'Thẻ': generateData('Thống kê theo Thẻ (Tag)', 20),
    'Thẻ hiện tại': generateData('Thống kê Thẻ hiện tại', 25),
    'Trạng thái': generateData('Thống kê Trạng thái', 30),
    'Nhân viên': generateData('Thống kê Nhân viên', 45),
    'Hộp thư': generateData('Thống kê Hộp thư', 55),
    'Đội nhóm': generateData('Thống kê Đội nhóm', 35),
    'Đánh giá CSAT': generateData('Thống kê Đánh giá (CSAT)', 70),
    'SLA': generateData('Thống kê Cam kết (SLA)', 25),
    'Bot': generateData('Thống kê Bot', 80),
  };

  const currentData = dataByTab[activeTab as keyof typeof dataByTab] || dataByTab['Tổng quan'];

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={`${styles.sidebarItem} ${activeTab === 'Tổng quan' ? styles.active : ''}`} onClick={() => setActiveTab('Tổng quan')}>
          <Layout size={18} /> Tổng quan
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Trang' ? styles.active : ''}`} onClick={() => setActiveTab('Trang')}>
          <Flag size={18} /> Trang
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Tương tác' ? styles.active : ''}`} onClick={() => setActiveTab('Tương tác')}>
          <MessageSquare size={18} /> Tương tác
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Thẻ' ? styles.active : ''}`} onClick={() => setActiveTab('Thẻ')}>
          <Tag size={18} /> Thẻ
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Thẻ hiện tại' ? styles.active : ''}`} onClick={() => setActiveTab('Thẻ hiện tại')}>
          <Tag size={18} /> Thẻ hiện tại
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Trạng thái' ? styles.active : ''}`} onClick={() => setActiveTab('Trạng thái')}>
          <Users size={18} /> Trạng thái
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Nhân viên' ? styles.active : ''}`} onClick={() => setActiveTab('Nhân viên')}>
          <UserCircle size={18} /> Nhân viên
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Hộp thư' ? styles.active : ''}`} onClick={() => setActiveTab('Hộp thư')}>
          <Inbox size={18} /> Hộp thư
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Đội nhóm' ? styles.active : ''}`} onClick={() => setActiveTab('Đội nhóm')}>
          <Users size={18} /> Đội nhóm
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Đánh giá CSAT' ? styles.active : ''}`} onClick={() => setActiveTab('Đánh giá CSAT')}>
          <Star size={18} /> Đánh giá CSAT
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'SLA' ? styles.active : ''}`} onClick={() => setActiveTab('SLA')}>
          <Clock size={18} /> SLA
        </div>
        <div className={`${styles.sidebarItem} ${activeTab === 'Bot' ? styles.active : ''}`} onClick={() => setActiveTab('Bot')}>
          <Bot size={18} /> Bot
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <h1 className={styles.pageTitle}>Thống kê</h1>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            
            {/* Date Filter */}
            <div className={styles.filterContainer}>
              <button 
                className={`${styles.filterBtn} ${openDropdown === 'date' ? styles.active : ''}`}
                onClick={() => toggleDropdown('date')}
              >
                01/06/2026 - 10/06/2026
              </button>
              {openDropdown === 'date' && (
                <div className={styles.dropdownMenu} style={{ minWidth: '340px' }}>
                  <div className={styles.dateGrid}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Từ ngày</div>
                      <div style={{ position: 'relative' }}>
                        <input type="text" value="01/06/2026" readOnly className={styles.dateInput} />
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Đến ngày</div>
                      <div style={{ position: 'relative' }}>
                        <input type="text" value="10/06/2026" readOnly className={styles.dateInput} />
                      </div>
                    </div>
                  </div>
                  <button className={styles.primaryBtn}>Lọc</button>
                </div>
              )}
            </div>

            {/* Sale Filter */}
            <div className={styles.filterContainer}>
              <button 
                className={`${styles.filterBtn} ${openDropdown === 'sale' ? styles.active : ''}`}
                onClick={() => toggleDropdown('sale')}
              >
                Lọc theo sale <ChevronDown size={14} color="#9ca3af" />
              </button>
              {openDropdown === 'sale' && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.searchWrapper}>
                    <Search size={16} className={styles.searchIcon} />
                    <input type="text" placeholder="Tìm kiếm" className={styles.searchInput} />
                  </div>
                  <div className={styles.emptyState}>
                    <EmptyBoxIcon />
                    Không có dữ liệu Sale
                  </div>
                </div>
              )}
            </div>

            {/* Trang Filter */}
            <div className={styles.filterContainer}>
              <button 
                className={`${styles.filterBtn} ${openDropdown === 'trang' ? styles.active : ''}`}
                onClick={() => toggleDropdown('trang')}
              >
                Lọc theo trang <ChevronDown size={14} color="#9ca3af" />
              </button>
              {openDropdown === 'trang' && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.fbHeader}>
                    <FacebookIcon size={18} color="#1877F2" /> FACEBOOK <ChevronDown size={14} style={{marginLeft: 'auto', color: '#9ca3af'}} />
                  </div>
                  <div className={styles.searchWrapper}>
                    <Search size={16} className={styles.searchIcon} />
                    <input type="text" placeholder="Tìm kiếm" className={styles.searchInput} />
                  </div>
                  <div className={styles.emptyState}>
                    <EmptyBoxIcon />
                    Không có dữ liệu trang
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>{currentData.title}</h2>
          
          <div className={styles.chartContainer}>
            {currentData.chart.map((data, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', height: '100%' }}>
                <div className={styles.barGroup}>
                  <div className={`${styles.bar} ${styles.bar1}`} style={{ height: `${Math.min(data.v1, 100)}%` }}></div>
                  <div className={`${styles.bar} ${styles.bar2}`} style={{ height: `${Math.min(data.v2, 100)}%` }}></div>
                  <div className={`${styles.bar} ${styles.bar3}`} style={{ height: `${Math.min(data.v3, 100)}%` }}></div>
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: 500 }}>{data.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#d946ef' }}></div>
              Tổng tương tác chuyển đổi
            </div>
            <div className={styles.legendItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#4f46e5' }}></div>
              Khách hàng mới
            </div>
            <div className={styles.legendItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#22c55e' }}></div>
              Xin được số điện thoại
            </div>
          </div>
        </div>

        <div>
          <h2 className={styles.cardTitle} style={{ marginBottom: '16px' }}>Tương tác hệ thống</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard} style={{ backgroundColor: '#FDF0F1' }}>
              <div className={styles.statIconWrap} style={{ backgroundColor: '#DF2E38' }}>
                <BarChart2 size={24} color="white" />
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>{currentData.stats.total}</span>
                <span className={styles.statLabel}>Tổng</span>
              </div>
            </div>

            <div className={styles.statCard} style={{ backgroundColor: '#f0fdf4' }}>
              <div className={styles.statIconWrap} style={{ backgroundColor: '#22c55e' }}>
                <MessageSquare size={24} color="white" />
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>{currentData.stats.conv}</span>
                <span className={styles.statLabel}>Cuộc hội thoại</span>
              </div>
            </div>

            <div className={styles.statCard} style={{ backgroundColor: '#fdf2f8' }}>
              <div className={styles.statIconWrap} style={{ backgroundColor: '#db2777' }}>
                <Edit3 size={24} color="white" />
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>{currentData.stats.cmt}</span>
                <span className={styles.statLabel}>Bình luận</span>
              </div>
            </div>

            <div className={styles.statCard} style={{ backgroundColor: '#ecfeff' }}>
              <div className={styles.statIconWrap} style={{ backgroundColor: '#06b6d4' }}>
                <MessageCircle size={24} color="white" />
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>{currentData.stats.msg}</span>
                <span className={styles.statLabel}>Tin nhắn mới</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
