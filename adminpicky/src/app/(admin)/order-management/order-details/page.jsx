"use client";

import React from 'react';
import styles from './page.module.css';

const OrderDetails = () => {
    const orderDetails = {
        id: "ORD001",
        customer: "Ajith",
        email: "ajith@example.com",
        phone: "+91 98765 43210",
        date: "2026-04-01",
        products: [
            { name: "Premium T-Shirt", qty: 2, price: 500, img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&h=100&fit=crop' },
            { name: "Running Shoes", qty: 1, price: 200, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop' }
        ],
        subtotal: 1200,
        shipping: 50,
        tax: 30,
        total: 1280,
        payment: "UPI",
        status: "Pending"
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Order Summary</h1>
                <span className={styles.badge}>{orderDetails.status}</span>
            </div>

            <div className={styles.mainGrid}>
                {/* Left: Product List */}
                <div className={styles.productColumn}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Cart Items</h3>
                        <div className={styles.productList}>
                            {orderDetails.products.map((p, i) => (
                                <div key={i} className={styles.productItem}>
                                    <img src={p.img} alt={p.name} className={styles.prodImg} />
                                    <div className={styles.prodDetails}>
                                        <h4 className={styles.prodName}>{p.name}</h4>
                                        <div className={styles.prodMeta}>
                                            <span>Price: ₹{p.price}</span>
                                            <span>Qty: {p.qty}</span>
                                        </div>
                                    </div>
                                    <span className={styles.prodTotal}>₹{p.qty * p.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.summaryFooter}>
                            <div className={styles.sumLine}>
                                <span>Subtotal</span>
                                <span>₹{orderDetails.subtotal}</span>
                            </div>
                            <div className={styles.sumLine}>
                                <span>Shipping Fee</span>
                                <span>₹{orderDetails.shipping}</span>
                            </div>
                            <div className={styles.sumTotal}>
                                <span>Total Amount Paid</span>
                                <span>₹{orderDetails.total}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Customer & Payment Info */}
                <div className={styles.infoColumn}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Customer Profile</h3>
                        <div className={styles.custInfo}>
                            <div className={styles.infoItem}>
                                <label>Name</label>
                                <span>{orderDetails.customer}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <label>Email</label>
                                <span>{orderDetails.email}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <label>Contact</label>
                                <span>{orderDetails.phone}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Payment Detailed</h3>
                        <div className={styles.infoItem}>
                            <label>Method</label>
                            <span className={styles.payBadge}>{orderDetails.payment}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <label>Order Date</label>
                            <span>{orderDetails.date}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <label>Unique ID</label>
                            <span className={styles.uid}>#{orderDetails.id}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
