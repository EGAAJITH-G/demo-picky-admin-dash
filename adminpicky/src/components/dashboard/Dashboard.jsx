import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const stats = [
    { label: 'TOTAL SALES', value: '$128k', change: '+12%', trend: 'up' },
    { label: 'TOTAL ORDERS', value: '1,402', change: '+8%', trend: 'up' },
    { label: 'PENDING', value: '42', change: 'Stable', trend: 'neutral' },
    { label: 'CUSTOMERS', value: '843', change: '+5%', trend: 'up' },
    { label: 'VENDORS', value: '128', change: 'Active', trend: 'neutral' },
    { label: 'PRODUCTS', value: '4,520', change: '-2%', trend: 'down' },
  ];

  const orders = [
    { id: '#ORD-9921', client: 'Elena Sterling', category: 'Fine Art Archive', status: 'Confirmed', value: '$4,200.00', avatar: 'ES' },
    { id: '#ORD-9918', client: 'Marcus Wright', category: 'Heritage Watch', status: 'Processing', value: '$12,850.00', avatar: 'MW' },
    { id: '#ORD-9915', client: 'Sienna Knight', category: 'Modern Sculpture', status: 'Confirmed', value: '$9,100.00', avatar: 'SK' },
    { id: '#ORD-9912', client: 'John Chen', category: 'Digital Asset', status: 'Cancelled', value: '$1,450.00', avatar: 'JC' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Performance Overview</h1>
          <p className={styles.subtitle}>Data insight for the week of Oct 24 - Oct 31</p>
        </div>
        <button className={styles.dateSelector}>
          This Week
          <svg className={styles.chevronIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </header>

      <section className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statLabel}>{stat.label}</span>
            <span className={styles.statValue}>{stat.value}</span>
            <div className={`${styles.statTrend} ${styles[stat.trend]}`}>
              {stat.trend === 'up' && '↗'} {stat.trend === 'down' && '↘'} {stat.change}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.chartSection}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h2 className={styles.chartTitle}>Revenue Trend</h2>
              <p className={styles.chartSub}>MONTHLY GROWTH PERFORMANCE</p>
            </div>
            <button className={styles.fullReportBtn}>FULL REPORT →</button>
          </div>
          <div className={styles.chartMockup}>
            {/* Visual representation of the bars from the image */}
            <div className={styles.barGroup}>
              <div className={styles.barWrap}><div className={styles.bar} style={{ height: '30%' }}></div><span>JAN</span></div>
              <div className={styles.barWrap}><div className={styles.bar} style={{ height: '50%' }}></div><span>MAR</span></div>
              <div className={styles.barWrap}><div className={styles.bar} style={{ height: '40%' }}></div><span>MAY</span></div>
              <div className={styles.barWrap}>
                <div className={styles.barHigh} style={{ height: '90%' }}>
                  <div className={styles.tooltip}>128k</div>
                </div>
                <span>JUL</span>
              </div>
              <div className={styles.barWrap}><div className={styles.bar} style={{ height: '60%' }}></div><span>SEP</span></div>
              <div className={styles.barWrap}><div className={styles.bar} style={{ height: '35%' }}></div><span>NOV</span></div>
            </div>
          </div>
        </div>

        <div className={styles.orderIntegrity}>
          <h2 className={styles.chartTitle}>Order Integrity</h2>
          <p className={styles.chartSub}>CANCELLATION VS SUCCESS RATE</p>
          <div className={styles.donutChart}>
             <div className={styles.donutInner}>
                <span className={styles.donutValue}>94.2%</span>
                <span className={styles.donutLabel}>FULFILLMENT</span>
             </div>
          </div>
          <div className={styles.donutLegend}>
             <div className={styles.legendItem}><span className={styles.dot} style={{backgroundColor: '#4C0519'}}></span> Fulfilled <span className={styles.legendValue}>1,200</span></div>
             <div className={styles.legendItem}><span className={styles.dot} style={{backgroundColor: '#9F1239'}}></span> Processing <span className={styles.legendValue}>142</span></div>
             <div className={styles.legendItem}><span className={styles.dot} style={{backgroundColor: '#FFF1F2', border: '1px solid #E5E7EB'}}></span> Cancelled <span className={styles.legendValue}>60</span></div>
          </div>
        </div>
      </section>

      <section className={styles.recentOrders}>
        <div className={styles.ordersHeader}>
          <div>
            <h2 className={styles.chartTitle}>Recent Orders</h2>
            <p className={styles.chartSub}>LATEST TRANSACTIONS ACROSS ALL CATEGORIES</p>
          </div>
          <div className={styles.ordersActions}>
            <button className={styles.exportBtn}>Export CSV</button>
            <button className={styles.viewAllBtn}>View All Registry</button>
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>CLIENT</th>
              <th>CATEGORY</th>
              <th>STATUS</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className={styles.orderId}>{order.id}</td>
                <td>
                  <div className={styles.clientCell}>
                    <span className={styles.clientAvatar}>{order.avatar}</span>
                    {order.client}
                  </div>
                </td>
                <td className={styles.categoryCell}>{order.category}</td>
                <td>
                   <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                      {order.status}
                   </span>
                </td>
                <td className={styles.valueCell}>{order.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
