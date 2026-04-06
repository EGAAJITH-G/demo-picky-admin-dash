"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const BlogOverview = () => {
    const stats = [
        { label: 'Total Posts', value: '1,245', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Published', value: '1,200', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
        { label: 'Views (30d)', value: '8.4k', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
        { label: 'New Comments', value: '+12', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>, color: '#FEE2E2', textColor: '#991B1B' },
    ];

    const topPosts = [
        { id: 1, title: 'Best Red Wines 2025', views: '2.5k', date: 'Oct 15, 2025' },
        { id: 2, title: 'Pairing Cheese & Wine', views: '1.2k', date: 'Sep 30, 2025' },
        { id: 3, title: 'Wine Cellar Care Tips', views: '850', date: 'Nov 2, 2025' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Blog Management</h1>
                    <p className={styles.hubSubtitle}>Create content and engage with your audience.</p>
                </div>
                <Link href="/blog-management/create-blog" className={styles.primaryBtn}>
                    Compose New Blog
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
                        <h3>Blog Traffic</h3>
                    </div>
                    {/* Traffic Visualization */}
                    <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <div style={{ padding: '2rem', border: '2px dashed #E2E8F0', borderRadius: '20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem' }}>📈</div>
                            <div style={{ fontWeight: '800', marginTop: '1rem' }}>+12% Traffic Increase</div>
                            <div style={{ color: '#64748B', fontSize: '0.8rem' }}>Compared to prev. 30 days</div>
                         </div>
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Top Performing Blogs</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Blog Post</th>
                                    <th>Views</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topPosts.map(post => (
                                    <tr key={post.id}>
                                        <td>
                                            <span style={{ fontWeight: '700' }}>{post.title}</span>
                                        </td>
                                        <td>{post.views}</td>
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

export default BlogOverview;
