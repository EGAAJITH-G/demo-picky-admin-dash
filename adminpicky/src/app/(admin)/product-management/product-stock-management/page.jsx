"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const StockManagement = () => {
    const [stocks, setStocks] = useState([
        { id: 1, name: 'Premium Leather Boots', current: 45, status: 'In Stock' },
        { id: 2, name: 'Smart Home Speaker', current: 12, status: 'Low Stock' },
        { id: 3, name: 'Silk Floral Scarf', current: 5, status: 'Low Stock' },
        { id: 4, name: 'Wireless Headphones', current: 0, status: 'Out of Stock' },
        { id: 5, name: 'Ceramic Vase Set', current: 120, status: 'In Stock' },
    ]);

    const [bulkValue, setBulkValue] = useState('');

    const handleUpdateStock = (id, newStock) => {
        const val = parseInt(newStock) || 0;
        setStocks(prev => prev.map(s => {
            if (s.id === id) {
                let status = 'In Stock';
                if (val === 0) status = 'Out of Stock';
                else if (val < 15) status = 'Low Stock';
                return { ...s, current: val, status };
            }
            return s;
        }));
    };

    const handleBulkUpdate = () => {
        const val = parseInt(bulkValue) || 0;
        setStocks(prev => prev.map(s => {
            const newVal = s.current + val;
            let status = 'In Stock';
            if (newVal <= 0) status = 'Out of Stock';
            else if (newVal < 15) status = 'Low Stock';
            return { ...s, current: Math.max(0, newVal), status };
        }));
        setBulkValue('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Inventory Stock</h1>
                <p className={styles.subtitle}>Monitor levels and update quantities across all listings</p>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.bulkArea}>
                    <input 
                        type="number" 
                        placeholder="Qty to add..." 
                        value={bulkValue}
                        onChange={(e) => setBulkValue(e.target.value)}
                        className={styles.bulkInput}
                    />
                    <button className={styles.bulkBtn} onClick={handleBulkUpdate}>Apply Bulk Update</button>
                    <p className={styles.bulkNote}>*Adds to current stock for all items</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Current Inventory</th>
                                <th>Quick Edit</th>
                                <th>Auto-Status</th>
                                <th style={{ textAlign: 'right' }}>Visibility</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stocks.map(item => (
                                <tr key={item.id} className={item.current < 15 ? styles.rowLow : ''}>
                                    <td><span className={styles.name}>{item.name}</span></td>
                                    <td>
                                        <div className={styles.stockDisplay}>
                                            <span className={styles.stockCount}>{item.current}</span>
                                            <div className={styles.progressBar}>
                                                <div className={styles.progress} style={{ 
                                                    width: `${Math.min(100, (item.current / 150) * 100)}%`,
                                                    background: item.current < 15 ? '#EF4444' : '#10B981'
                                                }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input 
                                            type="number" 
                                            className={styles.miniInput} 
                                            defaultValue={item.current}
                                            onBlur={(e) => handleUpdateStock(item.id, e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[item.status.toLowerCase().replace(/\s+/g, '')]}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.historyBtn}>History</button>
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

export default StockManagement;
