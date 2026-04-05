"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const SKUCreate = () => {
    const [productName, setProductName] = useState('');
    const [size, setSize] = useState('M');
    const [color, setColor] = useState('Blue');
    const [skus, setSkus] = useState([
        { sku: 'TSHIRT-RED-L', date: 'Mar 24, 2024' },
    ]);

    const generateSKU = () => {
        if (!productName) return alert('Enter product name');
        const cleanName = productName.replace(/\s+/g, '-').toUpperCase();
        const mainID = cleanName.substring(0, 8);
        const newSKU = `${mainID}-${color.toUpperCase()}-${size.toUpperCase()}`;
        setSkus([{ sku: newSKU, date: 'Just now' }, ...skus]);
        setProductName('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>SKU Generator</h1>
                <p className={styles.subtitle}>Create systematic Stock Keeping Units for variants</p>
            </div>

            <div className={styles.grid}>
                <div className={styles.formCard}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Product Name</label>
                        <input 
                            type="text" 
                            className={styles.input} 
                            placeholder="e.g. Cotton T-Shirt" 
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className={styles.variantRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Size</label>
                            <select className={styles.select} value={size} onChange={(e) => setSize(e.target.value)}>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Color</label>
                            <select className={styles.select} value={color} onChange={(e) => setColor(e.target.value)}>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Black</option>
                                <option>Green</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.previewBox}>
                        <span className={styles.label}>Preview</span>
                        <div className={styles.previewSKU}>
                            {productName ? `${productName.replace(/\s+/g, '-').toUpperCase().substring(0,8)}-${color.toUpperCase()}-${size.toUpperCase()}` : '...PENDING...'}
                        </div>
                    </div>

                    <button className={styles.submitBtn} onClick={generateSKU}>
                        Save into Inventory
                    </button>
                </div>

                <div className={styles.historyCard}>
                    <h3 className={styles.cardTitle}>Generated SKU List</h3>
                    <div className={styles.list}>
                        {skus.map((item, id) => (
                            <div key={id} className={styles.listItem}>
                                <div className={styles.skuTag}>{item.sku}</div>
                                <span className={styles.date}>{item.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SKUCreate;
