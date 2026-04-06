"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const CreatePoster = () => {
    const [poster, setPoster] = useState({
      title: "Mega Sale 50% OFF",
      subtitle: "LIMITED TIME OFFER",
      description: "Grab the best deals now! Exclusive discounts on premium products.",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8c?w=1200&q=80",
      buttonText: "Shop Now",
      link: "/products",
      bgColor: "#0f172a",
      textColor: "#ffffff",
      startDate: "2026-04-01",
      endDate: "2026-04-10",
      position: "Top Banner",
      active: true
    });

    const [previewMode, setPreviewMode] = useState('desktop');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPoster(prev => ({ ...prev, [name]: value }));
    };

    const toggleActive = () => {
        setPoster(prev => ({ ...prev, active: !prev.active }));
    };

    const handleImageUpload = () => {
        // Dummy upload simulator
        alert("Upload simulator: image selected.");
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Create New Poster</h1>
                <p className={styles.subtitle}>Design and deploy dynamic promotional banners</p>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.formSection}>
                    <div className={styles.formGrid}>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Poster Title</label>
                            <input type="text" name="title" value={poster.title} onChange={handleChange} className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Subtitle</label>
                            <input type="text" name="subtitle" value={poster.subtitle} onChange={handleChange} className={styles.input} />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Position</label>
                            <select name="position" value={poster.position} onChange={handleChange} className={styles.select}>
                                <option value="Top Banner">Top Banner</option>
                                <option value="Slider">Slider</option>
                                <option value="Section Banner">Section Banner</option>
                            </select>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Description</label>
                            <textarea name="description" rows="2" value={poster.description} onChange={handleChange} className={styles.textarea}></textarea>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Background Image</label>
                            <div className={styles.uploadBox} onClick={handleImageUpload}>
                                <svg className={styles.uploadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                                </svg>
                                <span style={{fontWeight: '600', color: 'var(--text-main)'}}>Click or drag to upload image</span>
                                <span style={{fontSize: '0.85rem', color: '#94a3b8'}}>PNG, JPG, WEBP up to 5MB</span>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Button Text</label>
                            <input type="text" name="buttonText" value={poster.buttonText} onChange={handleChange} className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Button Link</label>
                            <input type="text" name="link" value={poster.link} onChange={handleChange} className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Start Date</label>
                            <input type="date" name="startDate" value={poster.startDate} onChange={handleChange} className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>End Date</label>
                            <input type="date" name="endDate" value={poster.endDate} onChange={handleChange} className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Text Color</label>
                            <div className={styles.colorPickerGroup}>
                                <input type="color" name="textColor" value={poster.textColor} onChange={handleChange} className={styles.colorInput} />
                                <span style={{fontFamily: 'monospace', fontSize: '0.9rem'}}>{poster.textColor}</span>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Base Color Gradient</label>
                            <div className={styles.colorPickerGroup}>
                                <input type="color" name="bgColor" value={poster.bgColor} onChange={handleChange} className={styles.colorInput} />
                                <span style={{fontFamily: 'monospace', fontSize: '0.9rem'}}>{poster.bgColor}</span>
                            </div>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem', background: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}>
                            <div>
                                <label className={styles.label}>Status (Active / Inactive)</label>
                                <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem'}}>If active, it will be visible on the main site.</p>
                            </div>
                            <div className={`${styles.toggleSwitch} ${poster.active ? styles.active : ''}`} onClick={toggleActive}>
                                <div className={styles.toggleCircle}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actionsRow}>
                        <button className={styles.btnOutline}>Reset</button>
                        <button className={styles.btnSecondary} onClick={() => alert("Draft saved!")}>Save Draft</button>
                        <button className={styles.btnPrimary} onClick={() => alert("Poster published to main site API!")}>Publish Poster</button>
                    </div>
                </div>

                <div className={styles.previewSection}>
                    <div className={styles.previewSectionTitle}>
                        Live Preview
                        <div className={styles.previewDeviceToggle}>
                            <button className={`${styles.deviceBtn} ${previewMode === 'desktop' ? styles.active : ''}`} onClick={() => setPreviewMode('desktop')}>Desktop</button>
                            <button className={`${styles.deviceBtn} ${previewMode === 'mobile' ? styles.active : ''}`} onClick={() => setPreviewMode('mobile')}>Mobile</button>
                        </div>
                    </div>

                    <div 
                        className={`${styles.previewBoard} ${styles[previewMode]}`}
                        style={{
                            backgroundColor: poster.bgColor,
                            backgroundImage: `url(${poster.image})`
                        }}
                    >
                        <div className={styles.previewContent}>
                            <h3 className={styles.previewSubtitle} style={{ color: poster.textColor }}>{poster.subtitle}</h3>
                            <h1 className={styles.previewTitle} style={{ color: poster.textColor }}>{poster.title}</h1>
                            <p className={styles.previewDesc} style={{ color: poster.textColor }}>{poster.description}</p>
                            <button className={styles.previewBtn} style={{ background: poster.textColor, color: poster.bgColor }}>
                                {poster.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePoster;
