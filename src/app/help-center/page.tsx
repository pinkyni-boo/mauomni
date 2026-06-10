"use client";
import { Search, Book, MessageCircle, FileText, PlayCircle, ArrowRight } from "lucide-react";
import styles from "../campaigns/page.module.css";

export default function HelpCenterPage() {
  const categories = [
    { icon: <Book size={24} />, title: "Hướng dẫn bắt đầu", desc: "Từng bước cài đặt và làm quen với hệ thống Markee." },
    { icon: <MessageCircle size={24} />, title: "Kịch bản Bot & Live Chat", desc: "Cách cấu hình Bot tự động và tương tác đa kênh." },
    { icon: <FileText size={24} />, title: "Tài liệu API & Webhook", desc: "Dành cho nhà phát triển muốn tích hợp sâu." },
    { icon: <PlayCircle size={24} />, title: "Video hướng dẫn", desc: "Các video tutorial trực quan, dễ hiểu." },
  ];

  const faqs = [
    "Làm sao để kết nối Fanpage Facebook vào Markee?",
    "Giới hạn tin nhắn của gói Miễn phí là bao nhiêu?",
    "Cách phân quyền cho nhân viên Sale và CSKH?",
    "Làm sao để thay đổi kịch bản Bot tự động?",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', backgroundColor: 'var(--bg-gray)' }}>
          <div style={{ padding: '40px 32px', maxWidth: '1200px', margin: '0 auto', textAlign: 'left', width: '100%' }}>
          
            {/* Minimalist Hero Banner */}
            <div style={{ padding: '64px 0 80px 0', textAlign: 'center', marginBottom: '16px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                Xin chào, chúng tôi có thể giúp gì cho bạn?
              </h1>
              <p style={{ fontSize: '16px', color: 'var(--text-gray)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                Tìm kiếm bài viết, video hướng dẫn hoặc liên hệ trực tiếp với đội ngũ hỗ trợ của Markee.
              </p>
              
              <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}>
                <div style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-gray)' }}>
                  <Search size={24} />
                </div>
                <input 
                  type="text" 
                  placeholder="Tìm kiếm nhanh (VD: tích hợp zalo, tạo bot...)" 
                  style={{ width: '100%', padding: '20px 20px 20px 60px', fontSize: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', outline: 'none', boxShadow: '0 12px 24px rgba(0,0,0,0.04)', color: 'var(--text-dark)', backgroundColor: 'var(--bg-white)' }}
                />
                <button style={{ position: 'absolute', right: '8px', top: '8px', bottom: '8px', backgroundColor: 'var(--primary-red)', color: 'white', padding: '0 24px', borderRadius: '10px', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '15px' }}>
                  Tìm kiếm
                </button>
              </div>
            </div>
          
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--text-dark)' }}>Duyệt theo chủ đề</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {categories.map((cat, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-white)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary-red)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-dark)' }}>{cat.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>{cat.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* FAQ */}
            <div style={{ backgroundColor: 'var(--bg-white)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-dark)' }}>Câu hỏi thường gặp</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: idx === faqs.length - 1 ? 'none' : '1px solid var(--bg-gray)', cursor: 'pointer' }}>
                    <span style={{ fontSize: '15px', color: 'var(--text-dark)', fontWeight: 500 }}>{faq}</span>
                    <ArrowRight size={16} color="var(--text-gray)" />
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div style={{ backgroundColor: 'var(--primary-red-light)', padding: '32px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--bg-white)', color: 'var(--primary-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(223, 46, 56, 0.1)' }}>
                <MessageCircle size={32} />
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-dark)' }}>Vẫn chưa tìm thấy giải pháp?</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-gray)', marginBottom: '24px', maxWidth: '300px' }}>
                Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
              </p>
              <button style={{ backgroundColor: 'var(--primary-red)', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 600, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                Chat với CSKH ngay
              </button>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}
