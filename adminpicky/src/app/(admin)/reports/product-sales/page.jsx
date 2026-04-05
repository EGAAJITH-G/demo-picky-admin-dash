"use client";

import React from 'react';
import styles from './page.module.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ProductSales = () => {
    // Advanced Product Sales Dummy Data
    const productSales = [
        { name: "Premium T-Shirt", sold: 480, revenue: 144000, category: "Clothing" },
        { name: "Gaming Laptop", sold: 65, revenue: 6500000, category: "Electronics" },
        { name: "Jasmine Perfume", sold: 310, revenue: 465000, category: "Beauty" },
        { name: "Wireless Earbuds", sold: 820, revenue: 1230000, category: "Electronics" },
        { name: "Denim Jeans", sold: 290, revenue: 290000, category: "Clothing" },
        { name: "Smart Watch", sold: 410, revenue: 820000, category: "Electronics" }
    ];

    // Sort by units sold
    const topSellers = [...productSales].sort((a,b) => b.sold - a.sold);
    const maxSold = Math.max(...topSellers.map(p => p.sold));

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.customTooltip}>
                    <p className={styles.ttLabel}>{label}</p>
                    <p className={styles.ttUnits}>Units Sold: {payload[0].value.toLocaleString()}</p>
                    <p className={styles.ttRev}>Generated: ₹{payload[0].payload.revenue.toLocaleString()}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Product Velocity Analysis</h1>
                    <p className={styles.subtitle}>Identify top-moving SKUs and consumer purchasing trends</p>
                </div>
                <button className={styles.exportBtn}>Export Analysis (PDF)</button>
            </div>

            {/* Bestseller Highlights */}
            <div className={styles.highlightsGrid}>
                {topSellers.slice(0, 3).map((prod, idx) => (
                    <div key={idx} className={styles.highlightCard}>
                        <div className={styles.rankBadge}>#{idx + 1}</div>
                        <div className={styles.highlightDetails}>
                            <span className={styles.hlCat}>{prod.category}</span>
                            <h3 className={styles.hlName}>{prod.name}</h3>
                            <div className={styles.hlStats}>
                                <span className={styles.hlSold}>{prod.sold} Units</span>
                                <span className={styles.hlRev}>₹{(prod.revenue/1000).toFixed(1)}k</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.mainGrid}>
                {/* Visual Chart */}
                <div className={styles.chartCard} style={{ flex: 1.5 }}>
                    <h3 className={styles.cardTitle}>Unit Sales Volume by SKU</h3>
                    <div className={styles.chartWrapper}>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={topSellers} margin={{ top: 20, right: 30, left: -20, bottom: 5 }} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748B'}} />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#1E293B', fontWeight: 700}} width={120} />
                                <Tooltip content={<CustomTooltip />} cursor={{fill: '#F8FAFC'}} />
                                <Bar dataKey="sold" radius={[0, 8, 8, 0]} barSize={24}>
                                    {topSellers.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.sold === maxSold ? '#9F1239' : '#94A3B8'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Ledger Data */}
                <div className={styles.tableCard} style={{ flex: 1 }}>
                    <h3 className={styles.cardTitle}>Sales Ledger</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th style={{ textAlign: 'right' }}>Units Sold</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topSellers.map((prod, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className={styles.tableProd}>
                                                <span className={styles.tpName}>{prod.name}</span>
                                                <span className={styles.tpCat}>{prod.category}</span>
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <span className={styles.tpSold}>{prod.sold}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSales;
