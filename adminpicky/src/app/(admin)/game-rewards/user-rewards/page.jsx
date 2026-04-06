"use client";

import React, { useState } from 'react';
import styles from '../games.module.css';

const UserRewards = () => {
  const [userRewards] = useState([
    { id: 1, user: "Ajith", game: "Spin Wheel", reward: "10% OFF Storewide", date: "2026-04-05", status: "Claimed" },
    { id: 2, user: "Kumar", game: "Scratch Card", reward: "50 Points", date: "2026-04-06", status: "Pending" },
    { id: 3, user: "Priya", game: "Daily Login", reward: "$5 Cashback", date: "2026-04-06", status: "Claimed" },
    { id: 4, user: "Ravi", game: "Spin Wheel", reward: "Free Shipping", date: "2026-04-04", status: "Expired" },
    { id: 5, user: "Suresh", game: "Scratch Card", reward: "100 Points", date: "2026-04-05", status: "Claimed" },
    { id: 6, user: "Anita", game: "Weekend Spin", reward: "25% OFF Electronics", date: "2026-04-04", status: "Claimed" },
    { id: 7, user: "John", game: "Daily Login", reward: "10 Points", date: "2026-04-06", status: "Pending" },
    { id: 8, user: "Meera", game: "Scratch Card", reward: "$20 Wallet Credit", date: "2026-04-03", status: "Expired" },
    { id: 9, user: "Ajith", game: "Mystery Box", reward: "BOGO Offer", date: "2026-04-02", status: "Claimed" },
    { id: 10, user: "Karthik", game: "Spin Wheel", reward: "500 Mega Points", date: "2026-04-05", status: "Pending" }
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>User Rewards Log</h1>
          <p className={styles.subtitle}>Track what users have won across all gamified features.</p>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
           <h3 style={{fontSize: '1.2rem', color: 'var(--text-main)'}}>Latest Wins</h3>
           <input type="text" placeholder="Search by user..." className={styles.input} style={{width: '300px'}} />
        </div>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date Won</th>
              <th>User Name</th>
              <th>Game Played</th>
              <th>Reward Earned</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userRewards.map((row) => (
              <tr key={row.id}>
                <td>{row.date}</td>
                <td style={{fontWeight: 600}}>{row.user}</td>
                <td>
                  <span className={`${styles.badge} ${styles.inactive}`}>{row.game}</span>
                </td>
                <td style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>{row.reward}</td>
                <td>
                   <span style={{
                      padding: '0.3rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                      background: row.status === 'Claimed' ? '#dcfce7' : row.status === 'Pending' ? '#fef9c3' : '#fee2e2',
                      color: row.status === 'Claimed' ? '#166534' : row.status === 'Pending' ? '#854d0e' : '#dc2626'
                   }}>
                     {row.status}
                   </span>
                </td>
                <td>
                   <div className={styles.actionWrapper}>
                      <button className={styles.iconBtn} title="View Details">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default UserRewards;
