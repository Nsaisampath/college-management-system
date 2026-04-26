import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  BarChart2, Users, BedDouble, MessageSquare, Bell, CreditCard,
  TrendingUp, TrendingDown, AlertCircle, CheckCircle, Settings, Globe,
} from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/admin-dashboard')({
  component: AdminDashboard,
})

const sidebarLinks = [
  { icon: BarChart2,     label: 'Overview',    active: true },
  { icon: Users,         label: 'Students',    to: '/students' },
  { icon: BedDouble,     label: 'Rooms',       to: '/rooms' },
  { icon: MessageSquare, label: 'Complaints',  to: '/complaints' },
  { icon: Bell,          label: 'Notices',     to: '/notices' },
  { icon: CreditCard,    label: 'Fees',        to: '/fees' },
  { icon: Globe,         label: 'Reports',     to: null },
  { icon: Settings,      label: 'Settings',    to: null },
]

const recentStudents = [
  { name: 'Arjun Sharma',  dept: 'CS',   room: 'A-104', status: 'Active',  fee: 'Paid' },
  { name: 'Priya Mehta',   dept: 'ECE',  room: 'B-208', status: 'Active',  fee: 'Partial' },
  { name: 'Karan Patel',   dept: 'ME',   room: 'C-312', status: 'Pending', fee: 'Pending' },
  { name: 'Nisha Roy',     dept: 'CS',   room: 'A-115', status: 'Active',  fee: 'Paid' },
  { name: 'Dev Kumar',     dept: 'IT',   room: 'D-402', status: 'Active',  fee: 'Paid' },
  { name: 'Meera Das',     dept: 'CE',   room: 'A-104', status: 'Active',  fee: 'Overdue' },
]

const recentComplaints = [
  { id: 'CMP-002', student: 'Priya Mehta',  cat: 'Electricity', priority: 'High',   status: 'In Progress' },
  { id: 'CMP-005', student: 'Dev Kumar',    cat: 'Security',    priority: 'High',   status: 'Open' },
  { id: 'CMP-007', student: 'Ravi Nair',    cat: 'AC',          priority: 'High',   status: 'Open' },
  { id: 'CMP-009', student: 'Vikram Seth',  cat: 'Electricity', priority: 'High',   status: 'In Progress' },
]

