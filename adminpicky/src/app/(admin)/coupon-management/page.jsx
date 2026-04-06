"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const CouponOverview = () => {
    const stats = [
        { label: 'Active Coupons', value: '12', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Total Used', value: '458', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
        { label: 'Expiring Soon', value: '3', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
        { label: 'Total Discounts', value: '₹12.5k', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#FEE2E2', textColor: '#991B1B' },
    ];

    const topCoupons = [
        { id: 1, name: 'WELCOME25', usage: 120, discount: '25%', status: 'Active' },
        { id: 2, name: 'OFFER500', usage: 85, discount: '₹500', status: 'Active' },
        { id: 3, name: 'NEWYEAR', usage: 215, discount: '15%', status: 'Expired' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Coupon Management</h1>
                    <p className={styles.hubSubtitle}>Create and manage promotional offers and discounts.</p>
                </div>
                <Link href="/coupon-management/create-coupon" className={styles.primaryBtn}>
                    Create Coupon
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
                        <h3>Usage Trends</h3>
                        <Link href="/coupon-management/usage-limit" className={styles.detailedLink}>Usage Report</Link>
                    </div>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '2rem 1rem' }}>
                        {[40, 65, 80, 55, 90, 70, 85].map((val, i) => (
                            <div key={i} style={{ width: '30px', height: `${val}%`, background: 'var(--primary-color)', borderRadius: '8px 8px 0 0', position: 'relative' }}>
                                <span style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.7rem', color: '#64748b', fontWeight: '700' }}>
                                    Day{i+1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Top Performing Coupons</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Coupon</th>
                                    <th>Usage</th>
                                    <th>Discount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topCoupons.map(coupon => (
                                    <tr key={coupon.id}>
                                        <td style={{ fontWeight: '800' }}>{coupon.name}</td>
                                        <td>{coupon.usage}</td>
                                        <td>
                                            <span style={{ fontWeight: '700', color: 'var(--primary-color)' }}>{coupon.discount}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Link href="/coupon-management/usage-limit" className={styles.detailedLink} style={{ display: 'block', marginTop: '1.5rem', textAlign: 'center' }}>
                        View All Coupun Performance
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CouponOverview;
