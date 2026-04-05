"use client";

import React from 'react';
import styles from './page.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomerGrowth = () => {
    // Advanced dummy data for customer growth and active usage
    const customerData = [
        { month: "Jan", newUsers: 1200, activeUsers: 8500 },
        { month: "Feb", newUsers: 1450, activeUsers: 9200 },
        { month: "Mar", newUsers: 1800, activeUsers: 11000 },
        { month: "Apr", newUsers: 2100, activeUsers: 12500 },
        { month: "May", newUsers: 1950, activeUsers: 13200 },
        { month: "Jun", newUsers: 2400, activeUsers: 15100 },
        { month: "Jul", newUsers: 3100, activeUsers: 17800 }
    ];

    const currentData = customerData[customerData.length - 1];
    const prevData = customerData[customerData.length - 2];

    const newUsersGrowth = (((currentData.newUsers - prevData.newUsers) / prevData.newUsers) * 100).toFixed(1);
    const activeUsersGrowth = (((currentData.activeUsers - prevData.activeUsers) / prevData.activeUsers) * 100).toFixed(1);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.customTooltip}>
                    <p className={styles.ttLabel}>{label} Performance</p>
                    <p className={styles.ttNew}>New Registrations: {payload[0].value.toLocaleString()}</p>
                    {payload[1] && <p className={styles.ttActive}>Total Active Fleet: {payload[1].value.toLocaleString()}</p>}
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Customer Acquisition & DAU</h1>
                    <p className={styles.subtitle}>Analyze user adoption metrics and active system engagements</p>
                </div>
                <button className={styles.exportBtn}>Export Analytics Dataset</button>
            </div>

            <div className={styles.kpiGrid}>
                {/* KPI 1 */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiTop}>
                        <h3>New Customer Registrations</h3>
                        <div className={styles.kpiIcon}>👥</div>
                    </div>
                    <div className={styles.kpiValue}>+{currentData.newUsers.toLocaleString()}</div>
                    <div className={styles.kpiMeta}>
                        <span className={`${styles.growthBadge} ${newUsersGrowth > 0 ? styles.positive : styles.negative}`}>
                            {newUsersGrowth > 0 ? '↑' : '↓'} {Math.abs(newUsersGrowth)}%
                        </span>
                        <span className={styles.compareText}>vs previous month</span>
                    </div>
                </div>

                {/* KPI 2 */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiTop}>
                        <h3>Monthly Active Users (MAU)</h3>
                        <div className={styles.kpiIcon}>🔥</div>
                    </div>
                    <div className={styles.kpiValue}>{currentData.activeUsers.toLocaleString()}</div>
                    <div className={styles.kpiMeta}>
                        <span className={`${styles.growthBadge} ${activeUsersGrowth > 0 ? styles.positive : styles.negative}`}>
                            {activeUsersGrowth > 0 ? '↑' : '↓'} {Math.abs(activeUsersGrowth)}%
                        </span>
                        <span className={styles.compareText}>vs previous month</span>
                    </div>
                </div>

                {/* KPI 3 */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiTop}>
                        <h3>Customer Retention Rate</h3>
                        <div className={styles.kpiIcon}>🛡️</div>
                    </div>
                    <div className={styles.kpiValue}>84.2%</div>
                    <div className={styles.kpiMeta}>
                        <span className={`${styles.growthBadge} ${styles.positive}`}>↑ 1.5%</span>
                        <span className={styles.compareText}>vs previous month</span>
                    </div>
                </div>
            </div>

            <div className={styles.chartCard}>
                <div className={styles.chartHeader}>
                    <h3 className={styles.cardTitle}>User Base Projections</h3>
                    <div className={styles.legend}>
                        <div className={styles.legendItem}><span className={styles.dotNew}></span> Net New Registrations</div>
                        <div className={styles.legendItem}><span className={styles.dotActive}></span> Active Users</div>
                    </div>
                </div>

                <div className={styles.chartWrapper}>
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={customerData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748B'}} dy={10} />
                            <YAxis yAxisId="left" axisLine={false} tickLine={false} dx={-10} tick={{fill: '#64748B'}} tickFormatter={(v) => `${v/1000}k`} />
                            <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} dx={10} tick={{fill: '#64748B'}} tickFormatter={(v) => `${v/1000}k`} />
                            
                            <Tooltip content={<CustomTooltip />} />
                            
                            <Line yAxisId="left" type="monotone" dataKey="newUsers" stroke="#9F1239" strokeWidth={4} activeDot={{r: 8, fill: '#BE123C', strokeWidth: 0}} />
                            <Line yAxisId="right" type="monotone" dataKey="activeUsers" stroke="#0EA5E9" strokeWidth={3} strokeDasharray="5 5" activeDot={{r: 6}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default CustomerGrowth;
