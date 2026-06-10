"use client";
import { use, useState } from "react";
import { Settings, Bell, Tags, Building, Users, CreditCard, Puzzle, Shield, Trash2, Plus, Check } from "lucide-react";
import styles from "../page.module.css";

// -------------------------------------------------------------
// PROFILE SETTINGS COMPONENT
// -------------------------------------------------------------
function ProfileSettings() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Thông tin cá nhân</h2>
            <div className={styles.sectionDesc}>Cập nhật ảnh đại diện và thông tin liên hệ của bạn</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--bg-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <Users size={48} color="var(--text-gray)" />
            </div>
            <button className={styles.outlineBtn} style={{ fontSize: '13px', padding: '6px 12px' }}>Tải ảnh lên</button>
          </div>
          
          <div style={{ flex: 1, maxWidth: '500px' }}>
            <div className={styles.formGroup}>
              <label>Họ và tên</label>
              <input type="text" className={styles.input} defaultValue="Admin User" />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" className={styles.input} defaultValue="admin@markee.com" disabled style={{ backgroundColor: '#f9fafb', color: 'var(--text-gray)' }} />
            </div>
            <div className={styles.formGroup}>
              <label>Số điện thoại</label>
              <input type="tel" className={styles.input} placeholder="Nhập số điện thoại của bạn..." />
            </div>
            <button className={styles.primaryBtn}>Lưu thay đổi</button>
          </div>
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// GENERAL SETTINGS COMPONENT
// -------------------------------------------------------------
function GeneralSettings() {
  const [notifActive, setNotifActive] = useState(true);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Cài đặt thông báo</h2>
            <div className={styles.sectionDesc}>Quản lý cách hệ thống thông báo cho bạn</div>
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.rowInfo}>
            <div className={styles.rowTitle}>Nhận thông báo: <span style={{ color: notifActive ? 'var(--primary-red)' : 'var(--text-gray)' }}>{notifActive ? 'Bật' : 'Tắt'}</span></div>
            <div className={styles.rowDesc}>Bạn sẽ được nhắc ngay khi có sự kiện mới</div>
          </div>
          <div className={`${styles.toggle} ${notifActive ? styles.active : ''}`} onClick={() => setNotifActive(!notifActive)}>
            <div className={styles.toggleHandle}></div>
          </div>
        </div>
        
        <div style={{ marginTop: '24px' }}>
          <div className={styles.sectionHeader} style={{ marginBottom: '16px' }}>
            <div>
              <div className={styles.rowTitle}>Cài đặt thời gian thông báo</div>
              <div className={styles.rowDesc}>Cho phép thiết lập tối đa 5 mốc thời gian để hệ thống gửi thông báo trước sự kiện</div>
            </div>
            <button className={styles.outlineBtn}><Plus size={16} /> Tạo mới</button>
          </div>
          
          <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
            {['0 phút', '2 giờ', '24 giờ'].map((time, idx) => (
              <div key={idx} className={styles.flexRow} style={{ padding: '16px', borderBottom: idx === 2 ? 'none' : '1px solid var(--border-color)', backgroundColor: '#fafafa' }}>
                <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-dark)' }}>{time}</div>
                <button className={styles.dangerBtn}><Trash2 size={16} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Quản lý nhãn (Tags)</h2>
            <div className={styles.sectionDesc}>Tạo và phân loại nhãn khách hàng của bạn</div>
          </div>
          <button className={styles.primaryBtn}><Plus size={16} /> Thêm nhãn mới</button>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.rowInfo}>
            <div className={styles.rowTitle} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span> VIP
            </div>
            <div className={styles.rowDesc}>Dành cho khách hàng thân thiết</div>
          </div>
          <button className={styles.outlineBtn}>Chỉnh sửa</button>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.rowInfo}>
            <div className={styles.rowTitle} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></span> Tiềm năng
            </div>
            <div className={styles.rowDesc}>Lead đang chăm sóc</div>
          </div>
          <button className={styles.outlineBtn}>Chỉnh sửa</button>
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// MEMBERS SETTINGS COMPONENT
// -------------------------------------------------------------
function MembersSettings() {
  const [selectedRole, setSelectedRole] = useState("sale");
  const [distMode, setDistMode] = useState("off");
  
  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Danh sách thành viên</h2>
            <div className={styles.sectionDesc}>Quản lý nhân viên và quyền truy cập vào hệ thống</div>
          </div>
          <button className={styles.primaryBtn}><Plus size={16} /> Thêm thành viên</button>
        </div>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Vai trò</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Thảo</td>
              <td>
                <select className={styles.input} style={{ width: 'auto', padding: '6px 10px', backgroundColor: '#f9fafb' }}>
                  <option value="owner">Chủ sở hữu</option>
                  <option value="admin">Quản trị viên</option>
                  <option value="sale">Sale</option>
                  <option value="cskh">CSKH</option>
                </select>
              </td>
              <td>0909561743</td>
              <td>ngthao16112004@gmail.com</td>
              <td><span className={`${styles.statusBadge} ${styles.active}`}>Hoạt động</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '24px' }}>
          <h2 className={styles.sectionTitle}>Quyền truy cập & Phân bổ</h2>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '8px' }}>Chọn role</label>
          <select 
            className={styles.input} 
            style={{ width: '200px' }}
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="admin">Quản trị viên</option>
            <option value="sale">Sale</option>
            <option value="cskh">CSKH</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
          {[
            { id: 'off', label: 'Tắt chế độ chia' },
            { id: 'page', label: 'Chia theo page' },
            { id: 'ratio', label: 'Chia theo tỉ lệ' },
            { id: 'ratio_day', label: 'Chia tỷ lệ theo ngày' }
          ].map(mode => (
            <label key={mode.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: 'var(--text-dark)' }}>
              <div style={{ 
                width: '16px', height: '16px', borderRadius: '50%', 
                border: distMode === mode.id ? '5px solid var(--primary-red)' : '1px solid var(--text-gray)',
                boxSizing: 'border-box'
              }}></div>
              <input 
                type="radio" 
                name="distMode" 
                value={mode.id}
                checked={distMode === mode.id}
                onChange={() => setDistMode(mode.id)}
                style={{ display: 'none' }}
              />
              {mode.label}
            </label>
          ))}
        </div>

        <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', marginBottom: '32px' }}>
          <table className={styles.table} style={{ marginTop: 0 }}>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
              </tr>
            </thead>
          </table>
          <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa' }}>
            <div style={{ color: 'var(--text-gray)', marginBottom: '16px' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Không có thành viên nào</div>
          </div>
        </div>

        <div className={styles.sectionHeader} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '24px' }}>
          <h2 className={styles.sectionTitle}>Quyền quản lý khách hàng</h2>
        </div>

        <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <Users size={24} />
          </div>
          <div style={{ fontSize: '14px', color: 'var(--text-dark)', marginBottom: '16px' }}>Chưa có nhân viên <strong>Sale</strong>, vui lòng thêm mới nhân viên</div>
          <button className={styles.primaryBtn}><Plus size={16} /> Thêm nhân viên</button>
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// BILLING SETTINGS COMPONENT
// -------------------------------------------------------------
function BillingSettings() {
  const [tab, setTab] = useState("history");
  
  return (
    <div className={styles.section}>
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${tab === 'history' ? styles.active : ''}`} onClick={() => setTab('history')}>Lịch sử mua gói</div>
        <div className={`${styles.tab} ${tab === 'wallet' ? styles.active : ''}`} onClick={() => setTab('wallet')}>Ví credit</div>
        <div className={`${styles.tab} ${tab === 'voucher' ? styles.active : ''}`} onClick={() => setTab('voucher')}>Nhập mã Voucher</div>
      </div>
      
      {tab === 'history' && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Chưa có giao dịch mua gói nào.</div>
        </div>
      )}
      
      {tab === 'wallet' && (
        <div>
          <div style={{ backgroundColor: '#fdf2f8', padding: '24px', borderRadius: '8px', border: '1px solid #fbcfe8', marginBottom: '24px' }}>
            <div style={{ fontSize: '14px', color: '#db2777', fontWeight: 600 }}>Số dư hiện tại</div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginTop: '8px' }}>0 Credit</div>
          </div>
          <button className={styles.primaryBtn}>Nạp thêm Credit</button>
        </div>
      )}
      
      {tab === 'voucher' && (
        <div style={{ maxWidth: '400px' }}>
          <div className={styles.formGroup}>
            <label>Mã Voucher / Khuyến mãi</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <input type="text" className={styles.input} placeholder="Nhập mã..." />
              <button className={styles.primaryBtn}>Áp dụng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// INTEGRATIONS SETTINGS COMPONENT
// -------------------------------------------------------------
function IntegrationsSettings() {
  const integrations = [
    { name: "Facebook Messenger", desc: "Đồng bộ tin nhắn và bình luận từ Fanpage", connected: true, color: "#1877f2" },
    { name: "Zalo OA", desc: "Gửi tin nhắn ZNS và phản hồi Zalo Official", connected: false, color: "#0068ff" },
    { name: "TikTok Shop", desc: "Quét comment livestream và quản lý đơn", connected: false, color: "#000000" },
    { name: "Webhook API", desc: "Kết nối dữ liệu với hệ thống nội bộ của bạn", connected: false, color: "#8b5cf6" },
  ];
  
  return (
    <div className={styles.grid}>
      {integrations.map((int, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon} style={{ color: int.color, backgroundColor: `${int.color}15` }}>
              <Puzzle size={20} />
            </div>
            <div className={styles.cardTitle}>{int.name}</div>
          </div>
          <div className={styles.cardDesc}>{int.desc}</div>
          <div style={{ marginTop: 'auto' }}>
            {int.connected ? (
              <button className={styles.outlineBtn} style={{ width: '100%', justifyContent: 'center', borderColor: '#10b981', color: '#10b981' }}>
                <Check size={16} /> Đã kết nối
              </button>
            ) : (
              <button className={styles.primaryBtn} style={{ width: '100%', justifyContent: 'center' }}>
                Kết nối
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// -------------------------------------------------------------
// SECURITY SETTINGS COMPONENT
// -------------------------------------------------------------
function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(false);
  
  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Đổi mật khẩu</h2>
            <div className={styles.sectionDesc}>Đảm bảo tài khoản của bạn luôn an toàn</div>
          </div>
        </div>
        <div style={{ maxWidth: '400px' }}>
          <div className={styles.formGroup}>
            <label>Mật khẩu hiện tại</label>
            <input type="password" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Mật khẩu mới</label>
            <input type="password" className={styles.input} />
          </div>
          <button className={styles.primaryBtn}>Cập nhật mật khẩu</button>
        </div>
      </div>
      
      <div className={styles.section}>
        <div className={styles.flexRow}>
          <div className={styles.rowInfo}>
            <div className={styles.rowTitle}>Xác thực 2 lớp (2FA)</div>
            <div className={styles.rowDesc}>Bảo vệ tài khoản bằng mã gửi về điện thoại hoặc ứng dụng Authenticator</div>
          </div>
          <div className={`${styles.toggle} ${twoFactor ? styles.active : ''}`} onClick={() => setTwoFactor(!twoFactor)}>
            <div className={styles.toggleHandle}></div>
          </div>
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// MAIN PAGE EXPORT
// -------------------------------------------------------------
const titles: Record<string, string> = {
  "profile": "Hồ sơ cá nhân",
  "general": "Cài đặt chung",
  "members": "Thành viên & Phân quyền",
  "billing": "Thanh toán & Gói",
  "integrations": "Tích hợp ứng dụng",
  "security": "Bảo mật & Đăng nhập",
};

export default function SettingsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const title = titles[slug] || "Đang phát triển";

  const pages: Record<string, any> = {
    "profile": <ProfileSettings />,
    "general": <GeneralSettings />,
    "members": <MembersSettings />,
    "billing": <BillingSettings />,
    "integrations": <IntegrationsSettings />,
    "security": <SecuritySettings />
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.subtitle}>Quản lý cấu hình cho {title.toLowerCase()}</div>
          </div>
        </div>
        
        <div className={styles.contentArea}>
          {pages[slug] || (
            <div style={{ textAlign: 'center', padding: '64px', color: 'var(--text-gray)' }}>
              <Settings size={48} style={{ opacity: 0.2, marginBottom: '16px' }} />
              <h3>Giao diện đang phát triển</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
