"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

export default function CatchAllAdminPage() {
  const pathname = usePathname();
  const pageName = pathname.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div style={{ padding: '2rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <header>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main)', fontFamily: 'Poppins, sans-serif' }}>
          {pageName}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
          Management / {pageName}
        </p>
      </header>

      <div style={{ 
        flex: 1, 
        backgroundColor: '#fff', 
        borderRadius: '1rem', 
        border: '2px dashed #E5E7EB', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#9CA3AF',
        fontSize: '1.25rem',
        fontWeight: 500
      }}>
        Workspace for "{pageName}" is currently blank and ready for implementation.
      </div>
    </div>
  );
}
