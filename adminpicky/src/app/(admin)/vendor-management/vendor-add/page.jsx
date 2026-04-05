"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const AddVendor = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        address: '',
        logo: null
    });
    const [preview, setPreview] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [vendors, setVendors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, logo: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation (basic)
        if (!formData.name || !formData.email || !formData.businessName) {
            alert("Please fill in required fields.");
            return;
        }

        // Store in dummy array (simulated)
        const newVendor = { ...formData, id: Date.now() };
        setVendors(prev => [...prev, newVendor]);
        
        // Show success message
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            businessName: '',
            address: '',
            logo: null
        });
        setPreview(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Add New Vendor</h1>
                <p className={styles.subtitle}>Register a new partner to the dashboard</p>
            </div>

            <div className={styles.card}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Vendor Name*</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Enter full name" 
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address*</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="vendor@example.com" 
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                placeholder="+1 (555) 000-0000" 
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Business Name*</label>
                            <input 
                                type="text" 
                                name="businessName" 
                                value={formData.businessName} 
                                onChange={handleChange} 
                                placeholder="Legal business name" 
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.fullWidth}>
                            <label className={styles.label}>Business Address</label>
                            <textarea 
                                name="address" 
                                value={formData.address} 
                                onChange={handleChange} 
                                placeholder="Street, City, Zip Code" 
                                className={styles.textarea}
                            />
                        </div>
                        <div className={styles.fullWidth}>
                            <label className={styles.label}>Business Logo</label>
                            <div className={styles.fileUpload}>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleFileChange} 
                                    id="logoUpload" 
                                    className={styles.fileInput}
                                />
                                <label htmlFor="logoUpload" className={styles.fileLabel}>
                                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                                    </svg>
                                    <span>Click to upload or drag logo</span>
                                </label>
                                {preview && (
                                    <div className={styles.previewContainer}>
                                        <img src={preview} alt="Logo preview" className={styles.logoPreview} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Create Vendor Profile
                    </button>
                </form>
            </div>

            {submitted && (
                <div className={styles.successMessage}>
                    <div className={styles.successIcon}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <span>Vendor added successfully!</span>
                </div>
            )}
        </div>
    );
};

export default AddVendor;