const feeStatusCls: Record<string, string> = { 'Paid': 'badge-green', 'Partial': 'badge-yellow', 'Pending': 'badge-blue', 'Overdue': 'badge-red' }
const cmpStatusCls: Record<string, string> = { 'Open': 'badge-red', 'In Progress': 'badge-yellow', 'Resolved': 'badge-green' }

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('Overview')

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <div style={{ display: 'flex', flex: 1, maxWidth: 1400, margin: '0 auto', width: '100%', paddingTop: 70 }}>

        {/* Sidebar */}
        <aside style={{ width: 220, borderRight: '1px solid rgba(255,255,255,0.07)', padding: '24px 12px', flexShrink: 0, background: 'rgba(13,18,33,0.6)', minHeight: 'calc(100vh - 70px)', position: 'sticky', top: 70, alignSelf: 'flex-start' }}>
          <div style={{ marginBottom: 24, padding: '0 8px' }}>
            <div style={{ fontSize: 11, color: '#2D3748', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Admin Panel</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#EEF2FF', fontFamily: 'Sora' }}>System Admin</div>
            <div style={{ fontSize: 12, color: '#475569' }}>Full access</div>
          </div>

          <div style={{ fontSize: 10, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 8px', marginBottom: 6 }}>Navigation</div>
          {sidebarLinks.map(l => (
            l.to ? (
              <Link key={l.label} to={l.to} className="sidebar-link" style={{ fontFamily: 'DM Sans' }}>
                <l.icon size={15} />{l.label}
              </Link>
            ) : (
              <div key={l.label} onClick={() => setActiveSection(l.label)} className="sidebar-link" style={{
                background: activeSection === l.label ? 'rgba(124,58,237,0.15)' : l.active ? 'rgba(124,58,237,0.15)' : 'transparent',
                color: (activeSection === l.label || l.active) ? '#EEF2FF' : '#64748B',
                fontFamily: 'DM Sans',
              }}>
                <l.icon size={15} />{l.label}
              </div>
            )
          ))}

          <div style={{ marginTop: 24, padding: '14px 12px', borderRadius: 10, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
            <div style={{ fontSize: 11, color: '#A78BFA', marginBottom: 4, fontWeight: 600 }}>System Status</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#64748B' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#34D399', boxShadow: '0 0 6px #34D399' }} />All systems operational
            </div>
          </div>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: '28px 28px 48px', overflowX: 'hidden' }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, fontFamily: 'Sora', margin: '0 0 4px', letterSpacing: '-0.02em' }}>Admin Overview</h1>
            <p style={{ margin: 0, color: '#64748B', fontSize: 14 }}>Hostel system at a glance — April 2025</p>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
            {[
              { label: 'Total Students', value: '1,284', delta: '+47', trend: 'up', color: '#7C3AED', icon: Users, sub: 'vs last semester' },
              { label: 'Rooms Occupied', value: '318/342', delta: '93%', trend: 'up', color: '#10B981', icon: BedDouble, sub: 'occupancy rate' },
              { label: 'Open Complaints', value: '23', delta: '-5', trend: 'down', color: '#F59E0B', icon: MessageSquare, sub: 'vs last week' },
              { label: 'Fee Collection', value: '₹18.4L', delta: '92.7%', trend: 'up', color: '#3B82F6', icon: CreditCard, sub: 'collection rate' },
            ].map(s => (
              <div key={s.label} className="glass card-hover" style={{ borderRadius: 14, padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: `${s.color}20`, border: `1px solid ${s.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <s.icon size={17} color={s.color} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: s.trend === 'up' ? '#34D399' : '#F87171' }}>
                    {s.trend === 'up' ? <TrendingUp size={13} /> : <TrendingDown size={13} />}{s.delta}
                  </div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Sora', color: '#EEF2FF', marginBottom: 3 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: '#64748B' }}>{s.label}</div>
                <div style={{ fontSize: 11, color: '#334155', marginTop: 3 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            {/* Bar chart mockup */}
            <div className="glass" style={{ borderRadius: 14, padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora', color: '#EEF2FF' }}>Fee Collection</div>
                  <div style={{ fontSize: 12, color: '#475569' }}>Last 6 months</div>
                </div>
                <span className="badge-green" style={{ padding: '3px 10px', borderRadius: 100, fontSize: 11 }}>+8.3%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 100 }}>
                {[
                  { m: 'Nov', v: 68 }, { m: 'Dec', v: 72 }, { m: 'Jan', v: 79 },
                  { m: 'Feb', v: 74 }, { m: 'Mar', v: 86 }, { m: 'Apr', v: 93 },
                ].map(b => (
                  <div key={b.m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                    <div style={{ fontSize: 9, color: '#475569' }}>{b.v}%</div>
                    <div style={{ width: '100%', height: `${b.v}%`, background: 'linear-gradient(to top, #7C3AED, #2563EB)', borderRadius: '4px 4px 0 0', opacity: 0.85, minHeight: 4 }} />
                    <div style={{ fontSize: 9.5, color: '#334155' }}>{b.m}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complaint overview */}
            <div className="glass" style={{ borderRadius: 14, padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora', color: '#EEF2FF' }}>Complaint Status</div>
                  <div style={{ fontSize: 12, color: '#475569' }}>Current month</div>
                </div>
                <Link to="/complaints" style={{ fontSize: 12, color: '#A78BFA', textDecoration: 'none' }}>View all →</Link>
              </div>
              {[
                { label: 'Open', value: 8, total: 30, color: '#EF4444' },
                { label: 'In Progress', value: 15, total: 30, color: '#F59E0B' },
                { label: 'Resolved', value: 37, total: 60, color: '#10B981' },
              ].map(b => (
                <div key={b.label} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 12, color: '#94A3B8' }}>{b.label}</span>
                    <span style={{ fontSize: 12, color: '#EEF2FF', fontWeight: 500 }}>{b.value}</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 100, background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(b.value / b.total) * 100}%`, background: b.color, borderRadius: 100, opacity: 0.8 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tables row */}
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 }}>
            {/* Recent Students */}
            <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora' }}>Recent Students</div>
                <Link to="/students" style={{ fontSize: 12, color: '#A78BFA', textDecoration: 'none' }}>View all →</Link>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {['Name','Dept','Room','Fee'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#334155', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentStudents.map(s => (
                    <tr key={s.name} className="tr-hover" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '11px 14px', color: '#EEF2FF', fontWeight: 500 }}>{s.name}</td>
                      <td style={{ padding: '11px 14px', color: '#64748B', fontSize: 12 }}>{s.dept}</td>
                      <td style={{ padding: '11px 14px', color: '#94A3B8' }}>{s.room}</td>
                      <td style={{ padding: '11px 14px' }}>
                        <span className={feeStatusCls[s.fee]} style={{ padding: '2px 8px', borderRadius: 100, fontSize: 11 }}>{s.fee}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* High priority complaints */}
            <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <AlertCircle size={15} color="#EF4444" /> Urgent Issues
                </div>
                <Link to="/complaints" style={{ fontSize: 12, color: '#A78BFA', textDecoration: 'none' }}>View all →</Link>
              </div>
              <div style={{ padding: '8px 0' }}>
                {recentComplaints.map(c => (
                  <div key={c.id} style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: 13, color: '#EEF2FF', fontWeight: 500, marginBottom: 2 }}>{c.student}</div>
                      <div style={{ fontSize: 11, color: '#64748B' }}>{c.cat} · {c.id}</div>
                    </div>
                    <span className={cmpStatusCls[c.status]} style={{ padding: '2px 8px', borderRadius: 100, fontSize: 11 }}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div style={{ marginTop: 20, padding: '20px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(124,58,237,0.05)' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#EEF2FF', fontFamily: 'Sora', marginBottom: 14 }}>Quick Actions</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                { label: 'Add Student',    to: '/students',   color: '#7C3AED' },
                { label: 'Allocate Room',  to: '/rooms',      color: '#2563EB' },
                { label: 'Post Notice',    to: '/notices',    color: '#0891B2' },
                { label: 'Record Payment', to: '/fees',       color: '#10B981' },
                { label: 'View Complaints', to: '/complaints', color: '#F59E0B' },
              ].map(a => (
                <Link key={a.label} to={a.to} style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '9px 16px', borderRadius: 9, background: `${a.color}15`, border: `1px solid ${a.color}30`,
                    color: '#94A3B8', fontSize: 13, cursor: 'pointer', fontFamily: 'DM Sans', transition: 'all 0.18s',
                  }}>{a.label}</button>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
