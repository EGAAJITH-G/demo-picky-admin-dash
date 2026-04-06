"use client";

import React, { useState } from 'react';
import styles from '../seo.module.css';

const ProductSEO = () => {
  const products = ["Wireless Headphones", "Smart Fitness Watch", "Gaming Mechanical Keyboard", "HD Monitor"];
  const [selectedProduct, setSelectedProduct] = useState("Wireless Headphones");

  const [seo, setSeo] = useState({
    title: "Buy Wireless Headphones - Best Audio Quality",
    description: "Experience the ultimate sound with our latest Wireless Headphones. Noise cancellation and 30-hour battery life.",
    keywords: "headphones, wireless, audio, noise cancellation",
    slug: "/products/wireless-headphones"
  });

  const handleProductChange = (e) => {
    const product = e.target.value;
    setSelectedProduct(product);
    setSeo({
      title: `Buy ${product} - Best Price Online`,
      description: `Get the best deals on ${product}. Free shipping and 30-day money-back guarantee.`,
      keywords: product.toLowerCase().split(' ').join(', '),
      slug: `/products/${product.toLowerCase().replace(/\s+/g, '-')}`
    });
  };

  const handleChange = (e) => {
    setSeo({ ...seo, [e.target.name]: e.target.value });
  };

  const suggestKeywords = () => {
    setSeo({ ...seo, keywords: seo.keywords + ", buy online, best price, discount" });
  };

  const autoGenerateSlug = (e) => {
     e.preventDefault();
     setSeo({ ...seo, slug: `/products/${selectedProduct.toLowerCase().replace(/\s+/g, '-')}` });
  };

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
        <h1 className={styles.title}>Product SEO Management</h1>
        <p className={styles.subtitle}>Supercharge your product visibility on search engines.</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <div className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Select Product</label>
              <select value={selectedProduct} onChange={handleProductChange} className={styles.select}>
                {products.map(p => <option key={p} value={p}>{p}</option>)}
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
                Product URL (Slug) <a href="#" onClick={autoGenerateSlug} style={{fontSize:'0.8rem', color:'var(--primary-color)'}}>Auto Generate</a>
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
                <span className={styles.suggestionBadge} onClick={suggestKeywords}>✨ Get AI Suggestions</span>
              </div>
            </div>
          </div>

          <div className={styles.actionsRow}>
            <button className={styles.btnPrimary} onClick={() => alert("Product SEO Saved!")}>Save SEO</button>
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
                {scoreText === "Good" ? "Great job! This product is well optimized." : "Add more detail to the meta description and title!"}
              </p>
            </div>
          </div>
          
          <div className={styles.advancedFeatureCard} style={{marginTop: '1.5rem'}}>
            <div className={styles.featureTitle}>
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
               Schema Active
            </div>
            <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>
              Product Schema.org markup is auto-injected based on inventory pricing data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSEO;
