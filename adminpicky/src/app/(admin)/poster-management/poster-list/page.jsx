"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const PosterList = () => {
  const [posters, setPosters] = useState([
    {
      id: 1,
      title: "Summer Sale 50% OFF",
      position: "Top Banner",
      startDate: "2026-05-01",
      endDate: "2026-06-01",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
      active: true
    },
    {
      id: 2,
      title: "Electronics Fest",
      position: "Slider",
      startDate: "2026-04-15",
      endDate: "2026-04-30",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80",
      active: false
    },
    {
      id: 3,
      title: "Premium Watch Collection",
      position: "Section Banner",
      startDate: "2026-06-01",
      endDate: "2026-12-31",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      active: true
    }
  ]);

  const toggleActive = (id) => {
    setPosters(posters.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  const handleDelete = (id) => {
    if(confirm("Are you sure you want to delete this poster?")) {
      setPosters(posters.filter(p => p.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Poster Management</h1>
          <p className={styles.subtitle}>Manage all promotional banners, sliders and sections</p>
        </div>
        <Link href="/poster-management/create-poster" className={styles.createBtn}>
          + Create Poster
        </Link>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Campaign Info</th>
              <th>Position</th>
              <th>Date Range</th>
              <th>Status</th>
              <th>Live Toggle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posters.map(poster => (
              <tr key={poster.id}>
                <td>
                  <img src={poster.image} alt={poster.title} className={styles.posterImage} />
                </td>
                <td className={styles.titleCell}>{poster.title}</td>
                <td>{poster.position}</td>
                <td>
                  <span style={{color: 'var(--text-main)', fontSize: '0.9rem'}}>{new Date(poster.startDate).toLocaleDateString()}</span> <br/>
                  <span style={{color: 'var(--text-muted)', fontSize: '0.8rem'}}>to {new Date(poster.endDate).toLocaleDateString()}</span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${poster.active ? styles.active : styles.inactive}`}>
                    {poster.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div className={`${styles.toggleSwitch} ${poster.active ? styles.active : ''}`} onClick={() => toggleActive(poster.id)}>
                    <div className={styles.toggleCircle}></div>
                  </div>
                </td>
                <td>
                  <div className={styles.actionWrapper}>
                    <button className={styles.iconBtn} title="Edit Poster">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </button>
                    <button className={`${styles.iconBtn} ${styles.delete}`} title="Delete Poster" onClick={() => handleDelete(poster.id)}>
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

export default PosterList;
