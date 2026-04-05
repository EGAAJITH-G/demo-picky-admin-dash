"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const VendorList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [vendors, setVendors] = useState([
        { id: 1, name: 'Alice Walker', business: 'Walker Arts', email: 'alice@arts.com', status: 'Active', orders: 45, joined: 'Jan 12, 2024' },
        { id: 2, name: 'Bob Smith', business: 'Bob Electronics', email: 'bob@elec.com', status: 'Blocked', orders: 12, joined: 'Feb 05, 2024' },
        { id: 3, name: 'Charlie Day', business: 'Day Essentials', email: 'charlie@ess.com', status: 'Active', orders: 89, joined: 'Dec 20, 2023' },
        { id: 4, name: 'Diana King', business: 'King Jewels', email: 'diana@jewels.com', status: 'Active', orders: 156, joined: 'Oct 15, 2023' },
        { id: 5, name: 'Ethan Hunt', business: 'Mission Gadgets', email: 'ethan@gadgets.com', status: 'Blocked', orders: 5, joined: 'Mar 10, 2024' },
    ]);

    const handleToggleStatus = (id) => {
        setVendors(prev => prev.map(v => 
            v.id === id ? { ...v, status: v.status === 'Active' ? 'Blocked' : 'Active' } : v
        ));
    };

    const filteredVendors = vendors.filter(v => {
        const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             v.business.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || v.status === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Vendor Directory</h1>
                <p className={styles.subtitle}>View and manage all registered vendors</p>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchWrapper}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Search vendors..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <button 
                        className={`${styles.filterBtn} ${filter === 'All' ? styles.activeFilter : ''}`}
                        onClick={() => setFilter('All')}
                    >
                        All
                    </button>
                    <button 
                        className={`${styles.filterBtn} ${filter === 'Active' ? styles.activeFilter : ''}`}
                        onClick={() => setFilter('Active')}
                    >
                        Active
                    </button>
                    <button 
                        className={`${styles.filterBtn} ${filter === 'Blocked' ? styles.activeFilter : ''}`}
                        onClick={() => setFilter('Blocked')}
                    >
                        Blocked
                    </button>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Vendor</th>
                                <th>Business Name</th>
                                <th>Total Orders</th>
                                <th>Joined Date</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVendors.map((vendor) => (
                                <tr key={vendor.id}>
                                    <td>
                                        <div className={styles.vendorCell}>
                                            <div className={styles.avatar}>{vendor.name.charAt(0)}</div>
                                            <div className={styles.details}>
                                                <span className={styles.name}>{vendor.name}</span>
                                                <span className={styles.email}>{vendor.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.businessText}>{vendor.business}</span>
                                    </td>
                                    <td>
                                        <span className={styles.ordersBadge}>{vendor.orders} Orders</span>
                                    </td>
                                    <td>{vendor.joined}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${vendor.status === 'Active' ? styles.active : styles.blocked}`}>
                                            {vendor.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.viewBtn}>View Profile</button>
                                            <button 
                                                className={`${styles.toggleStatusBtn} ${vendor.status === 'Active' ? styles.blockColor : styles.unblockColor}`}
                                                onClick={() => handleToggleStatus(vendor.id)}
                                            >
                                                {vendor.status === 'Active' ? 'Block' : 'Unblock'}
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

export default VendorList;
