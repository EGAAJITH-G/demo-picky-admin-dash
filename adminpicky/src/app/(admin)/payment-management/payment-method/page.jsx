"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const PaymentMethod = () => {
    const [methods, setMethods] = useState([
        { id: 1, name: 'UPI', description: 'Instant bank transfer using Google Pay, PhonePe, etc.', enabled: true, icon: '⚡' },
        { id: 2, name: 'Credit Card', description: 'Supports Visa, Mastercard, AMEX, and RuPay.', enabled: true, icon: '💳' },
        { id: 3, name: 'Debit Card', description: 'Direct bank account payment via ATM cards.', enabled: true, icon: '🏧' },
        { id: 4, name: 'Cash on Delivery', description: 'Receive payment at the time of delivery.', enabled: false, icon: '💵' },
    ]);

    const toggleMethod = (id) => {
        setMethods(prev =>
            prev.map(m =>
                m.id === id ? { ...m, enabled: !m.enabled } : m
            )
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Payment Gateways</h1>
                <p className={styles.subtitle}>Configure which payment methods are active for your customers</p>
            </div>

            <div className={styles.grid}>
                {methods.map((m) => (
                    <div key={m.id} className={`${styles.methodCard} ${!m.enabled ? styles.disabled : ''}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>{m.icon}</div>
                            <div className={styles.toggleArea}>
                                <label className={styles.switch}>
                                    <input 
                                        type="checkbox" 
                                        checked={m.enabled}
                                        onChange={() => toggleMethod(m.id)}
                                    />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.name}>{m.name}</h3>
                            <p className={styles.desc}>{m.description}</p>
                        </div>
                        <div className={styles.cardFooter}>
                            <span className={`${styles.status} ${m.enabled ? styles.activeText : styles.inactiveText}`}>
                                {m.enabled ? 'ACTIVE' : 'DISABLED'}
                            </span>
                            <button className={styles.settingsBtn}>Settings</button>
                        </div>
                    </div>
                ))}

                <div className={styles.addNewCard}>
                    <div className={styles.addIcon}>+</div>
                    <h3 className={styles.addTitle}>Integrate New Gateway</h3>
                    <p className={styles.addDesc}>Add PayPal, Stripe, or custom bank transfers</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
