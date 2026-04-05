"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const StockQuantity = () => {
    const [inventory, setInventory] = useState([
        { id: 101, name: "Premium T-Shirt", category: "Clothing", stock: 150 },
        { id: 102, name: "Gaming Laptop", category: "Electronics", stock: 12 },
        { id: 103, name: "Jasmine Perfume", category: "Beauty", stock: 4 },
        { id: 104, name: "Pressure Cooker", category: "Kitchen", stock: 0 },
        { id: 105, name: "Gift Box Bundle", category: "Gifts", stock: 45 },
        { id: 106, name: "Denim Jeans", category: "Clothing", stock: 80 },
        { id: 107, name: "Wireless Earbuds", category: "Electronics", stock: 3 },
        { id: 108, name: "Face Cream SPF 50", category: "Beauty", stock: 25 },
        { id: 109, name: "Silicone Spatula", category: "Kitchen", stock: 110 },
        { id: 110, name: "Smart Watch", category: "Electronics", stock: 0 }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    const getStatus = (stock) => {
        if (stock === 0) return { label: 'Out of Stock', color: 'out' };
        if (stock < 10) return { label: 'Low Stock', color: 'low' };
        return { label: 'In Stock', color: 'good' };
    };

    const handleExportCSV = () => {
        const headers = ['Product ID', 'Name', 'Category', 'Stock Level', 'Status'];
        const csvRows = [
            headers.join(','),
            ...inventory.map(item => {
                const status = getStatus(item.stock).label;
                return [item.id, `"${item.name}"`, item.category, item.stock, status].join(',');
            })
        ];
        
        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `inventory-report-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const filtered = inventory.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCat = filterCategory === 'All' || item.category === filterCategory;
        return matchesSearch && matchesCat;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Stock Quantity Tracker</h1>
                    <p className={styles.subtitle}>Unified view of all physical stock across all warehouses</p>
                </div>
                <button onClick={handleExportCSV} className={styles.exportBtn}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Export Inventory (CSV)
                </button>
            </div>

            <div className={styles.toolbar}>
                <input 
                    type="text" 
                    placeholder="Search Products..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
                <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className={styles.filterSelect}>
                    <option value="All">All Categories</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Gifts">Gifts</option>
                </select>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Current Stock</th>
                                <th style={{ textAlign: 'right' }}>Health Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(item => {
                                const statusInfo = getStatus(item.stock);
                                return (
                                    <tr key={item.id} className={item.stock === 0 ? styles.depletedRow : ''}>
                                        <td><span className={styles.idLabel}>#{item.id}</span></td>
                                        <td><span className={styles.nameLabel}>{item.name}</span></td>
                                        <td><span className={styles.catLabel}>{item.category}</span></td>
                                        <td>
                                            <span className={`${styles.stockVal} ${styles[statusInfo.color + 'Text']}`}>
                                                {item.stock} Units
                                            </span>
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <span className={`${styles.statusBadge} ${styles[statusInfo.color]}`}>
                                                <span className={styles.dot}></span>
                                                {statusInfo.label}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StockQuantity;
