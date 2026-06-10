"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Search, 
  Filter, 
  ArrowDownUp, 
  MoreVertical, 
  Plus, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Upload,
  Download,
  X,
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import styles from "./page.module.css";

const mockContacts = [
  { 
    id: 1, 
    name: "Nguyễn Kim Ngân", 
    company: "Tập đoàn Lumora", 
    email: "ngan.nguyen@lumora.vn", 
    phone: "0901 234 567", 
    location: "Hồ Chí Minh, Việt Nam", 
    tags: ["VIP", "Khách thân thiết"], 
    avatarColor: "#eef2ff", 
    iconColor: "#4f46e5", 
    initial: "NN",
    status: "active"
  },
  { 
    id: 2, 
    name: "Trần Minh Trí", 
    company: "Công ty Designify", 
    email: "tri.tran@designify.vn", 
    phone: "0912 345 678", 
    location: "Hà Nội, Việt Nam", 
    tags: ["Tiềm năng"], 
    avatarColor: "#ecfdf5", 
    iconColor: "#10b981", 
    initial: "TT",
    status: "active"
  },
  { 
    id: 3, 
    name: "Lê Hoàng Yến", 
    company: "CodeHub VN", 
    email: "yen.le@codehub.vn", 
    phone: "0988 765 432", 
    location: "Đà Nẵng, Việt Nam", 
    tags: ["Khách thân thiết", "Cần hỗ trợ"], 
    avatarColor: "#f9fafb", 
    iconColor: "#6b7280", 
    initial: "LY",
    status: "inactive"
  }
];

function ContactsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const actionParam = searchParams.get("action");
  
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
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

  const handleMessageClick = () => {
    router.push(`/conversations?contactId=${selectedContact.id}`);
  };

  if (selectedContact) {
    return (
      <div className={styles.detailFullPage}>
        <div className={styles.detailFullHeader}>
          <button className={styles.backBtn} onClick={() => setSelectedContact(null)}>
            <ArrowLeft size={20} /> Quay lại
          </button>
          <div className={styles.detailFullActions}>
            <button className={styles.iconBtn}><MoreVertical size={18} /></button>
          </div>
        </div>

        <div className={styles.detailFullBody}>
          <div className={styles.detailAvatar} style={{ backgroundColor: selectedContact.avatarColor, color: selectedContact.iconColor }}>
            {selectedContact.initial}
          </div>
          
          <div className={styles.detailName}>{selectedContact.name}</div>
          
          <div className={styles.tagContainer} style={{ marginBottom: '24px' }}>
            {selectedContact.tags.map((tag: string) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          <button className={styles.messageBtn} onClick={handleMessageClick}>
            <MessageSquare size={16} /> Tin nhắn
          </button>

          <div className={styles.infoSection}>
            <div className={styles.sectionTitle}>Thông tin liên hệ</div>
            <div className={styles.infoRow}>
              <Mail size={16} className={styles.infoIcon} /> {selectedContact.email}
            </div>
            <div className={styles.infoRow}>
              <Phone size={16} className={styles.infoIcon} /> {selectedContact.phone}
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.sectionTitle}>Giới thiệu</div>
            <div className={styles.infoRow}>
              <Building2 size={16} className={styles.infoIcon} /> {selectedContact.company}
            </div>
            <div className={styles.infoRow}>
              <MapPin size={16} className={styles.infoIcon} /> {selectedContact.location}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Danh bạ liên hệ</h1>
          
          <div className={styles.headerActions}>
            <div className={styles.searchBar}>
              <Search size={16} color="var(--text-gray)" />
              <input 
                type="text" 
                placeholder="Tìm kiếm danh bạ..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <button 
                className={styles.iconBtn}
                onClick={() => {
                  setShowFilterDropdown(!showFilterDropdown);
                  setShowSortDropdown(false);
                  setShowMenuDropdown(false);
                }}
              >
                <Filter size={18} />
              </button>
              {showFilterDropdown && (
                <div className={styles.dropdownPop}>
                  <div className={styles.dropdownItem} onClick={() => { setFilterTag("all"); setShowFilterDropdown(false); }}>
                    Tất cả
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
                className={styles.iconBtn}
                onClick={() => {
                  setShowSortDropdown(!showSortDropdown);
                  setShowFilterDropdown(false);
                  setShowMenuDropdown(false);
                }}
              >
                <ArrowDownUp size={18} />
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

            <div style={{ position: 'relative' }}>
              <button 
                className={styles.iconBtn}
                onClick={() => {
                  setShowMenuDropdown(!showMenuDropdown);
                  setShowFilterDropdown(false);
                  setShowSortDropdown(false);
                }}
              >
                <MoreVertical size={18} />
              </button>
              {showMenuDropdown && (
                <div className={styles.dropdownPop} style={{ right: 0 }}>
                  <div className={styles.dropdownItem} onClick={() => setShowMenuDropdown(false)}>
                    <Upload size={16} /> Xuất liên hệ
                  </div>
                  <div className={styles.dropdownItem} onClick={() => setShowMenuDropdown(false)}>
                    <Download size={16} /> Nhập liên hệ
                  </div>
                </div>
              )}
            </div>

            <button className={styles.primaryBtn} onClick={() => setShowAddModal(true)}>
              <Plus size={16} /> Thêm liên hệ
            </button>
          </div>
        </div>

        {/* Contact List Area */}
        <div className={styles.contactList}>
          {displayContacts.length > 0 ? (
            displayContacts.map((contact) => (
              <div 
                key={contact.id} 
                className={styles.contactCard}
                onClick={() => router.push(`/contacts/${contact.id}`)}
              >
                <div className={styles.contactCardLeft}>
                  <div className={styles.avatar} style={{ backgroundColor: contact.avatarColor, color: contact.iconColor }}>
                    {contact.initial}
                  </div>
                  <div>
                    <div className={styles.contactName}>{contact.name}</div>
                    <div className={styles.contactMeta}>
                      <span className={styles.metaItem}><Building2 size={14} /> {contact.company}</span>
                      <span className={styles.metaItem}><Mail size={14} /> {contact.email}</span>
                      <span className={styles.metaItem}><Phone size={14} /> {contact.phone}</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.contactCardRight}>
                  <div className={styles.tagContainer}>
                    {contact.tags.map((tag: string) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <button className={styles.viewDetailBtn}>
                    Xem chi tiết <ChevronRight size={16} style={{ verticalAlign: 'middle' }} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyTitle}>Không tìm thấy liên hệ nào</div>
              <div className={styles.emptyDesc}>Bắt đầu thêm liên hệ mới bằng cách bấm vào nút bên dưới</div>
              <button className={styles.primaryBtn} onClick={() => setShowAddModal(true)}>
                <Plus size={16} /> Thêm liên hệ
              </button>
            </div>
          )}
        </div>
      </div>

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
                <label>Công ty</label>
                <input type="text" className={styles.inputField} placeholder="Tên công ty..." />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowAddModal(false)}>Hủy</button>
              <button className={styles.primaryBtn} onClick={() => setShowAddModal(false)}>Lưu liên hệ</button>
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
