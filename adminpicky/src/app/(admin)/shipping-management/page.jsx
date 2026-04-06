"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const ShippingOverview = () => {
    const stats = [
        { label: 'Pending Shipments', value: '45', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
        { label: 'In Transit', value: '112', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h8zM9 21h.01M17 10h4m-4 4h4m-4-8h4m-9 4h.01M9 14h.01M9 6h.01"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Delivered (Today)', value: '88', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
        { label: 'Shipping Issues', value: '2', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>, color: '#FEE2E2', textColor: '#991B1B' },
    ];

    const shipments = [
        { id: 'SHIP001', destination: 'Chengalpattu, TN', carrier: 'Delhivery', status: 'In Transit' },
        { id: 'SHIP002', destination: 'Mumbai, MH', carrier: 'BlueDart', status: 'Delivered' },
        { id: 'SHIP003', destination: 'Bangalore, KA', carrier: 'Ecom Express', status: 'Pending' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Shipping Overview</h1>
                    <p className={styles.hubSubtitle}>Track and manage logistical operations.</p>
                </div>
                <Link href="/shipping-management/order-tracking-id" className={styles.primaryBtn}>
                    Enter Tracking ID
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
                        <h3>Carrier Performance</h3>
                        <Link href="/shipping-management/delivery-partners" className={styles.detailedLink}>Carrier Management</Link>
                    </div>
                    <div style={{ height: '300px', display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
                        {['Delhivery', 'BlueDart', 'Ecom Express'].map(carrier => (
                            <div key={carrier}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '800' }}>
                                    <span>{carrier}</span>
                                    <span>98.5% Success</span>
                                </div>
                                <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '5px' }}>
                                    <div style={{ width: '98%', height: '100%', background: '#10b981', borderRadius: '5px' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Live Tracking</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Carrier</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shipments.map(ship => (
                                    <tr key={ship.id}>
                                        <td style={{ fontWeight: '700' }}>{ship.id}</td>
                                        <td>{ship.carrier}</td>
                                        <td>
                                            <span className={styles.catBadge} style={{ 
                                                background: ship.status === 'Delivered' ? '#DCFCE7' : ship.status === 'In Transit' ? '#E0E7FF' : '#FEF3C7',
                                                color: ship.status === 'Delivered' ? '#166534' : ship.status === 'In Transit' ? '#4F46E5' : '#92400E'
                                            }}>
                                                {ship.status}
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

export default ShippingOverview;
