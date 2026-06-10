import { useState, FormEvent } from "react";
import { X, Upload, Link as LinkIcon } from "lucide-react";
import styles from "./CreateBotModal.module.css";

interface CreateBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (botData: any) => void;
}

export default function CreateBotModal({ isOpen, onClose, onSubmit }: CreateBotModalProps) {
  const [botName, setBotName] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [objective, setObjective] = useState("");
  const [prompt, setPrompt] = useState("");
  const [sourceType, setSourceType] = useState<"file" | "url">("file");

  if (!isOpen) return null;

  const handlePlatformChange = (val: string) => {
    if (platforms.includes(val)) {
      setPlatforms(platforms.filter(p => p !== val));
    } else {
      setPlatforms([...platforms, val]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!botName.trim()) return;

    onSubmit({
      name: botName,
      platforms,
      objective,
      prompt,
      id: Math.random().toString(36).substring(7)
    });
    
    // Reset form
    setBotName("");
    setPlatforms([]);
    setObjective("");
    setPrompt("");
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Tạo Chatbot mới</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          <form id="create-bot-form" onSubmit={handleSubmit}>
            {/* Tên Bot */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Tên Bot <span className={styles.required}>*</span></label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="VD: Bot Tư vấn Khóa học"
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
                required
              />
            </div>

            {/* Kênh tích hợp */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Nền tảng tích hợp</label>
              <div className={styles.checkboxGroup}>
                {["Facebook Messenger", "Zalo OA", "Website", "TikTok"].map((platform) => (
                  <label key={platform} className={styles.checkboxLabel}>
                    <input 
                      type="checkbox" 
                      checked={platforms.includes(platform)}
                      onChange={() => handlePlatformChange(platform)}
                      className={styles.checkbox}
                    />
                    {platform}
                  </label>
                ))}
              </div>
            </div>

            {/* Mục tiêu */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Mục tiêu của Bot</label>
              <select 
                className={styles.select}
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              >
                <option value="">-- Chọn mục tiêu --</option>
                <option value="Tư vấn">Trả lời tự động / Tư vấn học viên</option>
                <option value="Lead">Thu thập thông tin / Gom Lead</option>
                <option value="CSKH">Chăm sóc khách hàng cũ</option>
              </select>
            </div>

            {/* Vai trò / Tính cách */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Vai trò & Tính cách (Prompt cơ bản)</label>
              <textarea 
                className={styles.textarea} 
                placeholder="Ví dụ: Bạn là tư vấn viên khóa học tiếng Anh của Markee, luôn xưng hô thân thiện và nhiệt tình..."
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            {/* Nguồn dữ liệu */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Nguồn dữ liệu huấn luyện ban đầu (Tùy chọn)</label>
              <div className={styles.sourceToggle}>
                <button 
                  type="button" 
                  className={`${styles.sourceBtn} ${sourceType === "file" ? styles.activeSource : ""}`}
                  onClick={() => setSourceType("file")}
                >
                  <Upload size={16} /> Upload File
                </button>
                <button 
                  type="button" 
                  className={`${styles.sourceBtn} ${sourceType === "url" ? styles.activeSource : ""}`}
                  onClick={() => setSourceType("url")}
                >
                  <LinkIcon size={16} /> Dán Link Website
                </button>
              </div>

              {sourceType === "file" ? (
                <div className={styles.uploadArea}>
                  <Upload size={24} className={styles.uploadIcon} />
                  <p>Kéo thả hoặc click để chọn file</p>
                  <span className={styles.uploadHint}>Hỗ trợ .txt, .pdf, .docx (Max 10MB)</span>
                </div>
              ) : (
                <input 
                  type="url" 
                  className={styles.input} 
                  placeholder="https://example.com/docs"
                />
              )}
            </div>
          </form>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Hủy</button>
          <button type="submit" form="create-bot-form" className="btn-primary">
            Khởi tạo Bot
          </button>
        </div>
      </div>
    </div>
  );
}
