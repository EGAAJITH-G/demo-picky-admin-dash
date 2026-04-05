"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const OrderTrackingId = () => {
    // Advanced: Including delivery partners in assignment
    const partners = ["BlueDart Express", "Delhivery", "Shadowfax", "Amazon Shipping"];

    const [orders, setOrders] = useState([
        { id: "ORD-9901", customer: "Ajith", targetCity: "Chennai", trackingId: "TRK758493", status: "In Transit", partner: "BlueDart Express" },
        { id: "ORD-9902", customer: "Kumar", targetCity: "Coimbatore", trackingId: "TRK102938", status: "Delivered", partner: "Delhivery" },
        { id: "ORD-9903", customer: "Sneha", targetCity: "Madurai", trackingId: null, status: "Processing", partner: null },
        { id: "ORD-9904", customer: "Rahul", targetCity: "Bangalore", trackingId: null, status: "Processing", partner: null }
    ]);

    const [toast, setToast] = useState('');

    const generateTrackingID = () => {
        return "TRK" + Math.floor(100000 + Math.random() * 900000);
    };

    const handleAssignTracking = (orderId) => {
        const selectedPartner = partners[Math.floor(Math.random() * partners.length)]; // Simulate partner assignment logic based on geography
        const newTrackingId = generateTrackingID();

        setOrders(prev => prev.map(o => {
            if (o.id === orderId) {
                return { ...o, trackingId: newTrackingId, partner: selectedPartner, status: "Manifested" };
            }
            return o;
        }));
        
        showToast(`Tracking ${newTrackingId} assigned to ${orderId} via ${selectedPartner}`);
    };

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(''), 4000);
    };

    const getStatusStyle = (status) => {
        switch(status) {
            case 'Delivered': return styles.statusSuccess;
            case 'In Transit': return styles.statusTransit;
            case 'Processing': return styles.statusPending;
            case 'Manifested': return styles.statusManifest;
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Dispatch & Tracking Allocation</h1>
                <p className={styles.subtitle}>Generate AWBs and allocate shipments to appropriate routing networks</p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <h3>Pending Manifests</h3>
                    <div className={styles.statNum}>{orders.filter(o => !o.trackingId).length}</div>
                </div>
                <div className={styles.statCard}>
                    <h3>Active in Transit</h3>
                    <div className={styles.statNum}>{orders.filter(o => o.status === 'In Transit').length}</div>
                </div>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order Reference</th>
                                <th>Routing Destination</th>
                                <th>Logistics Partner</th>
                                <th>Tracking AWB</th>
                                <th>Live Status</th>
                                <th style={{ textAlign: 'center' }}>Dispatch Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => {
                                const isAssigned = order.trackingId !== null;

                                return (
                                    <tr key={order.id} className={!isAssigned ? styles.highlightRow : ''}>
                                        <td>
                                            <div className={styles.orderLabel}>
                                                <span className={styles.idTag}>{order.id}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.customerInfo}>
                                                <span className={styles.custName}>{order.customer}</span>
                                                <span className={styles.cityLabel}>{order.targetCity}</span>
                                            </div>
                                        </td>
                                        <td>
                                            {isAssigned ? (
                                                <span className={styles.partnerTag}>{order.partner}</span>
                                            ) : (
                                                <span className={styles.unassignedText}>Pending Allocation</span>
                                            )}
                                        </td>
                                        <td>
                                            {isAssigned ? (
                                                <div className={styles.trackingPill}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7"/></svg>
                                                    {order.trackingId}
                                                </div>
                                            ) : (
                                                <span className={styles.noTracking}>N/A</span>
                                            )}
                                        </td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${getStatusStyle(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            {!isAssigned ? (
                                                <button 
                                                    className={styles.dispatchBtn}
                                                    onClick={() => handleAssignTracking(order.id)}
                                                >
                                                    Allocate & Dispatch
                                                </button>
                                            ) : (
                                                <button className={styles.viewMapBtn}>
                                                    View Map
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {toast && (
                <div className={styles.toast}>
                    <div className={styles.toastIcon}>📦</div>
                    <div className={styles.toastContent}>{toast}</div>
                </div>
            )}
        </div>
    );
};

export default OrderTrackingId;
