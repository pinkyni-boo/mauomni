"use client";

import { FileText, Users, MessageSquare, Layout, Image, Database, HardDrive } from "lucide-react";
import styles from "./page.module.css";

const CircleProgress = ({ value, max, color, label }: {value:number, max:number, color:string, label:string}) => {
  const percentage = max > 0 ? (value / max) * 100 : 0;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: '96px', height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="96" height="96" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="48" cy="48" r="38" stroke="#f3f4f6" strokeWidth="8" fill="none" />
        <circle 
          cx="48" cy="48" r="38" 
          stroke={color} 
          strokeWidth="8" 
          fill="none" 
          strokeDasharray={circumference} 
          strokeDashoffset={strokeDashoffset} 
          strokeLinecap="round" 
        />
      </svg>
      <div style={{ position: 'absolute', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#111827', lineHeight: '1' }}>{value}</div>
        <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>{label}</div>
      </div>
    </div>
  );
}

export default function UsagePage() {
  const markeeRed = "#DF2E38";
  const markeeLight = "#FDF0F1";

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Hạn mức sử dụng</h1>
      
      <div className={styles.grid}>
        
        {/* Tài liệu */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap} style={{ color: markeeRed, backgroundColor: markeeLight }}><FileText size={18} /></div>
            <div className={styles.cardTitle}>Tài liệu</div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tổng số tài liệu</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>3 tài liệu</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Giới hạn</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>100 tài liệu</span>
              </div>
            </div>
            <CircleProgress value={3} max={100} color={markeeRed} label="tài liệu" />
          </div>
        </div>

        {/* Thành viên */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap} style={{ color: markeeRed, backgroundColor: markeeLight }}><Users size={18} /></div>
            <div className={styles.cardTitle}>Thành viên</div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tổng số thành viên</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>1 thành viên</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Giới hạn</span>
                <span className={styles.infoValueRed}>1 thành viên</span>
              </div>
            </div>
            <CircleProgress value={1} max={1} color={markeeRed} label="thành viên" />
          </div>
        </div>

        {/* Tin nhắn */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap} style={{ color: markeeRed, backgroundColor: markeeLight }}><MessageSquare size={18} /></div>
            <div className={styles.cardTitle}>Tin nhắn</div>
            <div className={styles.resetText}>Ngày reset tiếp theo: 24/6/2026</div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tổng số tin nhắn</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>0 tin nhắn</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Giới hạn</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>2.000 tin nhắn</span>
              </div>
            </div>
            <CircleProgress value={0} max={2000} color={markeeRed} label="tin nhắn" />
          </div>
        </div>

        {/* Page */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap} style={{ color: markeeRed, backgroundColor: markeeLight }}><Layout size={18} /></div>
            <div className={styles.cardTitle}>Page</div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tổng số page</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>0 page</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Giới hạn</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>3 page</span>
              </div>
            </div>
            <CircleProgress value={0} max={3} color={markeeRed} label="page" />
          </div>
        </div>

        {/* Hình ảnh AI */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap} style={{ color: markeeRed, backgroundColor: markeeLight }}><Image size={18} /></div>
            <div className={styles.cardTitle}>Hình ảnh AI</div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tổng số hình ảnh</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>0 hình ảnh</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Giới hạn</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>2 hình ảnh</span>
              </div>
            </div>
            <CircleProgress value={0} max={2} color={markeeRed} label="hình ảnh" />
          </div>
        </div>

        {/* Khách hàng CRM */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap} style={{ color: markeeRed, backgroundColor: markeeLight }}><Database size={18} /></div>
            <div className={styles.cardTitle}>Khách hàng CRM</div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tổng số khách hàng</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>0 khách hàng</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Giới hạn</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>5.000 khách hàng</span>
              </div>
            </div>
            <CircleProgress value={0} max={5000} color={markeeRed} label="khách" />
          </div>
        </div>

        {/* Dung lượng CRM */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap} style={{ color: markeeRed, backgroundColor: markeeLight }}><HardDrive size={18} /></div>
            <div className={styles.cardTitle}>Dung lượng CRM</div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.infoColumn}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tổng dung lượng</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>0 GB</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Giới hạn</span>
                <span className={styles.infoValue} style={{color: markeeRed}}>0 GB</span>
              </div>
            </div>
            <CircleProgress value={0} max={0} color={markeeRed} label="GB" />
          </div>
        </div>

      </div>
    </div>
  );
}
