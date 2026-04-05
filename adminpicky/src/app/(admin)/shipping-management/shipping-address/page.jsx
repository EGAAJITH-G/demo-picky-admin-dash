"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ShippingAddress = () => {
    const [addresses, setAddresses] = useState([
        { id: 1, name: "Ajith", address: "14 Main Street, Anna Nagar", city: "Chennai", pincode: "600001", phone: "9876543210" },
        { id: 2, name: "Kumar", address: "42 Tech Park Avenue", city: "Coimbatore", pincode: "641001", phone: "9123456789" },
        { id: 3, name: "Sneha", address: "Plot 8, Rose Gardens", city: "Madurai", pincode: "625001", phone: "8765432109" }
    ]);

    const [form, setForm] = useState({ name: '', address: '', city: '', pincode: '', phone: '' });
    const [isEditing, setIsEditing] = useState(null);
    const [toast, setToast] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.address || !form.city || !form.pincode || !form.phone) return;

        if (isEditing) {
            setAddresses(addresses.map(a => a.id === isEditing ? { ...form, id: isEditing } : a));
            showToast("Address successfully updated.");
        } else {
            setAddresses([{ ...form, id: Date.now() }, ...addresses]);
            showToast("New destination mapped successfully.");
        }

        setForm({ name: '', address: '', city: '', pincode: '', phone: '' });
        setIsEditing(null);
    };

    const handleDelete = (id) => {
        if(confirm("Are you sure you want to drop this address routing?")) {
            setAddresses(addresses.filter(a => a.id !== id));
            showToast("Address removed from the network.");
        }
    };

    const handleEdit = (address) => {
        setIsEditing(address.id);
        setForm({ ...address });
    };

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(''), 3000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Customer Routing Addresses</h1>
                <p className={styles.subtitle}>Manage physical delivery constraints and manual address overrides</p>
            </div>

            <div className={styles.mainGrid}>
                {/* Form Section */}
                <div className={styles.formCard}>
                    <h3 className={styles.cardTitle}>{isEditing ? 'Edit Existing Route' : 'Map New Destination'}</h3>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>Customer Tag (Name)</label>
                            <input 
                                type="text" 
                                value={form.name} 
                                onChange={(e) => setForm({...form, name: e.target.value})} 
                                placeholder="E.g., Arjun K."
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Street Line & House No.</label>
                            <input 
                                type="text" 
                                value={form.address} 
                                onChange={(e) => setForm({...form, address: e.target.value})} 
                                placeholder="Street address details"
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Target City</label>
                                <input 
                                    type="text" 
                                    value={form.city} 
                                    onChange={(e) => setForm({...form, city: e.target.value})}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Pincode / Zip</label>
                                <input 
                                    type="text" 
                                    value={form.pincode} 
                                    onChange={(e) => setForm({...form, pincode: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Contact Phone</label>
                            <input 
                                type="tel" 
                                value={form.phone} 
                                onChange={(e) => setForm({...form, phone: e.target.value})}
                                placeholder="+91"
                            />
                        </div>

                        <div className={styles.btnGroup}>
                            <button type="submit" className={styles.submitBtn}>
                                {isEditing ? 'Update Network Record' : 'Register Address'}
                            </button>
                            {isEditing && (
                                <button type="button" className={styles.cancelBtn} onClick={() => { setIsEditing(null); setForm({ name: '', address: '', city: '', pincode: '', phone: '' }); }}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Table Section */}
                <div className={styles.tableCard}>
                    <h3 className={styles.cardTitle}>Global Address Directory</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Customer Identity</th>
                                    <th>Routing Details</th>
                                    <th>Pincode</th>
                                    <th style={{ textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addresses.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className={styles.custCell}>
                                                <span className={styles.custName}>{item.name}</span>
                                                <span className={styles.custPhone}>{item.phone}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.addressCell}>
                                                <span>{item.address}</span>
                                                <span className={styles.cityName}>{item.city}</span>
                                            </div>
                                        </td>
                                        <td><span className={styles.pinTag}>{item.pincode}</span></td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button className={styles.actionBtn} onClick={() => handleEdit(item)}>Edit</button>
                                                <button className={`${styles.actionBtn} ${styles.dangerBtn}`} onClick={() => handleDelete(item.id)}>Drop</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {toast && (
                <div className={styles.toast}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {toast}
                </div>
            )}
        </div>
    );
};

export default ShippingAddress;
