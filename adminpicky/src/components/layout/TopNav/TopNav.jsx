"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './TopNav.module.css';

const TopNav = () => {
  const router = useRouter();
  
  // States for dropdowns
  const [activeDropdown, setActiveDropdown] = useState(null); // 'messages', 'notifications', 'profile', null
  const [searchQuery, setSearchQuery] = useState('');
  
  // Ref for clicking outside
  const topNavRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (topNavRef.current && !topNavRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchIndex = [
    { name: "Dashboard / Home", path: "/dashboard", icon: "📊" },
    { name: "System Settings", path: "/settings", icon: "⚙️" },
    { name: "Support Messages", path: "/messages", icon: "💬" },
    { name: "Admin Profile", path: "/profile", icon: "👤" },
    { name: "Vendor Management", path: "/vendors", icon: "🏢" },
    { name: "Product Catalog", path: "/products", icon: "📦" },
    { name: "Categories", path: "/categories", icon: "📂" },
    { name: "Customer Management", path: "/customers", icon: "👥" },
    { name: "Orders & Fulfillment", path: "/orders", icon: "📑" },
  ];

  const filteredResults = searchQuery.length > 0 
      ? searchIndex.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : [];

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLogout = () => {
    localStorage.removeItem('picky_auth');
    window.location.href = '/login';
  };

  const navigateTo = (path) => {
    setActiveDropdown(null);
    router.push(path);
  };

  return (
    <header className={styles.header} ref={topNavRef}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchBox}>
          <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input 
             type="text" 
             placeholder="Search platform..." 
             className={styles.input} 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.length > 0 && (
             <div className={styles.searchResults}>
                {filteredResults.length > 0 ? (
                   filteredResults.map((res, i) => (
                      <div key={i} className={styles.searchResultItem} onClick={() => { setSearchQuery(''); navigateTo(res.path); }}>
                         <span>{res.icon}</span>
                         <span>{res.name}</span>
                      </div>
                   ))
                ) : (
                   <div style={{padding: '1rem', color: '#94a3b8', fontSize: '0.85rem', textAlign: 'center'}}>No results found for "{searchQuery}"</div>
                )}
             </div>
          )}
        </div>
      </div>
      
      <div className={styles.rightSection}>

        {/* Messages Dropdown */}
        <div className={styles.dropdownWrapper}>
          <button className={styles.iconBtn} onClick={() => toggleDropdown('messages')}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className={styles.badge}>2</span>
          </button>
          
          <div className={`${styles.dropdownMenu} ${styles.messagesDropdown} ${activeDropdown === 'messages' ? styles.active : ''}`}>
             <div className={styles.dropdownHeader}>Messages</div>
             <div className={styles.dropdownItem} onClick={() => navigateTo('/messages')}>
                <div className={styles.itemIcon}>💬</div>
                <div className={styles.itemContent}>
                   <div className={styles.itemTitle}>Sarah (Support)</div>
                   <div className={styles.itemDesc}>Customer raised a ticket #TK-891...</div>
                </div>
                <div className={styles.itemTime}>2m ago</div>
             </div>
             <div className={styles.dropdownItem} onClick={() => navigateTo('/messages')}>
                <div className={styles.itemIcon}>📦</div>
                <div className={styles.itemContent}>
                   <div className={styles.itemTitle}>Vendor Inquiry</div>
                   <div className={styles.itemDesc}>When will the payments settle?</div>
                </div>
                <div className={styles.itemTime}>1h ago</div>
             </div>
             <div className={styles.dropdownDivider}></div>
             <div className={styles.dropdownItem} style={{justifyContent: 'center', color: 'var(--primary-color)'}} onClick={() => navigateTo('/messages')}>
                View All Messages
             </div>
          </div>
        </div>

        {/* Notifications Dropdown */}
        <div className={styles.dropdownWrapper}>
          <button className={styles.iconBtn} onClick={() => toggleDropdown('notifications')}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span className={styles.badge}>5</span>
          </button>

          <div className={`${styles.dropdownMenu} ${styles.notificationsDropdown} ${activeDropdown === 'notifications' ? styles.active : ''}`}>
             <div className={styles.dropdownHeader}>Notifications</div>
             <div className={styles.dropdownItem}>
                <div className={styles.itemIcon} style={{background: '#dcfce7', color: '#16a34a'}}>✓</div>
                <div className={styles.itemContent}>
                   <div className={styles.itemTitle}>System Update</div>
                   <div className={styles.itemDesc}>Pick Admin Dashboard v2.0 deployed.</div>
                </div>
                <div className={styles.itemTime}>Just now</div>
             </div>
             <div className={styles.dropdownItem}>
                <div className={styles.itemIcon} style={{background: '#fef3c7', color: '#d97706'}}>⚠️</div>
                <div className={styles.itemContent}>
                   <div className={styles.itemTitle}>High Server Load</div>
                   <div className={styles.itemDesc}>CPU usage exceeded 85%.</div>
                </div>
                <div className={styles.itemTime}>10m ago</div>
             </div>
             <div className={styles.dropdownItem}>
                <div className={styles.itemIcon} style={{background: '#e0e7ff', color: '#4f46e5'}}>👤</div>
                <div className={styles.itemContent}>
                   <div className={styles.itemTitle}>New Registration</div>
                   <div className={styles.itemDesc}>User john_doe joined the platform.</div>
                </div>
                <div className={styles.itemTime}>2h ago</div>
             </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className={styles.dropdownWrapper}>
          <div className={styles.profileBox} onClick={() => toggleDropdown('profile')}>
            <svg className={styles.profileIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          
          <div className={`${styles.dropdownMenu} ${styles.profileDropdown} ${activeDropdown === 'profile' ? styles.active : ''}`}>
             <div className={styles.dropdownHeader} style={{paddingBottom: '1rem'}}>
                <div style={{fontSize: '1rem', color: '#0f172a'}}>Ajith Kumar</div>
                <div style={{fontSize: '0.8rem', color: '#64748b', fontWeight: 'normal'}}>admin@ajithstore.com</div>
             </div>
             <div className={styles.dropdownItem} onClick={() => navigateTo('/profile')}>
                <svg width="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                My Profile
             </div>
             <div className={styles.dropdownItem} onClick={() => navigateTo('/settings')}>
                <svg width="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Account Settings
             </div>
             <div className={styles.dropdownDivider}></div>
             <div className={styles.dropdownItem} onClick={handleLogout} style={{color: '#E11D48'}}>
                <svg width="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Secure Sign Out
             </div>
          </div>
        </div>

        {/* Rightmost hard-logout button (Legacy) */}
        <button className={styles.logoutBtn} onClick={handleLogout} title="Secure Logout">
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default TopNav;
