import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { BedDouble, Search, Filter, Plus, Eye, Edit2, Wifi, Wind, CheckCircle, XCircle, Clock } from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/rooms')({
  component: RoomsPage,
})

const rooms = [
  { id: 'A-101', block: 'A', floor: 1, capacity: 2, occupied: 2, type: 'Double', amenities: ['WiFi','AC'],  status: 'Full',      rent: 8500,  students: ['Arjun Sharma', 'Dev Kumar'] },
  { id: 'A-102', block: 'A', floor: 1, capacity: 2, occupied: 1, type: 'Double', amenities: ['WiFi'],       status: 'Available', rent: 8500,  students: ['Priya Mehta'] },
  { id: 'A-103', block: 'A', floor: 1, capacity: 1, occupied: 1, type: 'Single', amenities: ['WiFi','AC'],  status: 'Full',      rent: 11000, students: ['Ravi Nair'] },
  { id: 'A-104', block: 'A', floor: 1, capacity: 3, occupied: 2, type: 'Triple', amenities: ['WiFi'],       status: 'Available', rent: 6800,  students: ['Nisha Roy', 'Meera Das'] },
  { id: 'B-201', block: 'B', floor: 2, capacity: 2, occupied: 2, type: 'Double', amenities: ['WiFi','AC'],  status: 'Full',      rent: 9200,  students: ['Karan Patel', 'Amit Singh'] },
  { id: 'B-202', block: 'B', floor: 2, capacity: 2, occupied: 0, type: 'Double', amenities: ['WiFi'],       status: 'Vacant',    rent: 9200,  students: [] },
  { id: 'B-205', block: 'B', floor: 2, capacity: 1, occupied: 1, type: 'Single', amenities: ['WiFi','AC'],  status: 'Full',      rent: 12500, students: ['Sunita Rao'] },
  { id: 'C-301', block: 'C', floor: 3, capacity: 3, occupied: 3, type: 'Triple', amenities: ['WiFi'],       status: 'Full',      rent: 7200,  students: ['Vikram Seth','Rohit Jain','Anjali K.'] },
  { id: 'C-302', block: 'C', floor: 3, capacity: 2, occupied: 1, type: 'Double', amenities: ['WiFi','AC'],  status: 'Available', rent: 9200,  students: ['Divya Pillai'] },
  { id: 'D-401', block: 'D', floor: 4, capacity: 1, occupied: 0, type: 'Single', amenities: ['WiFi','AC'],  status: 'Vacant',    rent: 13000, students: [] },
  { id: 'D-402', block: 'D', floor: 4, capacity: 2, occupied: 2, type: 'Double', amenities: ['WiFi'],       status: 'Full',      rent: 8800,  students: ['Neha Gupta', 'Pooja Tiwari'] },
  { id: 'D-405', block: 'D', floor: 4, capacity: 3, occupied: 2, type: 'Triple', amenities: ['WiFi','AC'],  status: 'Available', rent: 7500,  students: ['Aditya Rao', 'Sanjay M.'] },
]

const statusColor: Record<string, string> = {
  'Full': 'badge-yellow',
  'Available': 'badge-green',
  'Vacant': 'badge-blue',
  'Maintenance': 'badge-red',
}

function RoomsPage() {
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')

  const filtered = rooms.filter(r =>
    (filterStatus === 'All' || r.status === filterStatus) &&
    (r.id.toLowerCase().includes(search.toLowerCase()) || r.type.toLowerCase().includes(search.toLowerCase()))
  )

  const stats = [
    { label: 'Total Rooms', value: rooms.length, icon: BedDouble, color: '#7C3AED' },
    { label: 'Fully Occupied', value: rooms.filter(r => r.status === 'Full').length, icon: CheckCircle, color: '#10B981' },
    { label: 'Available', value: rooms.filter(r => r.status === 'Available').length, icon: Clock, color: '#F59E0B' },
    { label: 'Vacant', value: rooms.filter(r => r.status === 'Vacant').length, icon: XCircle, color: '#3B82F6' },
  ]

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px' }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Link to="/" style={{ fontSize: 13, color: '#475569', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#1E2D40' }}>/</span>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>Rooms</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{ fontSize: 30, fontWeight: 700, fontFamily: 'Sora', margin: '0 0 6px', letterSpacing: '-0.02em' }}>Room Allocation</h1>
              <p style={{ margin: 0, color: '#64748B', fontSize: 15 }}>Manage hostel room assignments and availability.</p>
            </div>
            <button className="btn-glow" style={{ padding: '10px 20px', borderRadius: 9, color: '#fff', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans' }}>
              <Plus size={15} /> Add Room
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
              <div style={{ fontSize: 26, fontWeight: 700, fontFamily: 'Sora', color: '#EEF2FF' }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by room ID or type…"
              style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: 9, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#EEF2FF', fontSize: 13, outline: 'none', fontFamily: 'DM Sans' }}
            />
          </div>
          {['All','Full','Available','Vacant'].map(s => (
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
                  {['Room ID','Block','Type','Capacity','Occupants','Amenities','Rent / Mo','Status','Actions'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#475569', fontWeight: 500, fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r.id} className="tr-hover" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '13px 16px', fontWeight: 600, color: '#EEF2FF', fontFamily: 'Sora', fontSize: 13 }}>{r.id}</td>
                    <td style={{ padding: '13px 16px', color: '#94A3B8' }}>Block {r.block}</td>
                    <td style={{ padding: '13px 16px', color: '#94A3B8' }}>{r.type}</td>
                    <td style={{ padding: '13px 16px', color: '#94A3B8', textAlign: 'center' }}>{r.occupied}/{r.capacity}</td>
                    <td style={{ padding: '13px 16px', color: '#94A3B8', maxWidth: 160 }}>
                      {r.students.length > 0 ? r.students.slice(0, 2).join(', ') + (r.students.length > 2 ? '…' : '') : <span style={{ color: '#1E2D40' }}>—</span>}
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <div style={{ display: 'flex', gap: 5 }}>
                        {r.amenities.map(a => (
                          <span key={a} style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 10.5, color: '#64748B', background: 'rgba(255,255,255,0.05)', padding: '2px 7px', borderRadius: 5 }}>
                            {a === 'WiFi' ? <Wifi size={10} /> : <Wind size={10} />}{a}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '13px 16px', color: '#EEF2FF', fontWeight: 500 }}>₹{r.rent.toLocaleString()}</td>
                    <td style={{ padding: '13px 16px' }}>
                      <span className={statusColor[r.status]} style={{ padding: '3px 10px', borderRadius: 100, fontSize: 11.5, fontWeight: 500 }}>{r.status}</span>
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button style={{ padding: '5px 10px', borderRadius: 6, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)', color: '#A78BFA', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}><Eye size={11} /> View</button>
                        <button style={{ padding: '5px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748B', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}><Edit2 size={11} /> Edit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#475569' }}>Showing {filtered.length} of {rooms.length} rooms</span>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1,2,3].map(p => (
                <button key={p} style={{ width: 28, height: 28, borderRadius: 6, background: p === 1 ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)', border: p === 1 ? '1px solid rgba(124,58,237,0.35)' : '1px solid rgba(255,255,255,0.08)', color: p === 1 ? '#A78BFA' : '#475569', fontSize: 12, cursor: 'pointer' }}>{p}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
