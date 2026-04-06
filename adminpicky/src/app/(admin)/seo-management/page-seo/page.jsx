"use client";

import React, { useState } from 'react';
import styles from '../seo.module.css';

const PageSEO = () => {
  const pages = ["Home", "About Us", "Contact", "Shop", "FAQ"];
  const [selectedPage, setSelectedPage] = useState("Home");

  const [seo, setSeo] = useState({
    title: "Home - My E-commerce Store",
    description: "Welcome to the best e-commerce store with exclusive deals and products.",
    keywords: "home, mystore, deals, fashion",
    slug: "/"
  });

  const handlePageChange = (e) => {
    const page = e.target.value;
    setSelectedPage(page);
    // Simulate loading data
    setSeo({
      title: `${page} - My E-commerce Store`,
      description: `This is the ${page} page meta description optimized for search engines.`,
      keywords: page.toLowerCase().split(' ').join(', '),
      slug: page === 'Home' ? '/' : `/${page.toLowerCase().replace(/\s+/g, '-')}`
    });
  };

  const handleChange = (e) => {
    setSeo({ ...seo, [e.target.name]: e.target.value });
  };

  const suggestKeywords = () => {
    setSeo({ ...seo, keywords: seo.keywords + ", latest, trending, collection" });
  };

  const autoGenerateSlug = (e) => {
     e.preventDefault();
     setSeo({ ...seo, slug: `/${selectedPage.toLowerCase().replace(/\s+/g, '-')}` });
  };

  // Basic SEO score calculation
  const score = Math.min(100, Math.floor(
    (seo.title.length > 20 && seo.title.length < 60 ? 30 : 10) +
    (seo.description.length > 100 && seo.description.length < 160 ? 40 : 15) +
    (seo.keywords.length > 10 ? 15 : 5) +
    (seo.slug.length > 0 ? 15 : 0)
  ));

  let scoreText, scoreClass;
  if (score >= 80) { scoreText = "Good"; scoreClass = styles.good; }
  else if (score >= 50) { scoreText = "Average"; scoreClass = styles.average; }
  else { scoreText = "Poor"; scoreClass = styles.poor; }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Page SEO Management</h1>
        <p className={styles.subtitle}>Optimize individual static pages across your website.</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <div className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Select Page to Edit</label>
              <select value={selectedPage} onChange={handlePageChange} className={styles.select}>
                {pages.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>
                Meta Title
                <span className={`${styles.charCount} ${seo.title.length > 60 || seo.title.length < 30 ? styles.warning : styles.good}`}>
                  {seo.title.length}/60 chars
                </span>
              </label>
              <input type="text" name="title" value={seo.title} onChange={handleChange} className={styles.input} />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>
                URL Slug <a href="#" onClick={autoGenerateSlug} style={{fontSize:'0.8rem', color:'var(--primary-color)'}}>Auto Generate</a>
              </label>
              <input type="text" name="slug" value={seo.slug} onChange={handleChange} className={styles.input} />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>
                Meta Description
                <span className={`${styles.charCount} ${seo.description.length > 160 || seo.description.length < 120 ? styles.warning : styles.good}`}>
                  {seo.description.length}/160 chars
                </span>
              </label>
              <textarea name="description" rows="3" value={seo.description} onChange={handleChange} className={styles.textarea}></textarea>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Keywords</label>
              <input type="text" name="keywords" value={seo.keywords} onChange={handleChange} className={styles.input} />
              <div style={{marginTop: '0.5rem', display: 'flex', gap: '0.5rem'}}>
                <span className={styles.suggestionBadge} onClick={suggestKeywords}>✨ Suggest Keywords</span>
              </div>
            </div>
          </div>

          <div className={styles.actionsRow}>
            <button className={styles.btnPrimary} onClick={() => alert("Page SEO Saved!")}>Save Changes</button>
          </div>
        </div>

        <div className={styles.previewSection}>
          <div className={styles.previewSectionTitle}>Google Preview</div>
          
          <div className={styles.googlePreviewBox}>
            <div className={styles.googleUrl}>
              <div style={{width: '20px', height: '20px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'}}>🌐</div>
              <div>
                <span>MyStore</span><br/>
                <span style={{color: '#4d5156', fontSize: '12px'}}>https://www.mystore.com{seo.slug}</span>
              </div>
            </div>
            <div className={styles.googleTitle}>{seo.title || 'Your Title'}</div>
            <div className={styles.googleDesc}>{seo.description || 'Your description'}</div>
          </div>

          <div className={styles.seoScoreDisplay}>
            <div className={`${styles.scoreCircle} ${scoreClass}`}>
              {score}
            </div>
            <div>
              <h3 style={{fontSize: '1.2rem', marginBottom: '0.2rem'}}>SEO Score: {scoreText}</h3>
              <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>
                {scoreText === "Good" ? "Great job! This page is well optimized." : "Add more detail to the meta description and title for a better score."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSEO;
