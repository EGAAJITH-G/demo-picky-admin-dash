"use client";

import React, { useState } from 'react';
import styles from '../seo.module.css';

const BlogSEO = () => {
  const blogs = ["Fashion Trends 2026", "Best Gadgets of the Year", "Sustainable Lifestyle Guide"];
  const [selectedBlog, setSelectedBlog] = useState("Fashion Trends 2026");

  const [seo, setSeo] = useState({
    title: "Fashion Trends 2026 - My E-commerce Store",
    description: "Discover the top 10 fashion trends for 2026. Stay ahead of the curve with our comprehensive style guide.",
    keywords: "fashion, trends, 2026, style, clothing",
    slug: "/blog/fashion-trends-2026"
  });

  const handleBlogChange = (e) => {
    const blog = e.target.value;
    setSelectedBlog(blog);
    setSeo({
      title: `${blog} - MyStore Blog`,
      description: `Read our latest article on ${blog}. Discover tips, tricks, and insights.`,
      keywords: blog.toLowerCase().split(' ').join(', '),
      slug: `/blog/${blog.toLowerCase().replace(/\s+/g, '-')}`
    });
  };

  const handleChange = (e) => {
    setSeo({ ...seo, [e.target.name]: e.target.value });
  };

  const suggestKeywords = () => {
    setSeo({ ...seo, keywords: seo.keywords + ", read more, articles, guide" });
  };

  const autoGenerateSlug = (e) => {
     e.preventDefault();
     setSeo({ ...seo, slug: `/blog/${selectedBlog.toLowerCase().replace(/\s+/g, '-')}` });
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
        <h1 className={styles.title}>Blog SEO Management</h1>
        <p className={styles.subtitle}>Optimize blog posts to increase organic traffic.</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <div className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Select Blog Post</label>
              <select value={selectedBlog} onChange={handleBlogChange} className={styles.select}>
                {blogs.map(b => <option key={b} value={b}>{b}</option>)}
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
                <span className={styles.suggestionBadge} onClick={suggestKeywords}>✨ Get AI Keyword Suggestions</span>
              </div>
            </div>
          </div>

          <div className={styles.actionsRow}>
            <button className={styles.btnPrimary} onClick={() => alert("Blog SEO Saved!")}>Save Blog SEO</button>
          </div>
        </div>

        <div className={styles.previewSection}>
          <div className={styles.previewSectionTitle}>Google Preview</div>
          
          <div className={styles.googlePreviewBox}>
            <div className={styles.googleUrl}>
              <div style={{width: '20px', height: '20px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'}}>🌐</div>
              <div>
                <span>MyStore Blog</span><br/>
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
                {scoreText === "Good" ? "Great job! This blog is perfectly optimized for search engines." : "Add more detail to the meta description and title!"}
              </p>
            </div>
          </div>
          
          <div className={styles.advancedFeatureCard} style={{marginTop: '1.5rem'}}>
            <div className={styles.featureTitle}>
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
               Article Schema
            </div>
            <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>
              Article Schema.org markup is auto-injected based on blog author, publication date, and content tags.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSEO;
