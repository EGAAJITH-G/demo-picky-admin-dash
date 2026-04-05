"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ElectronicsCategory = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'MacBook Pro 14" M3', brand: 'Apple', price: 1999, stock: 24, status: 'Active', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop' },
        { id: 2, name: 'iPhone 15 Pro Max', brand: 'Apple', price: 1199, stock: 56, status: 'Active', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba3f21?w=200&h=200&fit=crop' },
        { id: 3, name: 'Sony WH-1000XM5', brand: 'Sony', price: 349, stock: 85, status: 'Active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
        { id: 4, name: 'Galaxy Watch 6', brand: 'Samsung', price: 299, stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
        { id: 5, name: 'Dell XPS 13 Plus', brand: 'Dell', price: 1399, stock: 0, status: 'Inactive', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=200&h=200&fit=crop' },
    ]);

    const [brandFilter, setBrandFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = brandFilter === 'All' || p.brand === brandFilter;
        return matchesSearch && matchesBrand;
    });

    const handleDelete = (id) => {
        if(confirm('Permanently remove this electronic device?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>Electronics Hub</h1>
                    <p className={styles.subtitle}>Premium gadgets, brands, and tech specs</p>
                </div>
                <button className={styles.addBtn}>+ List New Gadget</button>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchWrapper}>
                    <input 
                        type="text" 
                        placeholder="Search devices..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Brands</option>
                        <option value="Apple">Apple</option>
                        <option value="Sony">Sony</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Dell">Dell</option>
                    </select>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product Details</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Stock Stats</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(p => (
                                <tr key={p.id}>
                                    <td>
                                        <div className={styles.productCell}>
                                            <img src={p.image} className={styles.miniImg} alt={p.name} />
                                            <span className={styles.name}>{p.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.brandBadge}>{p.brand}</span>
                                    </td>
                                    <td><span className={styles.price}>${p.price}</span></td>
                                    <td>
                                        <div className={styles.stockInfo}>
                                            <span className={`${styles.stockNum} ${p.stock === 0 ? styles.out : ''}`}>
                                                {p.stock === 0 ? 'Out of Stock' : `${p.stock} Units`}
                                            </span>
                                            <div className={styles.pills}>
                                                {[1,2,3,4,5].map(i => (
                                                    <div key={i} className={`${styles.pill} ${p.stock >= i * 20 ? styles.filled : ''}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${p.status === 'Active' ? styles.active : styles.inactive}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.editBtn}>Manage</button>
                                            <button className={styles.deleteBtn} onClick={() => handleDelete(p.id)}>Trash</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ElectronicsCategory;
