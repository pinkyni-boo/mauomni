"use client";
import React from "react";
import { Plus, Link as LinkIcon, Copy, Search, MoreVertical, CreditCard, ShoppingBag, ExternalLink } from "lucide-react";
import styles from "../page.module.css";

export default function CheckoutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>In-chat Checkout</h1>
          <button className={styles.primaryBtn}>
            <Plus size={16} /> Tạo Link Thanh Toán
          </button>
        </div>

        <div className={styles.actionBar}>
          <div className={styles.actionBarLeft}>
            <div className={styles.searchBox}>
              <Search size={16} color="var(--text-gray)" style={{ marginLeft: 16 }} />
              <input type="text" className={styles.searchInput} placeholder="Tìm kiếm link thanh toán..." />
            </div>
          </div>
          <div className={styles.actionBarRight}>
            <select className={styles.pageSelect} style={{ width: '150px', minWidth: 'auto' }}>
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Đang hoạt động</option>
              <option value="expired">Đã hết hạn</option>
            </select>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>TÊN LIÊN KẾT</th>
                <th>SẢN PHẨM</th>
                <th>TỔNG TIỀN</th>
                <th>TRẠNG THÁI</th>
                <th>LƯỢT NHẤP</th>
                <th>DOANH THU</th>
                <th>THAO TÁC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div style={{ fontWeight: 600 }}>Combo Dưỡng Da Mùa Hè</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LinkIcon size={10} /> https://pay.markee.com/c/combo-mua-he
                  </div>
                </td>
                <td>3 sản phẩm</td>
                <td style={{ fontWeight: 600 }}>1,250,000 đ</td>
                <td><span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#ecfdf5', color: '#10b981', fontSize: '12px', fontWeight: 600 }}>Hoạt động</span></td>
                <td>124</td>
                <td style={{ fontWeight: 600, color: 'var(--primary-red)' }}>12,500,000 đ</td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className={styles.iconBtn} title="Sao chép link"><Copy size={16} /></button>
                    <button className={styles.iconBtn} title="Mở trang"><ExternalLink size={16} /></button>
                    <button className={styles.iconBtn}><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ fontWeight: 600 }}>Khóa Học IELTS VIP</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LinkIcon size={10} /> https://pay.markee.com/c/ielts-vip
                  </div>
                </td>
                <td>1 sản phẩm</td>
                <td style={{ fontWeight: 600 }}>5,000,000 đ</td>
                <td><span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#ecfdf5', color: '#10b981', fontSize: '12px', fontWeight: 600 }}>Hoạt động</span></td>
                <td>58</td>
                <td style={{ fontWeight: 600, color: 'var(--primary-red)' }}>30,000,000 đ</td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className={styles.iconBtn} title="Sao chép link"><Copy size={16} /></button>
                    <button className={styles.iconBtn} title="Mở trang"><ExternalLink size={16} /></button>
                    <button className={styles.iconBtn}><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ fontWeight: 600 }}>Tai Nghe Bluetooth X1</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LinkIcon size={10} /> https://pay.markee.com/c/tai-nghe-x1
                  </div>
                </td>
                <td>1 sản phẩm</td>
                <td style={{ fontWeight: 600 }}>450,000 đ</td>
                <td><span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#f3f4f6', color: '#6b7280', fontSize: '12px', fontWeight: 600 }}>Hết hạn</span></td>
                <td>210</td>
                <td style={{ fontWeight: 600, color: 'var(--primary-red)' }}>4,500,000 đ</td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className={styles.iconBtn} title="Sao chép link" disabled style={{ opacity: 0.5 }}><Copy size={16} /></button>
                    <button className={styles.iconBtn} title="Mở trang" disabled style={{ opacity: 0.5 }}><ExternalLink size={16} /></button>
                    <button className={styles.iconBtn}><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
