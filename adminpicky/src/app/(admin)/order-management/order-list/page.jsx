"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const OrderList = () => {
    const [orders, setOrders] = useState([
        { id: "ORD001", customer: "Ajith", date: "2026-04-01", amount: 1200, status: "Pending" },
        { id: "ORD002", customer: "Kumar", date: "2026-04-02", amount: 2500, status: "Delivered" },
        { id: "ORD003", customer: "Vijay", date: "2026-04-03", amount: 800, status: "Shipped" },
        { id: "ORD004", customer: "Suriya", date: "2026-04-04", amount: 450, status: "Cancelled" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const filtered = orders.filter(o => {
        const matchesSearch = o.customer.toLowerCase().includes(searchTerm.toLowerCase()) || o.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const exportCSV = () => {
        const header = "Order ID,Customer,Date,Amount,Status\n";
        const rows = filtered.map(o => `${o.id},${o.customer},${o.date},${o.amount},${o.status}`).join("\n");
        const blob = new Blob([header + rows], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `orders_export_${new Date().toISOString().slice(0,10)}.csv`;
        a.click();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleArea}>
                    <h1 className={styles.title}>Order Management</h1>
                    <p className={styles.subtitle}>Fulfill, track, and manage all your customer sales</p>
                </div>
                <button className={styles.exportBtn} onClick={exportCSV}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Export CSV
                </button>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchBox}>
                    <input 
                        type="text" 
                        placeholder="Search by ID or Customer..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={styles.filterSelect}>
                        <option value="All">All Status</option>
                        <option value="Pending">🟡 Pending</option>
                        <option value="Shipped">🔵 Shipped</option>
                        <option value="Delivered">🟢 Delivered</option>
                        <option value="Cancelled">🔴 Cancelled</option>
                    </select>
                </div>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Date</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(order => (
                                <tr key={order.id}>
                                    <td><span className={styles.orderId}>#{order.id}</span></td>
                                    <td><span className={styles.customer}>{order.customer}</span></td>
                                    <td><span className={styles.date}>{order.date}</span></td>
                                    <td><span className={styles.amount}>₹{order.amount.toLocaleString()}</span></td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.viewBtn}>View Details</button>
                                            <button className={styles.statusBtn}>Update Status</button>
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

export default OrderList;
