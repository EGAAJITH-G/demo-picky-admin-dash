"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const BeautyCategory = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Velvet Matte Lipstick', brand: 'Luxe Color', price: 24.50, stock: 156, status: 'Active', skinType: 'All', image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=200&h=200&fit=crop' },
        { id: 2, name: 'Hydrating Face Cream', brand: 'Pure Skin', price: 42.00, stock: 89, status: 'Active', skinType: 'Dry', image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=200&h=200&fit=crop' },
        { id: 3, name: 'Midnight Jasmine Perfume', brand: 'Aura', price: 125.00, stock: 34, status: 'Active', skinType: 'Sensitive', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop' },
        { id: 4, name: 'Professional Makeup Kit', brand: 'Artistry', price: 199.00, stock: 15, status: 'Active', skinType: 'Oily', image: 'https://images.unsplash.com/photo-1522335789183-b15222529984?w=200&h=200&fit=crop' },
        { id: 5, name: 'Charcoal Face Mask', brand: 'Care', price: 18.00, stock: 250, status: 'Inactive', skinType: 'Normal', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop' },
    ]);

    const [skinFilter, setSkinFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSkin = skinFilter === 'All' || p.skinType === skinFilter;
        return matchesSearch && matchesSkin;
    });

    const handleDelete = (id) => {
        if(confirm('Remove this beauty product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>Beauty & Skincare</h1>
                    <p className={styles.subtitle}>Curate your luxury cosmetic and skincare lines</p>
                </div>
                <button className={styles.addBtn}>+ Add Beauty Product</button>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchWrapper}>
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <select value={skinFilter} onChange={(e) => setSkinFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Skin Types</option>
                        <option value="Dry">Dry Skin</option>
                        <option value="Oily">Oily Skin</option>
                        <option value="Sensitive">Sensitive</option>
                        <option value="Normal">Normal</option>
                    </select>
                </div>
            </div>

            <div className={styles.grid}>
                {filtered.map(product => (
                    <div key={product.id} className={styles.beautyCard}>
                        <div className={styles.imgArea}>
                            <img src={product.image} alt={product.name} />
                            <div className={styles.brandOverlay}>{product.brand}</div>
                            <span className={`${styles.statusBadge} ${product.status === 'Active' ? styles.active : styles.inactive}`}>
                                {product.status}
                            </span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.name}>{product.name}</h3>
                            <div className={styles.details}>
                                <span className={styles.skinTag}>{product.skinType} Skin</span>
                                <span className={styles.price}>${product.price}</span>
                            </div>
                            <div className={styles.stockStatus}>
                                <span className={styles.stockLabel}>Availability</span>
                                <span className={styles.stockCount}>{product.stock} items</span>
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

export default BeautyCategory;
