"use client";

import React, { useState } from 'react';
import styles from '../helpCenter.module.css';

const RaiseTicket = () => {
  const [ticket, setTicket] = useState({
    title: "",
    category: "Order",
    description: "",
    priority: "Medium"
  });

  const handleChange = (e) => setTicket({ ...ticket, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if(!ticket.title || !ticket.description) {
      alert("Please enter title and description.");
      return;
    }
    alert(`Ticket "${ticket.title}" raised successfully with ${ticket.priority} priority!`);
    setTicket({ title: "", category: "Order", description: "", priority: "Medium" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Raise a Support Ticket</h1>
          <p className={styles.subtitle}>Manually create a support ticket on behalf of a user or for internal tracking.</p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formSection} style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Issue Title</label>
              <input type="text" name="title" value={ticket.title} onChange={handleChange} className={styles.input} placeholder="Brief summary of the issue" />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Category</label>
                <select name="category" value={ticket.category} onChange={handleChange} className={styles.select}>
                  <option value="Order">Order Issue</option>
                  <option value="Payment">Payment / Refund</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Account">Account Access</option>
                  <option value="Technical">Technical Bug</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Priority Level 🎨</label>
                <select name="priority" value={ticket.priority} onChange={handleChange} className={styles.select}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High / Urgent</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Description</label>
              <textarea name="description" value={ticket.description} onChange={handleChange} className={styles.textarea} placeholder="Detailed explanation..."></textarea>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Upload Screenshot / Files (Optional)</label>
              <input type="file" multiple className={styles.input} style={{padding: '0.5rem'}} />
            </div>
          </div>

          <div className={styles.actionsRow} style={{marginTop: '2rem'}}>
            <button className={styles.btnPrimary} style={{width: '100%', padding: '1rem', fontSize: '1.1rem'}} onClick={handleSubmit}>Submit Support Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseTicket;
