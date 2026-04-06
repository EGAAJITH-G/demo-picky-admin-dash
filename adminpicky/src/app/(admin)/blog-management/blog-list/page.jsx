"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const BlogList = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Fashion Trends 2026",
      author: "Ajith",
      category: "Fashion",
      publishDate: "2026-04-05",
      status: "Published",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80"
    },
    {
      id: 2,
      title: "Best Gadgets of the Year",
      author: "Kumar",
      category: "Tech",
      publishDate: "2026-04-10",
      status: "Draft",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&q=80"
    },
    {
      id: 3,
      title: "Sustainable Lifestyle Guide",
      author: "Priya",
      category: "Lifestyle",
      publishDate: "2026-03-25",
      status: "Published",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80"
    }
  ]);

  const toggleStatus = (id) => {
    setBlogs(blogs.map(b => b.id === id ? { ...b, status: b.status === "Published" ? "Draft" : "Published" } : b));
  };

  const handleDelete = (id) => {
    if(confirm("Are you sure you want to delete this blog post?")) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Blog Management</h1>
          <p className={styles.subtitle}>View, edit, and manage all your blog posts.</p>
        </div>
        <Link href="/blog-management/create-blog" className={styles.createBtn}>
          + Create Blog
        </Link>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Blog Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th>Quick Publish</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog.id}>
                <td>
                  <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                </td>
                <td className={styles.titleCell}>{blog.title}</td>
                <td>{blog.author}</td>
                <td><span className={styles.categoryBadge}>{blog.category}</span></td>
                <td>{new Date(blog.publishDate).toLocaleDateString()}</td>
                <td>
                  <span className={`${styles.statusBadge} ${blog.status === 'Published' ? styles.publish : styles.draft}`}>
                    {blog.status}
                  </span>
                </td>
                <td>
                  <div className={`${styles.toggleSwitch} ${blog.status === 'Published' ? styles.active : ''}`} onClick={() => toggleStatus(blog.id)}>
                    <div className={styles.toggleCircle}></div>
                  </div>
                </td>
                <td>
                  <div className={styles.actionWrapper}>
                    <button className={styles.iconBtn} title="Edit Blog">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </button>
                    <button className={`${styles.iconBtn} ${styles.delete}`} title="Delete Blog" onClick={() => handleDelete(blog.id)}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
