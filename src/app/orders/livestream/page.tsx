"use client";
import React, { useState } from "react";
import { PlayCircle, Video, Send, Plus, Users, ShoppingCart, Check } from "lucide-react";
import styles from "../page.module.css";

export default function LivestreamPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent} style={{ flexDirection: 'row' }}>
        
        {/* Left Side: Video & Stats */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', padding: '24px', borderRight: '1px solid var(--border-color)', backgroundColor: 'var(--bg-white)', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h1 className={styles.title}>Chốt Đơn Livestream</h1>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ padding: '6px 12px', backgroundColor: '#fee2e2', color: '#ef4444', borderRadius: '20px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#ef4444' }}></span> LÊN SÓNG TRỰC TIẾP
              </span>
            </div>
          </div>

          {/* Video Mockup */}
          <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#111827', borderRadius: '12px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <PlayCircle size={64} color="rgba(255,255,255,0.2)" />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: 'white', display: 'flex', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600 }}>
                <Users size={16} /> 1,234 Người xem
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600 }}>
                <ShoppingCart size={16} /> 45 Đơn hàng
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-gray)' }}>Bình luận (Cú pháp đúng)</div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--primary-red)' }}>156</div>
            </div>
            <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-gray)' }}>Số đơn thành công</div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#10b981' }}>45</div>
            </div>
            <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-gray)' }}>Doanh thu dự kiến</div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-dark)' }}>9.5M</div>
            </div>
          </div>
        </div>

        {/* Right Side: Comments and Fast Checkout */}
        <div style={{ flex: 1, minWidth: '400px', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-white)', fontWeight: 600 }}>
            Cú pháp bình luận: [MÃ SP] [SĐT]
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
            {/* Mock Comment 1 */}
            <div style={{ backgroundColor: 'var(--bg-white)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '12px', position: 'relative' }}>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>Nguyễn Yến <span style={{ fontWeight: 400, color: 'var(--text-gray)', fontSize: '12px' }}>- Vừa xong</span></div>
              <div style={{ fontSize: '14px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Lấy em mã <strong style={{ color: 'var(--primary-red)' }}>AO_THUN</strong> nha 0901234567
              </div>
              <button style={{ width: '100%', padding: '8px', backgroundColor: 'var(--primary-red)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Tạo Đơn Giao Hàng</button>
            </div>
            
            {/* Mock Comment 2 */}
            <div style={{ backgroundColor: 'var(--bg-white)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '12px', position: 'relative' }}>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>Tran Bao <span style={{ fontWeight: 400, color: 'var(--text-gray)', fontSize: '12px' }}>- 1 phút trước</span></div>
              <div style={{ fontSize: '14px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                SP01 0988112233
              </div>
              <button style={{ width: '100%', padding: '8px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 600, fontSize: '13px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                <Check size={14} /> Đã Lên Đơn
              </button>
            </div>
            
            {/* Mock Comment 3 */}
            <div style={{ backgroundColor: 'var(--bg-white)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '12px', position: 'relative', opacity: 0.7 }}>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>Minh Khoa <span style={{ fontWeight: 400, color: 'var(--text-gray)', fontSize: '12px' }}>- 3 phút trước</span></div>
              <div style={{ fontSize: '14px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Áo đẹp quá shop ơi
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-gray)' }}>*Không đúng cú pháp chốt đơn</div>
            </div>
          </div>

          <div style={{ padding: '16px', backgroundColor: 'var(--bg-white)', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '8px' }}>
             <input type="text" placeholder="Bình luận với tư cách Page..." style={{ flex: 1, border: '1px solid var(--border-color)', padding: '10px 12px', borderRadius: '20px', outline: 'none', fontSize: '14px' }} />
             <button style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-red)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
               <Send size={16} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
