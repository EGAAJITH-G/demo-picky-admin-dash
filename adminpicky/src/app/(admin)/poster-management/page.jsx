"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const PosterOverview = () => {
    const stats = [
        { label: 'Active Posters', value: '8', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Scheduled', value: '4', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
        { label: 'Total Views', value: '45.2k', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
        { label: 'CTR', value: '4.8%', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>, color: '#FEE1FD', textColor: '#9C27B0' },
    ];

    const activePosters = [
        { id: 1, name: 'Summer Sale', views: '12k', status: 'Live' },
        { id: 2, name: 'New Arrivals', views: '8.5k', status: 'Live' },
        { id: 3, name: 'Flash Deal', views: '15k', status: 'Expiring Soon' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Poster Management</h1>
                    <p className={styles.hubSubtitle}>Manage promotional banners and UI assets.</p>
                </div>
                <Link href="/poster-management/create-poster" className={styles.primaryBtn}>
                    Create New Poster
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
                        <h3>Live Performance</h3>
                    </div>
                    <div style={{ height: '300px', display: 'flex', gap: '2rem', alignItems: 'flex-end', padding: '1rem' }}>
                        {[60, 80, 45, 90].map((h, i) => (
                            <div key={i} style={{ flex: 1, height: `${h}%`, background: '#6366F1', borderRadius: '12px', border: '5px solid white' }}></div>
                        ))}
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Active Banners</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Views</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activePosters.map(poster => (
                                    <tr key={poster.id}>
                                        <td style={{ fontWeight: '700' }}>{poster.name}</td>
                                        <td>{poster.views}</td>
                                        <td>
                                            <span className={styles.catBadge} style={{ 
                                                background: poster.status === 'Live' ? '#DCFCE7' : '#FEF3C7',
                                                color: poster.status === 'Live' ? '#166534' : '#92400E'
                                            }}>
                                                {poster.status}
                                            </span>
                                        </td>
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

export default PosterOverview;
