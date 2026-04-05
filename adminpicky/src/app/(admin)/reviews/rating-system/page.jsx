"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

// Reusable component demonstrated on its own page as requested
const InteractiveRating = ({ initialRating = 0, size = 'large' }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    return (
        <div className={`${styles.starSystem} ${styles[size]}`}>
            <div className={styles.starsGrp}>
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                        <button
                            type="button"
                            key={starValue}
                            className={`${styles.starNode} ${starValue <= (hover || rating) ? styles.nodeOn : styles.nodeOff}`}
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </button>
                    );
                })}
            </div>
            <div className={styles.ratingText}>
                {rating > 0 ? (
                    <span className={styles.selectedTxt}>You selected {rating} {rating === 1 ? 'star' : 'stars'}</span>
                ) : (
                    <span className={styles.promptTxt}>Hover to rate</span>
                )}
            </div>
        </div>
    );
};

const RatingSystem = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Rating System UI Component</h1>
                <p className={styles.subtitle}>Test and export the interactive star rating module</p>
            </div>

            <div className={styles.showcaseGrid}>
                {/* Large Main Showcase */}
                <div className={styles.demoCard}>
                    <h3 className={styles.cardTitle}>Default Implementation (Large)</h3>
                    <p className={styles.desc}>This is the standard size used for direct customer feedback prompts.</p>
                    <div className={styles.demoBox}>
                        <InteractiveRating size="large" />
                    </div>
                </div>

                {/* Medium Showcase */}
                <div className={styles.demoCard}>
                    <h3 className={styles.cardTitle}>Product Card Scale (Medium)</h3>
                    <p className={styles.desc}>Scaled down for use within product listings or compact forms.</p>
                    <div className={styles.demoBox}>
                        <InteractiveRating size="medium" initialRating={3} />
                    </div>
                </div>

                {/* Small Showcase */}
                <div className={styles.demoCard}>
                    <h3 className={styles.cardTitle}>Inline Table Scale (Small)</h3>
                    <p className={styles.desc}>Minimized for use inside data tables or tight list rows.</p>
                    <div className={styles.demoBox}>
                        <InteractiveRating size="small" initialRating={5} />
                    </div>
                </div>
            </div>

            <div className={styles.codeDoc}>
                <h3 className={styles.docTitle}>Integration Code Example</h3>
                <pre className={styles.codeBlock}>
                    <code>
{`import { StarRating } from '@/components/common';

// Usage
<StarRating 
    initialRating={4} 
    onChange={(val) => console.log('New Rating:', val)} 
    size="medium" // 'small' | 'medium' | 'large'
/>`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default RatingSystem;
