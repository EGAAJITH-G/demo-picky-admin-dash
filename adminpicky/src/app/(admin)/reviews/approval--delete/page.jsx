"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ApprovalDelete = () => {
    const [pendingReviews, setPendingReviews] = useState([
        { id: 101, product: "Wireless Earbuds", customer: "Neha", rating: 2, text: "One side stopped working after a week. Need a replacement.", date: "Apr 04, 2024" },
        { id: 102, product: "Organic Green Tea", customer: "Arjun", rating: 5, text: "Very refreshing and genuine taste. Will buy again.", date: "Apr 03, 2024" },
        { id: 103, product: "Yoga Mat", customer: "Meera", rating: 4, text: "Good grip, but the color is slightly different from the image.", date: "Apr 02, 2024" },
        { id: 104, product: "Desk Lamp", customer: "Rohit", rating: 1, text: "Arrived broken. Unacceptable packaging.", date: "Apr 01, 2024" }
    ]);

    const handleAction = (id, action) => {
        if (action === 'delete') {
            if (!confirm('Are you sure you want to permanently delete this review?')) return;
        }
        
        // Remove from pending list (simulate approve or delete)
        setPendingReviews(prev => prev.filter(r => r.id !== id));
        
        // In a real app, send API request here
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Moderation Queue</h1>
                <p className={styles.subtitle}>Review pending customer feedback before it goes live</p>
            </div>

            <div className={styles.queueStats}>
                <div className={styles.statBox}>
                    <span className={styles.statVal}>{pendingReviews.length}</span>
                    <span className={styles.statLabel}>Pending Approval</span>
                </div>
            </div>

            <div className={styles.tableCard}>
                {pendingReviews.length > 0 ? (
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Product Details</th>
                                    <th>Customer Review</th>
                                    <th>Date</th>
                                    <th style={{ textAlign: 'center' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingReviews.map(review => (
                                    <tr key={review.id}>
                                        <td style={{ width: '25%' }}>
                                            <div className={styles.prodCell}>
                                                <span className={styles.prodName}>{review.product}</span>
                                                <span className={styles.custName}>By: {review.customer}</span>
                                            </div>
                                        </td>
                                        <td style={{ width: '45%' }}>
                                            <div className={styles.reviewCell}>
                                                <div className={styles.stars}>
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className={i < review.rating ? styles.starOn : styles.starOff}>★</span>
                                                    ))}
                                                </div>
                                                <p className={styles.reviewText}>"{review.text}"</p>
                                            </div>
                                        </td>
                                        <td><span className={styles.date}>{review.date}</span></td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div className={styles.actions}>
                                                <button className={styles.approveBtn} onClick={() => handleAction(review.id, 'approve')}>
                                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                    Approve
                                                </button>
                                                <button className={styles.deleteBtn} onClick={() => handleAction(review.id, 'delete')}>
                                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon}>✨</div>
                        <h3>All Caught Up!</h3>
                        <p>There are no pending reviews in the moderation queue.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApprovalDelete;
