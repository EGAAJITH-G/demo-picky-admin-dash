"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ProductIDCreate = () => {
    const [history, setHistory] = useState([
        { id: 'PROD-0001', date: 'Mar 24, 2024' },
        { id: 'PROD-0002', date: 'Mar 23, 2024' },
    ]);
    const [lastNum, setLastNum] = useState(2);

    const generateID = () => {
        const nextNum = lastNum + 1;
        const newID = `PROD-${String(nextNum).padStart(4, '0')}`;
        setHistory(prev => [{ id: newID, date: 'Just now' }, ...prev]);
        setLastNum(nextNum);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Product ID Generator</h1>
                <p className={styles.subtitle}>Standardize your inventory with unique identification codes</p>
            </div>

            <div className={styles.mainArea}>
                <div className={styles.generatorBox}>
                    <div className={styles.displayArea}>
                        <span className={styles.previewLabel}>Draft Product ID</span>
                        <h2 className={styles.largeID}>{`PROD-${String(lastNum + 1).padStart(4, '0')}`}</h2>
                    </div>
                    <button className={styles.btn} onClick={generateID}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Generate Unique ID
                    </button>
                    <p className={styles.hint}>Format: PROD-XXXX (Auto-incrementing)</p>
                </div>

                <div className={styles.historyCard}>
                    <h3 className={styles.cardTitle}>Recent History</h3>
                    <div className={styles.historyList}>
                        {history.map((item, idx) => (
                            <div key={idx} className={styles.historyItem}>
                                <span className={styles.historyID}>{item.id}</span>
                                <span className={styles.historyDate}>{item.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductIDCreate;
