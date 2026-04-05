"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const SKUManagement = () => {
    const [skus, setSkus] = useState([
        { code: 'SHOE-BLACK-42', product: 'Leather Sneakers', variant: 'Black, 42', created: '2 days ago' },
        { code: 'TEE-RED-XL', product: 'Organic Cotton Tee', variant: 'Red, XL', created: '1 day ago' },
        { code: 'BAG-BRW-STD', product: 'Leather Satchel', variant: 'Brown, Standard', created: 'Just now' },
    ]);

    const [form, setForm] = useState({ name: '', color: '', size: '' });

    const generateSKU = () => {
        if (!form.name || !form.color || !form.size) return alert('Fill all fields');
        const code = `${form.name.substring(0, 4).toUpperCase()}-${form.color.substring(0, 3).toUpperCase()}-${form.size.toUpperCase()}`;
        setSkus([{ code, product: form.name, variant: `${form.color}, ${form.size}`, created: 'Just now' }, ...skus]);
        setForm({ name: '', color: '', size: '' });
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copied SKU: ${text}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>SKU Management</h1>
                <p className={styles.subtitle}>Streamline stock tracking with unique SKU identifies</p>
            </div>

            <div className={styles.mainGrid}>
                {/* Form to generate SKU */}
                <div className={styles.formCard}>
                    <h3 className={styles.cardTitle}>Generate SKU</h3>
                    <div className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Product Keyword (Code-base)</label>
                            <input 
                                type="text" 
                                placeholder="e.g. SHIRT" 
                                value={form.name} 
                                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                            />
                        </div>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>Primary Color</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. RED" 
                                    value={form.color} 
                                    onChange={(e) => setForm({ ...form, color: e.target.value })} 
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Size / Spec</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. XL" 
                                    value={form.size} 
                                    onChange={(e) => setForm({ ...form, size: e.target.value })} 
                                />
                            </div>
                        </div>
                        <button className={styles.generateBtn} onClick={generateSKU}>Generate & Save SKU</button>
                    </div>
                </div>

                {/* List of existing SKUs */}
                <div className={styles.listCard}>
                    <h3 className={styles.cardTitle}>SKU Inventory</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>SKU Code</th>
                                    <th>Product Variant</th>
                                    <th style={{ textAlign: 'right' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skus.map((sku, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <span className={styles.skuBox}>{sku.code}</span>
                                            <span className={styles.created}>{sku.created}</span>
                                        </td>
                                        <td>
                                            <span className={styles.productName}>{sku.product}</span>
                                            <span className={styles.variantInfo}>{sku.variant}</span>
                                        </td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button className={styles.copyBtn} onClick={() => copyToClipboard(sku.code)}>
                                                    Copy code
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SKUManagement;
