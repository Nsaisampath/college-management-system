import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Users, Search, Plus, Eye, Edit2, Phone, Mail } from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/students')({
  component: StudentsPage,
})

const students = [
  { id: 'STU-1001', name: 'Arjun Sharma',   age: 21, dept: 'Computer Science',   year: 3, room: 'A-104', phone: '+91 98765 43210', email: 'arjun.s@college.edu',   joined: '2023-07-12', status: 'Active',   gpa: 8.7 },
  { id: 'STU-1002', name: 'Priya Mehta',    age: 20, dept: 'Electronics',        year: 2, room: 'B-208', phone: '+91 98765 43211', email: 'priya.m@college.edu',    joined: '2024-07-15', status: 'Active',   gpa: 9.1 },
  { id: 'STU-1003', name: 'Karan Patel',    age: 22, dept: 'Mechanical Eng.',    year: 4, room: 'C-312', phone: '+91 98765 43212', email: 'karan.p@college.edu',    joined: '2022-07-11', status: 'Pending',  gpa: 7.4 },
  { id: 'STU-1004', name: 'Nisha Roy',      age: 21, dept: 'Computer Science',   year: 3, room: 'A-115', phone: '+91 98765 43213', email: 'nisha.r@college.edu',    joined: '2023-07-14', status: 'Active',   gpa: 8.9 },
  { id: 'STU-1005', name: 'Dev Kumar',      age: 20, dept: 'Information Tech.',  year: 2, room: 'D-402', phone: '+91 98765 43214', email: 'dev.k@college.edu',      joined: '2024-07-10', status: 'Active',   gpa: 8.2 },
  { id: 'STU-1006', name: 'Meera Das',      age: 22, dept: 'Civil Engineering',  year: 4, room: 'A-104', phone: '+91 98765 43215', email: 'meera.d@college.edu',    joined: '2022-07-13', status: 'Active',   gpa: 7.8 },
  { id: 'STU-1007', name: 'Ravi Nair',      age: 21, dept: 'Computer Science',   year: 3, room: 'A-103', phone: '+91 98765 43216', email: 'ravi.n@college.edu',     joined: '2023-07-16', status: 'Active',   gpa: 9.3 },
  { id: 'STU-1008', name: 'Sunita Rao',     age: 20, dept: 'Electronics',        year: 2, room: 'B-205', phone: '+91 98765 43217', email: 'sunita.r@college.edu',   joined: '2024-07-09', status: 'Active',   gpa: 8.6 },
  { id: 'STU-1009', name: 'Vikram Seth',    age: 23, dept: 'Mechanical Eng.',    year: 4, room: 'C-301', phone: '+91 98765 43218', email: 'vikram.s@college.edu',   joined: '2022-07-08', status: 'Active',   gpa: 7.2 },
  { id: 'STU-1010', name: 'Divya Pillai',   age: 21, dept: 'Information Tech.',  year: 3, room: 'C-302', phone: '+91 98765 43219', email: 'divya.p@college.edu',    joined: '2023-07-17', status: 'Active',   gpa: 8.4 },
  { id: 'STU-1011', name: 'Rohit Jain',     age: 22, dept: 'Civil Engineering',  year: 4, room: 'C-301', phone: '+91 98765 43220', email: 'rohit.j@college.edu',    joined: '2022-07-07', status: 'Suspended', gpa: 5.9 },
  { id: 'STU-1012', name: 'Aditya Rao',     age: 20, dept: 'Computer Science',   year: 2, room: 'D-405', phone: '+91 98765 43221', email: 'aditya.r@college.edu',   joined: '2024-07-12', status: 'Active',   gpa: 8.8 },
  { id: 'STU-1013', name: 'Neha Gupta',     age: 21, dept: 'Electronics',        year: 3, room: 'D-402', phone: '+91 98765 43222', email: 'neha.g@college.edu',     joined: '2023-07-18', status: 'Active',   gpa: 9.0 },
  { id: 'STU-1014', name: 'Pooja Tiwari',   age: 20, dept: 'Mechanical Eng.',    year: 2, room: 'D-402', phone: '+91 98765 43223', email: 'pooja.t@college.edu',    joined: '2024-07-14', status: 'Active',   gpa: 7.9 },
]

const depts = ['All', ...Array.from(new Set(students.map(s => s.dept)))]
const statusCls: Record<string, string> = { 'Active': 'badge-green', 'Pending': 'badge-yellow', 'Suspended': 'badge-red' }

