"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const DeliveryPartners = () => {
    const [partners, setPartners] = useState([
        { id: 1, name: "BlueDart Express", area: "National", active: true },
        { id: 2, name: "Delhivery", area: "National", active: true },
        { id: 3, name: "Dunzo", area: "Local (Chennai)", active: false },
        { id: 4, name: "Shadowfax", area: "State", active: true },
        { id: 5, name: "FedEx International", area: "Global", active: false }
    ]);

    const [form, setForm] = useState({ name: '', area: '' });
    const [toast, setToast] = useState('');

    const togglePartner = (id) => {
        setPartners(prev => prev.map(p => 
            p.id === id ? { ...p, active: !p.active } : p
        ));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if(!form.name || !form.area) return;

        setPartners([{ id: Date.now(), name: form.name, area: form.area, active: true }, ...partners]);
        setForm({ name: '', area: '' });
        
        setToast("Logistics contract mapped successfully.");
        setTimeout(() => setToast(''), 3000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Delivery Fleet & Partners</h1>
                <p className={styles.subtitle}>Configure which 3rd-party logistics providers are routing your payload</p>
            </div>

            <div className={styles.mainGrid}>
                {/* Integration Form */}
                <div className={styles.formCard}>
                    <h3 className={styles.cardTitle}>Integrate Logistics Provider</h3>
                    <form onSubmit={handleAdd} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>Courier Service Node</label>
                            <input 
                                type="text" 
                                value={form.name}
                                onChange={(e) => setForm({...form, name: e.target.value})}
                                placeholder="E.g., DHL Express"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Operational Coverage</label>
                            <select 
                                value={form.area}
                                onChange={(e) => setForm({...form, area: e.target.value})}
                            >
                                <option value="">Select Routing Zone...</option>
                                <option value="Local">Local Fleet</option>
                                <option value="State">State-Wide</option>
                                <option value="National">National Coverage</option>
                                <option value="Global">Global / International</option>
                            </select>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Map New Integration
                        </button>
                    </form>
                </div>

                {/* Logistics Hub Table */}
                <div className={styles.tableCard}>
                    <h3 className={styles.cardTitle}>Active Fleet Configurations</h3>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Provider Name</th>
                                    <th>Service Perimeter</th>
                                    <th style={{ textAlign: 'center' }}>Routing Status</th>
                                    <th style={{ textAlign: 'right' }}>Integration Control</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partners.map(partner => (
                                    <tr key={partner.id} className={!partner.active ? styles.disabledRow : ''}>
                                        <td>
                                            <div className={styles.providerName}>
                                                <div className={styles.providerIcon}>TRK</div>
                                                {partner.name}
                                            </div>
                                        </td>
                                        <td><span className={styles.areaTag}>{partner.area}</span></td>
                                        <td style={{ textAlign: 'center' }}>
                                            <span className={`${styles.statusBadge} ${partner.active ? styles.badgeActive : styles.badgeInactive}`}>
                                                {partner.active ? 'Accepting Orders' : 'Offline'}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.toggleCell}>
                                                <label className={styles.switch}>
                                                    <input 
                                                        type="checkbox" 
                                                        checked={partner.active}
                                                        onChange={() => togglePartner(partner.id)}
                                                    />
                                                    <span className={styles.slider}></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {toast && (
                <div className={styles.toast}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    {toast}
                </div>
            )}
        </div>
    );
};

export default DeliveryPartners;
