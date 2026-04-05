"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const StatusManagement = () => {
    const [vendors, setVendors] = useState([
        { id: 1, name: 'Flash Electronics', status: 'Active', lastUpdate: '2 mins ago' },
        { id: 2, name: 'Green Garden', status: 'Blocked', lastUpdate: '1 day ago' },
        { id: 3, name: 'Mode Boutique', status: 'Active', lastUpdate: '10 mins ago' },
        { id: 4, name: 'Kitchen Masters', status: 'Active', lastUpdate: '5 hours ago' },
    ]);

    const toggleStatus = (id) => {
        setVendors(prev => prev.map(v => 
            v.id === id ? { ...v, status: v.status === 'Active' ? 'Blocked' : 'Active', lastUpdate: 'Just now' } : v
        ));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Vendor Status Management</h1>
                <p className={styles.subtitle}>Quickly activate or restrict vendor access</p>
            </div>

            <div className={styles.grid}>
                {vendors.map(vendor => (
                    <div key={vendor.id} className={styles.statusCard}>
                        <div className={styles.cardInfo}>
                            <h3 className={styles.vendorName}>{vendor.name}</h3>
                            <p className={styles.meta}>Updated: {vendor.lastUpdate}</p>
                            <span className={`${styles.badge} ${vendor.status === 'Active' ? styles.active : styles.blocked}`}>
                                {vendor.status}
                            </span>
                        </div>
                        <div className={styles.toggleWrapper}>
                            <label className={styles.switch}>
                                <input 
                                    type="checkbox" 
                                    checked={vendor.status === 'Active'} 
                                    onChange={() => toggleStatus(vendor.id)}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatusManagement;
