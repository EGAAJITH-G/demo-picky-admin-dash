"use client";

import React from 'react';
import styles from './page.module.css';

const VendorEarnings = () => {
    const transactions = [
        { id: '#TXN-501', date: '2024-03-24', amount: '+$1,120.00', status: 'Completed', method: 'Direct Deposit' },
        { id: '#TXN-502', date: '2024-03-22', amount: '+$890.50', status: 'Pending', method: 'PayPal' },
        { id: '#TXN-503', date: '2024-03-18', amount: '+$2,450.00', status: 'Completed', method: 'Stripe' },
        { id: '#TXN-504', date: '2024-03-15', amount: '+$560.25', status: 'Processing', method: 'Bank Transfer' },
    ];

    const monthlyEarnings = [
        { month: 'Jan', value: 65 },
        { month: 'Feb', value: 45 },
        { month: 'Mar', value: 85 },
        { month: 'Apr', value: 55 },
        { month: 'May', value: 75 },
        { month: 'Jun', value: 95 },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Vendor Earnings</h1>
                <p className={styles.subtitle}>Finances, payouts, and revenue metrics</p>
            </div>

            <div className={styles.summaryCards}>
                <div className={styles.earningCard}>
                    <div className={styles.cardIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className={styles.cardInfo}>
                        <span className={styles.cardLabel}>Total Earnings</span>
                        <span className={styles.cardValue}>$94,520.00</span>
                    </div>
                </div>
                <div className={styles.earningCard}>
                    <div className={styles.cardIcon} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <div className={styles.cardInfo}>
                        <span className={styles.cardLabel}>Current Month Profit</span>
                        <span className={styles.cardValue}>$12,850.50</span>
                    </div>
                </div>
                <div className={styles.earningCard}>
                    <div className={styles.cardIcon} style={{ background: 'rgba(159, 18, 57, 0.1)', color: 'var(--primary-color)' }}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <div className={styles.cardInfo}>
                        <span className={styles.cardLabel}>Total Payouts</span>
                        <span className={styles.cardValue}>$81,200.00</span>
                    </div>
                </div>
            </div>

            <div className={styles.mainGrid}>
                <div className={styles.chartCard}>
                    <h3 className={styles.cardTitle}>Earnings Projection</h3>
                    <div className={styles.chartArea}>
                        {monthlyEarnings.map(item => (
                            <div key={item.month} className={styles.chartBarWrapper}>
                                <div className={styles.bar} style={{ height: `${item.value}%` }}>
                                    <span className={styles.barTooltip}>${item.value * 100}</span>
                                </div>
                                <span className={styles.barLabel}>{item.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.transactionCard}>
                    <h3 className={styles.cardTitle}>Recent Transactions</h3>
                    <div className={styles.transactionList}>
                        {transactions.map(txn => (
                            <div key={txn.id} className={styles.txnItem}>
                                <div className={styles.txnLeft}>
                                    <span className={styles.txnId}>{txn.id}</span>
                                    <span className={styles.txnDate}>{txn.date} • {txn.method}</span>
                                </div>
                                <div className={styles.txnRight}>
                                    <span className={styles.txnAmount}>{txn.amount}</span>
                                    <span className={`${styles.txnStatus} ${styles[txn.status.toLowerCase()]}`}>{txn.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.viewMoreBtn}>View Full History</button>
                </div>
            </div>
        </div>
    );
};

export default VendorEarnings;
