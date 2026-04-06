"use client";

import React, { useState, useMemo } from "react";
import styles from "./category_hub.module.css";
import Link from "next/link";

const CategoryManagementHub = () => {
    // DASHBOARD ICONS (Premium Inline SVGs)
    const Icons = {
        Electronics: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
        Fashion: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>,
        Beauty: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
        Kitchen: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13V4m6 18v-6m5-7V4M3 9h18c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2z"/></svg>,
        Gifts: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
        Others: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
        // KPI Icons
        GlobalHub: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
        Velocity: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
        Map: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
        Close: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
        Trash: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
    };

    // CATEGORY STATE
    const [searchTerm, setSearchTerm] = useState("");
    const [hoveredTrend, setHoveredTrend] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);

    // DYNAMIC CATEGORY DATA (Using Icons Mapping)
    const [categories, setCategories] = useState([
        { id: "CAT-101", name: "Electronics", productCount: 1450, revenue: "₹12.4L", growth: "+14.2%", status: "Active", subCats: 12, iconName: "Electronics" },
        { id: "CAT-202", name: "Fashion", productCount: 842, revenue: "₹8.2L", growth: "+9.1%", status: "Active", subCats: 8, iconName: "Fashion" },
        { id: "CAT-303", name: "Beauty Products", productCount: 310, revenue: "₹3.1L", growth: "+18%", status: "Active", subCats: 5, iconName: "Beauty" },
        { id: "CAT-404", name: "Kitchen Products", productCount: 562, revenue: "₹5.4L", growth: "+6.4%", status: "Active", subCats: 9, iconName: "Kitchen" },
        { id: "CAT-505", name: "Gifts & Toys", productCount: 231, revenue: "₹1.1L", growth: "New", status: "Active", subCats: 4, iconName: "Gifts" },
        { id: "CAT-606", name: "Others", productCount: 102, revenue: "₹0.4L", growth: "-5%", status: "Review", subCats: 2, iconName: "Others" },
    ]);

    const [formData, setFormData] = useState({ name: "", iconName: "Others", productCount: 0, revenue: "₹0", growth: "New", status: "Active", subCats: 0 });

    const stats = useMemo(() => [
        { label: "Active Categories", value: categories.length, desc: "across the global ecosystem", icon: Icons.GlobalHub, color: "#2563eb" },
        { label: "Growth Velocity", value: "12.8%", desc: "overall network expansion", icon: Icons.Velocity, color: "#10b981" },
        { label: "Total Product Map", value: categories.reduce((acc, c) => acc + c.productCount, 0).toLocaleString(), desc: "Global index count", icon: Icons.Map, color: "#e11d48" },
    ], [categories]);

    const trendData = [
        { label: "Mon", val: 55, net: "+12%" },
        { label: "Tue", val: 40, net: "+8%" },
        { label: "Wed", val: 85, net: "+21%" },
        { label: "Thu", val: 65, net: "+14%" },
        { label: "Fri", val: 95, net: "+28%" },
    ];

    const filteredCategories = categories.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.id.includes(searchTerm)
    );

    const handleSaveCategory = (e) => {
        e.preventDefault();
        if (editingCategory) {
            setCategories(prev => prev.map(c => c.id === editingCategory.id ? { ...formData, id: c.id } : c));
        } else {
            const newId = `CAT-${Math.floor(Math.random() * 900) + 100}`;
            setCategories(prev => [...prev, { ...formData, id: newId }]);
        }
        setIsModalOpen(false);
        setEditingCategory(null);
    };

    const handleEdit = (cat) => {
        setEditingCategory(cat);
        setFormData(cat);
        setIsModalOpen(true);
    };

    const deleteCategory = (id) => {
        if (window.confirm("CAUTION: Deleting this category will unmap all products. Proceed?")) {
            setCategories(categories.filter(c => c.id !== id));
        }
    };

    const handleExport = () => {
        const csvContent = "data:text/csv;charset=utf-8,ID,Name,Products\n" + categories.map(c => `${c.id},${c.name},${c.productCount}`).join("\n");
        const link = document.createElement("a");
        link.setAttribute("href", encodeURI(csvContent));
        link.setAttribute("download", "categories.csv");
        link.click();
    };

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div className={styles.headerTitleArea}>
                    <h1 className={styles.hubTitle}>Category Management Command Hub</h1>
                    <p className={styles.hubSubtitle}>Unified control over global taxonomies and market distribution.</p>
                </div>
                <div className={styles.hubActions}>
                    <button onClick={handleExport} className={styles.exportBtn}>📊 Export Index</button>
                    <button className={styles.primaryBtn} onClick={() => { setEditingCategory(null); setIsModalOpen(true); }}>+ Create Model</button>
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

            <div className={styles.multiWidgetGrid}>
                 <div className={styles.chartWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Global Taxon Performance</h3>
                        <div className={styles.trendLegend}><span className={styles.dot}></span> Velocity Yield</div>
                    </div>
                    <div className={styles.trendGraph}>
                        <div className={styles.barsArea}>
                            {trendData.map((d, i) => (
                                <div key={i} className={styles.barColumn} onMouseEnter={() => setHoveredTrend(i)} onMouseLeave={() => setHoveredTrend(null)}>
                                    <div className={styles.barTrack}>
                                        <div className={`${styles.activeFill} ${hoveredTrend === i ? styles.fillActive : ''}`} style={{ height: `${d.val}%` }}>
                                            {hoveredTrend === i && <div className={styles.tooltip}>{d.net} Growth</div>}
                                        </div>
                                    </div>
                                    <span className={styles.barLabel}>{d.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.leaderboardWidget}>
                    <h3>High Performance Groups</h3>
                    <div className={styles.topList}>
                        {categories.sort((a, b) => b.productCount - a.productCount).slice(0, 4).map((c, i) => (
                            <div key={i} className={styles.leaderItem}>
                                <div className={styles.iconCircle} style={{ color: '#e11d48', background: '#fef2f2' }}>
                                    {Icons[c.iconName] || Icons.Others}
                                </div>
                                <div className={styles.leaderInfo}>
                                    <b>{c.name}</b>
                                    <span>{c.productCount} Active SKUs</span>
                                </div>
                                <div className={styles.revenueBadge}>{c.revenue}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.managementList}>
                <div className={styles.listHeader}>
                    <div className={styles.listHeaderInfo}>
                        <h3>Active Category Ecosystem</h3>
                        <p>Showing global hierarchies and performance indexing.</p>
                    </div>
                    <div className={styles.searchBox}>
                        <input 
                            type="text" 
                            placeholder="Search nomenclature..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.hubTable}>
                        <thead>
                            <tr>
                                <th>Category Identity</th>
                                <th>Layers</th>
                                <th>Portfolio</th>
                                <th>Revenue</th>
                                <th>Status</th>
                                <th style={{textAlign: 'right'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCategories.map((c, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className={styles.catCell}>
                                            <div className={styles.catIconBox} style={{ color: '#2563eb', background: '#f0f9ff' }}>
                                                {Icons[c.iconName] || Icons.Others}
                                            </div>
                                            <div>
                                                <div className={styles.catName}>{c.name}</div>
                                                <div className={styles.catId}>{c.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className={styles.subCatCount}>{c.subCats} Sub-taxons</span></td>
                                    <td>
                                        <div className={styles.statGroup}>
                                            <b>{c.productCount} SKUs</b>
                                            <span style={{ color: c.growth.startsWith('+') ? '#10b981' : (c.growth === 'New' ? '#2563eb' : '#ef4444') }}>{c.growth} trend</span>
                                        </div>
                                    </td>
                                    <td><b className={styles.moneyText}>{c.revenue}</b></td>
                                    <td><span className={c.status === 'Active' ? styles.statusActive : styles.statusReview}>{c.status}</span></td>
                                    <td>
                                        <div className={styles.actionHub}>
                                            <button onClick={() => handleEdit(c)} className={styles.editIconBtn}>✏️</button>
                                            <Link href={`/category-management/${c.name.toLowerCase().replace(/\s+/g, '-')}`} className={styles.manageBtn}>Manage</Link>
                                            <button onClick={() => deleteCategory(c.id)} className={styles.deleteBtn}>{Icons.Trash}</button>
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
                            <h3>{editingCategory ? "Update Taxon Model" : "Create New Model"}</h3>
                            <button onClick={() => setIsModalOpen(false)} className={styles.closeBtn}>{Icons.Close}</button>
                        </div>
                        <form onSubmit={handleSaveCategory} className={styles.modalForm}>
                            <div className={styles.formGroup}>
                                <label>Model Nomenclature</label>
                                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Category Name" />
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Visual Token (Icon Class)</label>
                                    <select value={formData.iconName} onChange={(e) => setFormData({...formData, iconName: e.target.value})}>
                                        <option value="Electronics">Electronics (💻)</option>
                                        <option value="Fashion">Fashion (👕)</option>
                                        <option value="Beauty">Beauty (💄)</option>
                                        <option value="Kitchen">Kitchen (🍳)</option>
                                        <option value="Gifts">Gifts (🎁)</option>
                                        <option value="Others">General (📦)</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Network Status</label>
                                    <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                                        <option value="Active">Active</option>
                                        <option value="Review">In Review</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.modalActions}>
                                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.cancelBtn}>Cancel</button>
                                <button type="submit" className={styles.submitBtn}>{editingCategory ? "Commit" : "Initialize"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryManagementHub;
