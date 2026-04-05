"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const CreateCoupon = () => {
    const [coupons, setCoupons] = useState([
        { code: "SAVE10", discount: 10, expiry: "2026-05-01", usageLimit: 100, used: 20 },
        { code: "WELCOME20", discount: 20, expiry: "2026-06-01", usageLimit: 50, used: 10 }
    ]);

    const [form, setForm] = useState({ code: '', discount: '', expiry: '', usageLimit: '' });
    const [toast, setToast] = useState('');

    const generateCode = () => {
        const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();
        setForm({ ...form, code: `PROMO-${randomString}` });
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setToast(`Copied ${text} to clipboard!`);
        setTimeout(() => setToast(''), 3000);
    };

    const handleCreate = (e) => {
        e.preventDefault();
        if (!form.code || !form.discount || !form.expiry || !form.usageLimit) {
            setToast('Please fill out all fields.');
            setTimeout(() => setToast(''), 3000);
            return;
        }

        const newCoupon = {
            ...form,
            discount: parseInt(form.discount),
            usageLimit: parseInt(form.usageLimit),
            used: 0
        };

        setCoupons([newCoupon, ...coupons]);
        setForm({ code: '', discount: '', expiry: '', usageLimit: '' });
        setToast('Coupon created successfully!');
        setTimeout(() => setToast(''), 3000);
    };

    const checkStatus = (expiry, limit, used) => {
        if (new Date(expiry) < new Date()) return 'Expired';
        if (used >= limit) return 'Used Up';
        return 'Active';
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Coupon Engine</h1>
                <p className={styles.subtitle}>Generate and manage high-converting promo codes</p>
            </div>

            <div className={styles.mainGrid}>
                {/* Form Section */}
                <div className={styles.formCard}>
                    <h3 className={styles.cardTitle}>Create New Key</h3>
                    <form onSubmit={handleCreate} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>Promotion Code</label>
                            <div className={styles.codeDiv}>
                                <input 
                                    type="text" 
                                    placeholder="e.g. SUMMER50" 
                                    value={form.code}
                                    onChange={(e) => setForm({...form, code: e.target.value.toUpperCase()})}
                                    className={styles.inputCode}
                                />
                                <button type="button" onClick={generateCode} className={styles.genBtn}>
                                    Auto Generate
                                </button>
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Target Discount (%)</label>
                                <input 
                                    type="number" 
                                    min="1" max="100" 
                                    value={form.discount}
                                    onChange={(e) => setForm({...form, discount: e.target.value})}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Total Usage Limit</label>
                                <input 
                                    type="number" 
                                    min="1"
                                    value={form.usageLimit}
                                    onChange={(e) => setForm({...form, usageLimit: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Expiration Timeline</label>
                            <input 
                                type="date" 
                                value={form.expiry}
                                onChange={(e) => setForm({...form, expiry: e.target.value})}
                            />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Deploy Coupon Network
                        </button>
                    </form>
                </div>

                {/* List Section */}
                <div className={styles.listCard}>
                    <h3 className={styles.cardTitle}>Active Campaigns</h3>
                    <div className={styles.couponList}>
                        {coupons.map((c, idx) => {
                            const status = checkStatus(c.expiry, c.usageLimit, c.used);
                            return (
                                <div key={idx} className={styles.couponItem}>
                                    <div className={styles.itemMain}>
                                        <div className={styles.codeWrapper}>
                                            <span className={styles.cCode}>{c.code}</span>
                                            <button onClick={() => copyToClipboard(c.code)} className={styles.copyBtn} title="Copy to clipboard">📋</button>
                                        </div>
                                        <span className={styles.cDiscount}>{c.discount}% OFF</span>
                                    </div>
                                    <div className={styles.itemMeta}>
                                        <div className={styles.stats}>
                                            <span>Limit: {c.used}/{c.usageLimit}</span>
                                            <span>Expires: {c.expiry}</span>
                                        </div>
                                        <span className={`${styles.badge} ${styles[status.toLowerCase().replace(' ', '')]}`}>
                                            {status}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {toast && (
                <div className={styles.toast}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {toast}
                </div>
            )}
        </div>
    );
};

export default CreateCoupon;
