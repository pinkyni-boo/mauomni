"use client";
import { HelpCircle } from "lucide-react";
import styles from "./page.module.css";
import { useState } from "react";

export default function OverviewPage() {
  const [firstMessage, setFirstMessage] = useState(true);
  const [readImage, setReadImage] = useState(false);

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* 1. Thông tin cơ bản */}
      <div className={styles.sectionTitle}>1. Thông tin cơ bản</div>
      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Tên Bot</div>
        </div>
        <input type="text" className={styles.input} defaultValue="bot-demo" />
      </div>
      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Mô tả Bot</div>
        </div>
        <textarea className={styles.textarea} style={{minHeight: '60px'}} defaultValue="Trợ lý ảo tư vấn tự động cho cửa hàng thời trang."></textarea>
      </div>

      {/* 2. Cấu hình AI */}
      <div className={styles.sectionTitle} style={{marginTop: '40px'}}>2. Cấu hình AI</div>
      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Đóng vai (Prompt) <HelpCircle size={14} className={styles.helpIcon} /></div>
        </div>
        <textarea className={styles.textarea} style={{minHeight: '100px'}} defaultValue="Bạn là một nhân viên tư vấn nhiệt tình của thương hiệu Markee. Nhiệm vụ của bạn là giải đáp các thắc mắc về sản phẩm và chốt đơn một cách lịch sự, chuyên nghiệp."></textarea>
      </div>
      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Giọng điệu (Tone of Voice)</div>
        </div>
        <select className={styles.input} defaultValue="Chuyên nghiệp & Thân thiện">
          <option>Chuyên nghiệp & Thân thiện</option>
          <option>Trẻ trung & Năng động</option>
          <option>Trang trọng</option>
          <option>Hài hước</option>
        </select>
      </div>

      {/* 3. Cài đặt thông báo */}
      <div className={styles.sectionTitle} style={{marginTop: '40px'}}>3. Cài đặt thông báo</div>
      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Email nhận thông báo khi có khách yêu cầu gặp nhân viên (Human Handoff)</div>
        </div>
        <input type="email" className={styles.input} placeholder="admin@markee.com" />
      </div>

      {/* 4. Nội dung phản hồi */}
      <div className={styles.sectionTitle} style={{marginTop: '40px'}}>4. Nội dung phản hồi</div>

      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Tính năng trả lời tin nhắn đầu tiên</div>
          <label className={styles.switch}>
            <input type="checkbox" checked={firstMessage} onChange={(e) => setFirstMessage(e.target.checked)} />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Câu chào hỏi <HelpCircle size={14} className={styles.helpIcon} /></div>
        </div>
        <textarea className={styles.textarea} defaultValue="Xin chào bạn cần hỗ trợ gì"></textarea>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Tin nhắn tự động <HelpCircle size={14} className={styles.helpIcon} /></div>
        </div>
        <textarea className={styles.textarea} defaultValue="Dạ bạn còn cần mình hỗ trợ gì không"></textarea>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Tin nhắn reaction <HelpCircle size={14} className={styles.helpIcon} /></div>
        </div>
        <textarea className={styles.textarea} placeholder="Vui lòng nhập tin nhắn reaction"></textarea>
      </div>

      <div className={styles.fieldGroup} style={{ borderBottom: 'none' }}>
        <div className={styles.fieldHeader}>
          <div className={styles.fieldLabel}>Tính năng đọc hình ảnh</div>
          <label className={styles.switch}>
            <input type="checkbox" checked={readImage} onChange={(e) => setReadImage(e.target.checked)} />
            <span className={styles.slider}></span>
          </label>
        </div>
        <textarea className={styles.textarea} placeholder="Tin nhắn Bot trả lời khi người dùng gửi hình ảnh"></textarea>
      </div>
    </div>
  );
}
