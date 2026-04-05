"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ShippingCharges = () => {
    const [charges, setCharges] = useState([
        { id: 1, zone: "Local (Intra-city)", amount: 50 },
        { id: 2, name: "State (Intra-state)", amount: 100 },
        { id: 3, name: "National (Inter-state)", amount: 200 },
        { id: 4, name: "Remote / ODA", amount: 350 }
    ]);

    const [form, setForm] = useState({ name: '', amount: '' });
    const [editId, setEditId] = useState(null);
    const [editAmt, setEditAmt] = useState('');

    const [toast, setToast] = useState('');

    const handleAddZone = (e) => {
        e.preventDefault();
        if(!form.name || !form.amount) return;

        setCharges([...charges, { id: Date.now(), name: form.name, amount: parseInt(form.amount) }]);
        setForm({ name: '', amount: '' });
        showToast("New delivery zone established.");
    };

    const handleSaveEdit = (id) => {
        if(editAmt === '') { setEditId(null); return; }
        setCharges(prev => prev.map(c => c.id === id ? { ...c, amount: parseInt(editAmt) } : c));
        setEditId(null);
        showToast("Zone pricing updated.");
    };

    const handleInitiateEdit = (charge) => {
        setEditId(charge.id);
        setEditAmt(charge.amount);
    };

    const handleDelete = (id) => {
        if(confirm("Are you sure you want to remove this delivery zone?")) {
            setCharges(charges.filter(c => c.id !== id));
            showToast("Delivery zone removed.");
        }
    }

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(''), 3000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Dynamic Shipping Matrices</h1>
                <p className={styles.subtitle}>Define logistical premiums based on geographical routing zones</p>
            </div>

            <div className={styles.topSection}>
                <div className={styles.addCard}>
                    <form onSubmit={handleAddZone} className={styles.formRow}>
                        <div className={styles.formGroup} style={{ flex: 2 }}>
                            <input 
                                type="text" 
                                placeholder="New Zone Name (E.g., Global Tier 1)"
                                value={form.name}
                                onChange={(e) => setForm({...form, name: e.target.value})}
                            />
                        </div>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            <div className={styles.inputPrefix}>
                                <span>₹</span>
                                <input 
                                    type="number" 
                                    placeholder="Charge Amount"
                                    value={form.amount}
                                    onChange={(e) => setForm({...form, amount: e.target.value})}
                                />
                            </div>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Configure Rule</button>
                    </form>
                </div>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Geographical Node / Zone</th>
                                <th>Applied Delivery Premium</th>
                                <th style={{ textAlign: 'right' }}>Configuration Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {charges.map(c => {
                                const zoneLabel = c.zone || c.name; // Handling legacy obj diffs
                                const isEditing = editId === c.id;
                                
                                return (
                                    <tr key={c.id} className={isEditing ? styles.editingRow : ''}>
                                        <td><span className={styles.zoneName}>{zoneLabel}</span></td>
                                        <td>
                                            {isEditing ? (
                                                <div className={styles.editWrap}>
                                                    <span>₹</span>
                                                    <input 
                                                        type="number" 
                                                        autoFocus
                                                        value={editAmt} 
                                                        onChange={(e) => setEditAmt(e.target.value)} 
                                                        className={styles.editInput}
                                                    />
                                                </div>
                                            ) : (
                                                <span className={styles.amountText}>₹{c.amount}</span>
                                            )}
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <div className={styles.actions}>
                                                {isEditing ? (
                                                    <>
                                                        <button className={styles.saveBtn} onClick={() => handleSaveEdit(c.id)}>Confirm</button>
                                                        <button className={styles.cancelBtn} onClick={() => setEditId(null)}>Discard</button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button className={styles.actionBtn} onClick={() => handleInitiateEdit(c)}>Recalculate Rate</button>
                                                        <button className={styles.delBtn} onClick={() => handleDelete(c.id)}>Delete</button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
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

export default ShippingCharges;
