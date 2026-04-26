# HMS — Hostel Management System

A modern, futuristic single-page application for managing hostel operations. Built as a dark SaaS product with glassmorphism design, smooth animations, and a full suite of management tools. All data is mock/static — no backend, no database, no authentication required. The app demonstrates a complete production-ready UI across 9 routes.

---

## 📋 Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Architecture & Design](#architecture--design)
6. [Styling Strategy](#styling-strategy)
7. [Routes & Pages](#routes--pages)
8. [Component Guide](#component-guide)
9. [Design System](#design-system)
10. [Development Conventions](#development-conventions)
11. [Key Implementation Details](#key-implementation-details)

---

## 🎯 Features

- **Landing Page** — Animated hero section, feature grid, horizontal slider, role cards, and live dashboard preview
- **Room Allocation** — Track room occupancy, filter by status, manage assignments with real-time data
- **Complaint Management** — Log, track, and resolve student complaints with priority levels
- **Notice Board** — Post and view announcements with category filtering and detail panels
- **Fee Tracking** — Monitor payment status with collection progress visualization and charts
- **Student Records** — Complete student directory with searchable profiles and enrollment data
- **Admin Dashboard** — System overview with statistics, charts, tables, and quick actions
- **Student Dashboard** — Personal view of assigned room, notices, complaints, and fees
- **Warden Dashboard** — Block-level room monitoring and complaint handling interface

---

## 🛠️ Tech Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Framework** | TanStack Start | SSR-capable React meta-framework |
| **Frontend** | React 19 | Latest React features |
| **Routing** | TanStack Router v1 | File-based, type-safe routing |
| **Build** | Vite 7 | Fast bundler and dev server |
| **Styling** | Tailwind CSS 4 + Inline Styles | Layout + Design-specific styles |
| **UI Components** | Lucide React | 576+ beautiful SVG icons |
| **State Management** | React Hooks (useState) | Local component state only |
| **Language** | TypeScript 5.7 | Strict mode enabled |
| **Charts** | Chart.js + react-chartjs-2 | Data visualization |
| **Fonts** | Sora + DM Sans | Google Fonts via CSS |
| **Deployment** | Vercel | Auto-deploy on git push |

---

## 📁 Project Structure

```
college-management-system/
├── src/
│   ├── routes/
│   │   ├── __root.tsx                    # Root shell: html, head, body, scripts
│   │   ├── index.tsx                     # / — Landing page
│   │   ├── rooms.tsx                     # /rooms — Room Allocation
│   │   ├── complaints.tsx                # /complaints — Complaint Management
│   │   ├── notices.tsx                   # /notices — Notice Board
│   │   ├── fees.tsx                      # /fees — Fee Tracking
│   │   ├── students.tsx                  # /students — Student Records
│   │   ├── admin-dashboard.tsx           # /admin-dashboard — Admin Overview
│   │   ├── student-dashboard.tsx         # /student-dashboard — Student View
│   │   └── warden-dashboard.tsx          # /warden-dashboard — Warden View
│   ├── components/
│   │   └── Nav.tsx                       # Floating navigation bar
│   ├── router.tsx                        # Router configuration
│   └── styles.css                        # Global CSS + animations
├── public/
│   ├── favicon.ico
│   └── tanstack-circle-logo.png
├── package.json                          # Dependencies & scripts
├── tsconfig.json                         # TypeScript config
├── vite.config.ts                        # Vite configuration
├── tailwind.config.ts                    # Tailwind CSS config
├── netlify.toml                          # Netlify deployment config
└── README.md                             # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nsaisampath/college-management-system.git
cd college-management-system

# Install dependencies
npm install

# Start development server
npm run dev
```

Development server will start at `http://localhost:3000`

### Available Scripts

```bash
npm run dev          # Start dev server with hot reload
npm run build        # Create optimized production build
npm run preview      # Preview production build locally
```

---

## 🏗️ Architecture & Design

### File-Based Routing

TanStack Router uses file-based routing — every `.tsx` file in `src/routes/` automatically becomes a route.

**Export Pattern:**
```typescript
export const Route = createFileRoute('/path')({
  component: YourComponent,
})
```

**Important Rules:**
- Never use `react-router-dom` — use `Link`, `useRouterState` from `@tanstack/react-router`
- `__root.tsx` wraps all routes in the HTML shell
- All routes should import and render `Nav` component at the top
- Set root div: `background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF'`

### State Management

- **Local State Only**: Use `useState` for filters, modals, form inputs
- **No Global Store**: Each component manages its own state
- **Mock Data**: All data is inline arrays at the top of route files
- **Static Content**: Perfect for UI demonstrations and prototypes

---

## 🎨 Styling Strategy

### Three-Layer Approach

1. **Tailwind Classes** — Layout and spacing
   ```tsx
   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
   ```

2. **Custom CSS Classes** — Reusable patterns in `styles.css`
   ```css
   .glass { background: rgba(255,255,255,0.04); backdrop-filter: blur(14px); }
   .gradient-text { background: linear-gradient(135deg, #7C3AED, #2563EB); }
   .btn-glow { box-shadow: 0 0 24px rgba(124,58,237,0.4); }
   .a-fadeUp { animation: fadeUp 0.8s ease-out; }
   ```

3. **Inline Styles** — Precise per-element effects
   ```tsx
   <div style={{ background: '#0B0F1A', color: '#EEF2FF', borderRadius: 12 }}>
   ```

### Animation Classes

| Class | Animation |
|-------|-----------|
| `.a-fadeUp` | Fade in + slide up |
| `.a-fadeUp-1/2/3` | Staggered fade up |
| `.a-scaleIn` | Scale from 0 to 1 |
| `.a-slideR` | Slide in from right |
| `.a-float` | Subtle floating motion |
| `.slider-track` | Infinite horizontal scroll |

### Fonts

- **Sora** (Headings) — Modern, clean, tech-forward
- **DM Sans** (Body) — Readable, professional
- Loaded via `@import url(...)` in `styles.css` before Tailwind

---

## 📍 Routes & Pages

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `index.tsx` | Landing page with hero, features, slider, role cards, dashboard preview, CTA, footer |
| `/rooms` | `rooms.tsx` | Room Allocation with filterable table, status badges, occupancy tracking |
| `/complaints` | `complaints.tsx` | Complaint Management with priority levels, resolution tracking, detail panel |
| `/notices` | `notices.tsx` | Notice Board with category filtering, detailed view panel, posting interface |
| `/fees` | `fees.tsx` | Fee Tracking with payment status, collection progress, charts, payment records |
| `/students` | `students.tsx` | Student Records with searchable directory, profile details, enrollment info |
| `/admin-dashboard` | `admin-dashboard.tsx` | Admin Dashboard with sidebar, stats cards, charts, tables, quick actions |
| `/student-dashboard` | `student-dashboard.tsx` | Personal student view showing room, notices, complaints, fee status |
| `/warden-dashboard` | `warden-dashboard.tsx` | Block-level monitoring with occupancy, complaints, room management |

---

## 🧩 Component Guide

### Nav.tsx

Floating fixed navigation bar with:
- Logo and branding
- Main route links (Rooms, Students, Complaints, Notices, Fees)
- Dashboard role links (Admin, Student, Warden)
- Glassmorphism design with backdrop blur
- Responsive hover states

```tsx
<Nav />
```

### Page Layout Pattern

All pages follow this structure:

```tsx
export const Route = createFileRoute('/path')({
  component: PageName,
})

function PageName() {
  return (
    <div style={{ background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF' }}>
      <Nav />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px' }}>
        {/* Page content */}
      </div>
    </div>
  )
}
```

---

## 🎨 Design System

### Color Palette

```
Primary Background:    #0B0F1A  (deep space dark)
Secondary Background:  #0D1221
Card Background:       rgba(255,255,255,0.04)
Primary Accent:        #7C3AED  (purple)
Secondary Accent:      #2563EB  (blue)
Tertiary Accent:       #0891B2  (cyan)

Text Primary:          #EEF2FF  (white)
Text Secondary:        #94A3B8  (light gray)
Text Muted:            #475569  (gray)
Text Faint:            #64748B  (dark gray)

Success:               #10B981  (green)
Warning:               #F59E0B  (amber)
Danger:                #EF4444  (red)
Info:                  #3B82F6  (blue)
```

### Typography

```
Font Stack (Headings): Sora, sans-serif
Font Stack (Body):     DM Sans, sans-serif

Font Weights:
- 400: Regular body text
- 500: Medium emphasis
- 600: Semi-bold headings
- 700: Bold text
- 800: Extra bold
```

### Spacing Scale

```
4px  (0.25rem)
8px  (0.5rem)
12px (0.75rem)
16px (1rem)
20px (1.25rem)
24px (1.5rem)
32px (2rem)
48px (3rem)
64px (4rem)
88px (5.5rem)
```

### Shadow System

```
Soft:    box-shadow: 0 2px 8px rgba(0,0,0,0.1)
Medium:  box-shadow: 0 4px 24px rgba(0,0,0,0.2)
Large:   box-shadow: 0 24px 80px rgba(0,0,0,0.5)
Glow:    box-shadow: 0 0 24px rgba(124,58,237,0.4)
```

---

## 🔨 Development Conventions

### Adding a New Route

1. Create `src/routes/[name].tsx`
2. Add Route export:
   ```typescript
   export const Route = createFileRoute('/name')({ component: YourComponent })
   ```
3. Import and render Nav at top
4. Set root styles (background, color, minHeight)
5. Wrap content in 1160px max-width container
6. Add to `Nav.tsx` link arrays if navigation should show it

### Data Patterns

- All data is inline mock arrays at the top of route files
- Use `useState` for filtering and search functionality
- Create status lookup maps for consistent styling:
  ```typescript
  const statusCls: Record<string, string> = {
    'Active': 'badge-green',
    'Pending': 'badge-yellow',
    'Resolved': 'badge-blue',
    'Closed': 'badge-gray',
  }
  ```

### TypeScript Best Practices

- Strict mode is enabled
- Use `@/` path alias for imports: `import { Nav } from '@/components/Nav'`
- Prefer `Record<string, string>` for lookup maps
- Use `type` keyword for type-only imports

### Styling Best Practices

- Use inline styles for colors and precise effects
- Use Tailwind for layout (`flex`, `grid`, spacing)
- Use CSS classes for animations and repeated patterns
- Avoid arbitrary Tailwind values for complex colors
- Always test glassmorphism on both light and dark backgrounds

---

## 🔑 Key Implementation Details

### Glassmorphism Cards

```typescript
const glassStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  borderRadius: 14,
  border: '1px solid rgba(255,255,255,0.08)',
  padding: 24,
}
```

### Animated Slider

The slider uses CSS animation with duplicated cards:
```typescript
{[...sliderCards, ...sliderCards].map((card, i) => (
  <div key={i} className="glass"> {/* CSS handles animation */}
```

The CSS `@keyframes sliderScroll` creates seamless looping.

### Navigation Padding

Because Nav is `position: fixed`, all pages need:
```typescript
padding: '88px 24px 48px'  // top padding must match nav height + spacing
```

### Status Badges

Use CSS classes for consistent styling:
```typescript
<div className={`badge-${statusCls[status].toLowerCase()}`}>
  {status}
</div>
```

---

## 📊 Live Dashboard Data

The admin dashboard displays mock data:

| Metric | Value |
|--------|-------|
| Total Students | 1,284 |
| Rooms Occupied | 318/342 (93%) |
| Open Complaints | 23 |
| Average Resolution Time | 4.1 hours |
| Fees Collected | ₹18.4L (92.7%) |
| System Uptime | 99.9% |

---

## 🚢 Deployment

This project is configured for **Vercel** deployment with auto-deployment on every git push:

```bash
npm run build
# Vercel automatically deploys the dist/ directory
```

Visit: **https://vercel.com** to connect your GitHub repository for instant deployment.

---

## 📝 License

This project is part of the college management system portfolio.

---

## 🤝 Contributing

For feature requests or bug reports, please contact the project maintainer.

---

**Last Updated**: April 26, 2026  
**Status**: ✅ Production Ready
