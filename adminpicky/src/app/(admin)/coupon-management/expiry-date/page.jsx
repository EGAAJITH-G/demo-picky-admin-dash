"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ExpiryDate = () => {
    // Generate dates dynamically for demo purposes
    const getFutureDate = (days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    };

    const getPastDate = (days) => {
        const date = new Date();
        date.setDate(date.getDate() - days);
        return date.toISOString().split('T')[0];
    };

    const [coupons, setCoupons] = useState([
        { id: 1, code: "WELCOME20", discount: "20%", expiry: getFutureDate(30) },
        { id: 2, code: "SUMMER50", discount: "50%", expiry: getPastDate(2) },
        { id: 3, code: "FLASH10", discount: "10%", expiry: getFutureDate(2) },
        { id: 4, code: "VIPCLIENT", discount: "15%", expiry: getFutureDate(180) },
        { id: 5, code: "WINTERCLEAR", discount: "40%", expiry: getPastDate(15) }
    ]);

    const checkExpiry = (dateString) => {
        const expiryDate = new Date(dateString);
        const today = new Date();
        
        // Reset time to compare just dates properly
        today.setHours(0, 0, 0, 0);
        expiryDate.setHours(0, 0, 0, 0);

        if (expiryDate < today) return "Expired";
        
        const diffTime = Math.abs(expiryDate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays <= 3) return `Expiring Soon (${diffDays} days left)`;
        return `Active (${diffDays} days left)`;
    };

    const [selectedDate, setSelectedDate] = useState('');
    const [auditTarget, setAuditTarget] = useState(null);

    const handleAudit = () => {
        if (!selectedDate) return;
        
        const matches = coupons.filter(c => c.expiry === selectedDate);
        setAuditTarget({
            date: selectedDate,
            matches: matches
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Campaign Expiration Planner</h1>
                <p className={styles.subtitle}>Audit expiration timelines to prevent discount leakage</p>
            </div>

            <div className={styles.auditBlock}>
                <div className={styles.auditCard}>
                    <h3 className={styles.cardTitle}>Run Date Audit</h3>
                    <div className={styles.auditControls}>
                        <div className={styles.datePickerWrap}>
                            <input 
                                type="date" 
                                value={selectedDate} 
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className={styles.dateInput}
                            />
                        </div>
                        <button onClick={handleAudit} className={styles.auditBtn}>Analyze Timelines</button>
                    </div>

                    {auditTarget && (
                        <div className={styles.auditResults}>
                            {auditTarget.matches.length > 0 ? (
                                <p className={styles.auditMatch}>Found {auditTarget.matches.length} campaigns expiring exactly on {auditTarget.date}.</p>
                            ) : (
                                <p className={styles.auditClear}>No coupons are scheduled to expire on {auditTarget.date}.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.tableCard}>
                <h3 className={styles.tableTitle}>Global Expiration Roster</h3>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Promo Code</th>
                                <th>Discount Yield</th>
                                <th>Expiry Date</th>
                                <th>Current Status / Timeline</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coupons.map((coupon) => {
                                const status = checkExpiry(coupon.expiry);
                                const isExpired = status === 'Expired';
                                const isWarning = status.includes('Expiring Soon');
                                
                                return (
                                    <tr key={coupon.id} className={isExpired ? styles.rowExpired : ''}>
                                        <td><span className={styles.codeTag}>{coupon.code}</span></td>
                                        <td><span className={styles.discount}>{coupon.discount}</span></td>
                                        <td><span className={styles.expiryDate}>{coupon.expiry}</span></td>
                                        <td>
                                            <span className={`
                                                ${styles.statusBadge} 
                                                ${isExpired ? styles.badgeExpired : ''} 
                                                ${isWarning ? styles.badgeWarning : ''} 
                                                ${!isExpired && !isWarning ? styles.badgeActive : ''}
                                            `}>
                                                {status}
                                            </span>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <button className={styles.extendBtn} disabled={isExpired}>
                                                Extend
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ExpiryDate;