function StudentsPage() {
  const [search, setSearch] = useState('')
  const [filterDept, setFilterDept] = useState('All')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filtered = students.filter(s =>
    (filterDept === 'All' || s.dept === filterDept) &&
    (s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()))
  )

  const selected = students.find(s => s.id === selectedId)

  const stats = [
    { label: 'Total Students', value: students.length, color: '#7C3AED', icon: Users },
    { label: 'Active', value: students.filter(s => s.status === 'Active').length, color: '#10B981', icon: Users },
    { label: 'Departments', value: new Set(students.map(s => s.dept)).size, color: '#3B82F6', icon: Users },
    { label: 'Avg. GPA', value: (students.reduce((a, s) => a + s.gpa, 0) / students.length).toFixed(1), color: '#F59E0B', icon: Users },
  ]

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px' }}>

        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Link to="/" style={{ fontSize: 13, color: '#475569', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#1E2D40' }}>/</span>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>Students</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{ fontSize: 30, fontWeight: 700, fontFamily: 'Sora', margin: '0 0 6px', letterSpacing: '-0.02em' }}>Student Records</h1>
              <p style={{ margin: 0, color: '#64748B', fontSize: 15 }}>Complete student directory with profiles and room assignments.</p>
            </div>
            <button className="btn-glow" style={{ padding: '10px 20px', borderRadius: 9, color: '#fff', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans' }}>
              <Plus size={15} /> Add Student
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
        <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search students…"
              style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: 9, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#EEF2FF', fontSize: 13, outline: 'none', fontFamily: 'DM Sans' }} />
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {depts.map(d => (
              <button key={d} onClick={() => setFilterDept(d)} style={{
                padding: '7px 13px', borderRadius: 7, fontSize: 12, cursor: 'pointer', fontFamily: 'DM Sans',
                background: filterDept === d ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                border: filterDept === d ? '1px solid rgba(124,58,237,0.4)' : '1px solid rgba(255,255,255,0.08)',
                color: filterDept === d ? '#A78BFA' : '#64748B', transition: 'all 0.18s',
                whiteSpace: 'nowrap',
              }}>{d}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 300px' : '1fr', gap: 20 }}>
          {/* Table */}
          <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    {['ID','Name','Department','Year','Room','GPA','Status','Actions'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#475569', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(s => (
                    <tr key={s.id} className="tr-hover" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', cursor: 'pointer', background: selectedId === s.id ? 'rgba(124,58,237,0.06)' : undefined }}
                      onClick={() => setSelectedId(selectedId === s.id ? null : s.id)}>
                      <td style={{ padding: '12px 14px', fontWeight: 600, color: '#A78BFA', fontSize: 12, fontFamily: 'Sora' }}>{s.id}</td>
                      <td style={{ padding: '12px 14px', color: '#EEF2FF', whiteSpace: 'nowrap', fontWeight: 500 }}>{s.name}</td>
                      <td style={{ padding: '12px 14px', color: '#64748B', fontSize: 12 }}>{s.dept}</td>
                      <td style={{ padding: '12px 14px', color: '#94A3B8', textAlign: 'center' }}>Year {s.year}</td>
                      <td style={{ padding: '12px 14px', color: '#64748B' }}>{s.room}</td>
                      <td style={{ padding: '12px 14px' }}>
                        <span style={{ fontWeight: 600, color: s.gpa >= 9 ? '#34D399' : s.gpa >= 8 ? '#93C5FD' : s.gpa >= 7 ? '#FCD34D' : '#F87171' }}>{s.gpa}</span>
                      </td>
                      <td style={{ padding: '12px 14px' }}>
                        <span className={statusCls[s.status]} style={{ padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 500 }}>{s.status}</span>
                      </td>
                      <td style={{ padding: '12px 14px' }}>
                        <div style={{ display: 'flex', gap: 5 }}>
                          <button style={{ padding: '5px 9px', borderRadius: 6, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)', color: '#A78BFA', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}><Eye size={10} /></button>
                          <button style={{ padding: '5px 9px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748B', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}><Edit2 size={10} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: 12, color: '#475569' }}>Showing {filtered.length} of {students.length} students</span>
            </div>
          </div>

          {/* Detail panel */}
          {selected && (
            <div className="glass" style={{ borderRadius: 14, padding: '24px', alignSelf: 'start', position: 'sticky', top: 80 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontSize: 11, color: '#475569' }}>{selected.id}</span>
                <button onClick={() => setSelectedId(null)} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', fontSize: 18 }}>×</button>
              </div>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg,#7C3AED,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
                {selected.name[0]}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'Sora', color: '#EEF2FF', marginBottom: 4 }}>{selected.name}</div>
              <span className={statusCls[selected.status]} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 11, fontWeight: 500 }}>{selected.status}</span>

              <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
                {[
                  ['Department', selected.dept],
                  ['Year', `Year ${selected.year}`],
                  ['Room', selected.room],
                  ['GPA', String(selected.gpa)],
                  ['Joined', selected.joined],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: '#475569' }}>{k}</span>
                    <span style={{ fontSize: 12, color: '#94A3B8' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 8, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#64748B' }}>
                  <Phone size={12} color="#475569" />{selected.phone}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#64748B' }}>
                  <Mail size={12} color="#475569" />{selected.email}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
