"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const VendorProducts = () => {
    const [products, setProducts] = useState([
        { id: 101, name: 'Premium Wireless Headphones', price: '$199.99', stock: 24, status: 'Active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 102, name: 'Ultra HD Smart Camera', price: '$299.00', stock: 7, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1526170315870-ef68973e73a1?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 103, name: 'Ergonomic Gaming Mouse', price: '$49.50', stock: 150, status: 'Active', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 104, name: 'Mechanical RGB Keyboard', price: '$129.00', stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=100&h=100' },
    ]);

    const handleDelete = (id) => {
        if(confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active': return styles.statusActive;
            case 'Low Stock': return styles.statusLow;
            case 'Out of Stock': return styles.statusOut;
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleArea}>
                    <h1 className={styles.title}>Vendor Products</h1>
                    <p className={styles.subtitle}>Manage inventory and product listings</p>
                </div>
                <button className={styles.addBtn}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Add New Product
                </button>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Listing</th>
                                <th>Price</th>
                                <th>Current Stock</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className={styles.productCell}>
                                            <img src={product.image} alt={product.name} className={styles.productImg} />
                                            <div className={styles.productInfo}>
                                                <span className={styles.name}>{product.name}</span>
                                                <span className={styles.sku}>ID: #{product.id}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.price}>{product.price}</span>
                                    </td>
                                    <td>
                                        <div className={styles.stockInfo}>
                                            <span className={styles.stockNum}>{product.stock}</span>
                                            <span className={styles.stockLabel}>Units</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${getStatusStyle(product.status)}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.editBtn} title="Edit Product">
                                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                </svg>
                                            </button>
                                            <button 
                                                className={styles.deleteBtn} 
                                                onClick={() => handleDelete(product.id)}
                                                title="Delete Product"
                                            >
                                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                </svg>
                                            </button>
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

export default VendorProducts;
