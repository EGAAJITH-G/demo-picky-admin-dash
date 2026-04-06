"use client";

import React, { useState } from 'react';
import styles from '../seo.module.css';

const GlobalSEO = () => {
  const [seo, setSeo] = useState({
    title: "My E-commerce Store",
    description: "Best products at best price",
    keywords: "shopping, ecommerce, fashion",
    analytics: "G-123456"
  });

  const handleChange = (e) => {
    setSeo({ ...seo, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Global SEO Settings</h1>
        <p className={styles.subtitle}>Manage site-wide meta tags and integrations (Auto applied to frontend).</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <div className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>
                Site Title (Default)
                <span className={`${styles.charCount} ${seo.title.length > 60 ? styles.warning : styles.good}`}>
                  {seo.title.length}/60 chars
                </span>
              </label>
              <input type="text" name="title" value={seo.title} onChange={handleChange} className={styles.input} />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>
                Default Meta Description
                <span className={`${styles.charCount} ${seo.description.length > 160 ? styles.warning : styles.good}`}>
                  {seo.description.length}/160 chars
                </span>
              </label>
              <textarea name="description" rows="3" value={seo.description} onChange={handleChange} className={styles.textarea}></textarea>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Default Meta Keywords (Comma separated)</label>
              <input type="text" name="keywords" value={seo.keywords} onChange={handleChange} className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Google Analytics ID</label>
              <input type="text" name="analytics" value={seo.analytics} onChange={handleChange} className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Favicon Image</label>
              <div className={styles.uploadBox} onClick={() => alert("Upload Favicon")}>
                <span>Click to Upload Favicon (.ico / .png)</span>
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Default Open Graph (OG) Image</label>
              <div className={styles.uploadBox} onClick={() => alert("Upload OG Image")}>
                <span>Upload Global OG Image for Social Referrals</span>
              </div>
            </div>
          </div>

          <div className={styles.actionsRow}>
            <button className={styles.btnSecondary}>Discard</button>
            <button className={styles.btnPrimary} onClick={() => alert("Global SEO Saved!")}>Save Settings</button>
          </div>
        </div>

        <div className={styles.previewSection}>
          <div className={styles.previewSectionTitle}>
            Live Global Preview (Google Head)
          </div>
          
          <div className={styles.googlePreviewBox}>
            <div className={styles.googleUrl}>
              <div style={{width: '20px', height: '20px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'}}>🌐</div>
              <div>
                <span>MyStore</span><br/>
                <span style={{color: '#4d5156', fontSize: '12px'}}>https://www.mystore.com</span>
              </div>
            </div>
            <div className={styles.googleTitle}>{seo.title || 'Your Title Here'}</div>
            <div className={styles.googleDesc}>{seo.description || 'Your description here...'}</div>
          </div>

          <div className={styles.advancedFeatureCard}>
            <div className={styles.featureTitle}>
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
               </svg>
               Advanced Features Active
            </div>
            <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>
              - <strong>Schema Markup</strong> automatically generated for organization.<br/>
              - <strong>Default Alt text</strong> injection enabled for all orphan images.<br/>
              - Canonical links auto-injected onto all pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSEO;
