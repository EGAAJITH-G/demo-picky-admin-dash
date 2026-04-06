"use client";

import React from 'react';
import styles from '@/components/styles/hub.module.css';
import Link from 'next/link';

const HelpCenterOverview = () => {
    const stats = [
        { label: 'Open Tickets', value: '18', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>, color: '#FEE2E2', textColor: '#991B1B' },
        { label: 'Avg. Response', value: '45m', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>, color: '#DCFCE7', textColor: '#166534' },
        { label: 'Total FAQs', value: '124', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#E0E7FF', textColor: '#4F46E5' },
        { label: 'Satisfied', value: '98%', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, color: '#FEF3C7', textColor: '#92400E' },
    ];

    const urgentTickets = [
        { id: 'TIC991', user: 'Ajay K.', issue: 'Payment Failure', priority: 'Urgent' },
        { id: 'TIC993', user: 'Meena R.', issue: 'Wrong Item', priority: 'High' },
        { id: 'TIC995', user: 'Rahul S.', issue: 'Tracking Doubt', priority: 'Medium' },
    ];

    return (
        <div className={styles.hubContainer}>
            <div className={styles.hubHeader}>
                <div>
                    <h1 className={styles.hubTitle}>Help Center Overview</h1>
                    <p className={styles.hubSubtitle}>Customer support and knowledge base management.</p>
                </div>
                <Link href="/help-center/contact-support" className={styles.primaryBtn}>
                    Monitor Agents
                </Link>
            </div>

            <div className={styles.statGrid}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.statCard}>
                        <div className={styles.statIconBox} style={{ background: stat.color, color: stat.textColor }}>
                            <div className={styles.statIconInner}>{stat.icon}</div>
                        </div>
                        <div className={styles.statInfo}>
                            <label>{stat.label}</label>
                            <h2>{stat.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.middleHubGrid}>
                <div className={styles.chartWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Queue Status</h3>
                        <Link href="/help-center/ticket-status-list" className={styles.detailedLink}>View Ticket Queue</Link>
                    </div>
                    {/* Live Support Visualization */}
                    <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <div style={{ width: '200px', height: '200px', borderRadius: '50%', border: '15px solid #F1F5F9', borderTopColor: '#EC4899', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800' }}>85.4%</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '700' }}>Current Efficiency</div>
                         </div>
                    </div>
                </div>

                <div className={styles.listWidget}>
                    <div className={styles.widgetHeader}>
                        <h3>Urgent Support Tickets</h3>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Issue</th>
                                    <th>Priority</th>
                                </tr>
                            </thead>
                            <tbody>
                                {urgentTickets.map(ticket => (
                                    <tr key={ticket.id}>
                                        <td style={{ fontWeight: '800' }}>{ticket.id}</td>
                                        <td>{ticket.issue}</td>
                                        <td>
                                            <span style={{ 
                                                fontSize: '0.75rem', 
                                                fontWeight: '800', 
                                                color: ticket.priority === 'Urgent' ? '#f43f5e' : ticket.priority === 'High' ? '#f59e0b' : '#3b82f6'
                                            }}>
                                                {ticket.priority}
                                            </span>
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

export default HelpCenterOverview;
