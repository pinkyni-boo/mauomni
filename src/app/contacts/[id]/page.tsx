"use client";
import Link from "next/link";
import { use, useState } from "react";
import { User, Activity, Plus, ChevronRight, Globe, Link as LinkIcon, MessageCircle, Hash, AtSign } from "lucide-react";
import styles from "./page.module.css";

const mockContacts: Record<string, any> = {
  "1": { name: "Nguyễn Kim Ngân", initial: "NN", email: "ngan.nguyen@lumora.vn", phone: "0901 234 567", company: "Tập đoàn Lumora" },
  "2": { name: "Trần Minh Trí", initial: "TT", email: "tri.tran@designify.vn", phone: "0912 345 678", company: "Công ty Designify" },
  "3": { name: "Lê Hoàng Yến", initial: "LY", email: "yen.le@codehub.vn", phone: "0988 765 432", company: "CodeHub VN" },
};

export default function ContactDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("history");

  const contact = mockContacts[id] || { name: "Nguyễn Hữu Thuật", initial: "NH", email: "", phone: "", company: "" };
  const nameParts = contact.name.split(" ");
  const lastName = nameParts.pop();
  const firstName = nameParts.join(" ");

  return (
    <div className={styles.container}>
      {/* Left Column */}
      <div className={styles.leftCol}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>
            <Link href="/contacts">Liên hệ</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#111827', fontWeight: 600 }}>{contact.name}</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.outlineBtn}>Chặn liên hệ</button>
            <Link href={`/conversations?contactId=${id}`} className={styles.primaryBtn}>Gửi tin nhắn</Link>
          </div>
        </div>

        <div className={styles.profileSection}>
          <div className={styles.avatarContainer}>{contact.initial}</div>
          <div className={styles.profileName}>{contact.name}</div>
          <div className={styles.profileMeta}>
            <User size={14} /> 934578419729916_25761386776802248
          </div>
          <div className={styles.profileMeta}>
            <Activity size={14} /> Đã tạo 6 tháng trước &bull; Hoạt động cuối: 6 tháng trước
          </div>
          
          <div className={styles.tagBtn}><Plus size={12} /> Thêm nhãn</div>

          <div className={styles.sectionTitle}>Chỉnh sửa liên hệ chi tiết</div>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <input type="text" className={styles.input} defaultValue={firstName} placeholder="Họ và tên đệm" />
            </div>
            <div className={styles.formGroup}>
              <input type="text" className={styles.input} defaultValue={lastName} placeholder="Tên" />
            </div>
            <div className={styles.formGroup}>
              <input type="email" className={styles.input} defaultValue={contact.email} placeholder="Nhập địa chỉ email" />
            </div>
            <div className={styles.formGroup}>
              <div className={styles.phoneInputGroup}>
                <select className={styles.phonePrefix} defaultValue="VN">
                  <option value="VN">VN</option>
                </select>
                <div style={{ padding: '10px 12px', border: '1px solid #e5e7eb', borderLeft: 'none', borderRight: 'none', backgroundColor: '#fafafa', fontSize: '14px', color: '#6b7280' }}>+84</div>
                <input type="tel" className={styles.phoneInput} defaultValue={contact.phone.replace(/^0/, '')} placeholder="Nhập số điện thoại" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <input type="text" className={styles.input} placeholder="Nhập tên thành phố" />
            </div>
            <div className={styles.formGroup}>
              <select className={styles.input} defaultValue="">
                <option value="" disabled>Chọn quốc gia</option>
                <option value="VN">Việt Nam</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <input type="text" className={styles.input} placeholder="Nhập tiểu sử" />
            </div>
            <div className={styles.formGroup}>
              <input type="text" className={styles.input} defaultValue={contact.company} placeholder="Nhập tên công ty" />
            </div>
          </div>

          <div className={styles.sectionTitle}>Chỉnh sửa mạng xã hội</div>
          <div className={styles.socialGrid}>
            <div className={styles.socialInputGroup}>
              <LinkIcon size={16} />
              <input type="text" className={styles.socialInput} placeholder="Thêm LinkedIn" />
            </div>
            <div className={styles.socialInputGroup}>
              <Globe size={16} />
              <input type="text" className={styles.socialInput} placeholder="Thêm Facebook" />
            </div>
            <div className={styles.socialInputGroup}>
              <Hash size={16} />
              <input type="text" className={styles.socialInput} placeholder="Thêm Instagram" />
            </div>
            <div className={styles.socialInputGroup}>
              <AtSign size={16} />
              <input type="text" className={styles.socialInput} placeholder="Thêm Twitter" />
            </div>
            <div className={styles.socialInputGroup}>
              <MessageCircle size={16} />
              <input type="text" className={styles.socialInput} placeholder="Thêm Github" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.rightCol}>
        <div className={styles.tabs}>
          <div className={`${styles.tab} ${activeTab === 'attributes' ? styles.active : ''}`} onClick={() => setActiveTab('attributes')}>Thuộc tính</div>
          <div className={`${styles.tab} ${activeTab === 'history' ? styles.active : ''}`} onClick={() => setActiveTab('history')}>Lịch sử Chat</div>
          <div className={`${styles.tab} ${activeTab === 'notes' ? styles.active : ''}`} onClick={() => setActiveTab('notes')}>Ghi chú</div>
          <div className={`${styles.tab} ${activeTab === 'merge' ? styles.active : ''}`} onClick={() => setActiveTab('merge')}>Gộp liên hệ</div>
        </div>
        
        <div className={styles.tabContent}>
          {activeTab === 'attributes' && (
            <div style={{ padding: '24px', color: 'var(--text-gray)' }}>
              Không có thuộc tính tùy chỉnh nào.
            </div>
          )}
          
          {activeTab === 'history' && (
            <div className={styles.chatHistory}>
              <div className={`${styles.chatMessage} ${styles.bot}`}>
                Chào {contact.name}, tôi có thể giúp gì cho bạn?
                <div className={styles.chatTime}>10:30 AM</div>
              </div>
              <div className={`${styles.chatMessage} ${styles.user}`}>
                Tôi muốn hỏi về giá của sản phẩm A
                <div className={styles.chatTime}>10:32 AM</div>
              </div>
              <div className={`${styles.chatMessage} ${styles.bot}`}>
                Dạ sản phẩm A đang có giá 500,000đ. Bạn cần thêm thông tin gì không ạ?
                <div className={styles.chatTime}>10:33 AM</div>
              </div>
              <div className={`${styles.chatMessage} ${styles.user}`}>
                Sản phẩm này có bảo hành bao lâu vậy?
                <div className={styles.chatTime}>10:45 AM</div>
              </div>
              <div className={`${styles.chatMessage} ${styles.bot}`}>
                Sản phẩm A được bảo hành chính hãng 12 tháng bạn nhé.
                <div className={styles.chatTime}>10:46 AM</div>
              </div>
            </div>
          )}
          
          {activeTab === 'notes' && (
            <div style={{ padding: '24px', color: 'var(--text-gray)' }}>
              Chưa có ghi chú nào cho liên hệ này.
            </div>
          )}
          
          {activeTab === 'merge' && (
            <div style={{ padding: '24px', color: 'var(--text-gray)' }}>
              Tính năng gộp liên hệ đang được phát triển...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
