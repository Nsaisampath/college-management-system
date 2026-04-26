import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Bell, Search, Plus, Eye, Pin, Users, Building } from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/notices')({
  component: NoticesPage,
})

const notices = [
  { id: 'NOT-001', title: 'Hostel Fee Payment Deadline — April 30',   category: 'Finance',    audience: 'All Students',  author: 'Admin',        date: '2025-04-20', pinned: true,  status: 'Active', body: 'All students are reminded to clear their hostel fee dues before April 30, 2025. Late payments will incur a penalty of ₹200/day.' },
  { id: 'NOT-002', title: 'Water Supply Interruption on April 25',     category: 'Utility',    audience: 'Block A & B',   author: 'Warden A',     date: '2025-04-22', pinned: true,  status: 'Active', body: 'Scheduled water supply maintenance on April 25 from 6 AM to 12 PM. Please store adequate water.' },
  { id: 'NOT-003', title: 'Cultural Fest Registration Open',           category: 'Event',      audience: 'All Students',  author: 'Admin',        date: '2025-04-18', pinned: false, status: 'Active', body: 'Registrations for the Annual Cultural Fest 2025 are now open. Last date for registration is May 5.' },
  { id: 'NOT-004', title: 'Room Inspection — Block C',                 category: 'Inspection', audience: 'Block C',       author: 'Warden C',     date: '2025-04-24', pinned: false, status: 'Active', body: 'A room inspection will be conducted in Block C on April 27. All students must ensure rooms are tidy.' },
  { id: 'NOT-005', title: 'WiFi Upgrade Scheduled — May 1',           category: 'Utility',    audience: 'All Students',  author: 'IT Team',      date: '2025-04-23', pinned: false, status: 'Active', body: 'Network infrastructure upgrade scheduled for May 1. Brief internet outage expected from 10 PM to 1 AM.' },
  { id: 'NOT-006', title: 'Mess Menu Updated for May',                 category: 'Food',       audience: 'All Students',  author: 'Mess Incharge', date: '2025-04-21', pinned: false, status: 'Active', body: 'The mess menu for the month of May has been updated. Please check the notice board for the complete schedule.' },
  { id: 'NOT-007', title: 'Anti-Ragging Workshop — Mandatory',        category: 'Discipline', audience: 'All Students',  author: 'Admin',        date: '2025-04-15', pinned: false, status: 'Expired', body: 'Mandatory anti-ragging workshop conducted on April 17. All students are required to attend.' },
  { id: 'NOT-008', title: 'Gate Timings Updated',                      category: 'Security',   audience: 'All Students',  author: 'Warden A',     date: '2025-04-10', pinned: false, status: 'Active', body: 'Hostel gate will now be closed at 10:30 PM instead of 10:00 PM effective immediately.' },
  { id: 'NOT-009', title: 'Electricity Bill — Arrears Notice',         category: 'Finance',    audience: 'Block D',       author: 'Admin',        date: '2025-04-25', pinned: false, status: 'Active', body: 'Block D students with pending electricity bill arrears are requested to pay within 3 days.' },
]

const catColors: Record<string, string> = {
  'Finance': 'badge-yellow', 'Utility': 'badge-blue', 'Event': 'badge-purple',
  'Inspection': 'badge-red', 'Food': 'badge-green', 'Discipline': 'badge-red',
  'Security': 'badge-yellow',
}

