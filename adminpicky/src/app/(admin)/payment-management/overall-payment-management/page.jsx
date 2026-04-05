"use client";

import React from 'react';
import styles from './page.module.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PaymentDashboard = () => {
    const stats = {
        revenue: 50000,
        refunds: 5000,
        pending: 8000,
        success: 42000
    };

    const monthlyData = [
        { name: 'Jan', revenue: 4000 },
        { name: 'Feb', revenue: 3000 },
        { name: 'Mar', revenue: 2000 },
        { name: 'Apr', revenue: 2780 },
        { name: 'May', revenue: 1890 },
        { name: 'Jun', revenue: 2390 },
        { name: 'Jul', revenue: 3490 },
        { name: 'Aug', revenue: 4200 },
        { name: 'Sep', revenue: 4500 },
        { name: 'Oct', revenue: 5000 },
        { name: 'Nov', revenue: 6000 },
        { name: 'Dec', revenue: 8000 }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Payment Overview</h1>
                <p className={styles.subtitle}>High-level financial metrics and platform revenue analytics</p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#E0E7FF', color: '#4F46E5' }}>💰</div>
                    <div className={styles.statInfo}>
                        <span className={styles.statLabel}>Total Revenue</span>
                        <span className={styles.statValue}>₹{stats.revenue.toLocaleString()}</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#DCFCE7', color: '#166534' }}>💸</div>
                    <div className={styles.statInfo}>
                        <span className={styles.statLabel}>Successful Volume</span>
                        <span className={styles.statValue}>₹{stats.success.toLocaleString()}</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FEF3C7', color: '#92400E' }}>⌛</div>
                    <div className={styles.statInfo}>
                        <span className={styles.statLabel}>Pending Clearance</span>
                        <span className={styles.statValue}>₹{stats.pending.toLocaleString()}</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FEE2E2', color: '#991B1B' }}>📉</div>
                    <div className={styles.statInfo}>
                        <span className={styles.statLabel}>Total Refunds</span>
                        <span className={styles.statValue}>₹{stats.refunds.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div className={styles.chartSection}>
                <div className={styles.chartCard}>
                    <h3 className={styles.chartTitle}>Revenue Trends (Current Year)</h3>
                    <div className={styles.chartWrapper}>
                        <ResponsiveContainer width="100%" height={350}>
                            <AreaChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.4}/>
                                        <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} dy={10} />
                                <YAxis tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value/1000}k`} dx={-10} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                                    formatter={(value) => [`₹${value}`, "Revenue"]}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="var(--primary-color)" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDashboard;
