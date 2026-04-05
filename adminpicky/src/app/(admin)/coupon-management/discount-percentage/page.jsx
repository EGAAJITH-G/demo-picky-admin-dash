"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const DiscountPercentage = () => {
    const [discount, setDiscount] = useState(10);
    const [applyToAll, setApplyToAll] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleApply = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Global Discount Configuration</h1>
                <p className={styles.subtitle}>Set default store-wide percentage reductions and sales logic</p>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.sliderCard}>
                    <div className={styles.visualizer}>
                        <div className={styles.percCircle}>
                            <span>{discount}%</span>
                            <small>OFF</small>
                        </div>
                    </div>

                    <div className={styles.controlGroup}>
                        <label className={styles.sliderLabel}>
                            Adjust Discount Weight
                        </label>
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={discount} 
                            onChange={(e) => setDiscount(e.target.value)} 
                            className={styles.slider}
                        />
                        <div className={styles.sliderMarks}>
                            <span>0%</span>
                            <span>25%</span>
                            <span>50%</span>
                            <span>75%</span>
                            <span>100%</span>
                        </div>
                    </div>

                    <div className={styles.toggleGroup}>
                        <label className={styles.switch}>
                            <input 
                                type="checkbox" 
                                checked={applyToAll}
                                onChange={() => setApplyToAll(!applyToAll)}
                            />
                            <span className={styles.toggleSlider}></span>
                        </label>
                        <div className={styles.toggleText}>
                            <h4>Force Apply to All Products</h4>
                            <p>Overrides individual product categories and SKU-specific sales</p>
                        </div>
                    </div>

                    <button 
                        onClick={handleApply} 
                        className={`${styles.applyBtn} ${saved ? styles.savedState : ''}`}
                    >
                        {saved ? '✓ Policy Enacted' : 'Apply Discount Policy'}
                    </button>
                    {saved && <p className={styles.successMsg}>Store rules have been successfully updated.</p>}
                </div>

                <div className={styles.infoCard}>
                    <h3 className={styles.infoTitle}>Discount Preview Simulation</h3>
                    <div className={styles.simItem}>
                        <span className={styles.simLabel}>Standard Item Price:</span>
                        <span className={styles.simOld}>₹2,000</span>
                    </div>
                    <div className={styles.simItem}>
                        <span className={styles.simLabel}>Discount Applied:</span>
                        <span className={styles.simDiff}>-₹{(2000 * (discount / 100)).toFixed(0)}</span>
                    </div>
                    <div className={styles.simDivider}></div>
                    <div className={styles.simItem}>
                        <span className={styles.simLabel}>Final Customer Price:</span>
                        <span className={styles.simFinal}>₹{(2000 - (2000 * (discount / 100))).toFixed(0)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountPercentage;
