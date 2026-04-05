"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const NewStocks = () => {
    const products = [
        { id: 101, name: "Premium T-Shirt" },
        { id: 102, name: "Gaming Laptop" },
        { id: 103, name: "Jasmine Perfume" },
        { id: 104, name: "Pressure Cooker" },
        { id: 105, name: "Gift Box Bundle" }
    ];

    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [toast, setToast] = useState('');
    const [records, setRecords] = useState([]);

    const handleAddStock = (e) => {
        e.preventDefault();
        if (!selectedProduct || !quantity || quantity <= 0) {
            setToast({ type: 'error', text: 'Select a product and enter a valid quantity.' });
            setTimeout(() => setToast(null), 3000);
            return;
        }

        const prodName = products.find(p => p.id === parseInt(selectedProduct))?.name;
        
        // Log the ingestion record
        setRecords([{
            id: Date.now(),
            product: prodName,
            qty: parseInt(quantity),
            date: new Date().toLocaleTimeString()
        }, ...records]);

        setToast({ type: 'success', text: `Successfully ingested +${quantity} units of ${prodName}.` });
        setSelectedProduct('');
        setQuantity('');
        
        setTimeout(() => setToast(null), 3500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Stock Ingestion</h1>
                <p className={styles.subtitle}>Register new inventory shipments into the warehouse</p>
            </div>

            <div className={styles.mainGrid}>
                {/* Entry Form */}
                <div className={styles.formCard}>
                    <h3 className={styles.cardTitle}>Intake Form</h3>
                    <form onSubmit={handleAddStock} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>Target Product</label>
                            <select 
                                value={selectedProduct} 
                                onChange={(e) => setSelectedProduct(e.target.value)}
                                className={styles.selectInput}
                            >
                                <option value="">-- Select SKUs --</option>
                                {products.map(p => (
                                    <option key={p.id} value={p.id}>[{p.id}] {p.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Incoming Quantity</label>
                            <input 
                                type="number" 
                                min="1"
                                placeholder="Units received"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className={styles.numInput}
                            />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Confirm Intake
                        </button>
                    </form>
                </div>

                {/* Live Intake Log */}
                <div className={styles.logCard}>
                    <h3 className={styles.cardTitle}>Recent Intakes (Today)</h3>
                    {records.length > 0 ? (
                        <div className={styles.logList}>
                            {records.map(rec => (
                                <div key={rec.id} className={styles.logItem}>
                                    <div className={styles.logIcon}>📦</div>
                                    <div className={styles.logContent}>
                                        <div className={styles.logTop}>
                                            <span className={styles.logProd}>{rec.product}</span>
                                            <span className={styles.logQty}>+{rec.qty} Units</span>
                                        </div>
                                        <div className={styles.logTime}>Logged at {rec.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyLog}>
                            <p>No new stock received today.</p>
                        </div>
                    )}
                </div>
            </div>

            {toast && (
                <div className={`${styles.toast} ${styles[toast.type]}`}>
                    {toast.text}
                </div>
            )}
        </div>
    );
};

export default NewStocks;
