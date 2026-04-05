"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const UpdateInventory = () => {
    const [inventory, setInventory] = useState([
        { id: 101, name: "Premium T-Shirt", originalStock: 150, currentStock: 150 },
        { id: 102, name: "Gaming Laptop", originalStock: 4, currentStock: 4 },
        { id: 103, name: "Jasmine Perfume", originalStock: 2, currentStock: 2 },
        { id: 104, name: "Pressure Cooker", originalStock: 0, currentStock: 0 },
        { id: 105, name: "Gift Box Bundle", originalStock: 45, currentStock: 45 }
    ]);

    const [toast, setToast] = useState('');

    const handleInputChange = (id, newValue) => {
        const val = newValue === '' ? '' : parseInt(newValue);
        if (val !== '' && val < 0) return; // Prevent negative stock

        setInventory(prev => prev.map(item => 
            item.id === id ? { ...item, currentStock: val } : item
        ));
    };

    const handleSingleUpdate = (id) => {
        setInventory(prev => prev.map(item => {
            if (item.id === id) {
                const stockVal = item.currentStock === '' ? 0 : item.currentStock;
                return { ...item, originalStock: stockVal, currentStock: stockVal };
            }
            return item;
        }));
        showToast('SKU manually updated.');
    };

    const handleBulkUpdate = () => {
        setInventory(prev => prev.map(item => {
            const stockVal = item.currentStock === '' ? 0 : item.currentStock;
            return { ...item, originalStock: stockVal, currentStock: stockVal };
        }));
        showToast('Bulk synchronization complete.');
    };

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(''), 3000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Inventory Synchronization</h1>
                    <p className={styles.subtitle}>Execute fast manual overrides on active stock ledgers</p>
                </div>
                <button className={styles.bulkBtn} onClick={handleBulkUpdate}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                    Commit Bulk Update
                </button>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>SKU Reference</th>
                                <th>Ledger Record</th>
                                <th>Manual Override Value</th>
                                <th>Delta</th>
                                <th style={{ textAlign: 'right' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map(item => {
                                const parseCurrent = item.currentStock === '' ? 0 : item.currentStock;
                                const delta = parseCurrent - item.originalStock;
                                const isDirty = delta !== 0;

                                return (
                                    <tr key={item.id} className={isDirty ? styles.dirtyRow : ''}>
                                        <td>
                                            <div className={styles.prodCell}>
                                                <span className={styles.idTag}>#{item.id}</span>
                                                <span className={styles.prodName}>{item.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.ledgerCell}>
                                                <span className={styles.ledgerVal}>{item.originalStock}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.inputWrapper}>
                                                <input 
                                                    type="number" 
                                                    className={styles.stockInput}
                                                    value={item.currentStock}
                                                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`
                                                ${styles.deltaBadge} 
                                                ${delta > 0 ? styles.deltaPos : ''}
                                                ${delta < 0 ? styles.deltaNeg : ''}
                                                ${delta === 0 ? styles.deltaZero : ''}
                                            `}>
                                                {delta > 0 ? `+${delta}` : delta}
                                            </span>
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <button 
                                                className={styles.syncBtn}
                                                onClick={() => handleSingleUpdate(item.id)}
                                                disabled={!isDirty}
                                            >
                                                Sync SKU
                                            </button>
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
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {toast}
                </div>
            )}
        </div>
    );
};

export default UpdateInventory;
