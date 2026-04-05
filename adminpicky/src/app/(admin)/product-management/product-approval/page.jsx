"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ProductApproval = () => {
    const [pendingProducts, setPendingProducts] = useState([
        { id: 1, name: 'Vintage Leather Satchel', vendor: 'Heritage Craft', category: 'Accessories', status: 'Pending', date: '2024-03-24' },
        { id: 2, name: 'Minimalist Wall Clock', vendor: 'Zen Living', category: 'Home Décor', status: 'Pending', date: '2024-03-23' },
        { id: 3, name: 'Organic Cotton Tee', vendor: 'Eco Wear', category: 'Clothing', status: 'Approved', date: '2024-03-22' },
        { id: 4, name: 'Portable Photo Studio', vendor: 'Tech Gear', category: 'Photography', status: 'Rejected', date: '2024-03-21' },
    ]);

    const handleAction = (id, newStatus) => {
        setPendingProducts(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Product Approval Queue</h1>
                <p className={styles.subtitle}>Review new listings submitted by vendors</p>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product Details</th>
                                <th>Vendor</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingProducts.map((p) => (
                                <tr key={p.id}>
                                    <td>
                                        <span className={styles.name}>{p.name}</span>
                                        <span className={styles.date}>Submitted: {p.date}</span>
                                    </td>
                                    <td>
                                        <span className={styles.vendor}>{p.vendor}</span>
                                    </td>
                                    <td>
                                        <span className={styles.tag}>{p.category}</span>
                                    </td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[p.status.toLowerCase()]}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            {p.status === 'Pending' ? (
                                                <>
                                                    <button 
                                                        className={styles.approveBtn} 
                                                        onClick={() => handleAction(p.id, 'Approved')}
                                                    >
                                                        Approve
                                                    </button>
                                                    <button 
                                                        className={styles.rejectBtn} 
                                                        onClick={() => handleAction(p.id, 'Rejected')}
                                                    >
                                                        Reject
                                                    </button>
                                                </>
                                            ) : (
                                                <button 
                                                    className={styles.resetBtn} 
                                                    onClick={() => handleAction(p.id, 'Pending')}
                                                >
                                                    Reset
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductApproval;
