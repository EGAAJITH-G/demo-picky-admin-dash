"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const UsageLimit = () => {
    const [coupons, setCoupons] = useState([
        { code: "SAVE10", limit: 100, used: 100 },
        { code: "WELCOME20", limit: 50, used: 45 },
        { code: "FLASH10", limit: 200, used: 120 },
        { code: "NEWUSER", limit: 500, used: 50 },
        { code: "VIPONLY", limit: 10, used: 9 }
    ]);

    const getRemaining = (limit, used) => limit - used;
    
    const getPercentage = (limit, used) => {
        return ((used / limit) * 100).toFixed(0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Traffic & Usage Limits</h1>
                <p className={styles.subtitle}>Monitor active redemption metrics to prevent margin depletion</p>
            </div>

            {/* Critical Alerts */}
            {coupons.filter(c => getRemaining(c.limit, c.used) <= Math.ceil(c.limit * 0.1)).map((alertCoupon, idx) => {
                const remaining = getRemaining(alertCoupon.limit, alertCoupon.used);
                return (
                    <div key={`alert-${idx}`} className={`${styles.alert} ${remaining === 0 ? styles.alertDanger : styles.alertWarning}`}>
                        <div className={styles.alertIcon}>!</div>
                        <div className={styles.alertContent}>
                            <strong>{alertCoupon.code}</strong> 
                            {remaining === 0 
                                ? ' has completely depleted its usage limit and is now inert.' 
                                : ` is critically close to its limit (${remaining} redemptions remaining).`
                            }
                        </div>
                    </div>
                );
            })}

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Active Promo Key</th>
                                <th>Usage Capacity</th>
                                <th>Redemption Progress</th>
                                <th style={{ textAlign: 'right' }}>Remaining Quota</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coupons.map((coupon, idx) => {
                                const remaining = getRemaining(coupon.limit, coupon.used);
                                const percentage = getPercentage(coupon.limit, coupon.used);
                                const isDepleted = remaining === 0;

                                return (
                                    <tr key={idx} className={isDepleted ? styles.rowDepleted : ''}>
                                        <td>
                                            <span className={styles.codeTag}>{coupon.code}</span>
                                        </td>
                                        <td>
                                            <div className={styles.fraction}>
                                                <span className={styles.usedNum}>{coupon.used}</span>
                                                <span className={styles.sep}>/</span>
                                                <span className={styles.limitNum}>{coupon.limit}</span>
                                            </div>
                                        </td>
                                        <td style={{ width: '40%' }}>
                                            <div className={styles.progressContainer}>
                                                <div className={styles.progressTrack}>
                                                    <div 
                                                        className={`${styles.progressFill} ${isDepleted ? styles.fillDanger : (percentage > 85 ? styles.fillWarning : styles.fillSafe)}`} 
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                                <span className={styles.percText}>{percentage}% Consumed</span>
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <span className={`${styles.remainingBadge} ${isDepleted ? styles.badgeDanger : ''}`}>
                                                {remaining} Left
                                            </span>
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

export default UsageLimit;
