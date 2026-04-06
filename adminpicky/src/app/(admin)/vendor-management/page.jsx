"use client";

import React, { useState, useMemo } from "react";
import styles from "./vendor.module.css";
import Link from "next/link";

const VendorDashboardOverview = () => {
    const [activeTimeframe, setActiveTimeframe] = useState("This Month");
    const [hoveredBar, setHoveredBar] = useState(null);

    // ICONS (Inline SVGs for high fidelity)
    const Icons = {
        Revenue: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>,
        Partners: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
        Vitality: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
        Shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        Search: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
        Check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    };

    // KPIs
    const stats = [
        { label: "Market Revenue", value: "₹45.2L", trend: "+12.4%", desc: "vs last month", icon: Icons.Revenue, color: "var(--primary-color)" },
        { label: "Total Partners", value: "1,248", trend: "+32", desc: "new this week", icon: Icons.Partners, color: "#2563eb" },
        { label: "Delivery Success", value: "98.2%", trend: "Stable", desc: "platform uptime", icon: Icons.Vitality, color: "#10b981" },
        { label: "KYC Verified", value: "88%", trend: "94 awaiting", desc: "compliance check", icon: Icons.Shield, color: "#f59e0b" },
    ];

    // GROWTH DATA (Working Widget)
    const growthData = [
        { day: "Mon", value: 65, sales: "₹42K" },
        { day: "Tue", value: 45, sales: "₹28K" },
        { day: "Wed", value: 85, sales: "₹56K" },
        { day: "Thu", value: 55, sales: "₹34K" },
        { day: "Fri", value: 95, sales: "₹62K" },
        { day: "Sat", value: 100, sales: "₹74K" },
        { day: "Sun", value: 75, sales: "₹48K" },
    ];

    return (
        <div className={styles.dashContainer}>
            <div className={styles.dashHeader}>
                <div>
                    <h1 className={styles.dashTitle}>Vendor Management Hub</h1>
                    <p className={styles.dashSubtitle}>Monitor seller performance, manage approvals and track revenue growth.</p>
                </div>
                <div className={styles.headerActions}>
                    <select className={styles.timeframeSelect} value={activeTimeframe} onChange={(e) => setActiveTimeframe(e.target.value)}>
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                    <Link href="/vendor-management/vendor-add" className={styles.primaryAddBtn}>
                        Create New Vendor
                    </Link>
                </div>
            </div>

            {/* KPI WIDGETS */}
            <div className={styles.statGrid}>
                {stats.map((s, i) => (
                    <div key={i} className={styles.statCard}>
                        <div className={styles.statIconBox} style={{ color: s.color, backgroundColor: `${s.color}10` }}>
                            {s.icon}
                        </div>
                        <div className={styles.statInfo}>
                            <label>{s.label}</label>
                            <h2>{s.value}</h2>
                            <div className={styles.statMeta}>
                                <span className={s.trend.startsWith('+') ? styles.trendUp : styles.trendNeutral}>{s.trend}</span>
                                <span>{s.desc}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.mainDashboardGrid}>
                {/* WIDGET: NETWORK GROWTH (Working Widget) */}
                <div className={styles.chartWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Network Growth Curve</h3>
                        <div className={styles.legend}>
                            <div className={styles.legendItem}><span style={{background: 'var(--primary-color)'}}></span> High performance</div>
                        </div>
                    </div>
                    <div className={styles.growthGraph}>
                        <div className={styles.yAxis}>
                            <span>100%</span>
                            <span>50%</span>
                            <span>0%</span>
                        </div>
                        <div className={styles.barsContainer}>
                            {growthData.map((d, i) => (
                                <div 
                                    key={i} 
                                    className={styles.barGroup}
                                    onMouseEnter={() => setHoveredBar(i)}
                                    onMouseLeave={() => setHoveredBar(null)}
                                >
                                    <div className={styles.barSpace}>
                                        <div 
                                            className={`${styles.actualBar} ${hoveredBar === i ? styles.barHovered : ''}`} 
                                            style={{ height: `${d.value}%` }}
                                        >
                                            {hoveredBar === i && <div className={styles.tooltip}>{d.sales}</div>}
                                        </div>
                                    </div>
                                    <span className={styles.barLabel}>{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WIDGET: RECENT VENDORS (Operational List) */}
                <div className={styles.recentVendorsWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Recent Partners</h3>
                        <Link href="/vendor-management/vendor-list" className={styles.viewLink}>View All</Link>
                    </div>
                    <div className={styles.partnersList}>
                        {[
                            { name: "Ajith Electronics", cat: "Tech", sales: "₹4.2L", status: "Active" },
                            { name: "Global Exports", cat: "Logistics", sales: "₹1.8L", status: "Active" },
                            { name: "Organic Hub", cat: "Health", sales: "₹2.4L", status: "Pending" },
                        ].map((p, i) => (
                            <div key={i} className={styles.partnerRow}>
                                <div className={styles.pAvatar}>{p.name.charAt(0)}</div>
                                <div className={styles.pInfo}>
                                    <b>{p.name}</b>
                                    <span>{p.cat}</span>
                                </div>
                                <div className={styles.pSales}>{p.sales}</div>
                                <div className={`${styles.pStatus} ${p.status === 'Active' ? styles.statusActive : styles.statusPending}`}>
                                    {p.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.lowerGrid}>
                {/* WIDGET: TASKS & NOTICES */}
                <div className={styles.taskWidget}>
                    <h3>Administrative Actions</h3>
                    <div className={styles.taskList}>
                        <div className={styles.taskCard}>
                            <div className={styles.checkCircle}>{Icons.Check}</div>
                            <div className={styles.taskBody}>
                                <b>Validate 48 new KYC requests</b>
                                <p>Submitted in the last 24 hours.</p>
                            </div>
                            <Link href="/vendor-management/approvereject-vendor" className={styles.actionBtn}>Process</Link>
                        </div>
                        <div className={styles.taskCard}>
                            <div className={styles.checkCircle}>{Icons.Check}</div>
                            <div className={styles.taskBody}>
                                <b>Review 12 flagged products</b>
                                <p>Reported for policy violation.</p>
                            </div>
                            <button className={styles.actionBtn}>Review</button>
                        </div>
                    </div>
                </div>

                {/* WIDGET: CATEGORY PERFORMANCE */}
                <div className={styles.categoryWidget}>
                    <h3>Category Market Share</h3>
                    <div className={styles.catBars}>
                        {[
                            { name: "Electronics", val: 78, color: "#e11d48" },
                            { name: "Fashion", val: 56, color: "#2563eb" },
                            { name: "Home Decor", val: 42, color: "#10b981" },
                        ].map((c, i) => (
                            <div key={i} className={styles.catBarItem}>
                                <div className={styles.catMeta}>
                                    <span>{c.name}</span>
                                    <b>{c.val}%</b>
                                </div>
                                <div className={styles.barBg}>
                                    <div className={styles.barFill} style={{ width: `${c.val}%`, background: c.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorDashboardOverview;
