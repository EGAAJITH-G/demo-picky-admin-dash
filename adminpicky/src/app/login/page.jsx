"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const Login = () => {
    useEffect(() => {
        const isAuth = localStorage.getItem('picky_auth');
        if (isAuth) {
            window.location.href = '/';
        }
    }, []);

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulating login request delay
        setTimeout(() => {
            setLoading(false);
            localStorage.setItem('picky_auth', 'true');
            window.location.href = '/';
        }, 1200);
    };

    const handleSecurityKey = () => {
        // Simulating WebAuthn / FIDO2 prompt
        alert("Please insert your USB Security Key or authenticate via biometric passkey.");
    };

    return (
        <div className={styles.container}>
            {/* Split Layout: Left Presentation Pane */}
            <div className={styles.leftPane}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>v2.4 Enterprise</div>
                    <h2>Scale Your E-Commerce Pipeline</h2>
                    <p>Access advanced analytics, logistical routing, and dynamic customer controls globally. Secured by industry standard encryption.</p>
                </div>
            </div>

            {/* Split Layout: Right Auth Pane */}
            <div className={styles.rightPane}>
                <div className={styles.loginCard}>
                    <div className={styles.logoHeader}>
                        <img src="/logo.png" alt="Picky Admin Logo" className={styles.brandPng} />
                        <h1>Sign in to Picky</h1>
                        <p>Welcome back! Enter your details.</p>
                    </div>

                    <form onSubmit={handleLogin} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Admin Email</label>
                            <input
                                type="email"
                                placeholder="name@pickysaas.com"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <div className={styles.labelRow}>
                                <label>Password</label>
                                <a href="#" className={styles.forgotLink}>Forgot?</a>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.loginBtn}
                            disabled={loading || !credentials.email || !credentials.password}
                        >
                            {loading ? 'Authenticating...' : 'Sign In'}
                        </button>

                        <div className={styles.divider}>
                            <span>OR</span>
                        </div>

                        <button
                            type="button"
                            className={styles.securityKeyBtn}
                            onClick={handleSecurityKey}
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                            Use Hardware Security Key
                        </button>
                    </form>

                    <div className={styles.footerInfo}>
                        <p>© {new Date().getFullYear()} Picky SaaS Portal.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
