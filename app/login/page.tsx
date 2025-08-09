'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const base = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

  const onGuest = async () => {
    const r = await fetch(base + '/api/auth/guest', { method: 'POST' });
    const d = await r.json();
    if (d?.token) localStorage.setItem('token', d.token);
    location.href = '/dashboard';
  };

  const onLogin = async (e: any) => {
    e.preventDefault();
    const r = await fetch(base + '/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const d = await r.json();
    if (d?.token) {
      localStorage.setItem('token', d.token);
      location.href = '/dashboard';
    } else alert('Login failed');
  };

  return (
    <div className="card">
      <h2>Welcome back</h2>
      <form onSubmit={onLogin} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn" type="submit">Login</button>
      </form>
      <hr style={{ margin: '16px 0', opacity: .2 }} />
      <button className="btn" onClick={onGuest}>Continue as Guest</button>
    </div>
  );
}
