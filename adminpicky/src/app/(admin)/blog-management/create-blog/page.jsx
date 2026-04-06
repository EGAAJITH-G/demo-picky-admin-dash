"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    title: "Top 10 Fashion Trends 2026",
    subtitle: "Stay ahead in style with these upcoming trends",
    author: "Ajith",
    category: "Fashion",
    tags: "trends,style,2026",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    content: "Fashion is evolving rapidly in 2026. The intersection of technology and sustainable materials has birthed a new era of ready-to-wear clothing.\n\nFrom smart fabrics that adjust to body temperature to the resurgence of 90s vintage with a futuristic twist, here are the top trends you need to watch out for this year...",
    readingTime: "5 min",
    publishDate: "2026-04-05",
    status: "Draft",
    metaTitle: "Top 10 Fashion Trends 2026 - Stay Ahead",
    metaDesc: "Discover the top 10 fashion trends for 2026. Stay ahead of the curve with our comprehensive style guide."
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = () => {
    alert("Image upload simulator triggered!");
  };

  const toggleStatus = () => {
    setBlog(prev => ({ ...prev, status: prev.status === 'Draft' ? 'Published' : 'Draft' }));
  };

  const tagList = blog.tags.split(',').filter(t => t.trim() !== '');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create New Blog Post</h1>
        <p className={styles.subtitle}>Write, edit, and publish brilliant articles to your audience.</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <div className={styles.formGrid}>
            
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Blog Title</label>
              <input type="text" name="title" value={blog.title} onChange={handleChange} className={styles.input} placeholder="Enter an engaging title..." />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Subtitle / Excerpt</label>
              <textarea name="subtitle" rows="2" value={blog.subtitle} onChange={handleChange} className={styles.textarea} placeholder="A short summary..."></textarea>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Author Name</label>
              <input type="text" name="author" value={blog.author} onChange={handleChange} className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Category</label>
              <select name="category" value={blog.category} onChange={handleChange} className={styles.select}>
                <option value="Tech">Tech</option>
                <option value="Fashion">Fashion</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Offers">Offers</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Reading Time</label>
              <input type="text" name="readingTime" value={blog.readingTime} onChange={handleChange} className={styles.input} placeholder="e.g. 5 min" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Publish Date</label>
              <input type="date" name="publishDate" value={blog.publishDate} onChange={handleChange} className={styles.input} />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Tags (comma separated)</label>
              <input type="text" name="tags" value={blog.tags} onChange={handleChange} className={styles.input} placeholder="fashion, trends, weekly..." />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Cover Image</label>
              <div className={styles.uploadBox} onClick={handleImageUpload}>
                <svg className={styles.uploadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span style={{fontWeight: '600', color: 'var(--text-main)'}}>Click to upload cover image</span>
                <span style={{fontSize: '0.85rem', color: '#94a3b8'}}>High resolution JPEG, PNG</span>
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Content (Rich Text Area)</label>
              <textarea name="content" rows="10" value={blog.content} onChange={handleChange} className={styles.textarea} placeholder="Start writing your amazing article..."></textarea>
            </div>

            {/* SEO Extra Feature */}
            <div className={styles.seoBox}>
              <div className={styles.seoTitle}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                SEO Settings
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label} style={{fontSize: '0.85rem'}}>Meta Title</label>
                <input type="text" name="metaTitle" value={blog.metaTitle} onChange={handleChange} className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} style={{fontSize: '0.85rem'}}>Meta Description</label>
                <textarea name="metaDesc" rows="2" value={blog.metaDesc} onChange={handleChange} className={styles.textarea}></textarea>
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', marginTop: '0.5rem' }}>
              <div>
                <label className={styles.label}>Publish Status</label>
                <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem'}}>Currently set to: <strong>{blog.status}</strong></p>
              </div>
              <div className={`${styles.toggleSwitch} ${blog.status === 'Published' ? styles.active : ''}`} onClick={toggleStatus}>
                <div className={styles.toggleCircle}></div>
              </div>
            </div>
          </div>

          <div className={styles.actionsRow}>
            <button className={styles.btnOutline}>Reset</button>
            <button className={styles.btnSecondary} onClick={() => alert("Draft Saved Successfully!")}>Save Draft</button>
            <button className={styles.btnPrimary} onClick={() => alert("Blog Published!")}>Publish Blog</button>
          </div>
        </div>

        <div className={styles.previewSection}>
          <div className={styles.previewSectionTitle}>
            Live Content Preview
          </div>

          <div className={styles.livePreview}>
            {blog.image && <img src={blog.image} alt="Cover" className={styles.previewImage} />}
            
            <div className={styles.previewContentBlock}>
              <span className={styles.previewBadge}>{blog.category}</span>
              <h1 className={styles.previewTitle}>{blog.title || 'Untitled Post'}</h1>
              <h3 className={styles.previewSubtitle}>{blog.subtitle}</h3>
              
              <div className={styles.previewMeta}>
                <span>{blog.author || 'Anonymous'}</span>
                <span className={styles.metaDivider}></span>
                <span>{blog.publishDate}</span>
                <span className={styles.metaDivider}></span>
                <span>{blog.readingTime} read</span>
              </div>

              <div className={styles.previewText}>
                {blog.content}
              </div>

              {tagList.length > 0 && (
                <div className={styles.previewTags}>
                  {tagList.map((tag, idx) => (
                    <span key={idx} className={styles.previewTag}>#{tag.trim()}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
