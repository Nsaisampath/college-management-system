import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
  BedDouble, MessageSquare, Bell, CreditCard, Users, Shield,
  BarChart2, CheckCircle, ArrowRight, Layers, Globe,
} from 'lucide-react'
import { Nav } from '@/components/Nav'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const features = [
  { icon: BedDouble,     label: 'Room Allocation',       desc: 'Assign and track room occupancy with real-time availability.',  to: '/rooms',             color: '#7C3AED' },
  { icon: MessageSquare, label: 'Complaint Management',  desc: 'Log, track, and resolve student complaints efficiently.',        to: '/complaints',        color: '#2563EB' },
  { icon: Bell,          label: 'Notice Board',          desc: 'Broadcast notices and announcements to students instantly.',     to: '/notices',           color: '#0891B2' },
  { icon: CreditCard,    label: 'Fee Tracking',          desc: 'Monitor fee payments, dues, and generate payment records.',      to: '/fees',              color: '#7C3AED' },
  { icon: Users,         label: 'Student Records',       desc: 'Maintain complete student profiles and academic information.',   to: '/students',          color: '#2563EB' },
  { icon: Shield,        label: 'Admin Control',         desc: 'Full system oversight with analytics and reporting tools.',      to: '/admin-dashboard',   color: '#0891B2' },
]

const sliderCards = [
  { icon: BedDouble,     title: 'Room Management',    sub: '342 rooms · 94% occupied',         color: '#7C3AED' },
  { icon: MessageSquare, title: 'Complaint Tracking', sub: '23 active · avg 4.1h resolution',  color: '#2563EB' },
  { icon: Bell,          title: 'Notice System',      sub: '18 active notices this month',      color: '#0891B2' },
  { icon: CreditCard,    title: 'Fee Overview',       sub: '₹18.4L collected · 92.7% rate',    color: '#7C3AED' },
  { icon: Users,         title: 'Student Data',       sub: '1,284 enrolled · 8 departments',   color: '#2563EB' },
  { icon: BarChart2,     title: 'Analytics',          sub: 'Live reports & admin dashboards',   color: '#0891B2' },
]

const roles = [
  {
    to: '/admin-dashboard',
    label: 'Admin',
    icon: Shield,
    color: '#7C3AED',
    tagline: 'Full system authority',
    responsibilities: [
      'Manage all student records',
      'Oversee room allocations',
      'Generate financial reports',
      'Configure system settings',
      'Review all complaints',
    ],
  },
  {
    to: '/student-dashboard',
    label: 'Student',
    icon: Users,
    color: '#2563EB',
    tagline: 'Personal dashboard access',
    responsibilities: [
      'View assigned room details',
      'Submit and track complaints',
      'Check fee payment status',
      'Read hostel notices',
      'Update personal profile',
    ],
  },
  {
    to: '/warden-dashboard',
    label: 'Warden',
    icon: Layers,
    color: '#0891B2',
    tagline: 'Block-level management',
    responsibilities: [
      'Monitor block occupancy',
      'Handle complaint resolution',
      'Update room statuses',
      'Post block-level notices',
      'View student attendance',
    ],
  },
]

