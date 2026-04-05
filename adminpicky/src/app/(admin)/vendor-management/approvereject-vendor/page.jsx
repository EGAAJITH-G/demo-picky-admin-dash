"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const VendorApproval = () => {
    const [vendors, setVendors] = useState([
        { id: 1, name: 'John Doe', email: 'john@creative.com', business: 'Creative Artisans', status: 'Pending', date: '2024-03-20' },
        { id: 2, name: 'Sarah Smith', email: 'sarah@techflow.io', business: 'TechFlow Solutions', status: 'Pending', date: '2024-03-21' },
        { id: 3, name: 'Robert Brown', email: 'robert@organic.com', business: 'Organic Bliss', status: 'Approved', date: '2024-03-18' },
        { id: 4, name: 'Emily White', email: 'emily@fashion.co', business: 'Fashion Forward', status: 'Rejected', date: '2024-03-15' },
        { id: 5, name: 'Michael Green', email: 'm.green@build.net', business: 'Builder Pro', status: 'Pending', date: '2024-03-22' },
    ]);

    const handleAction = (id, newStatus) => {
        setVendors(prev => prev.map(v => v.id === id ? { ...v, status: newStatus } : v));
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Approved': return styles.approvedBadge;
            case 'Rejected': return styles.rejectedBadge;
            default: return styles.pendingBadge;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Vendor Approvals</h1>
                <p className={styles.subtitle}>Review and manage pending vendor applications</p>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Vendor Name</th>
                                <th>Business Info</th>
                                <th>Email Address</th>
                                <th>Application Date</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendors.map((vendor) => (
                                <tr key={vendor.id}>
                                    <td>
                                        <div className={styles.vendorInfo}>
                                            <div className={styles.avatar}>{vendor.name.charAt(0)}</div>
                                            <span className={styles.name}>{vendor.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.business}>{vendor.business}</span>
                                    </td>
                                    <td>{vendor.email}</td>
                                    <td>{vendor.date}</td>
                                    <td>
                                        <span className={`${styles.badge} ${getStatusStyle(vendor.status)}`}>
                                            {vendor.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            {vendor.status === 'Pending' ? (
                                                <>
                                                    <button 
                                                        onClick={() => handleAction(vendor.id, 'Approved')}
                                                        className={styles.approveBtn}
                                                        title="Approve Vendor"
                                                    >
                                                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        Approve
                                                    </button>
                                                    <button 
                                                        onClick={() => handleAction(vendor.id, 'Rejected')}
                                                        className={styles.rejectBtn}
                                                        title="Reject Vendor"
                                                    >
                                                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                        Reject
                                                    </button>
                                                </>
                                            ) : (
                                                <button 
                                                    onClick={() => handleAction(vendor.id, 'Pending')}
                                                    className={styles.resetBtn}
                                                >
                                                    Reset to Pending
                                                </button>
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

export default VendorApproval;
