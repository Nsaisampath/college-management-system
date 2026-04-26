import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { CreditCard, Search, Plus, Eye, CheckCircle, Clock, AlertCircle, TrendingUp } from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/fees')({
  component: FeesPage,
})

const feeRecords = [
  { id: 'FEE-001', student: 'Arjun Sharma',  room: 'A-104', semester: 'Sem 2 2024-25', amount: 24500, paid: 24500, balance: 0,    method: 'UPI',         date: '2025-04-03', status: 'Paid' },
  { id: 'FEE-002', student: 'Priya Mehta',   room: 'B-208', semester: 'Sem 2 2024-25', amount: 26000, paid: 13000, balance: 13000, method: 'Bank Transfer', date: '2025-04-05', status: 'Partial' },
  { id: 'FEE-003', student: 'Karan Patel',   room: 'C-312', semester: 'Sem 2 2024-25', amount: 22800, paid: 0,     balance: 22800, method: '—',            date: '—',          status: 'Pending' },
  { id: 'FEE-004', student: 'Nisha Roy',     room: 'A-115', semester: 'Sem 2 2024-25', amount: 22800, paid: 22800, balance: 0,    method: 'Cash',         date: '2025-04-01', status: 'Paid' },
  { id: 'FEE-005', student: 'Dev Kumar',     room: 'D-402', semester: 'Sem 2 2024-25', amount: 25200, paid: 25200, balance: 0,    method: 'UPI',          date: '2025-04-10', status: 'Paid' },
  { id: 'FEE-006', student: 'Meera Das',     room: 'A-104', semester: 'Sem 2 2024-25', amount: 22800, paid: 0,     balance: 22800, method: '—',            date: '—',          status: 'Overdue' },
  { id: 'FEE-007', student: 'Ravi Nair',     room: 'A-103', semester: 'Sem 2 2024-25', amount: 33000, paid: 33000, balance: 0,    method: 'Bank Transfer', date: '2025-03-28', status: 'Paid' },
  { id: 'FEE-008', student: 'Sunita Rao',    room: 'B-205', semester: 'Sem 2 2024-25', amount: 37500, paid: 37500, balance: 0,    method: 'UPI',          date: '2025-04-02', status: 'Paid' },
  { id: 'FEE-009', student: 'Vikram Seth',   room: 'C-301', semester: 'Sem 2 2024-25', amount: 21600, paid: 10000, balance: 11600, method: 'Cash',        date: '2025-04-18', status: 'Partial' },
  { id: 'FEE-010', student: 'Divya Pillai',  room: 'C-302', semester: 'Sem 2 2024-25', amount: 27600, paid: 27600, balance: 0,    method: 'UPI',          date: '2025-04-07', status: 'Paid' },
  { id: 'FEE-011', student: 'Aditya Rao',   room: 'D-405', semester: 'Sem 2 2024-25', amount: 22500, paid: 0,     balance: 22500, method: '—',            date: '—',          status: 'Overdue' },
  { id: 'FEE-012', student: 'Neha Gupta',   room: 'D-402', semester: 'Sem 2 2024-25', amount: 25200, paid: 25200, balance: 0,    method: 'Bank Transfer', date: '2025-04-12', status: 'Paid' },
]

const statusConfig: Record<string, string> = {
  'Paid': 'badge-green', 'Partial': 'badge-yellow', 'Pending': 'badge-blue', 'Overdue': 'badge-red',
}

