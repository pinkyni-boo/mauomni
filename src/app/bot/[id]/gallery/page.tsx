"use client";
import { FolderPlus } from "lucide-react";

export default function GalleryPage() {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0'}}>
        
        {/* Placeholder Illustration */}
        <div style={{width: '240px', height: '160px', backgroundColor: '#FDF0F1', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px'}}>
          <FolderPlus size={64} color="#DF2E38" strokeWidth={1} />
        </div>

        <h3 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px'}}>Một nơi dành cho tất cả các tệp hình ảnh của bạn</h3>
        <p style={{color: '#6b7280', fontSize: '15px', marginBottom: '24px'}}>Nhấn nút "Tạo thư mục" để tạo thư mục chứa ảnh của bạn</p>

        <button style={{
          padding: '10px 24px', 
          backgroundColor: '#DF2E38', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          <FolderPlus size={18} /> Tạo thư mục
        </button>

      </div>
    </div>
  );
}
