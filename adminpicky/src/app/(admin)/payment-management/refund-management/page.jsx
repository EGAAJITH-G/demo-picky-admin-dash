"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const RefundManagement = () => {
    const [refunds, setRefunds] = useState([
        { id: "REF001", order: "ORD001", customer: "Ajith", amount: 1200, reason: "Product damaged", status: "Pending", date: "Apr 01, 2024" },
        { id: "REF002", order: "ORD089", customer: "Sneha", amount: 450, reason: "Size mismatch", status: "Approved", date: "Mar 28, 2024" },
        { id: "REF003", order: "ORD112", customer: "Rahul", amount: 2100, reason: "Defective item", status: "Rejected", date: "Mar 25, 2024" },
        { id: "REF004", order: "ORD054", customer: "Priya", amount: 900, reason: "Better price found", status: "Pending", date: "Apr 02, 2024" }
    ]);

    const handleRefund = (id, action) => {
        setRefunds(prev =>
            prev.map(r =>
                r.id === id ? { ...r, status: action } : r
            )
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Refund Requests</h1>
                <p className={styles.subtitle}>Process and audit customer return and credit claims</p>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Refund ID</th>
                                <th>Order Ref</th>
                                <th>Amount (₹)</th>
                                <th>Reason for Return</th>
                                <th>State</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {refunds.map(ref => (
                                <tr key={ref.id}>
                                    <td><span className={styles.refId}>#{ref.id}</span></td>
                                    <td><span className={styles.ordId}>{ref.order}</span></td>
                                    <td><span className={styles.amount}>₹{ref.amount}</span></td>
                                    <td><span className={styles.reason}>{ref.reason}</span></td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[ref.status.toLowerCase()]}`}>
                                            {ref.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            {ref.status === 'Pending' ? (
                                                <>
                                                    <button className={styles.approveBtn} onClick={() => handleRefund(ref.id, 'Approved')}>Approve</button>
                                                    <button className={styles.rejectBtn} onClick={() => handleRefund(ref.id, 'Rejected')}>Reject</button>
                                                </>
                                            ) : (
                                                <button className={styles.detailsBtn}>View Conversation</button>
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

export default RefundManagement;