function FeesPage() {
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')

  const filtered = feeRecords.filter(f =>
    (filterStatus === 'All' || f.status === filterStatus) &&
    (f.student.toLowerCase().includes(search.toLowerCase()) || f.id.toLowerCase().includes(search.toLowerCase()))
  )

  const totalAmount = feeRecords.reduce((a, f) => a + f.amount, 0)
  const totalCollected = feeRecords.reduce((a, f) => a + f.paid, 0)
  const totalPending = feeRecords.reduce((a, f) => a + f.balance, 0)
  const collectionRate = Math.round((totalCollected / totalAmount) * 100 * 10) / 10

  const stats = [
    { label: 'Total Fees',     value: `₹${(totalAmount/100000).toFixed(1)}L`,    color: '#7C3AED', icon: CreditCard },
    { label: 'Collected',      value: `₹${(totalCollected/100000).toFixed(1)}L`, color: '#10B981', icon: CheckCircle },
    { label: 'Pending',        value: `₹${(totalPending/100000).toFixed(1)}L`,   color: '#F59E0B', icon: Clock },
    { label: 'Collection Rate', value: `${collectionRate}%`,                     color: '#3B82F6', icon: TrendingUp },
  ]

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px' }}>

        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Link to="/" style={{ fontSize: 13, color: '#475569', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#1E2D40' }}>/</span>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>Fees</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{ fontSize: 30, fontWeight: 700, fontFamily: 'Sora', margin: '0 0 6px', letterSpacing: '-0.02em' }}>Fee Tracking</h1>
              <p style={{ margin: 0, color: '#64748B', fontSize: 15 }}>Monitor hostel fee payments, dues, and collection status.</p>
            </div>
            <button className="btn-glow" style={{ padding: '10px 20px', borderRadius: 9, color: '#fff', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans' }}>
              <Plus size={15} /> Record Payment
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

        {/* Collection progress */}
        <div className="glass" style={{ borderRadius: 12, padding: '20px', marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>Overall Collection Progress</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#EEF2FF' }}>{collectionRate}% collected</span>
          </div>
          <div style={{ height: 8, borderRadius: 100, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${collectionRate}%`, background: 'linear-gradient(90deg, #7C3AED, #10B981)', borderRadius: 100, transition: 'width 1s ease' }} />
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by student or ID…"
              style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: 9, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#EEF2FF', fontSize: 13, outline: 'none', fontFamily: 'DM Sans' }} />
          </div>
          {['All','Paid','Partial','Pending','Overdue'].map(s => (
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
                  {['Receipt ID','Student','Room','Semester','Total','Paid','Balance','Method','Date','Status','Actions'].map(h => (
                    <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#475569', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(f => (
                  <tr key={f.id} className="tr-hover" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 600, color: '#A78BFA', fontSize: 12, fontFamily: 'Sora' }}>{f.id}</td>
                    <td style={{ padding: '12px 14px', color: '#EEF2FF', whiteSpace: 'nowrap' }}>{f.student}</td>
                    <td style={{ padding: '12px 14px', color: '#64748B' }}>{f.room}</td>
                    <td style={{ padding: '12px 14px', color: '#64748B', fontSize: 12, whiteSpace: 'nowrap' }}>{f.semester}</td>
                    <td style={{ padding: '12px 14px', color: '#94A3B8', whiteSpace: 'nowrap' }}>₹{f.amount.toLocaleString()}</td>
                    <td style={{ padding: '12px 14px', color: '#34D399', fontWeight: 500, whiteSpace: 'nowrap' }}>₹{f.paid.toLocaleString()}</td>
                    <td style={{ padding: '12px 14px', color: f.balance > 0 ? '#F87171' : '#475569', fontWeight: f.balance > 0 ? 500 : 400, whiteSpace: 'nowrap' }}>
                      {f.balance > 0 ? `₹${f.balance.toLocaleString()}` : '—'}
                    </td>
                    <td style={{ padding: '12px 14px', color: '#64748B', whiteSpace: 'nowrap' }}>{f.method}</td>
                    <td style={{ padding: '12px 14px', color: '#475569', fontSize: 12, whiteSpace: 'nowrap' }}>{f.date}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <span className={statusConfig[f.status]} style={{ padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 500 }}>{f.status}</span>
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      <button style={{ padding: '5px 10px', borderRadius: 6, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)', color: '#A78BFA', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap' }}><Eye size={11} /> View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#475569' }}>Showing {filtered.length} of {feeRecords.length} records</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {[
                { label: `Paid: ${feeRecords.filter(f=>f.status==='Paid').length}`, c: '#34D399' },
                { label: `Partial: ${feeRecords.filter(f=>f.status==='Partial').length}`, c: '#FCD34D' },
                { label: `Overdue: ${feeRecords.filter(f=>f.status==='Overdue').length}`, c: '#F87171' },
              ].map(b => (
                <span key={b.label} style={{ fontSize: 11.5, color: b.c, padding: '3px 10px', borderRadius: 100, background: `${b.c}15`, border: `1px solid ${b.c}30` }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