// Mini dashboard mockup for hero
function HeroDashboardPreview() {
  return (
    <div style={{
      borderRadius: 16, overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      background: '#0D1221',
      boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.15)',
      fontSize: 11,
    }}>
      {/* Top bar */}
      <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0B0F1A' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: 'linear-gradient(135deg,#7C3AED,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#fff' }}>H</div>
          <span style={{ color: '#EEF2FF', fontWeight: 600, fontSize: 11 }}>HMS Dashboard</span>
        </div>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          <div style={{ width: 80, height: 22, borderRadius: 5, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }} />
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#2563EB)' }} />
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: 100, borderRight: '1px solid rgba(255,255,255,0.06)', padding: '10px 8px', background: '#0B0F1A' }}>
          {['Overview','Students','Rooms','Complaints','Notices','Fees'].map((item, i) => (
            <div key={item} style={{
              padding: '6px 8px', borderRadius: 5, marginBottom: 2, fontSize: 10,
              color: i === 0 ? '#EEF2FF' : '#64748B',
              background: i === 0 ? 'rgba(124,58,237,0.2)' : 'transparent',
            }}>{item}</div>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 12 }}>
          {/* Stat row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 12 }}>
            {[
              { label: 'Students', value: '1,284', color: '#7C3AED' },
              { label: 'Rooms',    value: '342',   color: '#2563EB' },
              { label: 'Issues',   value: '23',    color: '#0891B2' },
            ].map(s => (
              <div key={s.label} style={{ padding: '8px', borderRadius: 7, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ color: s.color, fontSize: 9, marginBottom: 2 }}>{s.label}</div>
                <div style={{ color: '#EEF2FF', fontWeight: 700, fontSize: 13 }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Mini table */}
          <div style={{ borderRadius: 7, border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
            <div style={{ padding: '6px 8px', background: 'rgba(255,255,255,0.03)', display: 'grid', gridTemplateColumns: '1fr 60px 45px', gap: 4, color: '#475569', fontSize: 9 }}>
              <span>Student</span><span>Room</span><span>Status</span>
            </div>
            {[
              { name: 'Arjun Sharma', room: 'A-104', status: 'Active', c: '#34D399' },
              { name: 'Priya Mehta',  room: 'B-208', status: 'Active', c: '#34D399' },
              { name: 'Karan Patel', room: 'C-312', status: 'Pending', c: '#FCD34D' },
              { name: 'Nisha Roy',   room: 'A-115', status: 'Active', c: '#34D399' },
            ].map(r => (
              <div key={r.name} style={{ padding: '5px 8px', display: 'grid', gridTemplateColumns: '1fr 60px 45px', gap: 4, borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: 9, color: '#94A3B8' }}>
                <span>{r.name}</span>
                <span>{r.room}</span>
                <span style={{ color: r.c }}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Large dashboard preview for the dedicated section
function DashboardPreviewFull({ visible }: { visible: boolean }) {
  const containerStyle: React.CSSProperties = {
    borderRadius: 16, overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)',
    background: '#0D1221',
    boxShadow: '0 32px 100px rgba(0,0,0,0.6)',
    opacity: visible ? 1 : 0,
    transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(28px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
  }

  return (
    <div style={containerStyle}>
      {/* Top bar */}
      <div style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0B0F1A' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg,#7C3AED,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'Sora' }}>H</div>
          <span style={{ color: '#EEF2FF', fontWeight: 600, fontSize: 14, fontFamily: 'Sora' }}>HMS · Admin Dashboard</span>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 160, height: 28, borderRadius: 7, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399' }} />
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#2563EB)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', height: 420 }}>
        {/* Sidebar */}
        <div style={{ width: 180, borderRight: '1px solid rgba(255,255,255,0.07)', padding: '16px 10px', background: '#0B0F1A', flexShrink: 0 }}>
          <div style={{ fontSize: 10, color: '#475569', padding: '0 8px', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Navigation</div>
          {[
            { icon: BarChart2, label: 'Overview',   active: true },
            { icon: Users,     label: 'Students',   active: false },
            { icon: BedDouble, label: 'Rooms',      active: false },
            { icon: MessageSquare, label: 'Complaints', active: false },
            { icon: Bell,      label: 'Notices',    active: false },
            { icon: CreditCard,label: 'Fees',       active: false },
            { icon: Globe,     label: 'Reports',    active: false },
          ].map(({ icon: Icon, label, active }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', gap: 9, padding: '8px 10px', borderRadius: 7, marginBottom: 2,
              background: active ? 'rgba(124,58,237,0.18)' : 'transparent',
              color: active ? '#EEF2FF' : '#64748B', fontSize: 12,
            }}>
              <Icon size={13} />{label}
            </div>
          ))}
        </div>

        {/* Main area */}
        <div style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#EEF2FF', marginBottom: 14, fontFamily: 'Sora' }}>Overview</div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 18 }}>
            {[
              { label: 'Total Students', value: '1,284', delta: '+47', color: '#7C3AED' },
              { label: 'Rooms Occupied', value: '318/342', delta: '93%', color: '#2563EB' },
              { label: 'Open Complaints', value: '23', delta: '-5', color: '#F59E0B' },
              { label: 'Fees Collected', value: '₹18.4L', delta: '92.7%', color: '#10B981' },
            ].map(s => (
              <div key={s.label} style={{ padding: 12, borderRadius: 9, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: 10, color: '#64748B', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#EEF2FF', fontFamily: 'Sora', marginBottom: 2 }}>{s.value}</div>
                <div style={{ fontSize: 10, color: s.color }}>{s.delta} this month</div>
              </div>
            ))}
          </div>

          {/* Bar chart mockup */}
          <div style={{ padding: 14, borderRadius: 9, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', marginBottom: 16 }}>
            <div style={{ fontSize: 11, color: '#94A3B8', marginBottom: 10, fontFamily: 'Sora' }}>Fee Collection — Last 6 Months</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 60 }}>
              {[68, 75, 82, 70, 88, 93].map((h, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  <div style={{ width: '100%', height: `${h * 0.6}%`, background: `linear-gradient(to top, #7C3AED, #2563EB)`, borderRadius: '3px 3px 0 0', opacity: 0.8 }} />
                  <div style={{ fontSize: 8, color: '#475569' }}>{['Nov','Dec','Jan','Feb','Mar','Apr'][i]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent students table */}
          <div style={{ borderRadius: 9, border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
            <div style={{ padding: '9px 12px', background: 'rgba(255,255,255,0.03)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 8, fontSize: 10, color: '#475569' }}>
              <span>Student</span><span>Room</span><span>Dept</span><span>Status</span>
            </div>
            {[
              { n: 'Arjun Sharma',  r: 'A-104', d: 'CS',   s: 'Active',  c: '#34D399' },
              { n: 'Priya Mehta',   r: 'B-208', d: 'ECE',  s: 'Active',  c: '#34D399' },
              { n: 'Karan Patel',   r: 'C-312', d: 'ME',   s: 'Pending', c: '#FCD34D' },
              { n: 'Dev Kumar',     r: 'A-115', d: 'CS',   s: 'Active',  c: '#34D399' },
            ].map(r => (
              <div key={r.n} style={{ padding: '8px 12px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 8, borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: 11, color: '#94A3B8' }}>
                <span>{r.n}</span><span>{r.r}</span><span>{r.d}</span>
                <span style={{ color: r.c }}>{r.s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LandingPage() {
  const dashRef = useRef<HTMLDivElement>(null)
  const dashVisible = useRef(false)
  const [dashShow, setDashShow] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !dashVisible.current) {
          dashVisible.current = true
          setDashShow(true)
        }
      },
      { threshold: 0.15 }
    )
    if (dashRef.current) obs.observe(dashRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />

      {/* ─── HERO ─── */}
      <section className="grid-bg" style={{ paddingTop: 100, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        {/* Glows */}
        <div style={{ position: 'absolute', top: -80, left: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
          <div className="hero-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Left */}
            <div>
              <div className="a-fadeUp" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.28)',
                borderRadius: 100, padding: '5px 14px', marginBottom: 24,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED', boxShadow: '0 0 6px #7C3AED' }} />
                <span style={{ fontSize: 12, color: '#A78BFA', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Hostel Management Platform</span>
              </div>

              <h1 className="a-fadeUp-1" style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 20px' }}>
                Smart Hostel<br />
                <span className="gradient-text-alt">Management</span><br />
                System
              </h1>

              <p className="a-fadeUp-2" style={{ fontSize: 17, color: '#94A3B8', lineHeight: 1.7, margin: '0 0 32px', maxWidth: 440 }}>
                Streamline room allocations, track complaints in real-time, manage student records, and broadcast notices — all from one intelligent platform.
              </p>

              <div className="a-fadeUp-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/admin-dashboard" style={{ textDecoration: 'none' }}>
                  <button className="btn-glow" style={{ padding: '13px 28px', borderRadius: 10, color: '#fff', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'DM Sans, sans-serif' }}>
                    Explore the Platform <ArrowRight size={16} />
                  </button>
                </Link>
                <Link to="/rooms" style={{ textDecoration: 'none' }}>
                  <button className="btn-ghost" style={{ padding: '13px 24px', borderRadius: 10, fontSize: 15, fontWeight: 500, fontFamily: 'DM Sans, sans-serif' }}>
                    View Rooms
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="a-fadeUp-3" style={{ display: 'flex', gap: 32, marginTop: 40 }}>
                {[{ v: '1,200+', l: 'Students' }, { v: '340', l: 'Rooms' }, { v: '98.3%', l: 'Satisfaction' }].map(s => (
                  <div key={s.l}>
                    <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Sora', color: '#EEF2FF' }}>{s.v}</div>
                    <div style={{ fontSize: 12, color: '#64748B' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: dashboard preview */}
            <div className="a-slideR a-float">
              <HeroDashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE GRID ─── */}
      <section style={{ padding: '88px 24px', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 14px' }}>
            Every tool you need,<br /><span className="gradient-text">in one place</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, margin: 0 }}>Six core modules covering every aspect of hostel administration.</p>
        </div>

        <div className="feat-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {features.map(f => (
            <Link key={f.to} to={f.to} style={{ textDecoration: 'none' }}>
              <div className="glass card-hover" style={{ borderRadius: 14, padding: '28px 24px', height: '100%' }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: `${f.color}22`, border: `1px solid ${f.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <f.icon size={20} color={f.color} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, fontFamily: 'Sora', color: '#EEF2FF', marginBottom: 8 }}>{f.label}</div>
                <div style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.6 }}>{f.desc}</div>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 5, fontSize: 12.5, color: f.color, fontWeight: 500 }}>
                  Open module <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── ANIMATED SLIDER ─── */}
      <section style={{ padding: '80px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ textAlign: 'center', marginBottom: 52, padding: '0 24px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            Everything you need<br /><span className="gradient-text">in one place</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: 15, margin: 0 }}>Seamlessly manage every aspect of your hostel.</p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Fade edges */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 160, background: 'linear-gradient(to right, #0B0F1A, transparent)', zIndex: 10, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 160, background: 'linear-gradient(to left, #0B0F1A, transparent)', zIndex: 10, pointerEvents: 'none' }} />

          <div style={{ overflow: 'hidden', padding: '12px 0' }}>
            <div className="slider-track">
              {[...sliderCards, ...sliderCards].map((card, i) => (
                <div key={i} className="glass" style={{
                  borderRadius: 14, padding: '24px 26px', minWidth: 220,
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: `0 4px 24px ${card.color}18`,
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: `${card.color}20`, border: `1px solid ${card.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <card.icon size={17} color={card.color} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Sora', color: '#EEF2FF', marginBottom: 6 }}>{card.title}</div>
                  <div style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.5 }}>{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROLES SECTION ─── */}
      <section style={{ padding: '88px 24px', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 14px' }}>
            Built for every <span className="gradient-text">role</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, margin: 0 }}>Tailored dashboards and permissions for each stakeholder.</p>
        </div>

        <div className="roles-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {roles.map(r => (
            <div key={r.label} className="glass role-card" style={{ borderRadius: 16, padding: '32px 28px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: `${r.color}20`, border: `1px solid ${r.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <r.icon size={21} color={r.color} />
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'Sora', color: '#EEF2FF' }}>{r.label}</div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>{r.tagline}</div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 24px', flex: 1 }}>
                {r.responsibilities.map(resp => (
                  <li key={resp} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                    <CheckCircle size={13} color={r.color} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.5 }}>{resp}</span>
                  </li>
                ))}
              </ul>

              <Link to={r.to} style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%', padding: '10px', borderRadius: 9,
                  background: `${r.color}18`, border: `1px solid ${r.color}30`,
                  color: r.color === '#0891B2' ? '#67E8F9' : r.color === '#7C3AED' ? '#A78BFA' : '#93C5FD',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s ease', fontFamily: 'DM Sans, sans-serif',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                }}>
                  Open {r.label} Dashboard <ArrowRight size={13} />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DASHBOARD PREVIEW SECTION ─── */}
      <section ref={dashRef} style={{ padding: '80px 24px', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 14px' }}>
            A dashboard that works<br /><span className="gradient-text">as hard as you do</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, margin: 0 }}>Real-time data, intuitive layouts, and actionable insights at a glance.</p>
        </div>

        <DashboardPreviewFull visible={dashShow} />
      </section>

      {/* ─── CTA SECTION ─── */}
      <section style={{ padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.15 }}>
            Ready to transform your<br />hostel management?
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, margin: '0 0 36px', lineHeight: 1.7 }}>
            Join hostel administrators who use HMS to save time, reduce errors, and improve student experience.
          </p>
          <Link to="/admin-dashboard" style={{ textDecoration: 'none' }}>
            <button className="btn-glow" style={{ padding: '14px 36px', borderRadius: 11, color: '#fff', fontSize: 16, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'DM Sans, sans-serif' }}>
              Get Started Today <ArrowRight size={17} />
            </button>
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '36px 24px', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: 'linear-gradient(135deg,#7C3AED,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: 'Sora' }}>H</div>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#EEF2FF', fontFamily: 'Sora' }}>HMS</span>
            <span style={{ color: '#1E2D40', margin: '0 4px' }}>·</span>
            <span style={{ fontSize: 12, color: '#334155' }}>Hostel Management System</span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['About', 'Contact', 'Privacy'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: '#475569', textDecoration: 'none', transition: 'color 0.15s ease' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#94A3B8'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#475569'}
              >{l}</a>
            ))}
          </div>
          <span style={{ fontSize: 12, color: '#1E2D40' }}>© 2025 HMS Platform</span>
        </div>
      </footer>
    </div>
  )
}
