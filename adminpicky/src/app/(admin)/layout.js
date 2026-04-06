'use client';

import { useState, useEffect } from 'react';
import SideNav from '@/components/layout/SideNav/SideNav';
import TopNav from '@/components/layout/TopNav/TopNav';

import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('picky_auth');
    if (!isAuth) {
      window.location.href = '/login';
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <SideNav isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      <main style={{
        flex: 1,
        marginLeft: isMinimized ? '80px' : 'var(--sidebar-width)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <TopNav />
        <div style={{ padding: '2rem' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
