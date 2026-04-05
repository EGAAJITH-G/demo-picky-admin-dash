"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const CustomerList = () => {
    const [customers, setCustomers] = useState([
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '+1 234 567 890', status: 'Active', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '+1 345 678 901', status: 'Active', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
        { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', phone: '+1 456 789 012', status: 'Blocked', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
        { id: 4, name: 'Diana Ross', email: 'diana@example.com', phone: '+1 567 890 123', status: 'Active', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
        { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', phone: '+1 678 901 234', status: 'Blocked', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const toggleStatus = (id) => {
        setCustomers(prev => prev.map(c => {
            if (c.id === id) {
                return { ...c, status: c.status === 'Active' ? 'Blocked' : 'Active' };
            }
            return c;
        }));
    };

    const filtered = customers.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleArea}>
                    <h1 className={styles.title}>Customers</h1>
                    <p className={styles.subtitle}>Directory of all registered shoppers and clients</p>
                </div>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchBox}>
                    <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Search by name or email..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className={styles.filterSelect}
                >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                </select>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Client Profile</th>
                                <th>Contact Info</th>
                                <th>State</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(customer => (
                                <tr key={customer.id}>
                                    <td>
                                        <div className={styles.profileCell}>
                                            <img src={customer.image} className={styles.avatar} alt={customer.name} />
                                            <div className={styles.profileInfo}>
                                                <span className={styles.name}>{customer.name}</span>
                                                <span className={styles.id}>UID: #00{customer.id}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.contactCell}>
                                            <span className={styles.email}>{customer.email}</span>
                                            <span className={styles.phone}>{customer.phone}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${customer.status === 'Active' ? styles.active : styles.blocked}`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.viewBtn}>Profile</button>
                                            <button 
                                                className={`${styles.toggleBtn} ${customer.status === 'Active' ? styles.btnBlock : styles.btnActive}`}
                                                onClick={() => toggleStatus(customer.id)}
                                            >
                                                {customer.status === 'Active' ? 'Block' : 'Active'}
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

export default CustomerList;
