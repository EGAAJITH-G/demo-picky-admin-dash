"use client";

import React from 'react';
import styles from './page.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const MonthlyRevenue = () => {
    // Advanced Monthly Revenue Data
    const revenueData = [
        { month: "January", revenue: 850000, expenses: 620000 },
        { month: "February", revenue: 920000, expenses: 690000 },
        { month: "March", revenue: 1150000, expenses: 750000 },
        { month: "April", revenue: 1450000, expenses: 810000 },
        { month: "May", revenue: 1380000, expenses: 840000 },
        { month: "June", revenue: 1650000, expenses: 890000 },
        { month: "July", revenue: 1980000, expenses: 1050000 },
        { month: "August", revenue: 2350000, expenses: 1100000 }
    ];

    const currentMonth = revenueData[revenueData.length - 1];
    const prevMonth = revenueData[revenueData.length - 2];
    
    const profitCurrent = currentMonth.revenue - currentMonth.expenses;
    const profitPrev = prevMonth.revenue - prevMonth.expenses;
    
    const revenueGrowth = (((currentMonth.revenue - prevMonth.revenue) / prevMonth.revenue) * 100).toFixed(1);
    const profitGrowth = (((profitCurrent - profitPrev) / profitPrev) * 100).toFixed(1);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.customTooltip}>
                    <p className={styles.ttLabel}>{label} Performance</p>
                    <p className={styles.ttRev}>Gross Revenue: ₹{(payload[0].value/100000).toFixed(2)}L</p>
                    {payload[1] && <p className={styles.ttExp}>OpEx/CoGS: ₹{(payload[1].value/100000).toFixed(2)}L</p>}
                    {payload[1] && (
                        <div className={styles.ttNet}>
                            Net Margin: ₹{((payload[0].value - payload[1].value)/100000).toFixed(2)}L
                        </div>
                    )}
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Financial P&L Trajectory</h1>
                <p className={styles.subtitle}>Macro analysis of revenue scaling against operational spend</p>
            </div>

            <div className={styles.kpiGrid}>
                <div className={styles.kpiCard}>
                    <p className={styles.kpiLabel}>YTD Gross Revenue</p>
                    <h2 className={styles.kpiValue}>₹{(revenueData.reduce((acc, curr) => acc + curr.revenue, 0) / 10000000).toFixed(2)}Cr</h2>
                    <div className={styles.kpiTarget}>Tracking against ₹1.5Cr Q3 target</div>
                </div>

                <div className={styles.kpiCard}>
                    <p className={styles.kpiLabel}>{currentMonth.month} Close (Current)</p>
                    <h2 className={styles.kpiValue}>₹{(currentMonth.revenue / 100000).toFixed(2)}L</h2>
                    <div className={`${styles.kpiTarget} ${revenueGrowth > 0 ? styles.posTrend : styles.negTrend}`}>
                        {revenueGrowth > 0 ? '↗' : '↘'} {Math.abs(revenueGrowth)}% vs {prevMonth.month}
                    </div>
                </div>

                <div className={`${styles.kpiCard} ${styles.profitCard}`}>
                    <p className={styles.kpiLabel}>Net Profit Margin ({currentMonth.month})</p>
                    <h2 className={styles.kpiValue}>₹{(profitCurrent / 100000).toFixed(2)}L</h2>
                    <div className={styles.kpiTarget}>
                        {profitGrowth > 0 ? '↗' : '↘'} {Math.abs(profitGrowth)}% vs {prevMonth.month} Profit
                    </div>
                </div>
            </div>

            <div className={styles.chartCard}>
                <div className={styles.chartHeader}>
                    <h3 className={styles.cardTitle}>8-Month P&L Velocity</h3>
                    <div className={styles.legend}>
                        <div className={styles.legendItem}><span className={styles.dotRev}></span> Gross Revenue</div>
                        <div className={styles.legendItem}><span className={styles.dotExp}></span> Operating Expenses</div>
                    </div>
                </div>

                <div className={styles.chartWrapper}>
                    <ResponsiveContainer width="100%" height={400}>
                        <AreaChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <defs>
                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontWeight: 600}} dy={15} />
                            <YAxis axisLine={false} tickLine={false} dx={-10} tick={{fill: '#64748B'}} tickFormatter={(v) => `₹${v/100000}L`} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" activeDot={{r: 8, strokeWidth: 0, fill: '#059669'}} />
                            <Area type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorExp)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default MonthlyRevenue;
