"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const VendorOrders = () => {
    const [orders, setOrders] = useState([
        { id: 'ORD-2024-001', product: 'Wireless Headphones', customer: 'Alice Smith', amount: '$199.99', status: 'Pending', date: '2024-03-24' },
        { id: 'ORD-2024-002', product: 'Smart Camera', customer: 'Bob Jones', amount: '$299.00', status: 'Shipped', date: '2024-03-23' },
        { id: 'ORD-2024-003', product: 'Gaming Mouse', customer: 'Charlie Brown', amount: '$49.50', status: 'Delivered', date: '2024-03-22' },
        { id: 'ORD-2024-004', product: 'RGB Keyboard', customer: 'Diana Prince', amount: '$129.00', status: 'Pending', date: '2024-03-21' },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Pending': return styles.statusPending;
            case 'Shipped': return styles.statusShipped;
            case 'Delivered': return styles.statusDelivered;
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Vendor Orders</h1>
                <p className={styles.subtitle}>Track and fulfill customer orders</p>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Product Details</th>
                                <th>Customer Name</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td>
                                        <span className={styles.orderId}>{order.id}</span>
                                        <span className={styles.orderDate}>{order.date}</span>
                                    </td>
                                    <td>
                                        <span className={styles.productName}>{order.product}</span>
                                    </td>
                                    <td>
                                        <span className={styles.customerName}>{order.customer}</span>
                                    </td>
                                    <td>
                                        <span className={styles.amount}>{order.amount}</span>
                                    </td>
                                    <td>
                                        <div className={`${styles.statusDropdown} ${getStatusStyle(order.status)}`}>
                                            <select 
                                                value={order.status} 
                                                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                className={styles.select}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.detailsBtn} title="View Details">
                                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.pagination}>
                    <button className={styles.pageBtn} disabled>Previous</button>
                    <div className={styles.pageNums}>
                        <button className={`${styles.pageNum} ${styles.activePage}`}>1</button>
                        <button className={styles.pageNum}>2</button>
                        <button className={styles.pageNum}>3</button>
                    </div>
                    <button className={styles.pageBtn}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default VendorOrders;
