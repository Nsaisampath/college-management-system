import { createFileRoute, Link } from '@tanstack/react-router'
import { BarChart2, BedDouble, Bell, CreditCard, MessageSquare, User, CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/student-dashboard')({
  component: StudentDashboard,
})

const studentInfo = {
  name: 'Arjun Sharma',
  id: 'STU-1001',
  room: 'A-104',
  block: 'Block A',
  floor: '1st Floor',
  roommates: ['Dev Kumar'],
  dept: 'Computer Science',
  year: 'Year 3',
  joined: 'July 2023',
  warden: 'Mr. Rajesh Kumar',
  wardenPhone: '+91 94321 67890',
}

const myComplaints = [
  { id: 'CMP-001', title: 'Leaking tap in bathroom',     category: 'Maintenance', date: '2025-04-18', status: 'Resolved' },
  { id: 'CMP-004', title: 'Internet speed very slow',     category: 'WiFi',        date: '2025-04-22', status: 'In Progress' },
]

const recentNotices = [
  { id: 'NOT-001', title: 'Hostel Fee Payment Deadline — April 30', category: 'Finance',  date: '2025-04-20', pinned: true },
  { id: 'NOT-002', title: 'Water Supply Interruption on April 25',  category: 'Utility',  date: '2025-04-22', pinned: true },
  { id: 'NOT-003', title: 'Cultural Fest Registration Open',         category: 'Event',    date: '2025-04-18', pinned: false },
  { id: 'NOT-005', title: 'WiFi Upgrade Scheduled — May 1',         category: 'Utility',  date: '2025-04-23', pinned: false },
]

const feeStatus = {
  semester: 'Semester 2, 2024-25',
  total: 24500,
  paid: 24500,
  balance: 0,
  status: 'Paid',
  dueDate: '2025-04-30',
}

const cmpStatusCls: Record<string, string> = { 'Resolved': 'badge-green', 'In Progress': 'badge-yellow', 'Open': 'badge-red' }
const catColors: Record<string, string> = { 'Finance': 'badge-yellow', 'Utility': 'badge-blue', 'Event': 'badge-purple', 'Security': 'badge-yellow' }