function NoticesPage() {
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [filterCat, setFilterCat] = useState('All')

  const filtered = notices.filter(n =>
    (filterCat === 'All' || n.category === filterCat) &&
    n.title.toLowerCase().includes(search.toLowerCase())
  )

  const selected = notices.find(n => n.id === selectedId)
  const categories = ['All', ...Array.from(new Set(notices.map(n => n.category)))]

  const stats = [
    { label: 'Total Notices', value: notices.length, color: '#7C3AED', icon: Bell },
    { label: 'Active', value: notices.filter(n => n.status === 'Active').length, color: '#10B981', icon: Bell },
    { label: 'Pinned', value: notices.filter(n => n.pinned).length, color: '#F59E0B', icon: Pin },
    { label: 'Audience Segments', value: new Set(notices.map(n => n.audience)).size, color: '#3B82F6', icon: Users },
  ]

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px' }}>

        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Link to="/" style={{ fontSize: 13, color: '#475569', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#1E2D40' }}>/</span>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>Notices</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{ fontSize: 30, fontWeight: 700, fontFamily: 'Sora', margin: '0 0 6px', letterSpacing: '-0.02em' }}>Notice Board</h1>
              <p style={{ margin: 0, color: '#64748B', fontSize: 15 }}>Post and manage hostel announcements and notices.</p>
            </div>
            <button className="btn-glow" style={{ padding: '10px 20px', borderRadius: 9, color: '#fff', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans' }}>
              <Plus size={15} /> Post Notice
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
          {stats.map(s => (
            <div key={s.label} className="glass" style={{ padding: '18px 20px', borderRadius: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: '#64748B' }}>{s.label}</span>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: `${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.icon size={14} color={s.color} />
                </div>
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, fontFamily: 'Sora' }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 380px' : '1fr', gap: 20 }}>
          {/* Left: list */}
          <div>
            {/* Filters */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
                <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search notices…"
                  style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: 9, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#EEF2FF', fontSize: 13, outline: 'none', fontFamily: 'DM Sans' }} />
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {categories.slice(0, 5).map(c => (
                  <button key={c} onClick={() => setFilterCat(c)} style={{
                    padding: '7px 13px', borderRadius: 7, fontSize: 12, cursor: 'pointer', fontFamily: 'DM Sans',
                    background: filterCat === c ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                    border: filterCat === c ? '1px solid rgba(124,58,237,0.4)' : '1px solid rgba(255,255,255,0.08)',
                    color: filterCat === c ? '#A78BFA' : '#64748B', transition: 'all 0.18s',
                  }}>{c}</button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {filtered.map(n => (
                <div key={n.id} onClick={() => setSelectedId(selectedId === n.id ? null : n.id)} className="glass card-hover" style={{
                  borderRadius: 12, padding: '18px 20px', cursor: 'pointer',
                  borderColor: selectedId === n.id ? 'rgba(124,58,237,0.4)' : undefined,
                  background: selectedId === n.id ? 'rgba(124,58,237,0.08)' : undefined,
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        {n.pinned && <Pin size={12} color="#F59E0B" />}
                        <span style={{ fontSize: 14.5, fontWeight: 600, color: '#EEF2FF', fontFamily: 'Sora' }}>{n.title}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                        <span className={catColors[n.category] || 'badge-blue'} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11, fontWeight: 500 }}>{n.category}</span>
                        <span style={{ fontSize: 12, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}><Building size={11} />{n.audience}</span>
                        <span style={{ fontSize: 12, color: '#475569' }}>by {n.author}</span>
                        <span style={{ fontSize: 12, color: '#1E2D40' }}>{n.date}</span>
                      </div>
                    </div>
                    <span className={n.status === 'Active' ? 'badge-green' : 'badge-red'} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11, fontWeight: 500, flexShrink: 0 }}>{n.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: detail */}
          {selected && (
            <div className="glass" style={{ borderRadius: 14, padding: '24px', alignSelf: 'start', position: 'sticky', top: 80 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontSize: 11, color: '#475569', fontFamily: 'Sora' }}>{selected.id}</span>
                <button onClick={() => setSelectedId(null)} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', fontSize: 18 }}>×</button>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Sora', margin: '0 0 12px', color: '#EEF2FF', lineHeight: 1.4 }}>{selected.title}</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                <span className={catColors[selected.category] || 'badge-blue'} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11, fontWeight: 500 }}>{selected.category}</span>
                <span className={selected.status === 'Active' ? 'badge-green' : 'badge-red'} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11, fontWeight: 500 }}>{selected.status}</span>
              </div>
              <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.7, margin: '0 0 20px' }}>{selected.body}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 14 }}>
                {[['Posted by', selected.author], ['Date', selected.date], ['Audience', selected.audience]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: '#475569' }}>{k}</span>
                    <span style={{ fontSize: 12, color: '#94A3B8' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
