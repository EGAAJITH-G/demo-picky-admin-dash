"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ClothingCategory = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Cotton Crew Neck T-Shirt', price: 29.99, stock: 120, status: 'Active', size: 'M', color: 'White', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&h=200&fit=crop' },
        { id: 2, name: 'Slim Fit Denim Jeans', price: 59.99, stock: 45, status: 'Active', size: 'L', color: 'Blue', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop' },
        { id: 3, name: 'Heavyweight Fleece Hoodie', price: 79.99, stock: 12, status: 'Active', size: 'XL', color: 'Black', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop' },
        { id: 4, name: 'Windbreaker Utility Jacket', price: 120.00, stock: 8, status: 'Inactive', size: 'M', color: 'Green', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [sizeFilter, setSizeFilter] = useState('All');
    const [colorFilter, setColorFilter] = useState('All');

    const handleDelete = (id) => {
        if(confirm('Are you sure you want to delete this clothing item?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSize = sizeFilter === 'All' || p.size === sizeFilter;
        const matchesColor = colorFilter === 'All' || p.color === colorFilter;
        return matchesSearch && matchesSize && matchesColor;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>Clothing Collection</h1>
                    <p className={styles.subtitle}>Manage apparel, sizes, and trendy stock</p>
                </div>
                <button className={styles.addBtn}>+ Add New Apparel</button>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchWrapper}>
                    <input 
                        type="text" 
                        placeholder="Search apparel..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Sizes</option>
                        <option value="S">Small (S)</option>
                        <option value="M">Medium (M)</option>
                        <option value="L">Large (L)</option>
                        <option value="XL">Extra Large (XL)</option>
                    </select>
                    <select value={colorFilter} onChange={(e) => setColorFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Colors</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Black">Black</option>
                        <option value="Green">Green</option>
                    </select>
                </div>
            </div>

            <div className={styles.grid}>
                {filtered.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.imgWrapper}>
                            <img src={product.image} alt={product.name} />
                            <span className={`${styles.statusBadge} ${product.status === 'Active' ? styles.active : styles.inactive}`}>
                                {product.status}
                            </span>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <span className={styles.price}>${product.price}</span>
                            </div>
                            <div className={styles.meta}>
                                <span className={styles.spec}>Size: {product.size}</span>
                                <span className={styles.dot}>•</span>
                                <span className={styles.spec}>Color: {product.color}</span>
                            </div>
                            <div className={styles.stockInfo}>
                                <div className={styles.stockBar}>
                                    <div className={styles.stockFill} style={{ width: `${Math.min(100, (product.stock / 150) * 100)}%` }}></div>
                                </div>
                                <span className={styles.stockLabel}>{product.stock} in stock</span>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.editBtn}>Edit</button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(product.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClothingCategory;
