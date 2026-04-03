import React from 'react';

const BlankPage = ({ params }) => {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Page Coming Soon</h1>
      <p style={{ color: 'var(--text-muted)' }}>This section of the admin panel is currently being developed.</p>
      <div style={{ 
        width: '100%', 
        height: '300px', 
        border: '2px dashed var(--border-color)', 
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)',
        backgroundColor: '#fff'
      }}>
        Blank Workspace
      </div>
    </div>
  );
};

export default BlankPage;
