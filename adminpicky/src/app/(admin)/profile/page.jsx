"use client";

import React from 'react';
import Link from 'next/link';
import styles from './profile.module.css';

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>My Profile</h1>
          <p className={styles.subtitle}>View your administrative access profile details.</p>
        </div>
        <Link href="/settings" className={styles.btnPrimary}>
          <svg width="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
          Edit Profile
        </Link>
      </div>

      <div className={styles.card}>
         <div className={styles.coverPhoto}>
            <img src="https://i.pravatar.cc/150?img=11" className={styles.profileAvatar} alt="Admin Avatar" />
         </div>

         <div className={styles.infoSection}>
            <div className={styles.nameBlock}>
               <h1>Ajith Kumar</h1>
               <p>Super Admin</p>
            </div>
            
            <div className={styles.statsBlock}>
               <div className={styles.statItem}>
                  <div className={styles.statValue}>142</div>
                  <div className={styles.statLabel}>Tickets Closed</div>
               </div>
               <div className={styles.statItem}>
                  <div className={styles.statValue}>V2.0</div>
                  <div className={styles.statLabel}>Platform</div>
               </div>
            </div>
         </div>

         <div className={styles.detailsGrid}>
            <div className={styles.detailBox}>
               <h3>Email Address</h3>
               <p>admin@ajithstore.com</p>
            </div>
            <div className={styles.detailBox}>
               <h3>Phone Number</h3>
               <p>+91 9876543210</p>
            </div>
            <div className={styles.detailBox}>
               <h3>Location</h3>
               <p>Chennai, Tamil Nadu, India</p>
            </div>
            <div className={styles.detailBox}>
               <h3>Timezone</h3>
               <p>Asia/Kolkata (IST)</p>
            </div>
         </div>

         <div className={styles.bioBox}>
            <h3>Admin Bio</h3>
            <p>Passionate e-commerce architect leading the digital storefront operations. Responsible for global platform health, user management, and seamless checkouts.</p>
         </div>
      </div>
    </div>
  );
}
