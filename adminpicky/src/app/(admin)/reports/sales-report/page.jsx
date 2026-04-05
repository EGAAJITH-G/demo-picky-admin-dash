"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesReport = () => {
    const [dateRange, setDateRange] = useState('This Week');

    // Advanced Data Set simulating dynamic timeframe fetch
    const salesData = [
        { day: "Mon", sales: 2000, lastWeek: 1500 },
        { day: "Tue", sales: 3000, lastWeek: 2800 },
        { day: "Wed", sales: 2500, lastWeek: 2100 },
        { day: "Thu", sales: 4000, lastWeek: 3500 },
        { day: "Fri", sales: 3500, lastWeek: 3800 },
        { day: "Sat", sales: 5000, lastWeek: 4200 },
        { day: "Sun", sales: 6000, lastWeek: 5500 }
    ];

    const currentTotal = salesData.reduce((acc, curr) => acc + curr.sales, 0);
    const pastTotal = salesData.reduce((acc, curr) => acc + curr.lastWeek, 0);
    const growth = (((currentTotal - pastTotal) / pastTotal) * 100).toFixed(1);

    const handleExport = (type) => {
        // Simulated export logic
        alert(`Initiated ${type} Report Generation. Check your downloads shortly.`);
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.customTooltip}>
                    <p className={styles.ttLabel}>{label}</p>
                    <p className={styles.ttCurrent}>Current: ₹{payload[0].value}</p>
                    <p className={styles.ttPast}>Previous: ₹{payload[1].value}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Unified Sales Intelligence</h1>
                    <p className={styles.subtitle}>Track revenue pipelines and analyze period-over-period growth</p>
                </div>
                <div className={styles.headerActions}>
                    <select 
                        value={dateRange} 
                        onChange={(e) => setDateRange(e.target.value)} 
                        className={styles.dateFilter}
                    >
                        <option value="Today">Today (Live)</option>
                        <option value="This Week">Trailing 7 Days</option>
                        <option value="This Month">This Month</option>
                        <option value="YTD">Year to Date (YTD)</option>
                    </select>
                    
                    <button onClick={() => handleExport('PDF')} className={styles.exportBtn}>
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        PDF
                    </button>
                    <button onClick={() => handleExport('CSV')} className={styles.exportBtn}>
                        CSV
                    </button>
                </div>
            </div>

            <div className={styles.kpiGrid}>
                {/* Metric 1 */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiTop}>
                        <h3>Gross Sales Volume</h3>
                        <div className={styles.kpiIcon}>💰</div>
                    </div>
                    <div className={styles.kpiValue}>₹{currentTotal.toLocaleString()}</div>
                    <div className={styles.kpiMeta}>
                        <span className={`${styles.growthBadge} ${growth > 0 ? styles.positive : styles.negative}`}>
                            {growth > 0 ? '↑' : '↓'} {Math.abs(growth)}%
                        </span>
                        <span className={styles.compareText}>vs previous period</span>
                    </div>
                </div>

                {/* Metric 2 */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiTop}>
                        <h3>Total Active Orders</h3>
                        <div className={styles.kpiIcon}>📦</div>
                    </div>
                    <div className={styles.kpiValue}>1,432</div>
                    <div className={styles.kpiMeta}>
                        <span className={`${styles.growthBadge} ${styles.positive}`}>↑ 8.4%</span>
                        <span className={styles.compareText}>vs previous period</span>
                    </div>
                </div>

                {/* Metric 3 */}
                <div className={styles.kpiCard}>
                    <div className={styles.kpiTop}>
                        <h3>Average Order Value</h3>
                        <div className={styles.kpiIcon}>🛒</div>
                    </div>
                    <div className={styles.kpiValue}>₹{Math.floor(currentTotal / 1432).toLocaleString()}</div>
                    <div className={styles.kpiMeta}>
                        <span className={`${styles.growthBadge} ${styles.positive}`}>↑ 2.1%</span>
                        <span className={styles.compareText}>vs previous period</span>
                    </div>
                </div>
            </div>

            {/* Main Interactive Chart */}
            <div className={styles.chartCard}>
                <div className={styles.chartHeader}>
                    <h3>Revenue Velocity Comparison</h3>
                    <div className={styles.legend}>
                        <div className={styles.legendItem}>
                            <span className={styles.dotCurrent}></span> Current Period
                        </div>
                        <div className={styles.legendItem}>
                            <span className={styles.dotPast}></span> Last Period
                        </div>
                    </div>
                </div>
                
                <div className={styles.chartWrapper}>
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#9F1239" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#9F1239" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPast" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#94A3B8" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748B'}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B'}} dx={-10} tickFormatter={(val) => `₹${val/1000}k`} />
                            <Tooltip content={<CustomTooltip />} />
                            
                            <Area type="monotone" dataKey="sales" stroke="#9F1239" strokeWidth={3} fillOpacity={1} fill="url(#colorCurrent)" activeDot={{r: 6, strokeWidth: 0, fill: '#BE123C'}} />
                            <Area type="monotone" dataKey="lastWeek" stroke="#94A3B8" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorPast)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SalesReport;
