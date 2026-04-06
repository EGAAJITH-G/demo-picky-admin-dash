"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const ReviewsOverview = () => {
    const stats = [
        { 
            label: 'Average Rating', 
            value: '4.8', 
            icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>, 
            color: '#FEF3C7', 
            textColor: '#92400E' 
        },
        { 
            label: 'Total Reviews', 
            value: '1,280', 
            icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>, 
            color: '#E0E7FF', 
            textColor: '#4F46E5' 
        },
        { 
            label: 'Pending Approval', 
            value: '45', 
            icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
            color: '#FEE2E2', 
            textColor: '#991B1B' 
        },
        { 
            label: 'Response Rate', 
            value: '98%', 
            icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>, 
            color: '#DCFCE7', 
            textColor: '#166534' 
        },
    ];

    const recentReviews = [
        { id: 1, user: 'John Doe', rating: 5, comment: 'Excellent product!', item: 'Premium Wine Spec', status: 'Approved' },
        { id: 2, user: 'Jane Smith', rating: 4, comment: 'Good quality, but slow shipping.', item: 'Red Label Reserva', status: 'Pending' },
        { id: 3, user: 'Michael Brown', rating: 5, comment: 'Perfect gift!', item: 'Wine Gift Box', status: 'Approved' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Reviews Overview</h1>
                    <p className={styles.hubSubtitle}>Monitor customer feedback and manage product ratings.</p>
                </div>
                <Link href="/reviews/approval--delete" className={styles.primaryBtn}>
                    Moderate Reviews
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
                        <h3>Rating Distribution</h3>
                        <Link href="/reviews/rating-system" className={styles.detailedLink}>View Analysis</Link>
                    </div>
                    <div style={{ height: '250px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                        {[5, 4, 3, 2, 1].map(star => {
                            const percent = star === 5 ? 85 : star === 4 ? 10 : 5;
                            return (
                                <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ minWidth: '40px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                        {star}
                                        <svg width="12" height="12" fill="#F59E0B" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </span>
                                    <div style={{ flex: 1, height: '10px', background: '#f1f5f9', borderRadius: '5px', overflow: 'hidden' }}>
                                        <div style={{ width: `${percent}%`, height: '100%', background: 'var(--primary-color)', borderRadius: '5px' }}></div>
                                    </div>
                                    <span style={{ minWidth: '40px', fontSize: '0.8rem', color: '#64748b' }}>{percent}%</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Recent Feedback</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Rating</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentReviews.map(review => (
                                    <tr key={review.id}>
                                        <td>
                                            <span style={{ fontWeight: '700', display: 'block' }}>{review.user}</span>
                                            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{review.item}</span>
                                        </td>
                                        <td style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            {review.rating} 
                                            <svg width="14" height="14" fill="#F59E0B" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        </td>
                                        <td>
                                            <span className={styles.catBadge} style={{ 
                                                background: review.status === 'Approved' ? '#DCFCE7' : '#FEF3C7',
                                                color: review.status === 'Approved' ? '#166534' : '#92400E'
                                            }}>
                                                {review.status}
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

export default ReviewsOverview;