function StudentDashboard() {
  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px' }}>

        {/* Welcome */}
        <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg,#7C3AED,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: '#fff', fontFamily: 'Sora' }}>
              {studentInfo.name[0]}
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#64748B', marginBottom: 2 }}>Welcome back,</div>
              <h1 style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Sora', margin: 0, letterSpacing: '-0.02em' }}>{studentInfo.name}</h1>
              <div style={{ fontSize: 12, color: '#475569' }}>{studentInfo.id} · {studentInfo.dept} · {studentInfo.year}</div>
            </div>
          </div>
          <div style={{ padding: '8px 16px', borderRadius: 9, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#34D399' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#34D399', boxShadow: '0 0 6px #34D399' }} />
            Active Resident
          </div>
        </div>

        {/* Quick stat row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'My Room', value: studentInfo.room, icon: BedDouble, color: '#7C3AED', sub: studentInfo.block },
            { label: 'Complaints', value: String(myComplaints.length), icon: MessageSquare, color: '#F59E0B', sub: `${myComplaints.filter(c=>c.status==='In Progress').length} in progress` },
            { label: 'Notices', value: String(recentNotices.length), icon: Bell, color: '#0891B2', sub: `${recentNotices.filter(n=>n.pinned).length} pinned` },
            { label: 'Fee Status', value: feeStatus.status, icon: CreditCard, color: '#10B981', sub: 'Semester 2 2024-25' },
          ].map(s => (
            <div key={s.label} className="glass card-hover" style={{ borderRadius: 14, padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: '#64748B' }}>{s.label}</span>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: `${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.icon size={15} color={s.color} />
                </div>
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Sora', marginBottom: 3 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: '#475569' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 20, marginBottom: 20 }}>
          {/* Room details card */}
          <div className="glass" style={{ borderRadius: 14, padding: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
              <BedDouble size={16} color="#7C3AED" />
              <span style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora' }}>Room Details</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['Room Number', studentInfo.room],
                ['Block', studentInfo.block],
                ['Floor', studentInfo.floor],
                ['Room Type', 'Double Sharing'],
                ['Amenities', 'WiFi, AC'],
                ['Roommate', studentInfo.roommates[0]],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#475569' }}>{k}</span>
                  <span style={{ fontSize: 13, color: '#94A3B8', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: 11, color: '#334155', marginBottom: 6 }}>BLOCK WARDEN</div>
              <div style={{ fontSize: 13, color: '#EEF2FF', fontWeight: 500 }}>{studentInfo.warden}</div>
              <div style={{ fontSize: 12, color: '#475569' }}>{studentInfo.wardenPhone}</div>
            </div>
          </div>

          {/* Notices */}
          <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Bell size={15} color="#0891B2" /> Recent Notices
              </div>
              <Link to="/notices" style={{ fontSize: 12, color: '#A78BFA', textDecoration: 'none' }}>View all →</Link>
            </div>
            <div style={{ padding: '8px 0' }}>
              {recentNotices.map(n => (
                <div key={n.id} style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 500, color: '#EEF2FF', marginBottom: 4 }}>{n.title}</div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span className={catColors[n.category] || 'badge-blue'} style={{ padding: '1px 8px', borderRadius: 100, fontSize: 10.5 }}>{n.category}</span>
                      <span style={{ fontSize: 11, color: '#334155' }}>{n.date}</span>
                    </div>
                  </div>
                  {n.pinned && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', flexShrink: 0 }} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Complaints + Fee row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* My complaints */}
          <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora', display: 'flex', alignItems: 'center', gap: 8 }}>
                <MessageSquare size={15} color="#F59E0B" /> My Complaints
              </div>
              <Link to="/complaints" style={{ fontSize: 12, color: '#A78BFA', textDecoration: 'none' }}>View all →</Link>
            </div>
            {myComplaints.map(c => (
              <div key={c.id} style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#EEF2FF', marginBottom: 3 }}>{c.title}</div>
                  <div style={{ fontSize: 11, color: '#475569' }}>{c.category} · {c.date}</div>
                </div>
                <span className={cmpStatusCls[c.status]} style={{ padding: '3px 10px', borderRadius: 100, fontSize: 11, flexShrink: 0 }}>{c.status}</span>
              </div>
            ))}
            <div style={{ padding: '12px 18px' }}>
              <button className="btn-glow" style={{ width: '100%', padding: '10px', borderRadius: 9, color: '#fff', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontFamily: 'DM Sans' }}>
                Submit New Complaint <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Fee status */}
          <div className="glass" style={{ borderRadius: 14, padding: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
              <CreditCard size={16} color="#10B981" />
              <span style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora' }}>Fee Status</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: '#475569', marginBottom: 4 }}>Current Semester</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#EEF2FF' }}>{feeStatus.semester}</div>
              </div>
              <span className="badge-green" style={{ padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}>
                <CheckCircle size={12} />{feeStatus.status}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
              {[
                ['Total Fee', `₹${feeStatus.total.toLocaleString()}`],
                ['Amount Paid', `₹${feeStatus.paid.toLocaleString()}`],
                ['Balance', feeStatus.balance > 0 ? `₹${feeStatus.balance.toLocaleString()}` : 'Nil'],
                ['Due Date', feeStatus.dueDate],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#475569' }}>{k}</span>
                  <span style={{ fontSize: 13, color: k === 'Amount Paid' ? '#34D399' : '#94A3B8', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ height: 6, borderRadius: 100, background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(feeStatus.paid / feeStatus.total) * 100}%`, background: 'linear-gradient(90deg, #7C3AED, #10B981)', borderRadius: 100 }} />
            </div>
            <div style={{ fontSize: 11, color: '#475569', marginTop: 6, textAlign: 'right' }}>
              {Math.round((feeStatus.paid / feeStatus.total) * 100)}% paid
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
