"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const LowStockAlert = () => {
    // Isolated local state simulating a central store. 
    // Usually, this targets the global source of truth.
    const [inventory, setInventory] = useState([
        { id: 101, name: "Premium T-Shirt", category: "Clothing", stock: 150 },
        { id: 102, name: "Gaming Laptop", category: "Electronics", stock: 4 },
        { id: 103, name: "Jasmine Perfume", category: "Beauty", stock: 2 },
        { id: 104, name: "Pressure Cooker", category: "Kitchen", stock: 0 },
        { id: 105, name: "Gift Box Bundle", category: "Gifts", stock: 45 },
        { id: 107, name: "Wireless Earbuds", category: "Electronics", stock: 1 },
        { id: 108, name: "Face Cream SPF 50", category: "Beauty", stock: 25 },
        { id: 110, name: "Smart Watch", category: "Electronics", stock: 0 }
    ]);

    const lowStockThreshold = 5;
    const criticalItems = inventory.filter(item => item.stock < lowStockThreshold);
    
    const [notified, setNotified] = useState([]);

    const handleNotify = (id) => {
        setNotified([...notified, id]);
        // Simulated API call to notify vendor/purchasing department
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Critical Depletion Alerts</h1>
                <p className={styles.subtitle}>Immediate action required to prevent stockouts and lost revenue</p>
            </div>

            <div className={styles.alertBanner}>
                <div className={styles.bannerIcon}>⚠️</div>
                <div className={styles.bannerText}>
                    <h3>Attention Required: {criticalItems.length} SKUs at Risk</h3>
                    <p>The following items have fallen below the safe operating threshold ({lowStockThreshold} units). Immediate reordering is recommended to maintain sales velocity.</p>
                </div>
            </div>

            <div className={styles.grid}>
                {criticalItems.map(item => {
                    const isZero = item.stock === 0;
                    const isNotified = notified.includes(item.id);
                    
                    return (
                        <div key={item.id} className={`${styles.alertCard} ${isZero ? styles.outCard : styles.lowCard}`}>
                            <div className={styles.cardHeader}>
                                <span className={styles.idTag}>#{item.id}</span>
                                <span className={`${styles.badge} ${isZero ? styles.badgeOut : styles.badgeLow}`}>
                                    {isZero ? 'OUT OF STOCK' : 'LOW STOCK'}
                                </span>
                            </div>
                            
                            <div className={styles.cardBody}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemCat}>{item.category}</p>
                                
                                <div className={styles.stockLevel}>
                                    <span className={styles.stockNum}>{item.stock}</span>
                                    <span className={styles.stockLabel}>Units Remaining</span>
                                </div>
                            </div>
                            
                            <div className={styles.cardFooter}>
                                <button 
                                    className={`${styles.notifyBtn} ${isNotified ? styles.btnNotified : ''}`}
                                    onClick={() => handleNotify(item.id)}
                                    disabled={isNotified}
                                >
                                    {isNotified ? '✓ Vendor Notified' : 'Alert Purchasing Team'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {criticalItems.length === 0 && (
                <div className={styles.safeState}>
                    <div className={styles.safeIcon}>✅</div>
                    <h2>Inventory Levels Optimal</h2>
                    <p>All SKUs are operating above the critical depletion threshold.</p>
                </div>
            )}
        </div>
    );
};

export default LowStockAlert;
