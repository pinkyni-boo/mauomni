"use client";

import { Cloud, Rocket, Building2, CheckCircle2 } from "lucide-react";
import styles from "./page.module.css";

export default function UpgradePage() {
  const plans = [
    {
      id: "basic",
      icon: <Cloud size={24} color="#8b5cf6" />,
      iconBg: "#f3e8ff",
      name: "Gói cơ bản",
      oldPrice: "936.000đ",
      price: "561.000đ",
      savings: "Tiết kiệm 4.500.000đ (-40%)",
      features: [
        "Sử dụng Preny Model 1.0",
        "Tích hợp đa nền tảng",
        "Chat đa kênh không giới hạn",
        "5.000 tin nhắn AI/tháng",
        "Giới hạn 5 page tích hợp",
        "Tối đa 5 nhân viên"
      ]
    },
    {
      id: "pro",
      icon: <Rocket size={24} color="#3b82f6" />,
      iconBg: "#eff6ff",
      name: "Gói nâng cao",
      oldPrice: "1.624.000đ",
      price: "974.000đ",
      savings: "Tiết kiệm 7.800.000đ (-40%)",
      features: [
        "Sử dụng Preny Model 2.0",
        "Tích hợp đa nền tảng",
        "Chat đa kênh không giới hạn",
        "15.000 tin nhắn AI/tháng",
        "Giới hạn 20 page tích hợp",
        "Tối đa 15 nhân viên"
      ]
    },
    {
      id: "enterprise",
      icon: <Building2 size={24} color="#14b8a6" />,
      iconBg: "#f0fdfa",
      name: "Gói doanh nghiệp",
      oldPrice: "2.499.000đ",
      price: "1.624.000đ",
      savings: "Tiết kiệm 10.500.000đ (-35%)",
      features: [
        "Sử dụng Preny Model 3.0",
        "Tích hợp đa nền tảng",
        "Chat đa kênh không giới hạn",
        "30.000 tin nhắn AI/tháng",
        "Giới hạn 100 page tích hợp",
        "Tối đa 30 nhân viên"
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nâng cấp <span className={styles.titleHighlight}>dịch vụ</span></h1>
        <div className={styles.subtitle}>Nâng cấp ngay để sử dụng các tính năng thông minh với hạn mức lớn hơn</div>
      </div>

      <div className={styles.pricingGrid}>
        {plans.map(plan => (
          <div key={plan.id} className={styles.pricingCard}>
            <div className={styles.iconWrap} style={{ backgroundColor: plan.iconBg }}>
              {plan.icon}
            </div>
            <div className={styles.cardTitle}>{plan.name}</div>
            
            <div className={styles.oldPrice}>{plan.oldPrice}</div>
            <div className={styles.price}>
              {plan.price} <span className={styles.priceMonth}>/ tháng</span>
            </div>
            <div className={styles.savings}>
              <span style={{ marginRight: '4px' }}>🎟️</span> {plan.savings}
            </div>

            <select className={styles.selectPeriod}>
              <option>12 tháng</option>
              <option>6 tháng</option>
              <option>1 tháng</option>
            </select>

            <button className={styles.buyBtn}>MUA GÓI</button>

            <div className={styles.featureList}>
              {plan.features.map((feat, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
