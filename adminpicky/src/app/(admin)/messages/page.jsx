"use client";

import React, { useState } from 'react';
import styles from './messages.module.css';

const messagesData = [
  { id: 1, sender: "Sarah (Support)", email: "sarah@support.com", subject: "Customer raised ticket #TK-891", preview: "The customer is asking for a refund on order #99281...", time: "10:30 AM", body: "Hello Admin,\n\nA customer has raised a high-priority ticket (#TK-891) regarding Order #99281. They claim the package arrived damaged. I have attached the photos they sent. Please authorize the refund or tell me how to proceed.\n\nBest, Sarah" },
  { id: 2, sender: "Vendor Inquiry", email: "contact@megavendors.com", subject: "When will the payments settle?", preview: "Hi team, checking on the settlement for last week...", time: "Yesterday", body: "Hi Picky Team,\n\nWe noticed our settlement for the previous week hasn't hit our bank account yet. Could you clarify the timeline for the COD remittance cycle?\n\nThanks,\nMega Vendors LLC" },
  { id: 3, sender: "System Alerts", email: "no-reply@picky.com", subject: "Invoice #INV-2993 Failed", preview: "Payment gateway timeout for transaction...", time: "Mon", body: "Automated alert:\n\nThe invoice #INV-2993 failed processing via Razorpay webhook. Status code: 408 Timeout. Please manually verify this transaction." },
  { id: 4, sender: "Marketing Team", email: "marketing@ajithstore.com", subject: "Campaign Draft Approval Request", preview: "Please review the upcoming Diwali ad creatives...", time: "Oct 12", body: "Hi Admin,\n\nWe have finalized the drafts for the upcoming Diwali mega-sale creatives. Could you please review them and let us know if the 20% discount code structure matches your financial projections?\n\nCheck the shared drive for assets.\n\nRegards,\nThe Marketing Team" },
  { id: 5, sender: "Michael (Logistics)", email: "dispatch@picky.com", subject: "Courier Partner SLA Violation", preview: "BlueDart failed to pick up 45 packages today...", time: "Oct 10", body: "Admin,\n\nJust a heads up, our primary courier partner BlueDart failed to pick up the 45 outbound packages from the Chennai warehouse today. This violates our 24-hour dispatch SLA. What should we do? Should we switch everything to Delhivery for tomorrow's bulk?\n\nMichael" },
  { id: 6, sender: "Partnerships User", email: "collabs@influencer.net", subject: "Collaboration Proposal", preview: "I am a prominent fashion vlogger looking to collab...", time: "Oct 08", body: "Hello Picky Admin Team,\n\nI run a YouTube channel with over 500K subscribers in the fashion/lifestyle niche. I love your new product catalog and would be heavily interested in doing a sponsored unboxing video.\n\nPlease find my media kit attached. Let me know if you are open to discussing rates.\n\nCheers!" }
];

export default function MessagesPage() {
  const [activeMessage, setActiveMessage] = useState(messagesData[0]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Inbox & Messages</h1>
        <p className={styles.subtitle}>Manage customer support tickets, vendor inquiries, and system alerts.</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.sidebar}>
           <div className={styles.searchBox}>
              <input type="text" placeholder="Search emails..." className={styles.input} />
           </div>
           <div className={styles.messageList}>
              {messagesData.map(msg => (
                <div 
                  key={msg.id} 
                  className={`${styles.messageItem} ${activeMessage.id === msg.id ? styles.active : ''}`}
                  onClick={() => setActiveMessage(msg)}
                >
                  <div className={styles.itemHeader}>
                     <span className={styles.senderName}>{msg.sender}</span>
                     <span className={styles.time}>{msg.time}</span>
                  </div>
                  <div className={styles.subject}>{msg.subject}</div>
                  <div className={styles.preview}>{msg.preview}</div>
                </div>
              ))}
           </div>
        </div>

        <div className={styles.viewer}>
          {activeMessage ? (
             <>
               <div className={styles.viewerHeader}>
                 <div className={styles.viewerSubject}>{activeMessage.subject}</div>
                 <div className={styles.viewerMeta}>
                   <div className={styles.avatar}>{activeMessage.sender.charAt(0)}</div>
                   <div>
                     <div style={{fontWeight: '600', color: '#0f172a'}}>{activeMessage.sender}</div>
                     <div style={{fontSize: '0.8rem', color: '#64748b'}}>From: {activeMessage.email}</div>
                   </div>
                 </div>
               </div>
               <div className={styles.viewerBody}>
                 {activeMessage.body.split('\n').map((para, i) => (
                    <p key={i} style={{marginBottom: '1rem'}}>{para}</p>
                 ))}
               </div>
               <div className={styles.viewerFooter}>
                 <textarea className={styles.replyInput} rows="3" placeholder="Type your reply here..."></textarea>
                 <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                   <button className={styles.btnPrimary} onClick={() => alert("Message Sent!")}>Send Reply</button>
                 </div>
               </div>
             </>
          ) : (
            <div className={styles.emptyState}>Select a message to read</div>
          )}
        </div>
      </div>
    </div>
  );
}
