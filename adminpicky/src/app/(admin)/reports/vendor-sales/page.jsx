"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

const VendorSales = () => {
    // Advanced dummy data integration
    const vendorSales = [
        { name: "GlobalTech Solutions", sales: 125000, orders: 450 },
        { name: "Urban Apparel", sales: 98000, orders: 1200 },
        { name: "Pure Beauty Co.", sales: 154000, orders: 900 },
        { name: "Kitchen Masters", sales: 67000, orders: 320 },
        { name: "Gadget Hub", sales: 210000, orders: 850 }
    ];

    const maxSales = Math.max(...vendorSales.map(v => v.sales));

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.customTooltip}>
                    <p className={styles.ttLabel}>{label}</p>
                    <p className={styles.ttSales}>Gross Volume: ₹{payload[0].value.toLocaleString()}</p>
                    <p className={styles.ttOrders}>Units Moved: {payload[0].payload.orders}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Vendor Performance Matrix</h1>
                <p className={styles.subtitle}>Audit third-party seller revenue output and scale</p>
            </div>

            <div className={styles.dashboardGrid}>
                {/* Visual Chart Card */}
                <div className={styles.chartCard}>
                    <h3 className={styles.cardTitle}>Sales Volume Distribution</h3>
                    <div className={styles.chartWrapper}>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={vendorSales} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barSize={40}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} dy={10} tick={{fill: '#64748B', fontSize: 11}} />
                                <YAxis axisLine={false} tickLine={false} dx={-10} tick={{fill: '#64748B'}} tickFormatter={(v) => `₹${v/1000}k`} />
                                <Tooltip content={<CustomTooltip />} cursor={{fill: '#F1F5F9'}} />
                                <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
                                    {vendorSales.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.sales === maxSales ? '#9F1239' : '#CBD5E1'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Data Table Card */}
                <div className={styles.tableCard}>
                    <div className={styles.tableHeader}>
                        <h3 className={styles.cardTitle}>Top Vendor Ledger</h3>
                        <button className={styles.exportLink}>Export CSV</button>
                    </div>
                    
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Registered Vendor</th>
                                    <th>Total Orders Dispensed</th>
                                    <th style={{ textAlign: 'right' }}>Total Gross Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vendorSales.sort((a,b) => b.sales - a.sales).map((v, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className={styles.vendorCell}>
                                                <div className={styles.rankBadge}>#{idx + 1}</div>
                                                <span className={styles.vName}>{v.name}</span>
                                            </div>
                                        </td>
                                        <td><span className={styles.vOrders}>{v.orders.toLocaleString()} Units</span></td>
                                        <td style={{ textAlign: 'right' }}>
                                            <span className={styles.vSales}>₹{v.sales.toLocaleString()}</span>
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

export default VendorSales;
