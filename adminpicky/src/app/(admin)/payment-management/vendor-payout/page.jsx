"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const VendorPayout = () => {
    const [payouts, setPayouts] = useState([
        { id: "PV001", vendor: "Handloom Hub", sales: 15200, commission: 1520, payout: 13680, status: "Pending", lastPayout: "Mar 12, 2024" },
        { id: "PV002", vendor: "Organic Farms", sales: 24500, commission: 2450, payout: 22050, status: "Paid", lastPayout: "Mar 01, 2024" },
        { id: "PV003", vendor: "Tech World", sales: 8400, commission: 840, payout: 7560, status: "Pending", lastPayout: "Feb 28, 2024" },
        { id: "PV004", vendor: "Beauty Bliss", sales: 42000, commission: 4200, payout: 37800, status: "Paid", lastPayout: "Mar 05, 2024" },
        { id: "PV005", vendor: "Kitchen Masters", sales: 12100, commission: 1210, payout: 10890, status: "Pending", lastPayout: "Mar 10, 2024" }
    ]);

    const releasePayment = (id) => {
        setPayouts(prev =>
            prev.map(p =>
                p.id === id ? { ...p, status: "Paid" } : p
            )
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Vendor Disbursements</h1>
                <p className={styles.subtitle}>Manage earnings, commissions, and scheduled payouts to your partners</p>
            </div>

            <div className={styles.statsRow}>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Next Scheduled Payout</span>
                    <span className={styles.statVal}>Apr 15, 2024</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Pending Payout Total</span>
                    <span className={styles.statVal}>₹32,130</span>
                </div>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Partner Name</th>
                                <th>Total Sales (₹)</th>
                                <th>Commission (₹)</th>
                                <th>Net Payout (₹)</th>
                                <th>State</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payouts.map(p => (
                                <tr key={p.id}>
                                    <td>
                                        <div className={styles.vendorCell}>
                                            <span className={styles.vendorName}>{p.vendor}</span>
                                            <span className={styles.lastPayout}>Last paid: {p.lastPayout}</span>
                                        </div>
                                    </td>
                                    <td><span className={styles.money}>₹{p.sales.toLocaleString()}</span></td>
                                    <td><span className={styles.commission}>₹{p.commission.toLocaleString()}</span></td>
                                    <td><span className={styles.netAmount}>₹{p.payout.toLocaleString()}</span></td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${p.status === 'Paid' ? styles.paid : styles.pending}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            {p.status === 'Pending' ? (
                                                <button className={styles.releaseBtn} onClick={() => releasePayment(p.id)}>Release Funds</button>
                                            ) : (
                                                <button className={styles.invoiceBtn}>View Ledger</button>
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

export default VendorPayout;
