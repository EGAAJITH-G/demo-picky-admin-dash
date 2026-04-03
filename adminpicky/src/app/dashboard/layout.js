import SideNav from '@/components/layout/SideNav/SideNav';
import TopNav from '@/components/layout/TopNav/TopNav';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <SideNav />
      <main style={{ 
        flex: 1, 
        marginLeft: 'var(--sidebar-width)', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: 'var(--bg-color)'
      }}>
        <TopNav />
        {children}
      </main>
    </div>
  );
}
