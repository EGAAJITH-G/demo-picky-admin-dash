"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const OrderStatusUpdate = () => {
    const [orders, setOrders] = useState([
        { id: "ORD001", customer: "Ajith", currentStatus: "Pending", lastUpdated: "2 hours ago" },
        { id: "ORD002", customer: "Kumar", currentStatus: "Shipped", lastUpdated: "1 day ago" },
        { id: "ORD003", customer: "Vijay", currentStatus: "Pending", lastUpdated: "4 hours ago" },
    ]);

    const [selectedOrder, setSelectedOrder] = useState(null);
    const [newStatus, setNewStatus] = useState('Pending');
    const [showToast, setShowToast] = useState(false);

    const handleUpdate = () => {
        if (!selectedOrder) return;
        setOrders(orders.map(o => o.id === selectedOrder.id ? { ...o, currentStatus: newStatus, lastUpdated: "Just now" } : o));
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Order Quick Update</h1>
                <p className={styles.subtitle}>Batch update shipping and fulfillment states</p>
            </div>

            <div className={styles.mainGrid}>
                {/* Order Select */}
                <div className={styles.listCard}>
                    <h3 className={styles.cardTitle}>Awaiting Action</h3>
                    <div className={styles.orderScroll}>
                        {orders.map(order => (
                            <div 
                                key={order.id} 
                                className={`${styles.orderItem} ${selectedOrder?.id === order.id ? styles.active : ''}`}
                                onClick={() => { setSelectedOrder(order); setNewStatus(order.currentStatus); }}
                            >
                                <div className={styles.orderMain}>
                                    <span className={styles.ordId}>#{order.id}</span>
                                    <span className={styles.custName}>{order.customer}</span>
                                </div>
                                <span className={`${styles.statusBadge} ${styles[order.currentStatus.toLowerCase()]}`}>
                                    {order.currentStatus}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Update Controls */}
                <div className={styles.updateCard}>
                    <h3 className={styles.cardTitle}>Configure Status</h3>
                    {selectedOrder ? (
                        <div className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Target Order</label>
                                <input type="text" readOnly value={`Order ${selectedOrder.id} - ${selectedOrder.customer}`} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>New Logistics Status</label>
                                <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className={styles.statusDropdown}>
                                    <option value="Pending">Pending</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </div>
                            <button className={styles.updateBtn} onClick={handleUpdate}>Update Progress</button>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <p>Select an order from the list to update its status.</p>
                        </div>
                    )}
                </div>
            </div>

            {showToast && (
                <div className={styles.toast}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Order Status Updated Successfully!
                </div>
            )}
        </div>
    );
};

export default OrderStatusUpdate;
