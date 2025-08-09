'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [balance, setBalance] = useState<number>(10000);

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const base = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';
    fetch(base + '/api/me', { headers: { Authorization: 'Bearer ' + token } })
      .then(r => r.json())
      .then(d => setBalance(d?.balance ?? 10000));
  }, []);

  return (
    <section className="grid">
      <div className="card" style={{ gridColumn: 'span 8' }}>
        <h3>Chart (Dark Theme)</h3>
        <iframe
          src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:AAPL&interval=60&theme=dark"
          style={{ width: '100%', height: 400, border: 0 }}
        />
      </div>
      <div className="card" style={{ gridColumn: 'span 4' }}>
        <h3>Portfolio</h3>
        <p>Balance: <strong>${balance.toLocaleString()}</strong></p>
        <button className="btn" onClick={() => alert('Place simulated trade (stub)')}>New Trade</button>
      </div>
      <div className="card" style={{ gridColumn: 'span 12' }}>
        <h3>Recent Activity</h3>
        <p>No trades yet. This section will show your last actions.</p>
      </div>
    </section>
  );
}
