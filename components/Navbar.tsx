'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 24px', background: '#1E1E1E', borderBottom: '1px solid #2a2a2a'
    }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#2196F3" />
          <path d="M18 38 L28 26 L36 34 L46 22" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
        <b>SimpliTrade</b>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
