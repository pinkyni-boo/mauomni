"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Filter, 
  Menu, 
  MessageSquare, 
  Users, 
  Hash, 
  MessageCircle, 
  ArrowRight,
  Hand,
  Send,
  Phone,
  Video,
  MoreVertical,
  Info,
  X,
  Mail,
  Smartphone,
  Tag,
  Globe,
  Package,
  Search,
  Plus
} from "lucide-react";
import styles from "./page.module.css";

const FacebookIcon = ({ size, color }: { size: number, color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

const InstagramIcon = ({ size, color }: { size: number, color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokSquareIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="black"/>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="white" transform="scale(0.55) translate(10, 8)"/>
  </svg>
);

function ConversationsContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const contactIdParam = searchParams.get("contactId");
  const [activeTab, setActiveTab] = useState(tabParam || "all");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [showCustomerInfo, setShowCustomerInfo] = useState(true);
  const [currentTags, setCurrentTags] = useState<string[]>([]);
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [activeIntegration, setActiveIntegration] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Filtering states
  const [filterChannel, setFilterChannel] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  
  const availableTags = ["VIP", "Khách thân thiết", "Cần hỗ trợ", "Khách hàng mới", "Tiềm năng"];

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    } else {
      setActiveTab("all");
    }
  }, [tabParam]);

  useEffect(() => {
    if (selectedChat) {
      setCurrentTags(selectedChat.tags || []);
    }
  }, [selectedChat]);

  const handleAddTag = (tag: string) => {
    if (!currentTags.includes(tag)) {
      setCurrentTags([...currentTags, tag]);
    }
    setShowTagDropdown(false);
  };

  const handleRemoveTag = (tag: string) => {
    setCurrentTags(currentTags.filter(t => t !== tag));
  };

  const getMockChats = () => {
    let chats = [];
    if (tabParam === "channels") {
      chats = [
        { id: 4, name: "Fanpage Facebook", initial: "F", time: "Vừa xong", message: "Inbox lấy báo giá nhé.", avatarColor: "#e0e7ff", iconColor: "#4f46e5", tags: ["Khách hàng mới"], channel: "facebook", status: "unread" },
        { id: 5, name: "Zalo OA", initial: "Z", time: "1 giờ trước", message: "Khách hàng từ Zalo cần hỗ trợ.", avatarColor: "#dbeafe", iconColor: "#2563eb", tags: ["Cần hỗ trợ"], channel: "zalo", status: "unreplied" }
      ];
    } else if (tabParam === "groups") {
      chats = [
        { id: 6, name: "Nhóm Hỗ Trợ Kỹ Thuật", initial: "H", time: "2 giờ trước", message: "Đã xử lý xong lỗi đăng nhập.", avatarColor: "#fce8e8", iconColor: "#dc2626", tags: ["VIP", "Cần hỗ trợ"], channel: "website", status: "resolved" },
        { id: 7, name: "Nhóm Sale & CSKH", initial: "S", time: "Hôm qua", message: "Lead mới từ chiến dịch tháng 6.", avatarColor: "#fef3c7", iconColor: "#d97706", tags: ["Tiềm năng"], channel: "facebook", status: "unread" }
      ];
    } else {
      chats = [
        { id: 1, name: "Nguyễn Kim Ngân", initial: "NN", time: "10:30 AM", message: "Dạ em muốn hỏi thêm về khóa học IELTS bên mình ạ.", avatarColor: "#eef2ff", iconColor: "#4f46e5", tags: ["VIP", "Khách thân thiết"], channel: "facebook", status: "unread" },
        { id: 2, name: "Trần Minh Trí", initial: "TT", time: "Hôm qua", message: "Giá khóa TOEIC bao nhiêu vậy shop?", avatarColor: "#ecfdf5", iconColor: "#10b981", tags: ["Tiềm năng"], channel: "website", status: "resolved" },
        { id: 3, name: "Lê Hoàng Yến", initial: "LY", time: "Hôm qua", message: "Cảm ơn tư vấn viên đã hỗ trợ nhiệt tình nha.", avatarColor: "#f9fafb", iconColor: "#6b7280", tags: ["Khách thân thiết", "Cần hỗ trợ"], channel: "zalo", status: "unreplied" }
      ];
    }

    if (filterChannel !== "all") {
      chats = chats.filter(c => c.channel === filterChannel);
    }
    if (filterStatus !== "all") {
      chats = chats.filter(c => c.status === filterStatus);
    }

    return chats;
  };

  const displayChats = getMockChats();

  useEffect(() => {
    if (contactIdParam) {
      const chat = displayChats.find((c: any) => c.id.toString() === contactIdParam);
      if (chat) {
        setSelectedChat(chat);
      }
    }
  }, [contactIdParam]);

  if (tabParam === "integrations") {
    return (
      <div className={styles.integrationsContainer}>
        <div className={styles.integrationsBanner}>
          Chúng tôi nên tích hợp nền tảng nào tiếp theo? <a href="#">Hãy đóng góp và chia sẻ ý kiến của bạn với chúng tôi.</a>
        </div>
        <div className={styles.integrationsBody}>
          <div className={styles.integrationsSidebar}>
            <button 
              className={`${styles.intgSidebarItem} ${activeIntegration === "all" ? styles.intgSidebarActive : ""}`}
              onClick={() => setActiveIntegration("all")}
            >
              <div className={styles.intgIconAll}><Menu size={16} color="white" /></div> Tất cả
            </button>
            <button 
              className={`${styles.intgSidebarItem} ${activeIntegration === "pending" ? styles.intgSidebarActive : ""}`}
              onClick={() => setActiveIntegration("pending")}
            >
              <div className={styles.intgIconPending}><Filter size={16} color="white" /></div> Chờ kích hoạt
            </button>
            <button 
              className={`${styles.intgSidebarItem} ${activeIntegration === "facebook" ? styles.intgSidebarActive : ""}`}
              onClick={() => setActiveIntegration("facebook")}
            >
              <FacebookIcon size={20} color="#1877F2" /> Facebook
            </button>
            <button 
              className={`${styles.intgSidebarItem} ${activeIntegration === "instagram" ? styles.intgSidebarActive : ""}`}
              onClick={() => setActiveIntegration("instagram")}
            >
              <InstagramIcon size={20} color="#E4405F" /> Instagram
            </button>
            <button 
              className={`${styles.intgSidebarItem} ${activeIntegration === "zalo" ? styles.intgSidebarActive : ""}`}
              onClick={() => setActiveIntegration("zalo")}
            >
              <MessageCircle size={20} color="#0068FF" /> Zalo
            </button>
            <button 
              className={`${styles.intgSidebarItem} ${activeIntegration === "lazada" ? styles.intgSidebarActive : ""}`}
              onClick={() => setActiveIntegration("lazada")}
            >
              <div style={{width: 20, height: 20, borderRadius: 4, background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 'bold'}}>Laz</div> Lazada
            </button>
            <button 
              className={`${styles.intgSidebarItem} ${activeIntegration === "tiktok" ? styles.intgSidebarActive : ""}`}
              onClick={() => setActiveIntegration("tiktok")}
            >
              <TikTokSquareIcon size={20} /> TikTok Business
            </button>
          </div>
          <div className={styles.integrationsMain}>
            <div className={styles.intgMainHeader}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Danh sách trang</h3>
            </div>
            <div className={styles.intgToolbar}>
              <div className={styles.intgSearch}>
                <Search size={16} color="var(--text-gray)" />
                <input type="text" placeholder="Tìm theo tên hoặc ID page..." className={styles.intgSearchInput} />
              </div>
              <div className={styles.intgActions}>
                <button className={styles.intgBtnOutline}>Chỉnh sửa</button>
                <button className={styles.intgBtnOutline}>Đồng bộ tin nhắn</button>
                <button className={styles.intgBtnOutline}>Hủy kích hoạt</button>
              </div>
            </div>
            
            <div className={styles.intgEmptyState}>
              <div className={styles.intgEmptyBox}>
                <Package size={48} color="#94a3b8" />
              </div>
              <p>Chưa có nền tảng nào đã kích hoạt</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <div className={styles.title}>Hộp thư đến</div>
            <div className={styles.actionBtns}>
              <div style={{ position: 'relative' }}>
                <button 
                  className={`${styles.iconBtn} ${(filterChannel !== "all" || filterStatus !== "all") ? styles.iconBtnActive : ""}`}
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                >
                  <Filter size={18} />
                </button>
                {showFilterDropdown && (
                  <div className={styles.dropdownPop} style={{ top: 'calc(100% + 4px)', right: 0, width: '200px', zIndex: 10 }}>
                    <div className={styles.dropdownSectionTitle}>Trạng thái</div>
                    <div 
                      className={`${styles.dropdownItem} ${filterStatus === "all" ? styles.dropdownItemActive : ""}`}
                      onClick={() => { setFilterStatus("all"); setShowFilterDropdown(false); }}
                    >Tất cả trạng thái</div>
                    <div 
                      className={`${styles.dropdownItem} ${filterStatus === "unread" ? styles.dropdownItemActive : ""}`}
                      onClick={() => { setFilterStatus("unread"); setShowFilterDropdown(false); }}
                    >Chưa đọc</div>
                    <div 
                      className={`${styles.dropdownItem} ${filterStatus === "resolved" ? styles.dropdownItemActive : ""}`}
                      onClick={() => { setFilterStatus("resolved"); setShowFilterDropdown(false); }}
                    >Đã giải quyết</div>
                    <div 
                      className={`${styles.dropdownItem} ${filterStatus === "unreplied" ? styles.dropdownItemActive : ""}`}
                      onClick={() => { setFilterStatus("unreplied"); setShowFilterDropdown(false); }}
                    >Chưa trả lời</div>
                    
                    <div className={styles.dropdownDivider}></div>
                    
                    <div className={styles.dropdownSectionTitle}>Kênh</div>
                    <div 
                      className={`${styles.dropdownItem} ${filterChannel === "all" ? styles.dropdownItemActive : ""}`}
                      onClick={() => { setFilterChannel("all"); setShowFilterDropdown(false); }}
                    >Tất cả các kênh</div>
                    <div 
                      className={`${styles.dropdownItem} ${filterChannel === "facebook" ? styles.dropdownItemActive : ""}`}
                      onClick={() => { setFilterChannel("facebook"); setShowFilterDropdown(false); }}
                    >Facebook</div>
                    <div 
                      className={`${styles.dropdownItem} ${filterChannel === "zalo" ? styles.dropdownItemActive : ""}`}
                      onClick={() => { setFilterChannel("zalo"); setShowFilterDropdown(false); }}
                    >Zalo</div>
                    <div 
                      className={`${styles.dropdownItem} ${filterChannel === "website" ? styles.dropdownItemActive : ""}`}
                      onClick={() => { setFilterChannel("website"); setShowFilterDropdown(false); }}
                    >Website</div>
                  </div>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <button 
                  className={styles.iconBtn}
                  onClick={() => setShowMenuDropdown(!showMenuDropdown)}
                  onBlur={() => setTimeout(() => setShowMenuDropdown(false), 200)}
                >
                  <Menu size={18} />
                </button>
                {showMenuDropdown && (
                  <div className={styles.dropdownPop}>
                    <div className={styles.dropdownItem}>Đánh dấu tất cả đã đọc</div>
                    <div className={styles.dropdownItem}>Tải lại danh sách</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === "me" ? styles.active : ""}`}
              onClick={() => setActiveTab("me")}
            >
              Của tôi <span className={styles.count}>3</span>
            </button>
            <button 
              className={`${styles.tab} ${activeTab === "unassigned" ? styles.active : ""}`}
              onClick={() => setActiveTab("unassigned")}
            >
              Chưa chỉ định <span className={styles.count}>0</span>
            </button>
            <button 
              className={`${styles.tab} ${activeTab === "all" ? styles.active : ""}`}
              onClick={() => setActiveTab("all")}
            >
              Tất cả <span className={styles.count}>3</span>
            </button>
          </div>
        </div>

        <div className={styles.chatList}>
          {activeTab === "unassigned" ? (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-gray)', fontSize: '14px' }}>
              Hiện không có cuộc trò chuyện nào đang diễn ra trong nhóm này.
            </div>
          ) : (
            displayChats.map(chat => (
              <div 
                key={chat.id} 
                className={`${styles.chatItem} ${selectedChat?.id === chat.id ? styles.chatItemActive : ""}`}
                onClick={() => setSelectedChat(chat)}
              >
                <div style={{ position: 'relative' }}>
                  <div className={styles.avatar} style={{ backgroundColor: chat.avatarColor, color: chat.iconColor }}>
                    {chat.initial}
                  </div>
                  <div className={`${styles.channelBadge} ${chat.channel === "facebook" ? styles.bgFacebook : chat.channel === "zalo" ? styles.bgZalo : styles.bgWebsite}`}>
                    {chat.channel === "facebook" && <FacebookIcon size={10} color="white" />}
                    {chat.channel === "zalo" && <MessageCircle size={10} color="white" />}
                    {chat.channel === "website" && <Globe size={10} color="white" />}
                  </div>
                </div>
                <div className={styles.chatInfo}>
                  <div className={styles.chatHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className={styles.senderName}>{chat.name}</span>
                      {chat.tags && chat.tags.length > 0 && (
                        <div className={styles.chatItemTags}>
                          <span className={styles.chatItemTagMini}>{chat.tags[0]}</span>
                          {chat.tags.length > 1 && <span className={styles.chatItemTagMini}>+{chat.tags.length - 1}</span>}
                        </div>
                      )}
                    </div>
                    <span className={styles.time}>{chat.time}</span>
                  </div>
                  <div className={styles.message}>{chat.message}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className={styles.rightPanel}>
        {selectedChat ? (
          <div className={styles.chatView}>
            {/* Chat Header */}
            <div className={styles.chatViewHeader}>
              <div className={styles.chatViewUserInfo}>
                <div className={styles.avatar} style={{ backgroundColor: selectedChat.avatarColor, color: selectedChat.iconColor }}>
                  {selectedChat.initial}
                </div>
                <div>
                  <div className={styles.chatViewName}>{selectedChat.name}</div>
                  <div className={styles.chatViewStatus}>Đang hoạt động</div>
                </div>
              </div>
              <div className={styles.chatViewActions}>
                <button className={styles.iconBtn}><Phone size={18} /></button>
                <button className={styles.iconBtn}><Video size={18} /></button>
                <button 
                  className={`${styles.iconBtn} ${showCustomerInfo ? styles.iconBtnActive : ""}`}
                  onClick={() => setShowCustomerInfo(!showCustomerInfo)}
                >
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>

            <div className={styles.chatMainBody}>
              {/* Chat Messages */}
              <div className={styles.chatMessagesWrapper}>
                <div className={styles.chatMessagesArea}>
                  <div className={styles.messageRow}>
                    <div className={styles.messageBubbleReceived}>
                      {selectedChat.message}
                    </div>
                    <div className={styles.messageTime}>{selectedChat.time}</div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className={styles.chatInputArea}>
                  <input 
                    type="text" 
                    placeholder="Nhập tin nhắn (Gõ '/' để dùng câu trả lời mẫu)..." 
                    className={styles.chatInput}
                  />
                  <button className={styles.sendBtn}>
                    <Send size={18} />
                  </button>
                </div>
              </div>

              {/* Customer Info Panel */}
              {showCustomerInfo && (
                <div className={styles.customerInfoPanel}>
                  <div className={styles.infoHeader}>
                    <h3 className={styles.infoTitle}>Thông tin khách hàng</h3>
                    <button className={styles.iconBtn} onClick={() => setShowCustomerInfo(false)}>
                      <X size={18} />
                    </button>
                  </div>
                  
                  <div className={styles.infoContent}>
                    <div className={styles.infoAvatarSection}>
                      <div className={styles.infoAvatar} style={{ backgroundColor: selectedChat.avatarColor, color: selectedChat.iconColor }}>
                        {selectedChat.initial}
                      </div>
                      <div className={styles.infoName}>{selectedChat.name}</div>
                      <div className={styles.infoStatus} style={{ marginBottom: '12px' }}>Đang trực tuyến</div>
                      <button 
                        className={styles.addTagBtn} 
                        style={{ padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'var(--primary-red)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                        onClick={() => setShowAddModal(true)}
                      >
                        <Plus size={14} /> Thêm vào danh bạ
                      </button>
                    </div>

                    <div className={styles.infoSection}>
                      <h4 className={styles.sectionTitle}>Liên hệ</h4>
                      <div className={styles.infoRow}>
                        <Mail size={16} className={styles.infoIcon} />
                        <span>khachhang@example.com</span>
                      </div>
                      <div className={styles.infoRow}>
                        <Smartphone size={16} className={styles.infoIcon} />
                        <span>+84 901 234 567</span>
                      </div>
                    </div>

                    <div className={styles.infoSection}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <h4 className={styles.sectionTitle} style={{ marginBottom: 0 }}>Nhãn (Tags)</h4>
                        <div style={{ position: 'relative' }}>
                          <button 
                            className={styles.addTagBtn}
                            onClick={() => setShowTagDropdown(!showTagDropdown)}
                          >
                            + Thêm
                          </button>
                          {showTagDropdown && (
                            <div className={styles.dropdownPop} style={{ right: 0, top: 'calc(100% + 4px)', width: 'max-content' }}>
                              {availableTags.map(tag => (
                                <div 
                                  key={tag} 
                                  className={styles.dropdownItem}
                                  onClick={() => handleAddTag(tag)}
                                >
                                  {tag}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={styles.tagsContainer}>
                        {currentTags.map(tag => {
                          let tagClass = styles.tagVip;
                          if (tag === "Khách thân thiết") tagClass = styles.tagLoyal;
                          if (tag === "Cần hỗ trợ") tagClass = styles.tagSupport;
                          if (tag === "Khách hàng mới") tagClass = styles.tagLoyal;
                          if (tag === "Tiềm năng") tagClass = styles.tagVip;
                          
                          return (
                            <span key={tag} className={`${styles.tag} ${tagClass}`}>
                              {tag}
                              <button 
                                className={styles.removeTagBtn}
                                onClick={() => handleRemoveTag(tag)}
                              >
                                <X size={12} />
                              </button>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className={styles.infoSection}>
                      <h4 className={styles.sectionTitle}>Ghi chú</h4>
                      <textarea 
                        className={styles.noteInput} 
                        placeholder="Thêm ghi chú về khách hàng này..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.welcomeWrapper}>
            <div className={styles.welcomeHeader}>
              <h2 className={styles.welcomeTitle}>
                <Hand size={28} color="#eab308" /> Chào buổi chiều, Admin. Chào mừng bạn đến với Markee Chat.
              </h2>
              <p className={styles.welcomeDesc}>
                Cảm ơn bạn đã đăng ký. Chúng tôi muốn bạn tận dụng tối đa nền tảng này. Dưới đây là một vài điều bạn có thể làm trong Markee Chat để có trải nghiệm thú vị hơn.
              </p>
            </div>

            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.cardImgPlaceholder} style={{ backgroundColor: '#eff6ff' }}>
                  <MessageCircle size={48} color="#3B82F6" />
                </div>
                <h3 className={styles.cardTitle}>Tất cả các cuộc trò chuyện của bạn ở cùng một nơi.</h3>
                <p className={styles.cardDesc}>Xem tất cả các cuộc hội thoại từ khách hàng của bạn trong một bảng điều khiển duy nhất. Bạn có thể lọc các cuộc hội thoại theo kênh đến, nhãn và trạng thái.</p>
                <a href="#" className={styles.cardLink}>Nhấp vào đây để tới hộp thư đến <ArrowRight size={16} /></a>
              </div>
              
              <div className={styles.card}>
                <div className={styles.cardImgPlaceholder} style={{ backgroundColor: '#f0fdf4' }}>
                  <Users size={48} color="#22c55e" />
                </div>
                <h3 className={styles.cardTitle}>Mời các thành viên trong nhóm của bạn</h3>
                <p className={styles.cardDesc}>Vì bạn đang chuẩn bị nói chuyện với khách hàng, hãy nhờ các đồng đội hỗ trợ bằng cách thêm địa chỉ email của họ vào danh sách nhân viên.</p>
                <a href="#" className={styles.cardLink}>Nhấp vào đây để mời thành viên nhóm <ArrowRight size={16} /></a>
              </div>

              <div className={styles.card}>
                <div className={styles.cardImgPlaceholder} style={{ backgroundColor: '#fff7ed' }}>
                  <MessageSquare size={48} color="#f97316" />
                </div>
                <h3 className={styles.cardTitle}>Tạo các câu trả lời mẫu</h3>
                <p className={styles.cardDesc}>Các mẫu trả lời nhanh được soạn sẵn giúp bạn nhanh chóng phản hồi cuộc trò chuyện. Gõ phím '/' để chèn câu trả lời.</p>
                <a href="#" className={styles.cardLink}>Nhấp vào đây để tạo câu trả lời mẫu <ArrowRight size={16} /></a>
              </div>

              <div className={styles.card}>
                <div className={styles.cardImgPlaceholder} style={{ backgroundColor: '#fdf4ff' }}>
                  <Hash size={48} color="#d946ef" />
                </div>
                <h3 className={styles.cardTitle}>Sắp xếp các cuộc hội thoại bằng nhãn.</h3>
                <p className={styles.cardDesc}>Nhãn giúp bạn dễ dàng phân loại cuộc trò chuyện hơn. Hãy tạo một số nhãn như #hỗ-trợ, #thanh-toán để sử dụng.</p>
                <a href="#" className={styles.cardLink}>Nhấp vào đây để tạo thẻ <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        )}
      </div>

      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', width: '100%', maxWidth: '480px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700 }}>Thêm liên hệ mới</h3>
              <button className={styles.iconBtn} onClick={() => setShowAddModal(false)}><X size={18} /></button>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)' }}>Họ và tên</label>
                <input type="text" style={{ border: '1px solid var(--border-color)', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', outline: 'none' }} placeholder="Nhập họ và tên..." defaultValue={selectedChat?.name} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)' }}>Email</label>
                <input type="email" style={{ border: '1px solid var(--border-color)', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', outline: 'none' }} placeholder="example@email.com" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)' }}>Số điện thoại</label>
                <input type="tel" style={{ border: '1px solid var(--border-color)', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', outline: 'none' }} placeholder="+84 901 234 567" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)' }}>Công ty</label>
                <input type="text" style={{ border: '1px solid var(--border-color)', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', outline: 'none' }} placeholder="Tên công ty..." />
              </div>
            </div>
            <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button style={{ background: 'none', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', color: 'var(--text-dark)' }} onClick={() => setShowAddModal(false)}>Hủy</button>
              <button style={{ backgroundColor: 'var(--primary-red)', border: 'none', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }} onClick={() => setShowAddModal(false)}>Lưu liên hệ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ConversationsPage() {
  return (
    <Suspense fallback={<div style={{ padding: "24px" }}>Đang tải...</div>}>
      <ConversationsContent />
    </Suspense>
  );
}
