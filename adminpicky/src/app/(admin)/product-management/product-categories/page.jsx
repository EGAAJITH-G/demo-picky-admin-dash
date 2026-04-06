"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ProductCategories = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Clothing', count: 124, slug: 'clothing' },
        { id: 2, name: 'Electronics', count: 86, slug: 'electronics' },
        { id: 3, name: 'Beauty', count: 52, slug: 'beauty' },
        { id: 4, name: 'Gifts', count: 31, slug: 'gifts' },
        { id: 5, name: 'Home Decor', count: 18, slug: 'home-decor' },
    ]);

    const [newCatName, setNewCatName] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newCatName) return;
        if (editingId) {
            setCategories(categories.map(c => c.id === editingId ? { ...c, name: newCatName } : c));
            setEditingId(null);
        } else {
            setCategories([...categories, { id: Date.now(), name: newCatName, count: 0, slug: newCatName.toLowerCase().replace(/\s+/g, '-') }]);
        }
        setNewCatName('');
    };

    const handleEdit = (cat) => {
        setNewCatName(cat.name);
        setEditingId(cat.id);
    };

    const handleDelete = (id) => {
        if (confirm('Delete this category and all its product associations?')) {
            setCategories(categories.filter(c => c.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Product Categories</h1>
                <p className={styles.subtitle}>Organize your catalog into logical groups</p>
            </div>

            <div className={styles.mainGrid}>
                <div className={styles.addCard}>
                    <h3 className={styles.cardTitle}>{editingId ? 'Update Category' : 'Create New Category'}</h3>
                    <form onSubmit={handleAdd} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Category Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Footwear"
                                value={newCatName}
                                onChange={(e) => setNewCatName(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            {editingId ? 'Update' : 'Add Category'}
                        </button>
                        {editingId && (
                            <button type="button" onClick={() => { setEditingId(null); setNewCatName(''); }} className={styles.cancelBtn}>
                                Cancel
                            </button>
                        )}
                    </form>
                </div>

                <div className={styles.listCard}>
                    <h3 className={styles.cardTitle}>Category Inventory</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Products</th>
                                    <th style={{ textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(cat => (
                                    <tr key={cat.id}>
                                        <td>
                                            <span className={styles.catName}>{cat.name}</span>
                                            <span className={styles.catSlug}>/{cat.slug}</span>
                                        </td>
                                        <td>
                                            <span className={styles.countBadge}>{cat.count} Items</span>
                                        </td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button className={styles.editBtn} onClick={() => handleEdit(cat)}>
                                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                    </svg>
                                                </button>
                                                <button className={styles.deleteBtn} onClick={() => handleDelete(cat.id)}>
                                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
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
            </div>
        </div>
    );
};

export default ProductCategories;
