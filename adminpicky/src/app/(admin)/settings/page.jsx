"use client";

import React, { useState } from 'react';
import styles from './settings.module.css';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('General Settings');

  // STATES
  const [general, setGeneral] = useState({
    siteName: "Ajith Store",
    description: "Best ecommerce platform",
    currency: "INR",
    timezone: "Asia/Kolkata",
    maintenanceMode: false,
    darkMode: true
  });

  const [branding, setBranding] = useState({
    logo: "",
    favicon: "",
    themeColor: "#e11d48", // pick default primary
  });

  const [payment, setPayment] = useState({
    razorpay: "rzp_test_xxxxxx",
    stripe: "pk_test_xxxxxx",
    cod: true
  });

  const [email, setEmail] = useState({
    smtpEmail: "no-reply@ajithstore.com",
    password: "",
    port: "587",
    host: "smtp.mailtrap.io"
  });

  const [notification, setNotification] = useState({
    emailAdmin: true,
    smsAlerts: false,
    orderAlerts: true
  });

  const [profile, setProfile] = useState({
    name: "Ajith Kumar",
    email: "admin@ajithstore.com",
    phone: "+91 9876543210",
    role: "Super Admin",
    location: "Chennai, Tamil Nadu",
    bio: "Passionate e-commerce architect leading the digital storefront operations.",
    profileImage: "https://i.pravatar.cc/150?img=11",
    coverImage: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80"
  });

  const [security, setSecurity] = useState({
    password: "",
    twoFactor: false,
    loginAlerts: true,
    apiKeys: "ak_live_8392jf982j3"
  });

  const [localization, setLocalization] = useState({
    language: "English",
    currency: "INR",
    region: "India"
  });

  const [integrations, setIntegrations] = useState({
    googleAnalytics: "G-XXXXXXXXXX",
    metaPixel: "1234567890",
    googleMapsApi: ""
  });

  const [social, setSocial] = useState({
    facebook: "https://facebook.com/ajithstore",
    instagram: "https://instagram.com/ajithstore_official",
    twitter: "https://twitter.com/ajithstore"
  });

  const [checkout, setCheckout] = useState({
    guestCheckout: true,
    minOrderAmount: "500",
    freeShippingThreshold: "2000"
  });

  const [policies, setPolicies] = useState({
    taxType: "GST",
    taxPercentage: "18",
    termsUrl: "/terms",
    privacyUrl: "/privacy"
  });

  const tabs = [
    { name: 'General Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0...' },
    { name: 'Branding', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14' },
    { name: 'Payment Gateway', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { name: 'Email Settings', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Notification Settings', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
    { name: 'Integrations & Analytics', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { name: 'Social Media', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
    { name: 'Checkout Settings', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Tax & Policies', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { name: 'Profile Settings', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Security Settings', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { name: 'Localization & Advanced', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' }
  ];

  // Global Save
  const saveSettings = () => {
    const allSettings = { general, branding, payment, email, notification, integrations, social, checkout, policies, profile, security, localization };
    console.log("Global Settings Saved:", allSettings);
    alert("Configurations saved completely. Check console for output.");
  };

  const clearCache = () => {
     alert("⚡ System Cache Cleared Successfully!");
  };

  const backupData = () => {
     alert("💾 Database Backup Initiated! Exporting data.sql...");
  };

  // Generic toggles
  const toggleState = (setter, stateObj, key) => {
    setter({ ...stateObj, [key]: !stateObj[key] });
  };

  // Dynamic Content Render
  const renderContent = () => {
    switch(activeTab) {
      case 'General Settings':
        return (
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Website Name</label>
              <input className={styles.input} value={general.siteName} onChange={e => setGeneral({...general, siteName: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Website Description</label>
              <input className={styles.input} value={general.description} onChange={e => setGeneral({...general, description: e.target.value})} />
            </div>
            <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label className={styles.label}>Default Currency</label>
                 <select className={styles.select} value={general.currency} onChange={e => setGeneral({...general, currency: e.target.value})}>
                    <option value="INR">INR (₹)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                 </select>
               </div>
               <div className={styles.formGroup}>
                 <label className={styles.label}>Timezone</label>
                 <select className={styles.select} value={general.timezone} onChange={e => setGeneral({...general, timezone: e.target.value})}>
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="Europe/London">Europe/London</option>
                 </select>
               </div>
            </div>
            <div className={styles.formGroup} style={{marginTop: '1rem'}}>
               <label className={styles.label}>Maintenance Mode 🚧 <span style={{fontSize: '0.8rem', color: '#64748b'}}>Offline site to public</span></label>
               <div className={styles.toggleWrapper} onClick={() => toggleState(setGeneral, general, 'maintenanceMode')}>
                  <div className={`${styles.toggle} ${general.maintenanceMode ? styles.on : ''}`}>
                     <div className={styles.toggleThumb}></div>
                  </div>
                  <span>{general.maintenanceMode ? 'Active' : 'Disabled'}</span>
               </div>
            </div>
            <div className={styles.formGroup}>
               <label className={styles.label}>Frontend Dark Mode 🌙 <span style={{fontSize: '0.8rem', color: '#64748b'}}>Default site theme</span></label>
               <div className={styles.toggleWrapper} onClick={() => toggleState(setGeneral, general, 'darkMode')}>
                  <div className={`${styles.toggle} ${general.darkMode ? styles.on : ''}`}>
                     <div className={styles.toggleThumb}></div>
                  </div>
                  <span>{general.darkMode ? 'ON' : 'OFF'}</span>
               </div>
            </div>
          </div>
        );

      case 'Branding':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Upload Frontend Logo</label>
                  <div className={styles.fileInputWrapper}>
                     <input type="file" className={styles.fileInput} onChange={(e) => setBranding({...branding, logo: URL.createObjectURL(e.target.files[0])})} />
                     <p style={{color: '#64748b'}}>Drag & Drop or Click to Browse</p>
                  </div>
                  {branding.logo && <img src={branding.logo} className={styles.imagePreview} alt="Logo Preview" />}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Upload Favicon (.ico / .png)</label>
                  <div className={styles.fileInputWrapper}>
                     <input type="file" className={styles.fileInput} onChange={(e) => setBranding({...branding, favicon: URL.createObjectURL(e.target.files[0])})} />
                     <p style={{color: '#64748b'}}>Drop favicon image here</p>
                  </div>
                  {branding.favicon && <img src={branding.favicon} className={styles.imagePreview} alt="Favicon Preview" style={{width: '64px', height: '64px'}} />}
                </div>
             </div>
             <div className={styles.formGroup}>
               <label className={styles.label}>Primary Theme Color 🎨</label>
               <input type="color" value={branding.themeColor} onChange={e => setBranding({...branding, themeColor: e.target.value})} style={{width: '100px', height: '50px', border: 'none', cursor: 'pointer'}} />
             </div>

             {/* Live Frontend Rendering Demo */}
             <div style={{marginTop: '2rem', padding: '1.5rem', background: general.darkMode ? '#0f172a' : '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
                <h4 style={{color: general.darkMode ? 'white' : '#0f172a', marginBottom: '1rem'}}>Live Frontend Apply (Main Site Demo) 🔥</h4>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', background: general.darkMode ? '#1e293b' : 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'}}>
                   {branding.logo ? <img src={branding.logo} style={{maxHeight:'40px'}} /> : <div style={{width: '40px', height: '40px', background: branding.themeColor, borderRadius:'8px'}}></div>}
                   <h1 style={{margin: 0, color: general.darkMode ? 'white' : branding.themeColor, fontSize: '1.5rem'}}>{general.siteName}</h1>
                   <nav style={{marginLeft: 'auto', display: 'flex', gap: '1rem', color: general.darkMode ? '#cbd5e1' : '#64748b'}}>
                      <span>Home</span>
                      <span>Shop</span>
                      <span>Contact</span>
                   </nav>
                </div>
             </div>
          </div>
        );

      case 'Payment Gateway':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formGroup}>
                <label className={styles.label}>Razorpay API Key</label>
                <input className={styles.input} type="password" value={payment.razorpay} onChange={e => setPayment({...payment, razorpay: e.target.value})} />
             </div>
             <div className={styles.formGroup}>
                <label className={styles.label}>Stripe Publishable Key</label>
                <input className={styles.input} type="password" value={payment.stripe} onChange={e => setPayment({...payment, stripe: e.target.value})} />
             </div>
             <div className={styles.formGroup} style={{marginTop: '1rem'}}>
               <label className={styles.label}>Cash on Delivery (COD) Enable</label>
               <div className={styles.toggleWrapper} onClick={() => toggleState(setPayment, payment, 'cod')}>
                  <div className={`${styles.toggle} ${payment.cod ? styles.on : ''}`}><div className={styles.toggleThumb}></div></div>
                  <span>{payment.cod ? 'Enabled' : 'Disabled'}</span>
               </div>
            </div>
          </div>
        );

      case 'Email Settings':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>SMTP Host</label>
                  <input className={styles.input} value={email.host} onChange={e => setEmail({...email, host: e.target.value})} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>SMTP Port</label>
                  <input className={styles.input} value={email.port} onChange={e => setEmail({...email, port: e.target.value})} />
                </div>
             </div>
             <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Sender Email</label>
                  <input className={styles.input} value={email.smtpEmail} onChange={e => setEmail({...email, smtpEmail: e.target.value})} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>SMTP Password</label>
                  <input className={styles.input} type="password" value={email.password} onChange={e => setEmail({...email, password: e.target.value})} placeholder="********" />
                </div>
             </div>
             <button className={styles.btnPrimary} style={{width: 'fit-content', marginTop: '1rem'}} onClick={() => alert("Email settings verified & saved!")}>Verify Connection</button>
          </div>
        );

      case 'Notification Settings':
        return (
          <div className={styles.formGrid}>
             <div className={styles.advancedCard}>
                <div>
                   <div style={{fontWeight: 'bold', color: '#0f172a', marginBottom: '0.2rem'}}>Admin Email Alerts</div>
                   <div style={{fontSize: '0.85rem', color: '#64748b'}}>Receive daily summaries and critical warnings via email.</div>
                </div>
                <div className={styles.toggleWrapper} onClick={() => toggleState(setNotification, notification, 'emailAdmin')}>
                  <div className={`${styles.toggle} ${notification.emailAdmin ? styles.on : ''}`}><div className={styles.toggleThumb}></div></div>
               </div>
             </div>
             
             <div className={styles.advancedCard}>
                <div>
                   <div style={{fontWeight: 'bold', color: '#0f172a', marginBottom: '0.2rem'}}>SMS Notifications</div>
                   <div style={{fontSize: '0.85rem', color: '#64748b'}}>Send OTPs and order dispatches through SMS gateways.</div>
                </div>
                <div className={styles.toggleWrapper} onClick={() => toggleState(setNotification, notification, 'smsAlerts')}>
                  <div className={`${styles.toggle} ${notification.smsAlerts ? styles.on : ''}`}><div className={styles.toggleThumb}></div></div>
               </div>
             </div>

             <div className={styles.advancedCard}>
                <div>
                   <div style={{fontWeight: 'bold', color: '#0f172a', marginBottom: '0.2rem'}}>Real-time Order Alerts</div>
                   <div style={{fontSize: '0.85rem', color: '#64748b'}}>Dashboard pushes real-time notifications on new orders.</div>
                </div>
                <div className={styles.toggleWrapper} onClick={() => toggleState(setNotification, notification, 'orderAlerts')}>
                  <div className={`${styles.toggle} ${notification.orderAlerts ? styles.on : ''}`}><div className={styles.toggleThumb}></div></div>
               </div>
             </div>
          </div>
        );
        
      case 'Integrations & Analytics':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formGroup}>
                <label className={styles.label}>Google Analytics 4 Measurement ID</label>
                <input className={styles.input} value={integrations.googleAnalytics} onChange={e => setIntegrations({...integrations, googleAnalytics: e.target.value})} placeholder="G-XXXXXXXXXX" />
             </div>
             <div className={styles.formGroup}>
                <label className={styles.label}>Meta (Facebook) Pixel ID</label>
                <input className={styles.input} value={integrations.metaPixel} onChange={e => setIntegrations({...integrations, metaPixel: e.target.value})} placeholder="Pixel ID" />
             </div>
             <div className={styles.formGroup}>
                <label className={styles.label}>Google Maps API Key (For Geolocation / Delivery)</label>
                <input className={styles.input} value={integrations.googleMapsApi} onChange={e => setIntegrations({...integrations, googleMapsApi: e.target.value})} placeholder="AIzaSyB..." />
             </div>
          </div>
        );

      case 'Social Media':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formGroup}>
                <label className={styles.label}>Facebook Page URL</label>
                <input className={styles.input} value={social.facebook} onChange={e => setSocial({...social, facebook: e.target.value})} />
             </div>
             <div className={styles.formGroup}>
                <label className={styles.label}>Instagram Profile URL</label>
                <input className={styles.input} value={social.instagram} onChange={e => setSocial({...social, instagram: e.target.value})} />
             </div>
             <div className={styles.formGroup}>
                <label className={styles.label}>Twitter / X Profile URL</label>
                <input className={styles.input} value={social.twitter} onChange={e => setSocial({...social, twitter: e.target.value})} />
             </div>
          </div>
        );

      case 'Checkout Settings':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Minimum Order Amount (₹)</label>
                  <input className={styles.input} type="number" value={checkout.minOrderAmount} onChange={e => setCheckout({...checkout, minOrderAmount: e.target.value})} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Free Shipping Threshold (₹)</label>
                  <input className={styles.input} type="number" value={checkout.freeShippingThreshold} onChange={e => setCheckout({...checkout, freeShippingThreshold: e.target.value})} />
                </div>
             </div>
             <div className={styles.advancedCard} style={{marginTop: '1rem'}}>
                <div>
                   <div style={{fontWeight: 'bold', color: '#0f172a', marginBottom: '0.2rem'}}>Allow Guest Checkout</div>
                   <div style={{fontSize: '0.85rem', color: '#64748b'}}>Let customers buy without creating an account.</div>
                </div>
                <div className={styles.toggleWrapper} onClick={() => toggleState(setCheckout, checkout, 'guestCheckout')}>
                  <div className={`${styles.toggle} ${checkout.guestCheckout ? styles.on : ''}`}><div className={styles.toggleThumb}></div></div>
               </div>
             </div>
          </div>
        );

      case 'Tax & Policies':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Region Tax Type</label>
                  <select className={styles.select} value={policies.taxType} onChange={e => setPolicies({...policies, taxType: e.target.value})}>
                     <option value="GST">GST (India)</option>
                     <option value="VAT">VAT</option>
                     <option value="SalesTax">Sales Tax (US)</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Flat Tax Percentage (%)</label>
                  <input className={styles.input} type="number" value={policies.taxPercentage} onChange={e => setPolicies({...policies, taxPercentage: e.target.value})} />
                </div>
             </div>
             <div className={styles.formGroup}>
                <label className={styles.label}>Terms & Conditions URL</label>
                <input className={styles.input} value={policies.termsUrl} onChange={e => setPolicies({...policies, termsUrl: e.target.value})} />
             </div>
             <div className={styles.formGroup}>
                <label className={styles.label}>Privacy Policy URL</label>
                <input className={styles.input} value={policies.privacyUrl} onChange={e => setPolicies({...policies, privacyUrl: e.target.value})} />
             </div>
          </div>
        );

      case 'Profile Settings':
        return (
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
             {/* Cover & Avatar Header */}
             <div style={{position: 'relative', width: '100%', borderRadius: '12px', overflow: 'visible'}}>
                <div style={{height: '160px', width: '100%', backgroundImage: profile.coverImage ? `url(${profile.coverImage})` : 'linear-gradient(to right, var(--primary-color), #fb7185)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px 12px 0 0', position: 'relative'}}>
                   <label style={{position: 'absolute', right: '1rem', bottom: '1rem', background: 'rgba(255,255,255,0.9)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                      Change Cover
                      <input type="file" style={{display: 'none'}} onChange={(e) => { if(e.target.files[0]){ setProfile({...profile, coverImage: URL.createObjectURL(e.target.files[0])}) } }} />
                   </label>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 2rem', marginTop: '-40px'}}>
                   <div style={{position: 'relative', width: '100px', height: '100px', borderRadius: '50%', border: '4px solid white', backgroundColor: '#f1f5f9', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      {profile.profileImage ? (
                          <img src={profile.profileImage} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} alt="Profile" />
                      ) : (
                          <span style={{fontSize: '3rem'}}>👤</span>
                      )}
                      <label style={{position: 'absolute', bottom: '0', right: '0', background: 'var(--primary-color)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '2px solid white'}}>
                         <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                         <input type="file" style={{display: 'none'}} onChange={(e) => { if(e.target.files[0]){ setProfile({...profile, profileImage: URL.createObjectURL(e.target.files[0])}) } }} />
                      </label>
                   </div>
                   <button className={styles.btnPrimary} style={{padding: '0.6rem 1.5rem', fontSize: '0.9rem'}} onClick={() => alert("Profile updated successfully!")}>Save Profile</button>
                </div>
             </div>

             {/* Profile Grid */}
             <div className={styles.formGrid}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input className={styles.input} value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Job Role / Designation</label>
                    <input className={styles.input} value={profile.role} onChange={e => setProfile({...profile, role: e.target.value})} />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Login Email Address</label>
                    <input className={styles.input} value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone Number</label>
                    <input className={styles.input} value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Location / Address</label>
                  <input className={styles.input} value={profile.location} onChange={e => setProfile({...profile, location: e.target.value})} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Admin Bio / About</label>
                  <textarea className={styles.input} rows="4" style={{resize: 'vertical'}} value={profile.bio} onChange={e => setProfile({...profile, bio: e.target.value})} placeholder="Tell your team about yourself..."></textarea>
                </div>
             </div>
          </div>
        );
      
      case 'Security Settings':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Change Password</label>
                  <input className={styles.input} type="password" value={security.password} onChange={e => setSecurity({...security, password: e.target.value})} placeholder="Enter new password" />
                </div>
             </div>
             
             <div className={styles.advancedCard} style={{marginTop: '1rem'}}>
                <div>
                   <div style={{fontWeight: 'bold', color: '#0f172a', marginBottom: '0.2rem'}}>Two Factor Authentication (2FA)</div>
                   <div style={{fontSize: '0.85rem', color: '#64748b'}}>Requires OTP generated from Google Authenticator upon login.</div>
                </div>
                <div className={styles.toggleWrapper} onClick={() => toggleState(setSecurity, security, 'twoFactor')}>
                  <div className={`${styles.toggle} ${security.twoFactor ? styles.on : ''}`}><div className={styles.toggleThumb}></div></div>
               </div>
             </div>

             <div className={styles.advancedCard}>
                <div>
                   <div style={{fontWeight: 'bold', color: '#0f172a', marginBottom: '0.2rem'}}>Login Alerts</div>
                   <div style={{fontSize: '0.85rem', color: '#64748b'}}>Alert via email when a login occurs from an unrecognised device/IP.</div>
                </div>
                <div className={styles.toggleWrapper} onClick={() => toggleState(setSecurity, security, 'loginAlerts')}>
                  <div className={`${styles.toggle} ${security.loginAlerts ? styles.on : ''}`}><div className={styles.toggleThumb}></div></div>
               </div>
             </div>
             
             <div className={styles.formGroup} style={{marginTop: '1rem'}}>
               <label className={styles.label}>API Keys Management 🔑</label>
               <div style={{display: 'flex', gap: '1rem'}}>
                 <input className={styles.input} type="text" readOnly value={security.apiKeys} />
                 <button className={styles.btnPrimary} style={{background: '#0f172a'}} onClick={() => alert("New API Key Regenerated!")}>Regenerate</button>
               </div>
             </div>
          </div>
        );

      case 'Localization & Advanced':
        return (
          <div className={styles.formGrid}>
             <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Default Language</label>
                  <select className={styles.select} value={localization.language} onChange={e => setLocalization({...localization, language: e.target.value})}>
                     {/* Indian Languages */}
                     <option value="English">English</option>
                     <option value="Tamil">Tamil</option>
                     <option value="Hindi">Hindi</option>
                     <option value="Malayalam">Malayalam</option>
                     <option value="Telugu">Telugu</option>
                     <option value="Kannada">Kannada</option>
                     <option value="Bengali">Bengali</option>
                     <option value="Marathi">Marathi</option>
                     <option value="Gujarati">Gujarati</option>
                     <option value="Punjabi">Punjabi</option>
                     <option value="Urdu">Urdu</option>
                     
                     {/* Global Languages */}
                     <option value="Spanish">Spanish</option>
                     <option value="French">French</option>
                     <option value="German">German</option>
                     <option value="Italian">Italian</option>
                     <option value="Portuguese">Portuguese</option>
                     <option value="Russian">Russian</option>
                     <option value="Chinese">Chinese (Mandarin)</option>
                     <option value="Japanese">Japanese</option>
                     <option value="Korean">Korean</option>
                     <option value="Arabic">Arabic</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>System Region</label>
                  <select className={styles.select} value={localization.region} onChange={e => setLocalization({...localization, region: e.target.value})}>
                     <option value="Global">Global</option>
                     <option value="India">India</option>
                     <option value="USA">United States</option>
                     <option value="UK">United Kingdom</option>
                     <option value="Canada">Canada</option>
                     <option value="Australia">Australia</option>
                     <option value="Germany">Germany</option>
                     <option value="France">France</option>
                     <option value="Italy">Italy</option>
                     <option value="Spain">Spain</option>
                     <option value="Brazil">Brazil</option>
                     <option value="Mexico">Mexico</option>
                     <option value="Japan">Japan</option>
                     <option value="China">China</option>
                     <option value="SouthKorea">South Korea</option>
                     <option value="UAE">United Arab Emirates</option>
                     <option value="SaudiArabia">Saudi Arabia</option>
                     <option value="Singapore">Singapore</option>
                     <option value="Malaysia">Malaysia</option>
                     <option value="SouthAfrica">South Africa</option>
                     <option value="NewZealand">New Zealand</option>
                  </select>
                </div>
             </div>

             <h4 style={{marginTop: '2rem', marginBottom: '0.5rem', color: '#0f172a'}}>Advanced Operations ⚡</h4>
             <div style={{display: 'flex', gap: '1rem'}}>
                 <button className={styles.btnDanger} onClick={clearCache}>Sweep / Clear Cache ⚡</button>
                 <button className={styles.btnPrimary} style={{background: '#3b82f6'}} onClick={backupData}>Backup & Restore System 💾</button>
             </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>System Settings</h1>
          <p className={styles.subtitle}>Manage global configurations, integrations, and preferences.</p>
        </div>
        <button className={styles.btnPrimary} style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}} onClick={saveSettings}>
          Save All Settings 🔄
        </button>
      </div>

      <div className={styles.layout}>
        {/* Settings Inner Sidebar */}
        <div className={styles.sidebar}>
          {tabs.map((tab, idx) => (
             <div 
               key={idx} 
               className={`${styles.sidebarItem} ${activeTab === tab.name ? styles.active : ''}`}
               onClick={() => setActiveTab(tab.name)}
             >
               {tab.name}
             </div>
          ))}
        </div>

        {/* Settings Active Panel */}
        <div className={styles.contentArea}>
           <h2 className={styles.sectionTitle}>{activeTab}</h2>
           {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
