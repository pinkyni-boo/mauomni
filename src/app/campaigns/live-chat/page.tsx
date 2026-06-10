"use client";
import Link from "next/link";
import { Plus, MessageCircle } from "lucide-react";
import styles from "../../page.module.css";

export default function LiveChatCampaignsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Live chat campaigns</h1>
            <div className={styles.subtitle}>Connect with your customers using proactive campaigns.</div>
          </div>
          <Link href="/campaigns/live-chat/create">
            <button className={styles.primaryBtn}>
              <Plus size={16} /> Create campaign
            </button>
          </Link>
        </div>
        
        <div className={styles.contentArea} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px', backgroundColor: 'var(--bg-white)', margin: '24px', borderRadius: '8px', border: '1px solid var(--border-color)', minHeight: '400px' }}>
          <MessageCircle size={48} style={{ color: 'var(--text-gray)', marginBottom: '16px', opacity: 0.5 }} />
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>No live chat campaigns</h2>
          <p style={{ color: 'var(--text-gray)', marginBottom: '24px', maxWidth: '400px' }}>Connect with your customers using proactive campaigns to get started.</p>
          <Link href="/campaigns/live-chat/create">
            <button className={styles.primaryBtn}>
              <Plus size={16} /> Create campaign
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
