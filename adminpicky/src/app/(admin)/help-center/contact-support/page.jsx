"use client";

import React, { useState } from 'react';
import styles from '../helpCenter.module.css';

const ContactSupport = () => {
  const [supportInfo, setSupportInfo] = useState({
    phone: "+1 800 123 4567",
    email: "support@picky.com",
    hours: "Mon - Fri, 9:00 AM - 6:00 PM"
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInfoChange = (e) => setSupportInfo({ ...supportInfo, [e.target.name]: e.target.value });
  const handleFormChange = (e) => setContactForm({ ...contactForm, [e.target.name]: e.target.value });

  const handleSaveSettings = () => {
    alert("Support Contact Settings Updated successfully!");
  };

  const handleSimulateSubmit = () => {
    if(!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill all form fields first.");
      return;
    }
    alert("Support request sent! This is a simulation of the frontend user experience.");
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Contact Support & Settings</h1>
          <p className={styles.subtitle}>Manage global support contact details and preview the user contact form.</p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        {/* SETTINGS FORM */}
        <div className={styles.formSection}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Global Contact Settings</h3>
          
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Support Phone Number</label>
              <input type="text" name="phone" value={supportInfo.phone} onChange={handleInfoChange} className={styles.input} />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Support Email Address</label>
              <input type="email" name="email" value={supportInfo.email} onChange={handleInfoChange} className={styles.input} />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Support Hours</label>
              <input type="text" name="hours" value={supportInfo.hours} onChange={handleInfoChange} className={styles.input} />
            </div>
          </div>
          
          <div className={styles.actionsRow}>
            <button className={styles.btnPrimary} onClick={handleSaveSettings}>Save Settings</button>
          </div>
        </div>

        {/* LIVE FRONTEND PREVIEW */}
        <div className={styles.formSection} style={{background: '#0f172a', borderTop: '4px solid #facc15', color: 'white'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
             <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'white' }}>Live Preview: Frontend User UI</h3>
             <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>This is how the Contact page will look to your customers.</p>
             
             <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem'}}>
                <div style={{flex: 1, background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px'}}>
                   <div style={{fontSize: '0.8rem', color: '#94a3b8'}}>Phone</div>
                   <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{supportInfo.phone}</div>
                </div>
                <div style={{flex: 1, background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px'}}>
                   <div style={{fontSize: '0.8rem', color: '#94a3b8'}}>Email</div>
                   <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{supportInfo.email}</div>
                </div>
                <div style={{flex: '100%', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px'}}>
                   <div style={{fontSize: '0.8rem', color: '#94a3b8'}}>Operating Hours</div>
                   <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{supportInfo.hours}</div>
                </div>
             </div>

             <div style={{background: 'white', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem'}}>
                <h4 style={{color: '#0f172a', margin: '0 0 1rem 0'}}>Send us a Message</h4>
                <div className={styles.formGrid}>
                  <input type="text" name="name" value={contactForm.name} onChange={handleFormChange} className={styles.input} placeholder="Your Name" />
                  <input type="email" name="email" value={contactForm.email} onChange={handleFormChange} className={styles.input} placeholder="Your Email Address" />
                  <textarea name="message" value={contactForm.message} onChange={handleFormChange} className={styles.textarea} placeholder="How can we help you?"></textarea>
                  <button className={styles.btnPrimary} style={{width: '100%'}} onClick={handleSimulateSubmit}>Submit Request</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
