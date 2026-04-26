import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { MessageSquare, Search, Plus, Eye, CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/complaints')({
  component: ComplaintsPage,
})

const complaints = [
  { id: 'CMP-001', student: 'Arjun Sharma',  room: 'A-104', category: 'Maintenance',  title: 'Leaking tap in bathroom',        raised: '2025-04-18', status: 'Resolved',    priority: 'Medium', assignedTo: 'Warden Block A' },
  { id: 'CMP-002', student: 'Priya Mehta',   room: 'B-208', category: 'Electricity',  title: 'Power outlet not working',       raised: '2025-04-20', status: 'In Progress', priority: 'High',   assignedTo: 'Electrician' },
  { id: 'CMP-003', student: 'Karan Patel',   room: 'C-312', category: 'Housekeeping', title: 'Room not cleaned for 3 days',    raised: '2025-04-21', status: 'Open',        priority: 'Low',    assignedTo: 'Unassigned' },
  { id: 'CMP-004', student: 'Nisha Roy',     room: 'A-115', category: 'WiFi',         title: 'Internet speed very slow',       raised: '2025-04-22', status: 'In Progress', priority: 'Medium', assignedTo: 'IT Team' },
  { id: 'CMP-005', student: 'Dev Kumar',     room: 'D-402', category: 'Security',     title: 'Door lock faulty',               raised: '2025-04-22', status: 'Open',        priority: 'High',   assignedTo: 'Unassigned' },
  { id: 'CMP-006', student: 'Meera Das',     room: 'A-104', category: 'Maintenance',  title: 'Window glass cracked',           raised: '2025-04-19', status: 'Resolved',    priority: 'Medium', assignedTo: 'Warden Block A' },
  { id: 'CMP-007', student: 'Ravi Nair',     room: 'A-103', category: 'AC',           title: 'Air conditioner not cooling',    raised: '2025-04-23', status: 'Open',        priority: 'High',   assignedTo: 'Unassigned' },
  { id: 'CMP-008', student: 'Sunita Rao',    room: 'B-205', category: 'Plumbing',     title: 'Drain blocked in corridor',      raised: '2025-04-17', status: 'Resolved',    priority: 'Low',    assignedTo: 'Plumber' },
  { id: 'CMP-009', student: 'Vikram Seth',   room: 'C-301', category: 'Electricity',  title: 'Light fitting sparking',         raised: '2025-04-24', status: 'In Progress', priority: 'High',   assignedTo: 'Electrician' },
  { id: 'CMP-010', student: 'Divya Pillai',  room: 'C-302', category: 'WiFi',         title: 'WiFi coverage in corner room',   raised: '2025-04-24', status: 'Open',        priority: 'Low',    assignedTo: 'Unassigned' },
]

const statusConfig: Record<string, { cls: string; icon: typeof CheckCircle }> = {
  'Resolved':    { cls: 'badge-green',  icon: CheckCircle },
  'In Progress': { cls: 'badge-yellow', icon: Clock },
  'Open':        { cls: 'badge-red',    icon: AlertCircle },
  'Closed':      { cls: 'badge-blue',   icon: XCircle },
}

const priorityConfig: Record<string, string> = {
  'High': 'badge-red', 'Medium': 'badge-yellow', 'Low': 'badge-blue',
}

function ComplaintsPage() {
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')

  const filtered = complaints.filter(c =>
    (filterStatus === 'All' || c.status === filterStatus) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) ||
     c.student.toLowerCase().includes(search.toLowerCase()) ||
     c.id.toLowerCase().includes(search.toLowerCase()))
  )

  const stats = [
    { label: 'Total Complaints', value: complaints.length, color: '#7C3AED', icon: MessageSquare },
    { label: 'Open',             value: complaints.filter(c => c.status === 'Open').length, color: '#EF4444', icon: AlertCircle },
    { label: 'In Progress',      value: complaints.filter(c => c.status === 'In Progress').length, color: '#F59E0B', icon: Clock },
    { label: 'Resolved',         value: complaints.filter(c => c.status === 'Resolved').length, color: '#10B981', icon: CheckCircle },
  ]

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px' }}>

        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Link to="/" style={{ fontSize: 13, color: '#475569', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#1E2D40' }}>/</span>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>Complaints</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{ fontSize: 30, fontWeight: 700, fontFamily: 'Sora', margin: '0 0 6px', letterSpacing: '-0.02em' }}>Complaint Management</h1>
              <p style={{ margin: 0, color: '#64748B', fontSize: 15 }}>Track and resolve student complaints in real-time.</p>
            </div>
            <button className="btn-glow" style={{ padding: '10px 20px', borderRadius: 9, color: '#fff', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans' }}>
              <Plus size={15} /> New Complaint
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

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search complaints…"
              style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: 9, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#EEF2FF', fontSize: 13, outline: 'none', fontFamily: 'DM Sans' }} />
          </div>
          {['All','Open','In Progress','Resolved'].map(s => (
            <button key={s} onClick={() => setFilterStatus(s)} style={{
              padding: '8px 16px', borderRadius: 8, fontSize: 13, cursor: 'pointer', fontFamily: 'DM Sans',
              background: filterStatus === s ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
              border: filterStatus === s ? '1px solid rgba(124,58,237,0.4)' : '1px solid rgba(255,255,255,0.08)',
              color: filterStatus === s ? '#A78BFA' : '#64748B', transition: 'all 0.18s',
            }}>{s}</button>
          ))}
        </div>

        {/* Table */}
        <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {['ID','Student','Room','Category','Title','Priority','Raised','Assigned To','Status','Actions'].map(h => (
                    <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#475569', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => {
                  const sc = statusConfig[c.status]
                  return (
                    <tr key={c.id} className="tr-hover" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600, color: '#A78BFA', fontSize: 12, fontFamily: 'Sora' }}>{c.id}</td>
                      <td style={{ padding: '12px 14px', color: '#EEF2FF', whiteSpace: 'nowrap' }}>{c.student}</td>
                      <td style={{ padding: '12px 14px', color: '#64748B' }}>{c.room}</td>
                      <td style={{ padding: '12px 14px', color: '#94A3B8' }}>{c.category}</td>
                      <td style={{ padding: '12px 14px', color: '#94A3B8', maxWidth: 200 }}>{c.title}</td>
                      <td style={{ padding: '12px 14px' }}>
                        <span className={priorityConfig[c.priority]} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11, fontWeight: 500 }}>{c.priority}</span>
                      </td>
                      <td style={{ padding: '12px 14px', color: '#64748B', fontSize: 12, whiteSpace: 'nowrap' }}>{c.raised}</td>
                      <td style={{ padding: '12px 14px', color: '#64748B', fontSize: 12, whiteSpace: 'nowrap' }}>{c.assignedTo}</td>
                      <td style={{ padding: '12px 14px' }}>
                        <span className={sc.cls} style={{ padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                          <sc.icon size={10} />{c.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px 14px' }}>
                        <button style={{ padding: '5px 10px', borderRadius: 6, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)', color: '#A78BFA', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}><Eye size={11} /> View</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#475569' }}>Showing {filtered.length} of {complaints.length} complaints</span>
          </div>
        </div>
      </div>
    </div>
  )
}
