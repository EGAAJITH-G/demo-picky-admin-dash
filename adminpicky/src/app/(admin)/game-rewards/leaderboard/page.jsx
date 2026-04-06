"use client";

import React, { useState } from 'react';
import styles from '../games.module.css';

const Leaderboard = () => {
  const [leaderboard] = useState([
    { rank: 1, name: "Ajith", points: 5000, gamesPlayed: 45 },
    { rank: 2, name: "Kumar", points: 3200, gamesPlayed: 28 },
    { rank: 3, name: "Priya", points: 2850, gamesPlayed: 30 },
    { rank: 4, name: "Suresh", points: 1500, gamesPlayed: 15 },
    { rank: 5, name: "Ravi", points: 900, gamesPlayed: 8 },
    { rank: 6, name: "Anita", points: 850, gamesPlayed: 11 },
    { rank: 7, name: "John", points: 700, gamesPlayed: 12 },
    { rank: 8, name: "Meera", points: 620, gamesPlayed: 9 },
    { rank: 9, name: "Karthik", points: 400, gamesPlayed: 5 },
    { rank: 10, name: "Sanjay", points: 150, gamesPlayed: 2 }
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Global Leaderboard</h1>
          <p className={styles.subtitle}>Top engaged users accumulating points via games.</p>
        </div>
      </div>

      <div className={styles.contentWrapper} style={{marginBottom: '2rem'}}>
        <div className={styles.formSection} style={{background: 'linear-gradient(135deg, rgba(159, 18, 57, 0.05), rgba(255, 255, 255, 0.8))'}}>
           <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
             <svg fill="currentColor" viewBox="0 0 20 20" width="24" height="24" style={{color: '#eab308'}}>
               <path fillRule="evenodd" d="M10 2a.75.75 0 01.693.473l2.84 6.702 7.158.465a.75.75 0 01.428 1.306l-5.518 4.75 1.705 6.966a.75.75 0 01-1.127.818L10 16.52l-6.179 3.96a.75.75 0 01-1.127-.818l1.705-6.966-5.518-4.75a.75.75 0 01.428-1.306l7.158-.465 2.84-6.702A.75.75 0 0110 2z" clipRule="evenodd"></path>
             </svg>
             Leaderboard Ecosystem Active
           </h3>
           <p style={{fontSize: '0.95rem', color: 'var(--text-muted)'}}>
             The leaderboard ranks users dynamically based on wallet activity and game rewards. Firebase real-time integration processes these scores instantly across mobile and web clients.
           </p>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{textAlign: 'center'}}>Rank</th>
              <th>User Name</th>
              <th>Total Points</th>
              <th>Games Played</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user) => (
              <tr key={user.rank}>
                <td style={{textAlign: 'center'}}>
                   {user.rank === 1 ? <span style={{fontSize: '1.5rem'}}>🥇</span> : 
                    user.rank === 2 ? <span style={{fontSize: '1.5rem'}}>🥈</span> : 
                    user.rank === 3 ? <span style={{fontSize: '1.5rem'}}>🥉</span> : 
                    <span style={{fontWeight: 'bold', color: '#64748b'}}>#{user.rank}</span>}
                </td>
                <td style={{fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-main)'}}>{user.name}</td>
                <td>
                   <span style={{background: 'rgba(234, 179, 8, 0.1)', color: '#a16207', padding: '0.3rem 0.8rem', borderRadius: '20px', fontWeight: 'bold'}}>
                     {user.points.toLocaleString()} pts
                   </span>
                </td>
                <td style={{color: '#64748b'}}>{user.gamesPlayed} games</td>
                <td>
                   {user.rank <= 3 ? (
                      <span style={{color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.2rem'}}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        Up
                      </span>
                   ) : (
                      <span style={{color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.2rem'}}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                        Stable
                      </span>
                   )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Leaderboard;
