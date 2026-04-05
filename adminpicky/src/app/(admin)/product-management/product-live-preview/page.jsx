"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ProductLivePreview = () => {
    const products = [
        { 
            id: 1, 
            name: 'Classic Leather Weekend Bag', 
            price: '$240.00', 
            rating: 4.8, 
            reviews: 124, 
            desc: 'Handcrafted from premium full-grain leather, this weekend bag is your perfect companion for short trips. Features a spacious main compartment and specialized pockets for organization.',
            image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&h=600&fit=crop'
        },
        { 
            id: 2, 
            name: 'Noise-Cancelling Wireless Headphones', 
            price: '$349.00', 
            rating: 4.9, 
            reviews: 850, 
            desc: 'Experience pure sound with industry-leading noise cancellation. Designed for comfort and longevity with up to 30 hours of battery life.',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop'
        },
        { 
            id: 3, 
            name: 'Minimalist Ceramic Vase Set', 
            price: '$85.00', 
            rating: 4.7, 
            reviews: 64, 
            desc: 'A set of three handmade ceramic vases with a matte finish. Perfect for adding a touch of modern minimalism to your home or office.',
            image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=600&fit=crop'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const activeProduct = products[activeIndex];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Product Preview</h1>
                <p className={styles.subtitle}>View how your products will appear to customers</p>
            </div>

            <div className={styles.mainGrid}>
                {/* Product Select Sidebar */}
                <div className={styles.sidebar}>
                    <h3 className={styles.cardTitle}>Quick Switch</h3>
                    <div className={styles.productList}>
                        {products.map((p, idx) => (
                            <div 
                                key={p.id} 
                                className={`${styles.productItem} ${activeIndex === idx ? styles.activeItem : ''}`}
                                onClick={() => setActiveIndex(idx)}
                            >
                                <img src={p.image} className={styles.thumb} alt={p.name} />
                                <div className={styles.thumbInfo}>
                                    <span className={styles.thumbName}>{p.name}</span>
                                    <span className={styles.thumbPrice}>{p.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* E-commerce Preview */}
                <div className={styles.previewCard}>
                    <div className={styles.productDisplay}>
                        <div className={styles.imageSection}>
                            <img src={activeProduct.image} className={styles.mainImage} alt={activeProduct.name} />
                        </div>
                        <div className={styles.detailsSection}>
                            <span className={styles.tag}>NEW COLLECTION</span>
                            <h2 className={styles.productName}>{activeProduct.name}</h2>
                            <div className={styles.ratingRow}>
                                <div className={styles.stars}>
                                    {[1,2,3,4,5].map(s => (
                                        <svg key={s} width="16" height="16" fill={s <= Math.floor(activeProduct.rating) ? "#FACC15" : "#E5E7EB"} viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.357 2.441a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.441a1 1 0 00-1.175 0l-3.357 2.441c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.951-.69l1.286-3.97z"></path>
                                        </svg>
                                    ))}
                                </div>
                                <span className={styles.reviewsCount}>({activeProduct.reviews} Verified Reviews)</span>
                            </div>
                            <h3 className={styles.price}>{activeProduct.price}</h3>
                            <p className={styles.description}>{activeProduct.desc}</p>
                            
                            <div className={styles.options}>
                                <div className={styles.optionGroup}>
                                    <label>Quantity</label>
                                    <div className={styles.qtyBox}>
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.actionRow}>
                                <button className={styles.addCartBtn}>Add to My Cart</button>
                                <button className={styles.wishlistBtn}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLivePreview;
