"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const OtherProducts = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Eco-Friendly Yoga Mat', category: 'Fitness', price: 35.00, stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1592432676556-267977461947?w=200&h=200&fit=crop' },
        { id: 2, name: 'Scented Soy Candle Set', category: 'Decor', price: 18.00, stock: 200, status: 'Active', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=200&h=200&fit=crop' },
        { id: 3, name: 'Bamboo Toothbrush (4-pack)', category: 'Lifestyle', price: 9.99, stock: 500, status: 'Active', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=200&h=200&fit=crop' },
        { id: 4, name: 'Adjustable Tablet Stand', category: 'Tech Acc', price: 29.00, stock: 15, status: 'Active', image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=200&h=200&fit=crop' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleDelete = (id) => {
        if(confirm('Permanently remove this item from general inventory?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>General Catalog</h1>
                    <p className={styles.subtitle}>Miscellaneous inventory and uncategorized listings</p>
                </div>
                <button className={styles.addBtn}>+ Quick Add Item</button>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchWrapper}>
                    <input 
                        type="text" 
                        placeholder="Search general items..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
            </div>

            <div className={styles.grid}>
                {filtered.map(product => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imgWrapper}>
                            <img src={product.image} alt={product.name} />
                            <span className={styles.catLabel}>{product.category}</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.name}>{product.name}</h3>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>${product.price}</span>
                                <span className={styles.stock}>In Stock: {product.stock}</span>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.editBtn}>Edit</button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(product.id)}>Discard</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherProducts;
