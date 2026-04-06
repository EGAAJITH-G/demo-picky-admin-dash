"use client";

import React, { useState, useMemo } from "react";
import styles from "./product_hub.module.css";
import Link from "next/link";

const ProductManagementHub = () => {
    // DASHBOARD STATE
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredChartBar, setHoveredChartBar] = useState(null);

    // DYNAMIC DATASET (Simulated)
    const [products, setProducts] = useState([
        { id: "P-9801", name: "Sony PS5 Pulse 3D", cat: "Electronics", price: "₹12,400", stock: 45, sales: 142, status: "In Stock" },
        { id: "P-2893", name: "Nike Air Max 270", cat: "Fashion", price: "₹1,800", stock: 12, sales: 842, status: "Low Stock" },
        { id: "P-1102", name: "Modern Kitchen Knife", cat: "Kitchen", price: "₹1,100", stock: 0, sales: 110, status: "Out of Stock" },
        { id: "P-4482", name: "Logitech MX Master", cat: "Electronics", price: "₹8,500", stock: 102, sales: 56, status: "In Stock" },
        { id: "P-5561", name: "Smart LED Bulb", cat: "Home", price: "₹450", stock: 8, sales: 231, status: "Low Stock" },
    ]);

    // ICONS
    const Icons = {
        Inventory: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
        StockValue: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
        LowStock: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
        Check: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
        Trash: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
    };

    // KPI METRICS
    const stats = [
        { label: "Total Inventory", value: "8,452", desc: "items actively listed", icon: Icons.Inventory, color: "#2563eb" },
        { label: "Net Asset Value", value: "₹28.4L", desc: "+18% this month", icon: Icons.StockValue, color: "#10b981" },
        { label: "Low/Out of Stock", value: products.filter(p => ["Low Stock", "Out of Stock"].includes(p.status)).length, desc: "immediate attention", icon: Icons.LowStock, color: "#e11d48" },
        { label: "Order Volume", value: "248", desc: "pending fulfillment", icon: Icons.Check, color: "#9333ea" },
    ];

    // INVENTORY GROWTH DATA (Working Widget)
    const inventoryData = [
        { label: "Wk 1", val: 40, count: "120 New" },
        { label: "Wk 2", val: 65, count: "210 New" },
        { label: "Wk 3", val: 35, count: "95 New" },
        { label: "Wk 4", val: 90, count: "340 New" },
    ];

    // CATEGORY DISTRIBUTION
    const categoryStats = [
        { name: "Electronics", val: 84, color: "#2563eb" },
        { name: "Fashion", val: 62, color: "#e11d48" },
        { name: "Kitchen", val: 31, color: "#10b981" },
        { name: "Home Living", val: 18, color: "#f59e0b" },
    ];

    // FILTERING LOGIC
    const filteredProducts = products.filter(p => 
        (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.includes(searchTerm)) &&
        (activeCategory === "All" || p.cat === activeCategory)
    );

    const deleteProduct = (id) => {
        if (window.confirm("Remove this product from active listings?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className={styles.hubContainer}>
            {/* HUB HEADER */}
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Product Management Hub</h1>
                    <p className={styles.hubSubtitle}>Central administrative center for inventory health, stock control and market analytics.</p>
                </div>
                <div className={styles.hubActions}>
                    <Link href="/product-management/product-addeditdelete" className={styles.primaryBtn}>
                        Create New Product
                    </Link>
                </div>
            </div>

            {/* PRODUCT KPI GRID */}
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

            <div className={styles.middleHubGrid}>
                {/* WIDGET: INVENTORY VELOCITY (Working Widget) */}
                <div className={styles.chartWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Batch Inflow Activity</h3>
                        <Link href="/product-management/sku" className={styles.detailedLink}>Analyze SKUs →</Link>
                    </div>
                    <div className={styles.growthGraph}>
                        <div className={styles.barsContainer}>
                            {inventoryData.map((d, i) => (
                                <div key={i} className={styles.barGroup} onMouseEnter={() => setHoveredChartBar(i)} onMouseLeave={() => setHoveredChartBar(null)}>
                                    <div className={styles.barSpace}>
                                        <div className={`${styles.actualBar} ${hoveredChartBar === i ? styles.barHovered : ''}`} style={{ height: `${d.val}%` }}>
                                            {hoveredChartBar === i && <div className={styles.tooltip}>{d.count}</div>}
                                        </div>
                                    </div>
                                    <span className={styles.barLabel}>{d.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WIDGET: CATEGORY PERFORMANCE */}
                <div className={styles.catWidget}>
                    <h3>Inventory Category Split</h3>
                    <div className={styles.catBars}>
                        {categoryStats.map((c, i) => (
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
                    <Link href="/product-management/product-categories" className={styles.secondaryBtn}>Adjust Hierarchies</Link>
                </div>
            </div>

            {/* WIDGET: PRODUCT MANAGEMENT TABLE */}
            <div className={styles.listWidget}>
                <div className={styles.listHeader}>
                    <div className={styles.listHeaderInfo}>
                        <h3>Product Inventory List</h3>
                        <span>Showing {filteredProducts.length} active SKUs</span>
                    </div>
                    <div className={styles.listControls}>
                        <div className={styles.searchBox}>
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select onChange={(e) => setActiveCategory(e.target.value)} className={styles.selectFilter}>
                            <option value="All">All Categories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Kitchen">Kitchen</option>
                        </select>
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product Details</th>
                                <th>Category</th>
                                <th>Unit Price</th>
                                <th>Stock Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((p, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className={styles.productCell}>
                                            <div className={styles.prodInitial}>{p.name.charAt(0)}</div>
                                            <div className={styles.prodInfo}>
                                                <b className={styles.prodName}>{p.name}</b>
                                                <span className={styles.prodId}>{p.id} • {p.sales} total sales</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className={styles.catBadge}>{p.cat}</span></td>
                                    <td><span className={styles.priceText}>{p.price}</span></td>
                                    <td>
                                        <div className={styles.stockColumn}>
                                            <span className={p.status === 'In Stock' ? styles.statusInStock : (p.status === 'Low Stock' ? styles.statusLow : styles.statusOut)}>
                                                {p.status}
                                            </span>
                                            <b>{p.stock} units available</b>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.tableActions}>
                                            <Link href="/product-management/product-addeditdelete" className={styles.iconBtn} title="Quick Edit">✏️</Link>
                                            <button onClick={() => deleteProduct(p.id)} className={styles.iconBtn} style={{color: '#ef4444'}} title="Delete Product">{Icons.Trash}</button>
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

export default ProductManagementHub;
