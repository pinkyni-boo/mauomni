"use client";

import { useState } from "react";
import styles from "../page.module.css";

export default function OrderSettingsPage() {
  const [syncGoogleSheet, setSyncGoogleSheet] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>Cài đặt đơn hàng</h1>
          <div className={styles.headerSelect}>
            <span>Chọn nền tảng:</span>
            <select className={styles.pageSelect}>
              <option>Chọn trang</option>
              <option>Fanpage Chính</option>
              <option>Zalo OA Doanh nghiệp</option>
            </select>
          </div>
        </div>

        <div className={styles.settingsLayout}>
          <div className={styles.settingsSidebar}>
            <div className={styles.settingsNavItem}>
              Điều kiện tạo đơn
            </div>
          </div>

          <div className={styles.settingsContent}>
            <div className={styles.settingsCard}>
              <div className={styles.settingRow}>
                <div className={styles.settingInfo}>
                  <h4>Đồng bộ đơn hàng lên Google Sheet: {syncGoogleSheet ? "Bật" : "Tắt"}</h4>
                  <p>Khi Bật, các đơn hàng được tạo sẽ đồng bộ vào Google Sheet theo mẫu<br/>của ĐVVC, giúp người dùng nhập file đẩy đơn hàng loạt lên ĐVVC tương ứng</p>
                </div>
                <div 
                  className={`${styles.toggleSwitch} ${syncGoogleSheet ? styles.active : ""}`}
                  onClick={() => setSyncGoogleSheet(!syncGoogleSheet)}
                >
                  <div className={styles.toggleKnob}></div>
                </div>
              </div>

              <div className={styles.settingRow} style={{ alignItems: 'center' }}>
                <div className={styles.settingInfo}>
                  <h4>Điều kiện tạo đơn</h4>
                  <p>Các trường bắt buộc phải có khi tạo đơn hàng</p>
                </div>
                <div>
                  <input type="text" className={styles.settingInput} placeholder="Điều kiện" />
                </div>
              </div>

              <div className={styles.updateBtnContainer}>
                <button className={styles.primaryBtn}>Cập nhật</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
