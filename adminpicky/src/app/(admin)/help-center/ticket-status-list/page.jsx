"use client";

import React, { useState } from 'react';
import styles from '../helpCenter.module.css';

const TicketStatusList = () => {
  const [tickets, setTickets] = useState([
    { id: 101, title: "Order not delivered", user: "John Doe", category: "Shipping", status: "Open", priority: "High", date: "2026-04-05" },
    { id: 102, title: "Refund issue #3928", user: "Jane Smith", category: "Payment", status: "Closed", priority: "Medium", date: "2026-04-03" },
    { id: 103, title: "Cannot apply coupon", user: "Mike T.", category: "Technical", status: "Pending", priority: "Low", date: "2026-04-06" },
  ]);

  const [search, setSearch] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyText, setReplyText] = useState("");

  const updateStatus = (id, newStatus) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: newStatus } : t));
    if (newStatus === "Closed") {
      alert(`📩 Auto-Reply Bot: "Your ticket #${id} has been closed."\nEmail Notification Sent!`);
    }
  };

  const handleReply = () => {
    if(!replyText) return;
    alert(`📩 Email Notification Sent to user!\nReply: "${replyText}"`);
    setReplyText("");
    setSelectedTicket(null);
  };

  const getStatusBadge = (status) => {
    if (status === 'Open') return styles.badgeOpen;
    if (status === 'Pending') return styles.badgePending;
    return styles.badgeClosed;
  };

  const getPriorityBadge = (priority) => {
    if (priority === 'High') return styles.badgePriorityHigh;
    if (priority === 'Medium') return styles.badgePriorityMedium;
    return styles.badgeOpen; // low uses yellow-ish
  };

  const filtered = tickets.filter(t => t.title.toLowerCase().includes(search.toLowerCase()) || t.id.toString().includes(search));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Support Tickets</h1>
          <p className={styles.subtitle}>Manage, reply to, and resolve customer support issues.</p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div style={{width: '100%'}}>
           <input type="text" placeholder="🔍 Search Ticket ID or Title..." value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchBar} style={{marginBottom: '1rem', width: '350px'}} />
        </div>

        <div className={styles.tableContainer} style={{marginTop: 0, flex: 2}}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>User / Issue Title</th>
                <th>Priority 🎨</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(t => (
                <tr key={t.id}>
                  <td style={{fontWeight: 'bold'}}>#{t.id}</td>
                  <td>
                     <div style={{fontWeight: 600, color: 'var(--text-main)'}}>{t.title}</div>
                     <div style={{fontSize: '0.8rem', color: '#64748b'}}>{t.user} • {t.category}</div>
                  </td>
                  <td><span className={`${styles.badge} ${getPriorityBadge(t.priority)}`}>{t.priority}</span></td>
                  <td>
                    <select 
                       value={t.status} 
                       onChange={(e) => updateStatus(t.id, e.target.value)}
                       className={`${styles.badge} ${getStatusBadge(t.status)}`}
                       style={{border: 'none', cursor: 'pointer', outline: 'none'}}
                    >
                      <option value="Open">Open</option>
                      <option value="Pending">Pending</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                  <td>{t.date}</td>
                  <td>
                     <button className={styles.btnPrimary} style={{padding: '0.4rem 1rem', fontSize: '0.8rem'}} onClick={() => setSelectedTicket(t)}>
                        Reply
                     </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan="6" style={{textAlign: 'center'}}>No tickets found.</td></tr>}
            </tbody>
          </table>
        </div>

        {/* Reply Panel */}
        {selectedTicket && (
          <div className={styles.formSection} style={{flex: 1, minWidth: '300px', height: 'fit-content'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
               <h3 style={{fontSize: '1.2rem', margin: 0, color: 'var(--primary-color)'}}>Reply to #{selectedTicket.id}</h3>
               <button onClick={() => setSelectedTicket(null)} style={{background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b'}}>&times;</button>
            </div>
            <div style={{padding: '1rem', background: '#f8fafc', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #e2e8f0'}}>
               <strong style={{display: 'block', marginBottom: '0.2rem'}}>{selectedTicket.title}</strong>
               <p style={{margin: 0, fontSize: '0.9rem', color: '#475569'}}>User reported an issue regarding {selectedTicket.category.toLowerCase()} that needs immediate attention.</p>
            </div>
            <textarea 
               value={replyText} 
               onChange={(e) => setReplyText(e.target.value)} 
               className={styles.textarea} 
               placeholder="Write your response to the user here..."
            ></textarea>
            <button className={styles.btnPrimary} style={{width: '100%', marginTop: '1rem'}} onClick={handleReply}>
               Send Email Reply 📩
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TicketStatusList;
