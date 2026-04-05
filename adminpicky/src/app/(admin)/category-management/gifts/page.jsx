"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const GiftCategory = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Giant Plush Teddy Bear', occasion: 'Birthday', price: 45.00, stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1559440666-3023055e81f1?w=200&h=200&fit=crop' },
        { id: 2, name: 'Premium Wedding Gift Box', occasion: 'Wedding', price: 120.00, stock: 8, status: 'Active', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&h=200&fit=crop' },
        { id: 3, name: 'Handmade Anniversary Card', occasion: 'Anniversary', price: 12.00, stock: 150, status: 'Active', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&h=200&fit=crop' },
        { id: 4, name: 'Valentine Surprise Hamper', occasion: 'Anniversary', price: 89.00, stock: 0, status: 'Inactive', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=200&h=200&fit=crop' },
    ]);

    const [occasionFilter, setOccasionFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesOccasion = occasionFilter === 'All' || p.occasion === occasionFilter;
        return matchesSearch && matchesOccasion;
    });

    const handleDelete = (id) => {
        if(confirm('Delete this gift item?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>Gifts & Occasions</h1>
                    <p className={styles.subtitle}>Curate thoughtful gifts for every celebration</p>
                </div>
                <button className={styles.addBtn}>+ Create New Gift</button>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchWrapper}>
                    <input 
                        type="text" 
                        placeholder="Search gifts..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <select value={occasionFilter} onChange={(e) => setOccasionFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Occasions</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
            </div>

            <div className={styles.grid}>
                {filtered.map(product => (
                    <div key={product.id} className={styles.giftCard}>
                        <div className={styles.imageOverlay}>
                            <img src={product.image} alt={product.name} />
                            <span className={styles.occasionBadge}>{product.occasion}</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.name}>{product.name}</h3>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>${product.price}</span>
                                <span className={`${styles.statusDot} ${product.status === 'Active' ? styles.activeDot : styles.inactiveDot}`}></span>
                            </div>
                            <div className={styles.stockInfo}>
                                <span className={styles.stockLabel}>Stock Level: {product.stock} items</span>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.editBtn}>Edit</button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(product.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GiftCategory;
