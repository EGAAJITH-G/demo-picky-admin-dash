"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const GameRewardsOverview = () => {
    const stats = [
        { label: 'Active Players', value: '450', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Rewards Given', value: '128', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
        { label: 'Points Distributed', value: '25.5k', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
        { label: 'Engagement', value: '+12%', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>, color: '#FEE2E2', textColor: '#991B1B' },
    ];

    const topRewards = [
        { id: 1, name: 'Free Shipping', count: 45, date: 'Daily' },
        { id: 2, name: '₹500 Voucher', count: 12, date: 'Daily' },
        { id: 3, name: 'Exclusive Wine Access', count: 8, date: 'Weekly' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Game & Rewards</h1>
                    <p className={styles.hubSubtitle}>Gamification tools and customer loyalty management.</p>
                </div>
                <Link href="/game-rewards/game-management" className={styles.primaryBtn}>
                    Manage Games
                </Link>
            </div>

            <div className={styles.statGrid}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.statCard}>
                        <div className={styles.statIconBox} style={{ background: stat.color, color: stat.textColor }}>
                            <div className={styles.statIconInner}>{stat.icon}</div>
                        </div>
                        <div className={styles.statInfo}>
                            <label>{stat.label}</label>
                            <h2>{stat.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.middleHubGrid}>
                <div className={styles.chartWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Leaderboard Summary</h3>
                        <Link href="/game-rewards/leaderboard" className={styles.detailedLink}>View Full List</Link>
                    </div>
                    {/* Leaderboard Summary Visualization */}
                    <div style={{ height: '300px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            { name: 'Ajay Kumar', points: '12,500 pts', pos: <svg width="20" height="20" fill="#FFD700" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h3a1 1 0 011 1v3a4 4 0 01-4 4h-2a4 4 0 01-4-4V5a1 1 0 011-1h3V3a1 1 0 011-1zM5 5v3a3 3 0 003 3h1V5H5zm6 0v6h1a3 3 0 003-3V5h-4zM6 14a2 2 0 012-2h4a2 2 0 012 2v2H6v-2z"></path></svg> },
                            { name: 'Sonia Patel', points: '10,200 pts', pos: <svg width="20" height="20" fill="#C0C0C0" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h3a1 1 0 011 1v3a4 4 0 01-4 4h-2a4 4 0 01-4-4V5a1 1 0 011-1h3V3a1 1 0 011-1zM5 5v3a3 3 0 003 3h1V5H5zm6 0v6h1a3 3 0 003-3V5h-4zM6 14a2 2 0 012-2h4a2 2 0 012 2v2H6v-2z"></path></svg> },
                            { name: 'Liam Wilson', points: '9,800 pts', pos: <svg width="20" height="20" fill="#CD7F32" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h3a1 1 0 011 1v3a4 4 0 01-4 4h-2a4 4 0 01-4-4V5a1 1 0 011-1h3V3a1 1 0 011-1zM5 5v3a3 3 0 003 3h1V5H5zm6 0v6h1a3 3 0 003-3V5h-4zM6 14a2 2 0 012-2h4a2 2 0 012 2v2H6v-2z"></path></svg> },
                        ].map(player => (
                            <div key={player.name} style={{ display: 'flex', alignItems: 'center', background: '#F8FAFC', padding: '1rem', borderRadius: '15px' }}>
                                <span style={{ marginRight: '1rem', display: 'flex' }}>{player.pos}</span>
                                <span style={{ fontWeight: '800', flex: 1 }}>{player.name}</span>
                                <span style={{ color: 'var(--primary-color)', fontWeight: '800' }}>{player.points}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Recent Rewards</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Reward</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topRewards.map(reward => (
                                    <tr key={reward.id}>
                                        <td style={{ fontWeight: '700' }}>{reward.name}</td>
                                        <td>{reward.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameRewardsOverview;
