"use client";

import React, { useState, useMemo } from "react";
import styles from "./customer_hub.module.css";
import Link from "next/link";

const CustomerIntelligenceHub = () => {
    // ICONS (Premium Inline SVGs)
    const Icons = {
        Users: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
        Star: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
        Shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        Trend: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
        Close: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
        Search: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
        Trash: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>,
        Lock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
        Unlock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
    };

    // STATE
    const [customers, setCustomers] = useState([
        { id: "C-9801", name: "Ajith Kumar", email: "ajith@example.com", orders: 45, balance: "₹12,400", status: "VIP", joined: "Jan 2023", activity: "High" },
        { id: "C-8273", name: "Sneha Reddy", email: "sneha@test.in", orders: 12, balance: "₹1,800", status: "Regular", joined: "Feb 2024", activity: "Medium" },
        { id: "C-1102", name: "Rahul Sharma", email: "rahul@prime.com", orders: 85, balance: "₹45,200", status: "VIP", joined: "Nov 2022", activity: "High" },
        { id: "C-4482", name: "Priya Das", email: "priya@gmail.com", orders: 4, balance: "₹500", status: "Regular", joined: "Mar 2024", activity: "Low" },
        { id: "C-5561", name: "Vikram Singh", email: "vikram@pro.co", orders: 0, balance: "₹0", status: "Blocked", joined: "Apr 2024", activity: "None" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCustomer, setNewCustomer] = useState({ name: "", email: "", status: "Regular", activity: "Medium" });

    // FILTERING LOGIC (Moved up and useMemo optimized)
    const filteredCustomers = useMemo(() => {
        return customers.filter(c => 
            (c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
             c.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
             c.id.includes(searchTerm)) &&
            (filterStatus === "All" || c.status === filterStatus)
        );
    }, [customers, searchTerm, filterStatus]);

    // DASHBOARD KPIS (Now uses stable filteredCustomers)
    const stats = useMemo(() => [
        { label: "Total Accounts", value: (12400 + filteredCustomers.length).toLocaleString(), desc: "Global user index", icon: Icons.Users, color: "#2563eb" },
        { label: "VIP Network", value: customers.filter(c => c.status === "VIP").length, desc: "High-tier clusters", icon: Icons.Star, color: "#f59e0b" },
        { label: "Retention Rate", value: "94.2%", desc: "Platform loyalty", icon: Icons.Trend, color: "#10b981" },
        { label: "Accounts Risk", value: customers.filter(c => c.status === "Blocked").length, desc: "Blocked / Inactive", icon: Icons.Shield, color: "#ef4444" },
    ], [customers, filteredCustomers]);

    // HANDLERS
    const handleAddCustomer = (e) => {
        e.preventDefault();
        const id = `C-${Math.floor(Math.random() * 9000) + 1000}`;
        const joined = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        setCustomers([...customers, { ...newCustomer, id, joined, orders: 0, balance: "₹0" }]);
        setIsModalOpen(false);
        setNewCustomer({ name: "", email: "", status: "Regular", activity: "Medium" });
    };

    const toggleStatus = (id) => {
        setCustomers(customers.map(c => 
            c.id === id ? { ...c, status: c.status === "Blocked" ? "Regular" : "Blocked" } : c
        ));
    };

    const deleteCustomer = (id) => {
        if(window.confirm("Permanently de-register this account?")) {
            setCustomers(customers.filter(c => c.id !== id));
        }
    };

    const handleExport = () => {
        const csv = "ID,Name,Email,Status,Orders,Balance\n" + customers.map(c => `${c.id},${c.name},${c.email},${c.status},${c.orders},${c.balance}`).join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "customer_intel_report.csv";
        a.click();
    };

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Customer Intelligence Dashboard</h1>
                    <p className={styles.hubSubtitle}>Unified insight into user behavior, lifecycle management and account oversight.</p>
                </div>
                <div className={styles.hubActions}>
                    <button onClick={handleExport} className={styles.secondaryBtn}>📥 Export Index</button>
                    <button onClick={() => setIsModalOpen(true)} className={styles.primaryBtn}>+ Register Customer</button>
                </div>
            </div>

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
                <div className={styles.chartWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>User Retention Flow</h3>
                        <div className={styles.chartTime}>Last 6 Months</div>
                    </div>
                    <div className={styles.flowGraph}>
                        {[65, 45, 85, 55, 95, 100].map((v, i) => (
                            <div key={i} className={styles.barWrap}>
                                <div className={styles.barFill} style={{ height: `${v}%` }}>
                                    <div className={styles.tooltip}>{v}% Rate</div>
                                </div>
                                <span>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.leaderboardWidget}>
                    <h3>High Performance User Clusters</h3>
                    <div className={styles.vipList}>
                        {customers.filter(c => c.status === "VIP").slice(0, 3).map((v, i) => (
                            <div key={i} className={styles.vipRow}>
                                <div className={styles.vipIcon}>{Icons.Star}</div>
                                <div className={styles.vipInfo}>
                                    <b>{v.name}</b>
                                    <span>{v.orders} Orders • {v.balance} Spend</span>
                                </div>
                                <Link href="/customer-management/customer-profile" className={styles.profileLink}>Profile</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.directoryWidget}>
                <div className={styles.listHeader}>
                    <div className={styles.headerMeta}>
                        <h3>Enterprise Account Directory</h3>
                        <p>Managing {filteredCustomers.length} active platform profiles.</p>
                    </div>
                    <div className={styles.listTools}>
                        <div className={styles.searchBox}>
                            <div className={styles.sIcon}>{Icons.Search}</div>
                            <input 
                                type="text" 
                                placeholder="Search by name, email or ID..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className={styles.statusFilter}>
                            <option value="All">All Tiers</option>
                            <option value="VIP">VIP Tier</option>
                            <option value="Regular">Standard</option>
                            <option value="Blocked">Blocked</option>
                        </select>
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.hubTable}>
                        <thead>
                            <tr>
                                <th>Identity Mapping</th>
                                <th>Lifecycle</th>
                                <th>Finance Context</th>
                                <th>System Status</th>
                                <th style={{textAlign: 'right'}}>Admin Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCustomers.map((c, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className={styles.custCell}>
                                            <div className={styles.avatarBox}>{c.name.charAt(0)}</div>
                                            <div>
                                                <div className={styles.custName}>{c.name}</div>
                                                <div className={styles.custId}>{c.id} • {c.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.lifeInfo}>
                                            <span className={styles.lifeIndicator} style={{ background: c.activity === 'High' ? '#10b981' : (c.activity === 'Medium' ? '#f59e0b' : '#94a3b8') }}></span>
                                            {c.activity} Activity
                                        </div>
                                        <small>{c.joined}</small>
                                    </td>
                                    <td>
                                        <div className={styles.moneyInfo}>
                                            <b>{c.balance}</b>
                                            <span>{c.orders} transactions</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={c.status === 'VIP' ? styles.statusVIP : (c.status === 'Regular' ? styles.statusRegular : styles.statusBlocked)}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actionHub}>
                                            <button onClick={() => toggleStatus(c.id)} className={styles.iconBtn} title="Toggle Access">
                                                {c.status === 'Blocked' ? Icons.Unlock : Icons.Lock}
                                            </button>
                                            <Link href="/customer-management/customer-profile" className={styles.iconBtn} title="Insight">👁️</Link>
                                            <button onClick={() => deleteCustomer(c.id)} className={styles.iconBtn} style={{color: '#ef4444'}} title="De-register">{Icons.Trash}</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h3>Initialize Account Registration</h3>
                            <button onClick={() => setIsModalOpen(false)} className={styles.closeBtn}>{Icons.Close}</button>
                        </div>
                        <form onSubmit={handleAddCustomer} className={styles.modalForm}>
                            <div className={styles.formGroup}>
                                <label>Full Legal Nomenclature</label>
                                <input type="text" required placeholder="e.g. Ajith Kumar" value={newCustomer.name} onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Digital Identity (Email)</label>
                                <input type="email" required placeholder="customer@domain.com" value={newCustomer.email} onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})} />
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Tier Assignment</label>
                                    <select value={newCustomer.status} onChange={(e) => setNewCustomer({...newCustomer, status: e.target.value})}>
                                        <option value="Regular">Standard Account</option>
                                        <option value="VIP">VIP Gold Tier</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Initial Activity Index</label>
                                    <select value={newCustomer.activity} onChange={(e) => setNewCustomer({...newCustomer, activity: e.target.value})}>
                                        <option value="High">High Inflow</option>
                                        <option value="Medium">Medium Stability</option>
                                        <option value="Low">Low Interaction</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.modalActions}>
                                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.cancelBtn}>Discard</button>
                                <button type="submit" className={styles.submitBtn}>Initialize Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerIntelligenceHub;
