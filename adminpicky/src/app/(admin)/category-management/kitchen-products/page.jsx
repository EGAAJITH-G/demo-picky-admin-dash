"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const KitchenCategory = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Pressure Cooker 5L', material: 'Stainless Steel', price: 85.00, stock: 45, status: 'Active', usage: 'Home', image: 'https://images.unsplash.com/photo-1584990344619-3bc63bc0d984?w=200&h=200&fit=crop' },
        { id: 2, name: 'Non-Stick Frying Pan', material: 'Aluminum', price: 32.00, stock: 124, status: 'Active', usage: 'Professional', image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=200&h=200&fit=crop' },
        { id: 3, name: 'High-Power Blender', material: 'Plastic & Metal', price: 145.00, stock: 22, status: 'Active', usage: 'Home', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=200&h=200&fit=crop' },
        { id: 4, name: 'Chef Knife Set (8pcs)', material: 'Carbon Steel', price: 199.00, stock: 15, status: 'Active', usage: 'Professional', image: 'https://images.unsplash.com/photo-1593611311090-67bc33fb357a?w=200&h=200&fit=crop' },
        { id: 5, name: 'Manual Juicer', material: 'Plastic', price: 15.00, stock: 0, status: 'Inactive', usage: 'Home', image: 'https://images.unsplash.com/photo-1610832958506-aa56338406cd?w=200&h=200&fit=crop' },
    ]);

    const [materialFilter, setMaterialFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesMaterial = materialFilter === 'All' || p.material === materialFilter;
        return matchesSearch && matchesMaterial;
    });

    const handleDelete = (id) => {
        if(confirm('Permanently delete this kitchenware item?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>Kitchen Essentials</h1>
                    <p className={styles.subtitle}>Premium cookware, appliances, and cutlery sets</p>
                </div>
                <button className={styles.addBtn}>+ Add Kitchenware</button>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchWrapper}>
                    <input 
                        type="text" 
                        placeholder="Search kitchenware..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <select value={materialFilter} onChange={(e) => setMaterialFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Materials</option>
                        <option value="Stainless Steel">Stainless Steel</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Carbon Steel">Carbon Steel</option>
                        <option value="Plastic">Plastic</option>
                    </select>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product Details</th>
                                <th>Material / Construction</th>
                                <th>Unit Price</th>
                                <th>Stock Status</th>
                                <th>Usage Type</th>
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
                                    <td><span className={styles.specBadge}>{p.material}</span></td>
                                    <td><span className={styles.price}>${p.price}</span></td>
                                    <td>
                                        <div className={styles.stockInfo}>
                                            <span className={`${styles.stockNum} ${p.stock === 0 ? styles.out : ''}`}>
                                                {p.stock === 0 ? 'Out of Stock' : `${p.stock} Units`}
                                            </span>
                                            <div className={`${styles.statusDot} ${p.stock > 20 ? styles.good : styles.warn}`}></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`${styles.usageTag} ${p.usage === 'Professional' ? styles.pro : styles.home}`}>
                                            {p.usage}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.editBtn}>Edit</button>
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

export default KitchenCategory;
