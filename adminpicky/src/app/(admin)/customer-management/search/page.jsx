"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const CustomerSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', orders: 12, spend: '$450.00' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', orders: 8, spend: '$320.00' },
        { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', orders: 5, spend: '$150.00' },
    ]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        // Simple search logic
        if (e.target.value === '') {
            setResults([]);
        } else {
             // In real app, this would fetch from API
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Global Customer Search</h1>
                <p className={styles.subtitle}>Find any customer across the entire system instantly</p>
            </div>

            <div className={styles.searchSection}>
                <div className={styles.searchContainer}>
                    <input 
                        type="text" 
                        placeholder="Type name, email, or order ID..." 
                        value={query}
                        onChange={handleSearch}
                        className={styles.searchInput}
                    />
                    <button className={styles.searchBtn}>Search</button>
                    <div className={styles.recentTags}>
                        <span>Recent:</span>
                        <button onClick={() => setQuery('Alice')}>Alice</button>
                        <button onClick={() => setQuery('ORD-990')}>#ORD-990</button>
                    </div>
                </div>
            </div>

            {results.length > 0 && (
                <div className={styles.resultsSection}>
                    <h3 className={styles.resultsTitle}>Search Results ({results.length})</h3>
                    <div className={styles.resultsGrid}>
                        {results.map(res => (
                            <div key={res.id} className={styles.resCard}>
                                <div className={styles.resInfo}>
                                    <h4 className={styles.resName}>{res.name}</h4>
                                    <p className={styles.resEmail}>{res.email}</p>
                                </div>
                                <div className={styles.resStats}>
                                    <div className={styles.statLine}>
                                        <span>Orders:</span> {res.orders}
                                    </div>
                                    <div className={styles.statLine}>
                                        <span>Lifetime Spend:</span> {res.spend}
                                    </div>
                                </div>
                                <button className={styles.viewBtn}>View Detailed Profile</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerSearch;
