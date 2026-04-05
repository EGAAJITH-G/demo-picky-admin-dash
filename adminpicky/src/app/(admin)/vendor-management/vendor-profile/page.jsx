"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const VendorProfile = () => {
    const [activeTab, setActiveTab] = useState('Products');

    const vendorData = {
        name: 'Alexander Pierce',
        email: 'alexander@pierce.com',
        business: 'Pierce Luxury Goods',
        role: 'Premium Vendor',
        joined: 'Sept 15, 2023',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
        stats: {
            products: 124,
            orders: 1850,
            earnings: '$45,200.00'
        }
    };

    const products = [
        { id: 1, name: 'Royal Leather Boots', price: '$120.00', stock: 45, status: 'Active' },
        { id: 2, name: 'Golden Silk Scarf', price: '$75.00', stock: 12, status: 'Low Stock' },
        { id: 3, name: 'Classic Silver Watch', price: '$250.00', stock: 8, status: 'Active' },
    ];

    const orders = [
        { id: '#ORD-9921', customer: 'Sarah Johnson', date: '2024-03-24', amount: '$150.00', status: 'Delivered' },
        { id: '#ORD-9922', customer: 'Mike Ross', date: '2024-03-23', amount: '$85.00', status: 'Shipped' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Products':
                return (
                    <div className={styles.tabContent}>
                        <h3 className={styles.contentTitle}>Vendor Products</h3>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(p => (
                                        <tr key={p.id}>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                            <td>{p.stock}</td>
                                            <td><span className={styles.statusBadge}>{p.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'Orders':
                return (
                    <div className={styles.tabContent}>
                        <h3 className={styles.contentTitle}>Recent Orders</h3>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(o => (
                                        <tr key={o.id}>
                                            <td>{o.id}</td>
                                            <td>{o.customer}</td>
                                            <td>{o.date}</td>
                                            <td>{o.amount}</td>
                                            <td><span className={styles.statusBadge}>{o.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'Earnings':
                return (
                    <div className={styles.tabContent}>
                        <h3 className={styles.contentTitle}>Earnings Overview</h3>
                        <div className={styles.earningsGrid}>
                            <div className={styles.earningsCard}>
                                <span className={styles.earningLabel}>Total Revenue</span>
                                <span className={styles.earningValue}>$45,200.00</span>
                            </div>
                            <div className={styles.earningsCard}>
                                <span className={styles.earningLabel}>Monthly Profit</span>
                                <span className={styles.earningValue}>$5,800.00</span>
                            </div>
                            <div className={styles.earningsCard}>
                                <span className={styles.earningLabel}>Total Payouts</span>
                                <span className={styles.earningValue}>$12,400.00</span>
                            </div>
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.topProfileCard}>
                <div className={styles.profileMain}>
                    <img src={vendorData.image} alt={vendorData.name} className={styles.profileImg} />
                    <div className={styles.profileInfo}>
                        <h1 className={styles.vendorName}>{vendorData.name}</h1>
                        <p className={styles.vendorRole}>{vendorData.role}</p>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                {vendorData.email}
                            </div>
                            <div className={styles.contactItem}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                                {vendorData.business}
                            </div>
                        </div>
                    </div>
                    <div className={styles.statsSummary}>
                        <div className={styles.statBox}>
                            <span className={styles.statNum}>{vendorData.stats.products}</span>
                            <span className={styles.statLabel}>Products</span>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statNum}>{vendorData.stats.orders}</span>
                            <span className={styles.statLabel}>Orders</span>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statNum}>{vendorData.stats.earnings}</span>
                            <span className={styles.statLabel}>Earnings</span>
                        </div>
                    </div>
                </div>

                <div className={styles.tabHeader}>
                    {['Products', 'Orders', 'Earnings'].map(tab => (
                        <button 
                            key={tab} 
                            className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.contentSection}>
                {renderContent()}
            </div>
        </div>
    );
};

export default VendorProfile;
