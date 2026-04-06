"use client";

import React, { useState } from 'react';
import styles from '../games.module.css';

const RewardManagement = () => {
  const [rewards, setRewards] = useState([
    { id: 1, name: "10% OFF Storewide", type: "Coupon", value: "10%", expiry: "2026-12-31" },
    { id: 2, name: "100 Loyalty Points", type: "Points", value: "100", expiry: "Never" },
    { id: 3, name: "$5 Cashback Wallet", type: "Cashback", value: "$5", expiry: "2026-06-30" },
    { id: 4, name: "Free Shipping Code", type: "Coupon", value: "FREE", expiry: "2026-05-15" },
    { id: 5, name: "500 Mega Points", type: "Points", value: "500", expiry: "Never" },
    { id: 6, name: "BOGO Offer", type: "Coupon", value: "BOGO", expiry: "2026-08-01" },
    { id: 7, name: "$20 Wallet Credit", type: "Cashback", value: "$20", expiry: "2026-11-30" },
    { id: 8, name: "25% OFF Electronics", type: "Coupon", value: "25%", expiry: "2026-07-04" }
  ]);

  const [editingId, setEditingId] = useState(null);
  
  const [form, setForm] = useState({
    name: "",
    type: "Coupon",
    value: "",
    expiry: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    if(!form.name) return alert("Please fill the Reward Name");
    
    if (editingId) {
      setRewards(rewards.map(r => r.id === editingId ? { ...r, ...form, expiry: form.expiry || "Never" } : r));
      setEditingId(null);
      alert("Reward updated successfully!");
    } else {
      setRewards([{ id: Date.now(), ...form, expiry: form.expiry || "Never" }, ...rewards]);
      alert("Reward created successfully!");
    }
    setForm({ name: "", type: "Coupon", value: "", expiry: "" });
  };

  const handleEdit = (r) => {
    setEditingId(r.id);
    setForm({
      name: r.name,
      type: r.type,
      value: r.value,
      expiry: r.expiry === "Never" ? "" : r.expiry
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this reward?")) {
      setRewards(rewards.filter(r => r.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Reward Management</h1>
          <p className={styles.subtitle}>Define the prizes users can win from your games.</p>
        </div>
      </div>

      <div className={styles.contentWrapper} style={{marginBottom: '3rem'}}>
        <div className={styles.formSection} style={{flex: 1}}>
          <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)'}}>
            {editingId ? 'Edit Reward' : 'Create New Reward'}
          </h3>
          
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Reward Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="e.g. 50% OFF Summer Sale" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Reward Type</label>
              <select name="type" value={form.type} onChange={handleChange} className={styles.select}>
                <option value="Coupon">Coupon</option>
                <option value="Points">Points</option>
                <option value="Cashback">Cashback (Wallet)</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Reward Value</label>
              <input type="text" name="value" value={form.value} onChange={handleChange} className={styles.input} placeholder="e.g. 50% or 100" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Expiry Date (Leave blank for Never)</label>
              <input type="date" name="expiry" value={form.expiry} onChange={handleChange} className={styles.input} />
            </div>
          </div>

          <div className={styles.actionsRow}>
            {editingId && (
              <button 
                className={styles.btnPrimary} 
                style={{background: '#64748b', marginRight: 'auto'}} 
                onClick={() => {
                  setEditingId(null);
                  setForm({ name: "", type: "Coupon", value: "", expiry: "" });
                }}>
                Cancel Edit
              </button>
            )}
            <button className={styles.btnPrimary} onClick={handleCreate}>
              {editingId ? 'Update Reward' : 'Add Reward'}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <h3 style={{fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)'}}>Configured Rewards</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Reward Name</th>
              <th>Type</th>
              <th>Value</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rewards.map((r, index) => (
              <tr key={r.id}>
                <td>#{index + 1}</td>
                <td style={{fontWeight: 600, color: 'var(--primary-color)'}}>{r.name}</td>
                <td>
                  <span className={`${styles.badge} ${styles.primary}`}>{r.type}</span>
                </td>
                <td style={{fontWeight: 'bold'}}>{r.value}</td>
                <td>{r.expiry}</td>
                <td>
                   <div className={styles.actionWrapper}>
                      <button className={styles.iconBtn} title="Edit" onClick={() => handleEdit(r)}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                      </button>
                      <button className={`${styles.iconBtn} ${styles.delete}`} title="Delete" onClick={() => handleDelete(r.id)}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                   </div>
                </td>
              </tr>
            ))}
            {rewards.length === 0 && (
              <tr><td colSpan="6" style={{textAlign: 'center', padding: '2rem'}}>No rewards created yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default RewardManagement;
