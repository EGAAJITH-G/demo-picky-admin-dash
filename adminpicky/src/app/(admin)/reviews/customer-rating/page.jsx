"use client";

import React from 'react';
import styles from './page.module.css';

const CustomerRating = () => {
    const ratingStats = {
        average: 4.2,
        total: 120,
        breakdown: {
            5: 60,
            4: 30,
            3: 15,
            2: 10,
            1: 5
        }
    };

    // Calculate percentages for progress bars
    const calculatePercentage = (count) => {
        return ((count / ratingStats.total) * 100).toFixed(1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Global Customer Sentiments</h1>
                <p className={styles.subtitle}>Aggregate rating analytics representing overall store performance</p>
            </div>

            <div className={styles.mainGrid}>
                {/* Aggregate Summary Card */}
                <div className={styles.aggregateCard}>
                    <div className={styles.scoreCircle}>
                        <h2 className={styles.scoreInt}>{ratingStats.average}</h2>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={i < Math.floor(ratingStats.average) ? styles.starOn : styles.starOff} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <p className={styles.verifiedCount}>Based on {ratingStats.total} verified reviews</p>
                    </div>

                    <div className={styles.highlights}>
                        <div className={styles.highlightItem}>
                            <strong>+12%</strong>
                            <span>vs last month</span>
                        </div>
                        <div className={styles.highlightItem}>
                            <strong>75%</strong>
                            <span>Recommendation rate</span>
                        </div>
                    </div>
                </div>

                {/* Rating Distribution Breakdown */}
                <div className={styles.breakdownCard}>
                    <h3 className={styles.cardTitle}>Rating Distribution</h3>
                    
                    <div className={styles.barList}>
                        {[5, 4, 3, 2, 1].map(stars => {
                            const count = ratingStats.breakdown[stars];
                            const percentage = calculatePercentage(count);
                            return (
                                <div key={stars} className={styles.barRow}>
                                    <div className={styles.starLabel}>
                                        {stars} <span className={styles.starGlyph}>★</span>
                                    </div>
                                    <div className={styles.progressTrack}>
                                        <div 
                                            className={`${styles.progressFill} ${styles['fill' + stars]}`} 
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <div className={styles.countLabel}>
                                        {count}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            
            {/* Insights Section */}
            <div className={styles.insightsCard}>
                <h3 className={styles.cardTitle}>Automated Insights</h3>
                <div className={styles.bulletList}>
                    <div className={styles.bulletItem}>
                        <div className={styles.bulletIcon} style={{background: '#DCFCE7', color: '#166534'}}>✓</div>
                        <div>
                            <h4>High Satisfaction in Shipping</h4>
                            <p>Over 80% of recent 5-star reviews specifically mention fast or early delivery.</p>
                        </div>
                    </div>
                    <div className={styles.bulletItem}>
                        <div className={styles.bulletIcon} style={{background: '#FEE2E2', color: '#991B1B'}}>!</div>
                        <div>
                            <h4>Quality Control Alert</h4>
                            <p>Spike in 1-star and 2-star ratings related to Electronics category over the last 7 days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerRating;
