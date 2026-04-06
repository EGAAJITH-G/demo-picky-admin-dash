"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from '../helpCenter.module.css';

const LiveChat = () => {
  const [activeChat, setActiveChat] = useState({ id: 'C1', user: 'Ajith G', newMsg: true });
  
  const [chats, setChats] = useState([
    { id: 'C1', user: 'Ajith G', lastMsg: 'I need help with my refund', newMsg: true, online: true },
    { id: 'C2', user: 'Sarah L', lastMsg: 'Thanks for the quick response', newMsg: false, online: false },
    { id: 'C3', user: 'Mike T', lastMsg: 'Is this product still in stock?', newMsg: false, online: true }
  ]);

  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: "Hi, I have an issue with my refund.", time: "10:30 AM" },
    { id: 2, sender: 'bot', text: "Hi there! An agent will be with you shortly. 🤖", time: "10:30 AM" },
    { id: 3, sender: 'user', text: "It's been 5 days and I haven't received it.", time: "10:32 AM" },
  ]);

  const [reply, setReply] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if(!reply.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'admin', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setReply("");
    
    // Auto-reply bot simulation after 3 seconds for demo purposes
    if (Math.random() > 0.5) {
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: "Okay, thank you so much! 👍", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        }, 3000);
    }
  };

  const selectChat = (c) => {
    setActiveChat(c);
    setChats(chats.map(chat => chat.id === c.id ? { ...chat, newMsg: false } : chat));
    // simulate loading different msgs
    setMessages([
        { id: 1, sender: 'user', text: `Hi, ${c.lastMsg}`, time: "09:00 AM" }
    ]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Live Chat Support 🔥</h1>
          <p className={styles.subtitle}>Engage with your customers in real-time. Auto-reply bots are active.</p>
        </div>
      </div>

      <div className={styles.contentWrapper} style={{height: '70vh', minHeight: '500px'}}>
        
        {/* Chat List Sidebar */}
        <div className={styles.formSection} style={{flex: '0 0 300px', padding: '1rem', display: 'flex', flexDirection: 'column'}}>
           <div style={{fontWeight: 800, color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '1rem'}}>Active Chats</div>
           <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto', flex: 1}}>
              {chats.map(c => (
                 <div key={c.id} 
                      onClick={() => selectChat(c)}
                      style={{
                        padding: '1rem', borderRadius: '12px', cursor: 'pointer',
                        background: activeChat?.id === c.id ? '#f1f5f9' : 'white',
                        border: activeChat?.id === c.id ? '2px solid var(--primary-color)' : '1px solid #e2e8f0',
                        display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.2s'
                      }}>
                    <div style={{position: 'relative'}}>
                       <div style={{width: '40px', height: '40px', background: '#cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white'}}>
                          {c.user.charAt(0)}
                       </div>
                       {c.online && <div style={{position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', background: '#22c55e', border: '2px solid white', borderRadius: '50%'}}></div>}
                    </div>
                    <div style={{flex: 1, minWidth: 0}}>
                       <div style={{fontWeight: 700, color: '#0f172a', display: 'flex', justifyContent: 'space-between'}}>
                          {c.user}
                          {c.newMsg && <span style={{width: '8px', height: '8px', background: 'var(--primary-color)', borderRadius: '50%'}}></span>}
                       </div>
                       <div style={{fontSize: '0.8rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{c.lastMsg}</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Chat Interface */}
        <div className={styles.formSection} style={{padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
           {/* Chat Header */}
           <div style={{padding: '1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{width: '45px', height: '45px', background: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '1.2rem'}}>
                     {activeChat?.user.charAt(0)}
                  </div>
                  <div>
                     <h3 style={{margin: 0, fontSize: '1.2rem'}}>{activeChat?.user}</h3>
                     <span style={{fontSize: '0.85rem', color: '#22c55e', fontWeight: 600}}>Online 🟢</span>
                  </div>
              </div>
              <button className={styles.btnPrimary} style={{background: '#fef08a', color: '#ca8a04'}}>Resolve Chat</button>
           </div>
           
           {/* Message History */}
           <div style={{flex: 1, background: '#f8fafc', padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              {messages.map(msg => (
                 <div key={msg.id} style={{
                    display: 'flex', flexDirection: 'column',
                    alignSelf: msg.sender === 'admin' ? 'flex-end' : 'flex-start',
                    maxWidth: '70%'
                 }}>
                    <div style={{
                       padding: '1rem', borderRadius: '16px',
                       background: msg.sender === 'admin' ? 'var(--primary-color)' : msg.sender === 'bot' ? '#e2e8f0' : 'white',
                       color: msg.sender === 'admin' ? 'white' : '#0f172a',
                       border: msg.sender === 'user' ? '1px solid #cbd5e1' : 'none',
                       borderBottomRightRadius: msg.sender === 'admin' ? 0 : '16px',
                       borderBottomLeftRadius: msg.sender === 'user' || msg.sender === 'bot' ? 0 : '16px',
                       boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                    }}>
                       {msg.text}
                    </div>
                    <span style={{fontSize: '0.75rem', color: '#94a3b8', alignSelf: msg.sender === 'admin' ? 'flex-end' : 'flex-start', marginTop: '0.2rem'}}>
                       {msg.sender === 'admin' ? 'You' : msg.sender === 'bot' ? 'Auto-Bot🤖' : activeChat.user} • {msg.time}
                    </span>
                 </div>
              ))}
              <div ref={endRef} />
           </div>

           {/* Input Box */}
           <div style={{padding: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '1rem'}}>
              <input 
                 type="text" 
                 value={reply} 
                 onChange={(e) => setReply(e.target.value)} 
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 placeholder="Type your message here... (Press Enter to send)" 
                 className={styles.input} 
                 style={{flex: 1, borderRadius: '30px', padding: '1rem 1.5rem'}} 
              />
              <button 
                 onClick={handleSend}
                 style={{
                    width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-color)', 
                    color: 'white', border: 'none', cursor: 'pointer', display: 'flex', 
                    alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(225, 29, 72, 0.4)'
                 }}>
                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
