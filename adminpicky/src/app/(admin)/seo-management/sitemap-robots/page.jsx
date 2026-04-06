"use client";

import React, { useState } from 'react';
import styles from '../seo.module.css';

const SitemapRobots = () => {
  const [robots, setRobots] = useState({
    globalIndex: true,
    globalFollow: true,
    customRobotsTxt: "User-agent: *\nAllow: /\nSitemap: https://www.mystore.com/sitemap.xml"
  });

  const toggleStatus = (field) => {
    setRobots({ ...robots, [field]: !robots[field] });
  };

  const handleChange = (e) => {
    setRobots({ ...robots, [e.target.name]: e.target.value });
  };

  const generateSitemap = () => {
    alert("Sitemap.xml has been successfully re-generated and pinged to search engines!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sitemap & Robots.txt</h1>
        <p className={styles.subtitle}>Control how search engines crawl and index your website.</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <div className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                 <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)'}}>XML Sitemap Generator</h3>
                 <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem'}}>
                   Automatically compile all pages, products, categories, and blogs into an XML sitemap compatible with Google Search Console.
                 </p>
                 <button className={styles.btnPrimary} onClick={generateSitemap} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                   </svg>
                   Generate & Ping Sitemap
                 </button>
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <h3 style={{fontSize: '1.1rem', marginTop: '1rem', color: 'var(--text-main)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem'}}>Robots & Meta Directives</h3>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '10px' }}>
                <div>
                   <label className={styles.label}>Global Indexing</label>
                   <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>Tell search engines to index the site (index/noindex).</p>
                </div>
                <div className={`${styles.toggleSwitch} ${robots.globalIndex ? styles.active : ''}`} onClick={() => toggleStatus('globalIndex')}>
                   <div className={styles.toggleCircle}></div>
                </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '10px' }}>
                <div>
                   <label className={styles.label}>Global Link Following</label>
                   <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>Tell search engines to follow links (follow/nofollow).</p>
                </div>
                <div className={`${styles.toggleSwitch} ${robots.globalFollow ? styles.active : ''}`} onClick={() => toggleStatus('globalFollow')}>
                   <div className={styles.toggleCircle}></div>
                </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Custom Robots.txt Content</label>
              <textarea name="customRobotsTxt" rows="6" value={robots.customRobotsTxt} onChange={handleChange} className={styles.textarea} style={{fontFamily: 'monospace', fontSize: '0.9rem', background: '#1e293b', color: '#e2e8f0'}}></textarea>
            </div>
          </div>

          <div className={styles.actionsRow}>
            <button className={styles.btnPrimary} onClick={() => alert("Robots settings saved!")}>Save Settings</button>
          </div>
        </div>

        <div className={styles.previewSection}>
          <div className={styles.advancedFeatureCard}>
            <div className={styles.featureTitle}>
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
               How it Works
            </div>
            <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6'}}>
              <strong>Sitemap.xml</strong> is a roadmap of your website that leads search engines directly to all your important pages.
              <br/><br/>
              <strong>Robots.txt</strong> tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests.
              <br/><br/>
              <span style={{color: '#dc2626'}}><strong>Warning:</strong> Adjusting Robots.txt and Indexing options incorrectly can remove your site from search results. Proceed with caution.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapRobots;
