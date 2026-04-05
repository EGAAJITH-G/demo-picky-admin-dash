"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ProductManagement = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Premium Leather Boots', category: 'Clothing', price: 120, stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1520639889410-d04196f7320e?w=100&h=100&fit=crop', desc: 'A premium leather boot of the highest quality.' },
        { id: 2, name: 'Smart Home Speaker', category: 'Electronics', price: 89, stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=100&h=100&fit=crop', desc: 'A speaker to control your smart home.' },
        { id: 3, name: 'Silk Floral Scarf', category: 'Gifts', price: 45, stock: 8, status: 'Active', image: 'https://images.unsplash.com/photo-1582236113110-3843e1176b6b?w=100&h=100&fit=crop', desc: 'A beautiful silk scarf with floral patterns.' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', category: 'Clothing', price: '', stock: '', description: '', image: null });
    const [preview, setPreview] = useState(null);

    const handleOpenModal = (product = null) => {
        if (product) {
            setEditingProduct(product);
            setFormData({
                name: product.name,
                category: product.category,
                price: product.price,
                stock: product.stock,
                description: product.desc,
                image: null
            });
            setPreview(product.image);
        } else {
            setEditingProduct(null);
            setFormData({ name: '', category: 'Clothing', price: '', stock: '', description: '', image: null });
            setPreview(null);
        }
        setIsModalOpen(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, image: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingProduct) {
            setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...formData, image: preview || p.image } : p));
        } else {
            const newProduct = {
                id: Date.now(),
                ...formData,
                status: 'Active',
                image: preview || 'https://via.placeholder.com/100'
            };
            setProducts([...products, newProduct]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleArea}>
                    <h1 className={styles.title}>Product Management</h1>
                    <p className={styles.subtitle}>Add, edit, and manage your inventory listings</p>
                </div>
                <button className={styles.addBtn} onClick={() => handleOpenModal()}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Add Product
                </button>
            </div>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <div className={styles.productCell}>
                                            <img src={product.image} alt={product.name} className={styles.productImg} />
                                            <span className={styles.name}>{product.name}</span>
                                        </div>
                                    </td>
                                    <td><span className={styles.categoryBadge}>{product.category}</span></td>
                                    <td className={styles.price}>${product.price}</td>
                                    <td>
                                        <span className={`${styles.stockBadge} ${product.stock < 10 ? styles.lowStock : ''}`}>
                                            {product.stock} in stock
                                        </span>
                                    </td>
                                    <td><span className={styles.statusActive}>{product.status}</span></td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.editBtn} onClick={() => handleOpenModal(product)}>
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                </svg>
                                            </button>
                                            <button className={styles.deleteBtn} onClick={() => handleDelete(product.id)}>
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for Add/Edit */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
                            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label>Product Name</label>
                                    <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Category</label>
                                    <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                                        <option>Clothing</option>
                                        <option>Electronics</option>
                                        <option>Beauty</option>
                                        <option>Gifts</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Price ($)</label>
                                    <input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Stock</label>
                                    <input type="number" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} required />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label>Description</label>
                                    <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label>Product Image</label>
                                    <input type="file" onChange={handleFileChange} />
                                    {preview && <img src={preview} className={styles.modalPreview} alt="Preview" />}
                                </div>
                            </div>
                            <div className={styles.modalActions}>
                                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.cancelBtn}>Cancel</button>
                                <button type="submit" className={styles.submitBtn}>{editingProduct ? 'Update Product' : 'Create Product'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductManagement;
