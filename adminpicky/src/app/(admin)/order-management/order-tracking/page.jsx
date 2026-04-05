"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const OrderTracking = () => {
    const tracking = [
        { step: "Order Placed", date: "Apr 01, 10:30 AM", completed: true, active: false },
        { step: "Processing", date: "Apr 01, 02:45 PM", completed: true, active: false },
        { step: "Shipped", date: "Apr 02, 09:00 AM", completed: true, active: true },
        { step: "Out for Delivery", date: "Scheduled Today", completed: false, active: false },
        { step: "Delivered", date: "Expected Tomorrow", completed: false, active: false }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Live Order Tracking</h1>
                <p className={styles.subtitle}>Monitor high-fidelity fulfillment progress in real-time</p>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.orderSummaryCard}>
                    <div className={styles.orderHead}>
                        <div className={styles.sumBox}>
                            <label>Tracking ID</label>
                            <span>#TRK-990-21</span>
                        </div>
                        <div className={styles.sumBox}>
                            <label>Current Location</label>
                            <span>Sorting Hub - Toronto</span>
                        </div>
                        <div className={styles.sumBox}>
                            <label>Estimated Delivery</label>
                            <span>Apr 05, 2024</span>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineCard}>
                    <h3 className={styles.cardTitle}>Fulfillment Journey</h3>
                    <div className={styles.timeline}>
                        {tracking.map((item, index) => (
                            <div key={index} className={`${styles.timelineStep} ${item.completed ? styles.completed : ''} ${item.active ? styles.activeStep : ''}`}>
                                <div className={styles.iconBox}>
                                    {item.completed ? (
                                        <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <div className={styles.circle}></div>
                                    )}
                                </div>
                                <div className={styles.stepContent}>
                                    <h4 className={styles.stepTitle}>{item.step}</h4>
                                    <p className={styles.stepDate}>{item.date}</p>
                                </div>
                                {index < tracking.length - 1 && <div className={styles.line}></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
