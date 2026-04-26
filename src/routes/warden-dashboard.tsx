import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { BedDouble, MessageSquare, Bell, Users, CheckCircle, Clock, AlertCircle, Eye, Edit2, TrendingUp } from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/warden-dashboard')({
  component: WardenDashboard,
})

const wardenInfo = {
  name: 'Mr. Rajesh Kumar',
  block: 'Block A',
  rooms: 82,
  students: 156,
}

const blockRooms = [
  { id: 'A-101', type: 'Double', capacity: 2, occupied: 2, students: ['Arjun Sharma', 'Dev Kumar'],      status: 'Full',      condition: 'Good' },
  { id: 'A-102', type: 'Double', capacity: 2, occupied: 1, students: ['Priya Mehta'],                    status: 'Available', condition: 'Good' },
  { id: 'A-103', type: 'Single', capacity: 1, occupied: 1, students: ['Ravi Nair'],                      status: 'Full',      condition: 'Good' },
  { id: 'A-104', type: 'Triple', capacity: 3, occupied: 2, students: ['Meera Das', 'Sanjay M.'],         status: 'Available', condition: 'Fair' },
  { id: 'A-105', type: 'Double', capacity: 2, occupied: 2, students: ['Pooja Tiwari', 'Anjali K.'],      status: 'Full',      condition: 'Good' },
  { id: 'A-110', type: 'Single', capacity: 1, occupied: 0, students: [],                                 status: 'Vacant',    condition: 'Good' },
  { id: 'A-115', type: 'Double', capacity: 2, occupied: 1, students: ['Nisha Roy'],                      status: 'Available', condition: 'Fair' },
  { id: 'A-120', type: 'Triple', capacity: 3, occupied: 3, students: ['Kiran P.', 'Suresh R.', 'Anil K.'], status: 'Full',   condition: 'Good' },
]

const blockComplaints = [
  { id: 'CMP-001', student: 'Arjun Sharma', room: 'A-104', category: 'Maintenance', title: 'Leaking tap',           date: '2025-04-18', status: 'Resolved' },
  { id: 'CMP-004', student: 'Nisha Roy',    room: 'A-115', category: 'WiFi',        title: 'Internet speed slow',   date: '2025-04-22', status: 'In Progress' },
  { id: 'CMP-006', student: 'Meera Das',    room: 'A-104', category: 'Maintenance', title: 'Window glass cracked',  date: '2025-04-19', status: 'Resolved' },
  { id: 'CMP-013', student: 'Ravi Nair',    room: 'A-103', category: 'Plumbing',    title: 'Blocked drain',         date: '2025-04-24', status: 'Open' },
  { id: 'CMP-015', student: 'Sanjay M.',    room: 'A-104', category: 'Electricity', title: 'Flickering lights',     date: '2025-04-25', status: 'Open' },
]

const roomStatusCls: Record<string, string> = { 'Full': 'badge-yellow', 'Available': 'badge-green', 'Vacant': 'badge-blue' }
const cmpStatusCls: Record<string, string>  = { 'Open': 'badge-red', 'In Progress': 'badge-yellow', 'Resolved': 'badge-green' }
const condCls: Record<string, string>       = { 'Good': 'badge-green', 'Fair': 'badge-yellow', 'Poor': 'badge-red' }

