"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const ReportsOverview = () => {
    const stats = [
        { label: 'Today Sales', value: '₹25,800', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
        { label: 'Weekly Revenue', value: '₹1.8L', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Active Users', value: '+15.4%', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
        { label: 'Conversion', value: '3.2%', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>, color: '#FEE2E2', textColor: '#991B1B' },
    ];

    const reports = [
        { id: 1, name: 'Sales Report', date: 'Daily', format: 'PDF/CSV' },
        { id: 2, name: 'Monthly Revenue', date: 'Monthly', format: 'PDF' },
        { id: 3, name: 'Vendor Earnings', date: 'Weekly', format: 'CSV' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Reports & Analytics</h1>
                    <p className={styles.hubSubtitle}>In-depth business intelligence and sales performance.</p>
                </div>
                <Link href="/reports/sales-report" className={styles.primaryBtn}>
                    Generate Report
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
                        <h3>Revenue Trends</h3>
                        <Link href="/reports/monthly-revenue" className={styles.detailedLink}>View Details</Link>
                    </div>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <div style={{ padding: '2rem', border: '2px dashed #E2E8F0', borderRadius: '20px', textAlign: 'center' }}>
                            <div style={{ color: 'var(--primary-color)', margin: '0 auto 1rem', width: '50px', height: '50px' }}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            <div style={{ fontWeight: '800' }}>+12% Traffic Increase</div>
                            <div style={{ color: '#64748B', fontSize: '0.8rem' }}>Compared to prev. 30 days</div>
                         </div>
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Available Reports</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Report</th>
                                    <th>Frequency</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.map(report => (
                                    <tr key={report.id}>
                                        <td style={{ fontWeight: '700' }}>{report.name}</td>
                                        <td>{report.date}</td>
                                        <td>
                                            <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>🖨️</span>
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

export default ReportsOverview;
