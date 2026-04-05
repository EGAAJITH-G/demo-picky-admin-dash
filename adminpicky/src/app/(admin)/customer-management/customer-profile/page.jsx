"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const CustomerProfile = () => {
    const [activeTab, setActiveTab] = useState('orders');

    const customer = {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        phone: '+1 234 567 890',
        address: '123 Maple Street, Toronto, ON, Canada',
        joined: 'Jan 15, 2024',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        stats: {
            totalOrders: 24,
            totalSpend: '$3,450.00',
            lastAudit: '2 hours ago'
        }
    };

    const orders = [
        { id: '#ORD-9921', product: 'Leather Sneakers', date: 'Mar 12, 2024', amount: '$120.00', status: 'Delivered' },
        { id: '#ORD-8842', product: 'Cotton Tee', date: 'Mar 05, 2024', amount: '$45.00', status: 'Pending' },
    ];

    const paymentMethods = [
        { type: 'Visa', last4: '4242', expiry: '09/26', brand: 'Visa' },
        { type: 'Mastercard', last4: '8812', expiry: '12/25', brand: 'Mastercard' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Customer Profile</h1>
            </div>

            <div className={styles.grid}>
                {/* Left: Info Card */}
                <div className={styles.infoColumn}>
                    <div className={styles.profileCard}>
                        <div className={styles.profileHeader}>
                            <img src={customer.image} className={styles.avatar} alt={customer.name} />
                            <h2 className={styles.custName}>{customer.name}</h2>
                            <p className={styles.custJoined}>Customer since {customer.joined}</p>
                        </div>
                        <div className={styles.detailsGroup}>
                            <div className={styles.detailItem}>
                                <label>Email Address</label>
                                <span>{customer.email}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <label>Phone Number</label>
                                <span>{customer.phone}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <label>Shipping Address</label>
                                <span>{customer.address}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statLabel}>Total Orders</span>
                            <span className={styles.statVal}>{customer.stats.totalOrders}</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statLabel}>Total Spend</span>
                            <span className={styles.statVal}>{customer.stats.totalSpend}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Tabs and Activity */}
                <div className={styles.tabsColumn}>
                    <div className={styles.tabHeader}>
                        <button 
                            className={`${styles.tabBtn} ${activeTab === 'orders' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('orders')}
                        >
                            Order History
                        </button>
                        <button 
                            className={`${styles.tabBtn} ${activeTab === 'payouts' ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab('payouts')}
                        >
                            Payment Methods
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                        {activeTab === 'orders' ? (
                            <div className={styles.tableCard}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Product</th>
                                            <th>Date</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(o => (
                                            <tr key={o.id}>
                                                <td><span className={styles.ordId}>{o.id}</span></td>
                                                <td><span className={styles.prodName}>{o.product}</span></td>
                                                <td><span className={styles.date}>{o.date}</span></td>
                                                <td><span className={styles.amt}>{o.amount}</span></td>
                                                <td>
                                                    <span className={`${styles.statusBadge} ${o.status.toLowerCase() === 'delivered' ? styles.delivered : styles.pending}`}>
                                                        {o.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className={styles.payGrid}>
                                {paymentMethods.map((pay, i) => (
                                    <div key={i} className={styles.payCard}>
                                        <div className={styles.payBrand}>{pay.brand}</div>
                                        <div className={styles.payNum}>•••• {pay.last4}</div>
                                        <div className={styles.payMeta}>
                                            <span>Expires: {pay.expiry}</span>
                                            <button className={styles.deletePay}>Delete</button>
                                        </div>
                                    </div>
                                ))}
                                <button className={styles.addPayBtn}>+ Add New Method</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;
