"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const PaymentHistory = () => {
    const [payments, setPayments] = useState([
        { id: "PAY001", order: "ORD001", customer: "Ajith", amount: 1200, method: "UPI", status: "Success", date: "2026-04-01" },
        { id: "PAY002", order: "ORD002", customer: "Kumar", amount: 2500, method: "Card", status: "Pending", date: "2026-04-02" },
        { id: "PAY003", order: "ORD003", customer: "Rahul", amount: 800, method: "Cash", status: "Failed", date: "2026-04-03" },
        { id: "PAY004", order: "ORD004", customer: "Priya", amount: 3200, method: "UPI", status: "Success", date: "2026-04-04" },
        { id: "PAY005", order: "ORD005", customer: "Arun", amount: 1500, method: "Card", status: "Success", date: "2026-04-05" },
        { id: "PAY006", order: "ORD006", customer: "Deepika", amount: 950, method: "UPI", status: "Success", date: "2026-04-06" },
        { id: "PAY007", order: "ORD007", customer: "Ganesh", amount: 2100, method: "Card", status: "Pending", date: "2026-04-07" },
        { id: "PAY008", order: "ORD008", customer: "Sneha", amount: 600, method: "Cash", status: "Success", date: "2026-04-08" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [methodFilter, setMethodFilter] = useState('All');

    const filtered = payments.filter(p => {
        const matchesSearch = p.customer.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
        const matchesMethod = methodFilter === 'All' || p.method === methodFilter;
        return matchesSearch && matchesStatus && matchesMethod;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Payment History</h1>
                <p className={styles.subtitle}>Audit every transaction processed through the storefront</p>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchBox}>
                    <input 
                        type="text" 
                        placeholder="Search Payment ID or Customer..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Status</option>
                        <option value="Success">Success</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                    </select>
                    <select value={methodFilter} onChange={(e) => setMethodFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Methods</option>
                        <option value="UPI">UPI</option>
                        <option value="Card">Card</option>
                        <option value="Cash">Cash</option>
                    </select>
                </div>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Order Ref</th>
                                <th>Customer</th>
                                <th>Amount</th>
                                <th>Method</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(pay => (
                                <tr key={pay.id}>
                                    <td><span className={styles.payId}>#{pay.id}</span></td>
                                    <td><span className={styles.ordId}>{pay.order}</span></td>
                                    <td><span className={styles.customer}>{pay.customer}</span></td>
                                    <td><span className={styles.amount}>₹{pay.amount}</span></td>
                                    <td><span className={styles.methodTag}>{pay.method}</span></td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[pay.status.toLowerCase()]}`}>
                                            {pay.status}
                                        </span>
                                    </td>
                                    <td style={{ textAlign: 'right' }}><span className={styles.date}>{pay.date}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.pagination}>
                    Showing {filtered.length} of {payments.length} transactions
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
