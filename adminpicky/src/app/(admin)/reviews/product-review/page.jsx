"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const StarRating = ({ rating, onChange }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className={styles.starContainer}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={`${styles.starBtn} ${index <= (hover || rating) ? styles.on : styles.off}`}
                        onClick={() => onChange && onChange(index)}
                        onMouseEnter={() => onChange && setHover(index)}
                        onMouseLeave={() => onChange && setHover(rating)}
                        disabled={!onChange}
                    >
                        <svg className={styles.starIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
};

const ProductReview = () => {
    const [reviews, setReviews] = useState([
        { id: 1, product: "Premium T-Shirt", customer: "Ajith", rating: 4, review: "Good quality!", status: "Pending", date: "Apr 02, 2024" },
        { id: 2, product: "MacBook Pro M3", customer: "Kumar", rating: 5, review: "Excellent product! Fastest shipping ever.", status: "Approved", date: "Apr 01, 2024" },
        { id: 3, product: "Jasmine Perfume", customer: "Priya", rating: 3, review: "Average smell, doesn't last very long.", status: "Pending", date: "Mar 28, 2024" },
        { id: 4, product: "Smart Watch", customer: "Sanjay", rating: 1, review: "Battery died in two days. Horrible.", status: "Pending", date: "Mar 27, 2024" },
        { id: 5, product: "Leather Boots", customer: "Vikram", rating: 5, review: "Absolutely stunning leather quality.", status: "Approved", date: "Mar 25, 2024" }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [ratingFilter, setRatingFilter] = useState('All');

    const filteredReviews = reviews.filter(res => {
        const matchesSearch = res.product.toLowerCase().includes(searchTerm.toLowerCase()) || res.customer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRating = ratingFilter === 'All' || res.rating === parseInt(ratingFilter);
        return matchesSearch && matchesRating;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Product Reviews</h1>
                <p className={styles.subtitle}>Explore and filter what your customers are saying about your catalog</p>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchBox}>
                    <input 
                        type="text" 
                        placeholder="Search product or customer name..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className={styles.select}>
                        <option value="All">All Ratings</option>
                        <option value="5">Excellent (5 Stars)</option>
                        <option value="4">Good (4 Stars)</option>
                        <option value="3">Average (3 Stars)</option>
                        <option value="2">Poor (2 Stars)</option>
                        <option value="1">Terrible (1 Star)</option>
                    </select>
                </div>
            </div>

            <div className={styles.grid}>
                {filteredReviews.length > 0 ? filteredReviews.map(r => (
                    <div key={r.id} className={styles.card}>
                        <div className={styles.cardTop}>
                            <div>
                                <h3 className={styles.prodName}>{r.product}</h3>
                                <p className={styles.custName}>by {r.customer} <span className={styles.date}>• {r.date}</span></p>
                            </div>
                            <span className={`${styles.badge} ${r.status === 'Approved' ? styles.approved : styles.pending}`}>
                                {r.status}
                            </span>
                        </div>
                        <div className={styles.ratingSection}>
                            <StarRating rating={r.rating} />
                        </div>
                        <div className={styles.reviewContent}>
                            <p>"{r.review}"</p>
                        </div>
                    </div>
                )) : (
                    <div className={styles.empty}>No reviews match your filters.</div>
                )}
            </div>
        </div>
    );
};

export default ProductReview;
