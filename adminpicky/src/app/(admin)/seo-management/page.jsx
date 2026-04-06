"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const SEOOverview = () => {
    const stats = [
        { label: 'SEO Score', value: '92/100', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
        { label: 'Indexed Pages', value: '458', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Missing Meta Tags', value: '12', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>, color: '#FEE2E2', textColor: '#991B1B' },
        { label: 'Search Traffic', value: '+8.2%', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
    ];

    const keywords = [
        { id: 1, term: 'Online Wine Shop', rank: 3, status: 'Stable' },
        { id: 2, term: 'Premium Red Wine', rank: 5, status: 'Rising' },
        { id: 3, term: 'Wine Tasting Gifts', rank: 12, status: 'Action Needed' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>SEO Management</h1>
                    <p className={styles.hubSubtitle}>Optimize your visibility and search engine performance.</p>
                </div>
                <Link href="/seo-management/sitemap-&-robots" className={styles.primaryBtn}>
                    Refresh Sitemap
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
                        <h3>Visibility Hub</h3>
                    </div>
                    {/* Simplified Graph */}
                    <div style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', borderRadius: '20px', padding: '2rem', textAlign: 'center' }}>
                         <div style={{ color: 'var(--primary-color)', margin: '0 auto 1rem', width: '60px', height: '60px' }}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                         </div>
                         <div style={{ fontWeight: '800', color: '#334155' }}>Global Health Check: Optmized</div>
                         <div style={{ color: '#64748B', maxWidth: '300px', margin: '0.5rem auto' }}>All major technical SEO parameters have been validated as functional.</div>
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>High Value Keywords</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Keyword</th>
                                    <th>Rank</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {keywords.map(kw => (
                                    <tr key={kw.id}>
                                        <td style={{ fontWeight: '700' }}>{kw.term}</td>
                                        <td>#{kw.rank}</td>
                                        <td>
                                            <span style={{ 
                                                fontSize: '0.75rem', 
                                                fontWeight: '800', 
                                                color: kw.status === 'Rising' ? '#10b981' : kw.status === 'Stable' ? '#6366f1' : '#f43f5e'
                                            }}>
                                                {kw.status}
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

export default SEOOverview;
