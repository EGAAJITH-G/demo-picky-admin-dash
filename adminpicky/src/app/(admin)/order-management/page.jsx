"use client";

import React, { useState, useMemo } from "react";
import styles from "./order_hub.module.css";
import Link from "next/link";

const OrderCommandCenter = () => {
    // ICONS
    const Icons = {
        Orders: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
        Pending: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
        Shipping: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
        Refunds: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>,
        Search: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
        Filter: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
    };

    // STATE
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [hoveredChart, setHoveredChart] = useState(null);

    const [orders, setOrders] = useState([
        { id: "#ORD-9801", customer: "Ajith Kumar", date: "Oct 12, 2024", total: "₹4,250", status: "Processing", payment: "UPI" },
        { id: "#ORD-8823", customer: "Sneha Reddy", date: "Oct 12, 2024", total: "₹1,800", status: "Delivered", payment: "Card" },
        { id: "#ORD-1102", customer: "Rahul Sharma", date: "Oct 11, 2024", total: "₹12,400", status: "Pending", payment: "COD" },
        { id: "#ORD-4482", customer: "Priya Das", date: "Oct 10, 2024", total: "₹850", status: "Refunded", payment: "Wallet" },
        { id: "#ORD-5561", customer: "Vikram Singh", date: "Oct 10, 2024", total: "₹2,100", status: "Processing", payment: "UPI" },
    ]);

    // KPIS
    const stats = useMemo(() => [
        { label: "Total Volume", value: "1,248", desc: "all time bookings", icon: Icons.Orders, color: "#2563eb" },
        { label: "Pending Task", value: orders.filter(o => o.status === "Pending").length, desc: "urgent fulfillment", icon: Icons.Pending, color: "#f59e0b" },
        { label: "In-Transit", value: "84", desc: "global tracking active", icon: Icons.Shipping, color: "#9333ea" },
        { label: "Claims/Refunds", value: "12", desc: "resolution pending", icon: Icons.Refunds, color: "#ef4444" },
    ], [orders]);

    // FILTERING LOGIC
    const filteredOrders = useMemo(() => {
        return orders.filter(o => 
            (o.customer.toLowerCase().includes(searchTerm.toLowerCase()) || o.id.includes(searchTerm)) &&
            (filterStatus === "All" || o.status === filterStatus)
        );
    }, [orders, searchTerm, filterStatus]);

    // TREND DATA
    const trendData = [
        { day: "Mon", val: 40, count: "12 Orders" },
        { day: "Tue", val: 65, count: "24 Orders" },
        { day: "Wed", val: 35, count: "10 Orders" },
        { day: "Thu", val: 90, count: "48 Orders" },
        { day: "Fri", val: 75, count: "34 Orders" },
    ];

    return (
        <div className={styles.hubContainer}>
            {/* HEADER */}
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Order Command Center</h1>
                    <p className={styles.hubSubtitle}>Unified lifecycle management for global transactions, logistics and payment settlement.</p>
                </div>
                <div className={styles.hubActions}>
                    <button className={styles.secondaryBtn}>📥 Export Sheets</button>
                    <Link href="/order-management/order-list" className={styles.primaryBtn}>Initialize Manual Order</Link>
                </div>
            </div>

            {/* KPIS */}
            <div className={styles.statGrid}>
                {stats.map((s, i) => (
                    <div key={i} className={styles.statCard}>
                        <div className={styles.statIconBox} style={{ color: s.color, backgroundColor: `${s.color}10` }}>{s.icon}</div>
                        <div className={styles.statInfo}>
                            <label>{s.label}</label>
                            <h2>{s.value}</h2>
                            <span>{s.desc}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.dashboardGrid}>
                {/* VOLUME WIDGET */}
                <div className={styles.chartWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Order Volume Velocity</h3>
                        <div className={styles.legend}><span className={styles.dot}></span> Performance Yield</div>
                    </div>
                    <div className={styles.trendGraph}>
                        <div className={styles.barsArea}>
                            {trendData.map((d, i) => (
                                <div key={i} className={styles.barGroup} onMouseEnter={() => setHoveredChart(i)} onMouseLeave={() => setHoveredChart(null)}>
                                    <div className={styles.barTrack}>
                                        <div className={`${styles.activeFill} ${hoveredChart === i ? styles.fillActive : ''}`} style={{ height: `${d.val}%` }}>
                                            {hoveredChart === i && <div className={styles.tooltip}>{d.count}</div>}
                                        </div>
                                    </div>
                                    <span className={styles.barLabel}>{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* LOGISTICS FEED */}
                <div className={styles.feedWidget}>
                    <h3>Logistics Timeline</h3>
                    <div className={styles.timelineList}>
                        {[
                            { time: "2 min ago", desc: "#ORD-9801 moved to Processing", color: "#2563eb" },
                            { time: "1 hour ago", desc: "Refund approved for #ORD-1102", color: "#10b981" },
                            { time: "4 hours ago", desc: "Carrier picked up #ORD-8823", color: "#9333ea" },
                        ].map((f, i) => (
                            <div key={i} className={styles.feedItem}>
                                <div className={styles.feedLine} style={{ backgroundColor: f.color }}></div>
                                <div className={styles.feedBody}>
                                    <b>{f.desc}</b>
                                    <span>{f.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.auditLink}>View Global Audit Log →</button>
                </div>
            </div>

            {/* ORDER LISTING */}
            <div className={styles.listingWidget}>
                <div className={styles.listHeader}>
                    <div className={styles.headerMeta}>
                        <h3>Real-time Transaction Map</h3>
                        <p>Showing {filteredOrders.length} active platform orders.</p>
                    </div>
                    <div className={styles.tools}>
                        <div className={styles.searchBox}>
                            <div className={styles.sIcon}>{Icons.Search}</div>
                            <input 
                                type="text" 
                                placeholder="Order ID or Customer..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select onChange={(e) => setFilterStatus(e.target.value)} className={styles.statusSelect}>
                            <option value="All">All Lifecycles</option>
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Refunded">Refunded</option>
                        </select>
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.hubTable}>
                        <thead>
                            <tr>
                                <th>Transaction Identity</th>
                                <th>Client Context</th>
                                <th>Financial Value</th>
                                <th>Execution Status</th>
                                <th style={{textAlign: 'right'}}>Admin Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((o, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className={styles.orderIdCell}>
                                            <b>{o.id}</b>
                                            <span>Placed: {o.date}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.custInfo}>
                                            <b>{o.customer}</b>
                                            <span>Paid via {o.payment}</span>
                                        </div>
                                    </td>
                                    <td><b className={styles.moneyText}>{o.total}</b></td>
                                    <td>
                                        <span className={
                                            o.status === "Delivered" ? styles.statusDelivered : 
                                            (o.status === "Processing" ? styles.statusProcess : 
                                            (o.status === "Pending" ? styles.statusPending : styles.statusRefund))
                                        }>{o.status}</span>
                                    </td>
                                    <td>
                                        <div className={styles.actionHub}>
                                            <Link href="/order-management/order-details" className={styles.viewBtn}>Review Full Trace</Link>
                                            <button className={styles.moreBtn}>{Icons.Filter}</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderCommandCenter;
