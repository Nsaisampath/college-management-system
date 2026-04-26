import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'

const links = [
  { to: '/rooms',    label: 'Rooms' },
  { to: '/students', label: 'Students' },
  { to: '/complaints', label: 'Complaints' },
  { to: '/notices',  label: 'Notices' },
  { to: '/fees',     label: 'Fees' },
]

const dashLinks = [
  { to: '/admin-dashboard',   label: 'Admin' },
  { to: '/student-dashboard', label: 'Student' },
  { to: '/warden-dashboard',  label: 'Warden' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { location } = useRouterState()
  const path = location.pathname

  return (
    <>
      <nav style={{
        position: 'fixed', top: 14, left: '50%', transform: 'translateX(-50%)',
        zIndex: 999, width: 'calc(100% - 40px)', maxWidth: 1180,
        background: 'rgba(11,15,26,0.82)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)',
        padding: '0 20px', height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 30, height: 30,
            background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
            borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: 'white', fontFamily: 'Sora, sans-serif',
          }}>H</div>
          <span style={{ color: '#EEF2FF', fontWeight: 600, fontSize: 15, fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}>HMS</span>
        </Link>

        {/* Center nav */}
        <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '5px 12px', borderRadius: 7, fontSize: 13.5, fontWeight: 450,
              color: path === l.to ? '#EEF2FF' : '#94A3B8',
              background: path === l.to ? 'rgba(124,58,237,0.18)' : 'transparent',
              textDecoration: 'none', transition: 'all 0.18s ease',
            }}
            onMouseEnter={e => { if (path !== l.to) (e.target as HTMLElement).style.color = '#EEF2FF' }}
            onMouseLeave={e => { if (path !== l.to) (e.target as HTMLElement).style.color = '#94A3B8' }}
            >{l.label}</Link>
          ))}
        </div>

        {/* Right: dashboards */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {dashLinks.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '5px 11px', borderRadius: 7, fontSize: 12.5, fontWeight: 500,
              color: path === l.to ? '#A78BFA' : '#64748B',
              background: path === l.to ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${path === l.to ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)'}`,
              textDecoration: 'none', transition: 'all 0.18s ease',
            }}>{l.label}</Link>
          ))}
        </div>
      </nav>
    </>
  )
}
