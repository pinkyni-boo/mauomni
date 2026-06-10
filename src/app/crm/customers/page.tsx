"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Search, 
  Filter, 
  ArrowDownUp, 
  EyeOff,
  RefreshCw,
  ChevronDown,
  X,
  Settings,
  SlidersHorizontal,
  Plus,
  Bot
} from "lucide-react";
import styles from "./page.module.css";

const mockContacts = [
  { 
    id: 1, 
    name: "Nguyễn Kim Ngân", 
    email: "ngan.nguyen@lumora.vn", 
    phone: "0901 234 567", 
    dob: "12/05/1992",
    gender: "Nữ",
    address: "Hồ Chí Minh, Việt Nam", 
    tags: ["VIP", "Khách thân thiết"], 
    status: "active"
  },
  { 
    id: 2, 
    name: "Trần Minh Trí", 
    email: "tri.tran@designify.vn", 
    phone: "0912 345 678", 
    dob: "25/08/1990",
    gender: "Nam",
    address: "Hà Nội, Việt Nam", 
    tags: ["Tiềm năng"], 
    status: "active"
  },
  { 
    id: 3, 
    name: "Lê Hoàng Yến", 
    email: "yen.le@codehub.vn", 
    phone: "0988 765 432", 
    dob: "03/11/1995",
    gender: "Nữ",
    address: "Đà Nẵng, Việt Nam", 
    tags: ["Khách thân thiết", "Cần hỗ trợ"], 
    status: "inactive"
  }
];

function ContactsContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const actionParam = searchParams.get("action");
  
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTag, setFilterTag] = useState("all");

  useEffect(() => {
    if (actionParam === "add") {
      setShowAddModal(true);
    }
  }, [actionParam]);

  const availableTags = ["VIP", "Khách thân thiết", "Cần hỗ trợ", "Tiềm năng"];

  // Filter logic
  let displayContacts = mockContacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (tabParam === "active") {
    displayContacts = displayContacts.filter(c => c.status === "active");
  }

  if (filterTag !== "all") {
    displayContacts = displayContacts.filter(c => c.tags.includes(filterTag));
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        
        {/* Header Title */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Quản lý khách hàng</h1>
            <span className={styles.subtitle}>Trang chính</span>
          </div>
          <button className={styles.headerRightBtn}>
            <Bot size={16} /> Tự động hoá
          </button>
        </div>

        {/* Action Bar */}
        <div className={styles.actionBar}>
          <button className={styles.primaryBtn} onClick={() => setShowAddModal(true)}>
            <Plus size={16} /> Tạo mới
          </button>
          
          <div className={styles.searchBar}>
            <Search size={16} color="var(--text-gray)" />
            <input 
              type="text" 
              placeholder="Tìm kiếm theo tên hoặc email" 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <button 
              className={styles.toolBtn}
              onClick={() => {
                setShowFilterDropdown(!showFilterDropdown);
                setShowSortDropdown(false);
                setShowMenuDropdown(false);
              }}
            >
              <Filter size={14} /> Lọc
            </button>
            {showFilterDropdown && (
              <div className={styles.dropdownPop}>
                <div className={styles.dropdownItem} onClick={() => { setFilterTag("all"); setShowFilterDropdown(false); }}>
                  Tất cả liên lạc
                </div>
                <div style={{ height: 1, backgroundColor: 'var(--border-color)', margin: '4px 0' }}></div>
                <div style={{ padding: '8px 16px 4px', fontSize: '11px', fontWeight: 700, color: 'var(--text-gray)' }}>LỌC THEO NHÃN</div>
                {availableTags.map(tag => (
                  <div 
                    key={tag} 
                    className={styles.dropdownItem}
                    style={{ fontWeight: filterTag === tag ? 600 : 400, color: filterTag === tag ? 'var(--primary-red)' : 'inherit' }}
                    onClick={() => { setFilterTag(tag); setShowFilterDropdown(false); }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ position: 'relative' }}>
            <button 
              className={styles.toolBtn}
              onClick={() => {
                setShowSortDropdown(!showSortDropdown);
                setShowFilterDropdown(false);
                setShowMenuDropdown(false);
              }}
            >
              <ArrowDownUp size={14} /> Sắp xếp
            </button>
            {showSortDropdown && (
              <div className={styles.dropdownPop}>
                <div className={styles.dropdownItem} onClick={() => setShowSortDropdown(false)}>Mới nhất trước</div>
                <div className={styles.dropdownItem} onClick={() => setShowSortDropdown(false)}>Cũ nhất trước</div>
                <div className={styles.dropdownItem} onClick={() => setShowSortDropdown(false)}>Tên: A-Z</div>
                <div className={styles.dropdownItem} onClick={() => setShowSortDropdown(false)}>Tên: Z-A</div>
              </div>
            )}
          </div>

          <button className={styles.toolBtn}>
            <EyeOff size={14} /> Ẩn/Hiện cột
          </button>
          
          <button className={styles.toolBtn}>
            <RefreshCw size={14} /> Đồng bộ
          </button>

          <div style={{ position: 'relative' }}>
            <button 
              className={styles.toolBtn}
              onClick={() => {
                setShowMenuDropdown(!showMenuDropdown);
                setShowFilterDropdown(false);
                setShowSortDropdown(false);
              }}
            >
              Thao tác <ChevronDown size={14} />
            </button>
            {showMenuDropdown && (
              <div className={styles.dropdownPop}>
                <div className={styles.dropdownItem} onClick={() => setShowMenuDropdown(false)}>Xuất liên hệ</div>
                <div className={styles.dropdownItem} onClick={() => setShowMenuDropdown(false)}>Nhập liên hệ</div>
              </div>
            )}
          </div>

          <button 
            className={`${styles.toolBtn} ${styles.toolBtnRed}`}
            onClick={() => {
              setSearchQuery("");
              setFilterTag("all");
              // Also close any open dropdowns just in case
              setShowFilterDropdown(false);
              setShowSortDropdown(false);
              setShowMenuDropdown(false);
            }}
          >
            <X size={14} /> Đặt lại
          </button>
        </div>

        {/* Table Content */}
        <div className={styles.tableContainer}>
          {displayContacts.length > 0 ? (
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th className={styles.checkboxCell}><input type="checkbox" /></th>
                  <th>Tên</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                  <th>Địa chỉ</th>
                  <th>Tags</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {displayContacts.map(contact => (
                  <tr key={contact.id}>
                    <td className={styles.checkboxCell}><input type="checkbox" /></td>
                    <td style={{ fontWeight: 600 }}>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td>{contact.dob}</td>
                    <td>{contact.gender}</td>
                    <td>{contact.address}</td>
                    <td>
                      <div className={styles.tagContainer}>
                        {contact.tags.map((tag: string) => {
                          let tagClass = styles.tagVip;
                          if (tag === "Khách thân thiết") tagClass = styles.tagLoyal;
                          if (tag === "Cần hỗ trợ") tagClass = styles.tagVip;
                          return <span key={tag} className={`${styles.tag} ${tagClass}`}>{tag}</span>;
                        })}
                      </div>
                    </td>
                    <td>
                      {contact.status === "active" ? (
                        <span className={styles.statusActive}>Hoạt động</span>
                      ) : (
                        <span className={styles.statusInactive}>Ngừng HĐ</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className={styles.emptyState}>
              <div style={{ fontSize: '15px', fontWeight: 600 }}>Không có đủ dữ liệu. Hãy + Tạo mới để bắt đầu thêm khách hàng.</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <button className={styles.footerBtn}>
              <Settings size={14} /> Cài đặt tag
            </button>
            <div style={{ width: 1, height: 16, backgroundColor: 'var(--border-color)' }}></div>
            <button className={styles.footerBtn}>
              <SlidersHorizontal size={14} /> Tùy chỉnh bảng
            </button>
          </div>
          
          <div className={styles.pagination}>
            <span>10 / trang <ChevronDown size={12} /></span>
          </div>
        </div>

      </div>

      {/* Modal Add Contact */}
      {showAddModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Thêm liên hệ mới</h3>
              <button className={styles.iconBtn} onClick={() => setShowAddModal(false)}><X size={18} /></button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label>Họ và tên</label>
                <input type="text" className={styles.inputField} placeholder="Nhập họ và tên..." />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" className={styles.inputField} placeholder="example@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Số điện thoại</label>
                <input type="tel" className={styles.inputField} placeholder="+84 901 234 567" />
              </div>
              <div className={styles.formGroup}>
                <label>Địa chỉ</label>
                <input type="text" className={styles.inputField} placeholder="Địa chỉ..." />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowAddModal(false)}>Hủy</button>
              <button className={styles.modalPrimaryBtn} onClick={() => setShowAddModal(false)}>Lưu liên hệ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContactsPage() {
  return (
    <Suspense fallback={<div style={{ padding: "24px" }}>Đang tải...</div>}>
      <ContactsContent />
    </Suspense>
  );
}
