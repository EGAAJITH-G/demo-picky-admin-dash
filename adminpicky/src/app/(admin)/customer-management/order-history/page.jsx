"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const OrderHistory = () => {
    const [orders, setOrders] = useState([
        { id: 'ORD-001', product: 'Premium Leather Boots', date: 'Oct 12, 2024', amount: '$120.00', status: 'Delivered' },
        { id: 'ORD-002', product: 'Smart Home Speaker', date: 'Oct 11, 2024', amount: '$89.00', status: 'Pending' },
        { id: 'ORD-003', product: 'Silk Floral Scarf', date: 'Oct 10, 2024', amount: '$45.00', status: 'Cancelled' },
        { id: 'ORD-004', product: 'MacBook Pro 14"', date: 'Oct 09, 2024', amount: '$1,999.00', status: 'Delivered' },
        { id: 'ORD-005', product: 'Sony Headphones', date: 'Oct 08, 2024', amount: '$349.00', status: 'Pending' },
        { id: 'ORD-006', product: 'Ceramic Vase Set', date: 'Oct 07, 2024', amount: '$85.00', status: 'Delivered' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const displayedOrders = orders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Order History</h1>
                <p className={styles.subtitle}>Track and manage all customer purchases</p>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Product Item</th>
                                <th>Order Date</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedOrders.map(order => (
                                <tr key={order.id}>
                                    <td><span className={styles.orderId}>{order.id}</span></td>
                                    <td><span className={styles.product}>{order.product}</span></td>
                                    <td><span className={styles.date}>{order.date}</span></td>
                                    <td><span className={styles.amount}>{order.amount}</span></td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.viewBtn}>Details</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.pagination}>
                    <button 
                        disabled={currentPage === 1} 
                        onClick={() => setCurrentPage(p => p - 1)}
                        className={styles.pageBtn}
                    >
                        Previous
                    </button>
                    <div className={styles.pageIndicator}>
                        Page <strong>{currentPage}</strong> of {totalPages}
                    </div>
                    <button 
                        disabled={currentPage === totalPages} 
                        onClick={() => setCurrentPage(p => p + 1)}
                        className={styles.pageBtn}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
