"use client";

import { Search, Settings, Plus, PackageOpen } from "lucide-react";
import styles from "../page.module.css";

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>Quản lý sản phẩm</h1>
        </div>

        <div className={styles.actionBar}>
          <div className={styles.actionBarLeft}>
            <div className={styles.searchBox}>
              <div style={{ padding: '0 12px', color: 'var(--text-gray)' }}>
                <Search size={16} />
              </div>
              <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm từ kho" 
                className={styles.searchInput}
              />
              <button className={styles.searchBtn}>
                <Search size={16} />
              </button>
            </div>
          </div>

          <div className={styles.actionBarRight}>
            <button className={styles.iconBtn}>
              <Settings size={18} />
            </button>
            <button className={styles.primaryBtn}>
              <Plus size={18} /> Thêm sản phẩm mới
            </button>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh</th>
                <th>Số mẫu mã</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state handles rendering when no data */}
            </tbody>
          </table>
          
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <PackageOpen size={48} />
            </div>
            <div style={{ fontSize: '14px' }}>Không tìm thấy sản phẩm</div>
          </div>
        </div>
      </div>
    </div>
  );
}
