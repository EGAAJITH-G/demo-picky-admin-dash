"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ProductStatus = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Premium Leather Boots', status: 'Active', visibility: 'Public', lastModified: '2 hours ago' },
        { id: 2, name: 'Smart Home Speaker', status: 'Inactive', visibility: 'Hidden', lastModified: '1 day ago' },
        { id: 3, name: 'Silk Floral Scarf', status: 'Active', visibility: 'Public', lastModified: '5 mins ago' },
        { id: 4, name: 'Wireless Headphones', status: 'Active', visibility: 'Public', lastModified: 'Just now' },
        { id: 5, name: 'Ceramic Vase Set', status: 'Inactive', visibility: 'Hidden', lastModified: '3 days ago' },
    ]);

    const toggleStatus = (id) => {
        setProducts(prev => prev.map(p => {
            if (p.id === id) {
                const isActive = p.status === 'Active';
                return { 
                    ...p, 
                    status: isActive ? 'Inactive' : 'Active',
                    visibility: isActive ? 'Hidden' : 'Public',
                    lastModified: 'Just now'
                };
            }
            return p;
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Product Visibility</h1>
                <p className={styles.subtitle}>Control store-front presence and accessibility</p>
            </div>

            <div className={styles.grid}>
                {products.map(product => (
                    <div key={product.id} className={`${styles.statusCard} ${product.status === 'Inactive' ? styles.cardInactive : ''}`}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <span className={styles.lastEdit}>{product.lastModified}</span>
                        </div>
                        
                        <div className={styles.cardBody}>
                            <div className={styles.stat}>
                                <span className={styles.label}>Frontend Visibility</span>
                                <span className={`${styles.val} ${product.visibility === 'Public' ? styles.public : styles.hidden}`}>
                                    {product.visibility}
                                </span>
                            </div>
                        </div>

                        <div className={styles.cardFooter}>
                            <div className={styles.statusLabel}>
                                Current State: <strong>{product.status}</strong>
                            </div>
                            <label className={styles.switch}>
                                <input 
                                    type="checkbox" 
                                    checked={product.status === 'Active'}
                                    onChange={() => toggleStatus(product.id)}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductStatus;
