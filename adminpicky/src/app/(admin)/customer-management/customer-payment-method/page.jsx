"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const CustomerPaymentMethod = () => {
    const [cards, setCards] = useState([
        { id: 1, type: 'Visa', brand: 'Visa', last4: '4242', expiry: '09/26', holder: 'ALICE JOHNSON', isDefault: true },
        { id: 2, type: 'Master', brand: 'Mastercard', last4: '8812', expiry: '12/25', holder: 'ALICE JOHNSON', isDefault: false },
    ]);

    const deleteCard = (id) => {
        if(confirm('Are you sure you want to remove this payment method?')) {
            setCards(cards.filter(c => c.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Payment Methods</h1>
                <p className={styles.subtitle}>Manage customer saved cards and payment preferences</p>
            </div>

            <div className={styles.paymentGrid}>
                {cards.map((card) => (
                    <div key={card.id} className={`${styles.paymentCard} ${card.brand.toLowerCase() === 'visa' ? styles.visa : styles.mastercard}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.brandIcon}>{card.brand}</div>
                            {card.isDefault && <span className={styles.defaultLabel}>Default</span>}
                        </div>
                        
                        <div className={styles.cardNumber}>
                            •••• •••• •••• {card.last4}
                        </div>

                        <div className={styles.cardFooter}>
                            <div className={styles.cardHolder}>
                                <label>Card Holder</label>
                                <span>{card.holder}</span>
                            </div>
                            <div className={styles.cardExpiry}>
                                <label>Expires</label>
                                <span>{card.expiry}</span>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.deleteBtn} onClick={() => deleteCard(card.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.addNewCard}>
                    <div className={styles.addContent}>
                        <div className={styles.plusIcon}>+</div>
                        <h3 className={styles.addTitle}>Add New Card</h3>
                        <p className={styles.addDesc}>Directly securely link a new bank card</p>
                    </div>
                </div>
            </div>

            <div className={styles.historyCard}>
                <h3 className={styles.hTitle}>Recent Payment Activity</h3>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Method</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Visa •••• 4242</td>
                                <td>Oct 12, 2024</td>
                                <td>$120.00</td>
                                <td><span className={styles.success}>Successful</span></td>
                            </tr>
                            <tr>
                                <td>Mastercard •••• 8812</td>
                                <td>Oct 05, 2024</td>
                                <td>$45.00</td>
                                <td><span className={styles.success}>Successful</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomerPaymentMethod;
