"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const InventoryOverview = () => {
    const stats = [
        { label: 'Total SKU', value: '1,500', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Low Stock Items', value: '25', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
        { label: 'Out of Stock', value: '12', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>, color: '#FEE2E2', textColor: '#991B1B' },
        { label: 'Total Stock Value', value: '₹4.5L', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
    ];

    const lowStock = [
        { id: 1, name: 'Red Label Reserva', stock: 5, status: 'Low' },
        { id: 2, name: 'Premium Wine Spec', stock: 2, status: 'Critically Low' },
        { id: 3, name: 'Glass Set', stock: 0, status: 'Out of Stock' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Inventory Overview</h1>
                    <p className={styles.hubSubtitle}>Real-time stock monitoring and warehouse management.</p>
                </div>
                <Link href="/inventory-management/update-inventory" className={styles.primaryBtn}>
                    Restock Products
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
                        <h3>Stock Movements (7 Days)</h3>
                        <Link href="/inventory-management/new-stocks" className={styles.detailedLink}>View Logs</Link>
                    </div>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-color)' }}>+245 units added</div>
                            <div style={{ fontSize: '0.9rem', color: '#64748b' }}>-120 units sold</div>
                        </div>
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Alert Items</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lowStock.map(item => (
                                    <tr key={item.id}>
                                        <td style={{ fontWeight: '700' }}>{item.name}</td>
                                        <td style={{ color: item.stock === 0 ? '#ef4444' : '#f59e0b', fontWeight: '800' }}>
                                            {item.stock}
                                        </td>
                                        <td>
                                            <Link href="/inventory-management/update-inventory" className={styles.catBadge} style={{ textDecoration: 'none' }}>Restock</Link>
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

export default InventoryOverview;
