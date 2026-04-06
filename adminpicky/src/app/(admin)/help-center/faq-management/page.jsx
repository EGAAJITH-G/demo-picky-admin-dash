"use client";

import React, { useState } from 'react';
import styles from '../helpCenter.module.css';

const FAQManagement = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, q: "How to place order?", a: "Select product and click buy on the checkout screen. Make sure your payment info is correct.", category: "Orders" },
    { id: 2, q: "Refund time?", a: "Refunds typically take 5-7 working days to process into your original payment method.", category: "Payments" },
    { id: 3, q: "Where is my tracking number?", a: "Tracking numbers are sent via email once the vendor processes the shipment.", category: "Shipping" }
  ]);

  const [form, setForm] = useState({ q: "", a: "", category: "Orders" });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSaveFAQ = () => {
    if(!form.q || !form.a) return alert("Please fill both question and answer.");
    
    if (editingId) {
      setFaqs(faqs.map(f => f.id === editingId ? { ...f, ...form } : f));
      setEditingId(null);
      alert("FAQ Updated Successfully!");
    } else {
      setFaqs([{ id: Date.now(), ...form }, ...faqs]);
      alert("FAQ Added Successfully!");
    }
    setForm({ q: "", a: "", category: "Orders" });
  };

  const handleEdit = (faq) => {
    setEditingId(faq.id);
    setForm({ q: faq.q, a: faq.a, category: faq.category });
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const handleDelete = (id) => {
    if(window.confirm("Delete this FAQ?")) {
      setFaqs(faqs.filter(f => f.id !== id));
    }
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>FAQ Management</h1>
          <p className={styles.subtitle}>Create and manage Frequently Asked Questions for your support center.</p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        {/* ADD/EDIT FORM */}
        <div className={styles.formSection}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            {editingId ? 'Edit FAQ' : 'Add New FAQ'}
          </h3>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Category</label>
              <select name="category" value={form.category} onChange={handleChange} className={styles.select}>
                <option value="Orders">Orders</option>
                <option value="Payments">Payments</option>
                <option value="Shipping">Shipping</option>
                <option value="Account">Account</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Question</label>
              <input type="text" name="q" value={form.q} onChange={handleChange} className={styles.input} placeholder="e.g. How to place order?" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Answer</label>
              <textarea name="a" value={form.a} onChange={handleChange} className={styles.textarea} placeholder="Detailed answer..."></textarea>
            </div>
          </div>
          <div className={styles.actionsRow}>
            {editingId && (
              <button className={styles.btnPrimary} style={{background: '#64748b', marginRight: 'auto'}} onClick={() => { setEditingId(null); setForm({q:"", a:"", category:"Orders"}); }}>
                Cancel
              </button>
            )}
            <button className={styles.btnPrimary} onClick={handleSaveFAQ}>
              {editingId ? 'Update FAQ' : 'Save FAQ'}
            </button>
          </div>
        </div>

        {/* LIVE PREVIEW & LIST */}
        <div className={styles.formSection} style={{background: '#f1f5f9', borderTop: 'none', boxShadow: 'none'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
             <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0 }}>Preview & Search FAQ 🔍</h3>
             <input type="text" placeholder="Search FAQs..." value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchBar} style={{width: '200px'}} />
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className={styles.faqItem}>
                <div className={styles.faqQuestion} onClick={() => toggleAccordion(faq.id)}>
                   <div style={{display: 'flex', alignItems: 'center'}}>
                     <span className={styles.faqCategoryBadge}>{faq.category}</span>
                     <h3>{faq.q}</h3>
                   </div>
                   <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                      {/* Admin Actions */}
                      <div className={styles.faqActions}>
                         <button className={styles.iconBtn} onClick={(e) => { e.stopPropagation(); handleEdit(faq); }}><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>
                         <button className={`${styles.iconBtn} ${styles.delete}`} onClick={(e) => { e.stopPropagation(); handleDelete(faq.id); }}><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                      </div>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{transform: openAccordion === faq.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                   </div>
                </div>
                {openAccordion === faq.id && (
                  <div className={styles.faqAnswerWrapper}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
            {filteredFaqs.length === 0 && <p style={{color: '#64748b', textAlign: 'center'}}>No FAQs found.</p>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQManagement;