function WardenDashboard() {
  const [roomFilter, setRoomFilter] = useState('All')
  const [cmpFilter, setCmpFilter] = useState('All')

  const filteredRooms = blockRooms.filter(r => roomFilter === 'All' || r.status === roomFilter)
  const filteredCmps  = blockComplaints.filter(c => cmpFilter === 'All' || c.status === cmpFilter)

  const stats = [
    { label: 'Block Rooms',   value: wardenInfo.rooms,                                                          color: '#7C3AED', icon: BedDouble,     sub: 'Total capacity' },
    { label: 'Residents',     value: wardenInfo.students,                                                        color: '#2563EB', icon: Users,         sub: 'Currently housed' },
    { label: 'Occupancy',     value: `${Math.round((blockRooms.filter(r=>r.status==='Full').length/blockRooms.length)*100)}%`, color: '#10B981', icon: TrendingUp, sub: 'Room fill rate' },
    { label: 'Open Issues',   value: blockComplaints.filter(c=>c.status==='Open').length,                        color: '#EF4444', icon: AlertCircle,   sub: 'Needs attention' },
  ]

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px' }}>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg,#0891B2,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: '#fff', fontFamily: 'Sora' }}>
                {wardenInfo.name[0]}
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#64748B', marginBottom: 2 }}>Warden Dashboard</div>
                <h1 style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Sora', margin: 0, letterSpacing: '-0.02em' }}>{wardenInfo.name}</h1>
                <div style={{ fontSize: 12, color: '#475569' }}>{wardenInfo.block} · {wardenInfo.rooms} rooms · {wardenInfo.students} students</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <Link to="/notices">
                <button className="btn-ghost" style={{ padding: '9px 16px', borderRadius: 9, fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans' }}>
                  <Bell size={14} /> Post Notice
                </button>
              </Link>
              <Link to="/complaints">
                <button className="btn-glow" style={{ padding: '9px 16px', borderRadius: 9, color: '#fff', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans' }}>
                  <MessageSquare size={14} /> View Complaints
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
          {stats.map(s => (
            <div key={s.label} className="glass card-hover" style={{ borderRadius: 14, padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: '#64748B' }}>{s.label}</span>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: `${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.icon size={15} color={s.color} />
                </div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, fontFamily: 'Sora', marginBottom: 2 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: '#475569' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Occupancy visual */}
        <div className="glass" style={{ borderRadius: 14, padding: '20px', marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora' }}>Block A — Occupancy Map</div>
            <div style={{ display: 'flex', gap: 12, fontSize: 11 }}>
              {[{ c: '#34D399', l: 'Full' }, { c: '#FCD34D', l: 'Available' }, { c: '#93C5FD', l: 'Vacant' }].map(x => (
                <div key={x.l} style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#64748B' }}>
                  <div style={{ width: 9, height: 9, borderRadius: 2, background: x.c, opacity: 0.7 }} />{x.l}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {blockRooms.map(r => (
              <div key={r.id} style={{
                padding: '8px 12px', borderRadius: 8, fontSize: 11,
                background: r.status === 'Full' ? 'rgba(16,185,129,0.12)' : r.status === 'Available' ? 'rgba(245,158,11,0.12)' : 'rgba(59,130,246,0.12)',
                border: `1px solid ${r.status === 'Full' ? 'rgba(52,211,153,0.2)' : r.status === 'Available' ? 'rgba(252,211,77,0.2)' : 'rgba(147,197,253,0.2)'}`,
                color: r.status === 'Full' ? '#34D399' : r.status === 'Available' ? '#FCD34D' : '#93C5FD',
              }}>
                <div style={{ fontWeight: 600, fontFamily: 'Sora', fontSize: 12 }}>{r.id}</div>
                <div style={{ color: '#475569', marginTop: 2 }}>{r.occupied}/{r.capacity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Room monitoring table */}
        <div className="glass" style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora', display: 'flex', alignItems: 'center', gap: 8 }}>
              <BedDouble size={15} color="#7C3AED" /> Room Monitoring
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['All','Full','Available','Vacant'].map(s => (
                <button key={s} onClick={() => setRoomFilter(s)} style={{
                  padding: '5px 12px', borderRadius: 7, fontSize: 11.5, cursor: 'pointer', fontFamily: 'DM Sans',
                  background: roomFilter === s ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                  border: roomFilter === s ? '1px solid rgba(124,58,237,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  color: roomFilter === s ? '#A78BFA' : '#64748B', transition: 'all 0.18s',
                }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  {['Room','Type','Occupancy','Students','Condition','Status','Actions'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#334155', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRooms.map(r => (
                  <tr key={r.id} className="tr-hover" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '11px 14px', fontWeight: 600, color: '#EEF2FF', fontFamily: 'Sora', fontSize: 13 }}>{r.id}</td>
                    <td style={{ padding: '11px 14px', color: '#64748B' }}>{r.type}</td>
                    <td style={{ padding: '11px 14px', color: '#94A3B8' }}>{r.occupied}/{r.capacity}</td>
                    <td style={{ padding: '11px 14px', color: '#64748B', fontSize: 12, maxWidth: 180 }}>
                      {r.students.length > 0 ? r.students.join(', ') : <span style={{ color: '#1E2D40' }}>—</span>}
                    </td>
                    <td style={{ padding: '11px 14px' }}>
                      <span className={condCls[r.condition]} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11 }}>{r.condition}</span>
                    </td>
                    <td style={{ padding: '11px 14px' }}>
                      <span className={roomStatusCls[r.status]} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11 }}>{r.status}</span>
                    </td>
                    <td style={{ padding: '11px 14px' }}>
                      <div style={{ display: 'flex', gap: 5 }}>
                        <button style={{ padding: '5px 9px', borderRadius: 6, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)', color: '#A78BFA', fontSize: 11, cursor: 'pointer' }}><Eye size={11} /></button>
                        <button style={{ padding: '5px 9px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748B', fontSize: 11, cursor: 'pointer' }}><Edit2 size={11} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Complaints */}
        <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora', display: 'flex', alignItems: 'center', gap: 8 }}>
              <MessageSquare size={15} color="#F59E0B" /> Block A Complaints
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['All','Open','In Progress','Resolved'].map(s => (
                <button key={s} onClick={() => setCmpFilter(s)} style={{
                  padding: '5px 12px', borderRadius: 7, fontSize: 11.5, cursor: 'pointer', fontFamily: 'DM Sans',
                  background: cmpFilter === s ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                  border: cmpFilter === s ? '1px solid rgba(124,58,237,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  color: cmpFilter === s ? '#A78BFA' : '#64748B', transition: 'all 0.18s',
                }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  {['ID','Student','Room','Category','Issue','Date','Status','Actions'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#334155', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredCmps.map(c => (
                  <tr key={c.id} className="tr-hover" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '11px 14px', color: '#A78BFA', fontWeight: 600, fontSize: 12, fontFamily: 'Sora' }}>{c.id}</td>
                    <td style={{ padding: '11px 14px', color: '#EEF2FF', whiteSpace: 'nowrap' }}>{c.student}</td>
                    <td style={{ padding: '11px 14px', color: '#64748B' }}>{c.room}</td>
                    <td style={{ padding: '11px 14px', color: '#94A3B8' }}>{c.category}</td>
                    <td style={{ padding: '11px 14px', color: '#64748B', maxWidth: 200 }}>{c.title}</td>
                    <td style={{ padding: '11px 14px', color: '#475569', fontSize: 12, whiteSpace: 'nowrap' }}>{c.date}</td>
                    <td style={{ padding: '11px 14px' }}>
                      <span className={cmpStatusCls[c.status]} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        {c.status === 'Resolved' ? <CheckCircle size={10} /> : c.status === 'In Progress' ? <Clock size={10} /> : <AlertCircle size={10} />}
                        {c.status}
                      </span>
                    </td>
                    <td style={{ padding: '11px 14px' }}>
                      <button style={{ padding: '5px 10px', borderRadius: 6, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)', color: '#A78BFA', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Edit2 size={10} /> Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: 12, color: '#475569' }}>Showing {filteredCmps.length} of {blockComplaints.length} complaints for Block A</span>
          </div>
        </div>
      </div>
    </div>
  )
}
