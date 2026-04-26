# HMS — Hostel Management System

A modern, futuristic single-page application for managing hostel operations. Built as a dark SaaS product with glassmorphism design, smooth animations, and a full suite of management tools.

## Features

- **Landing page** with animated hero, feature grid, horizontal slider, role cards, and dashboard preview
- **Room Allocation** — track room occupancy, filter by status, manage assignments
- **Complaint Management** — log and resolve student complaints with priority tracking
- **Notice Board** — post and view announcements with category filtering
- **Fee Tracking** — monitor payment status with collection progress visualization
- **Student Records** — complete student directory with searchable profiles
- **Admin Dashboard** — overview with stats, charts, tables, and quick actions
- **Student Dashboard** — personal view of room, notices, complaints, and fees
- **Warden Dashboard** — block-level room monitoring and complaint handling

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR + React 19) |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + inline styles |
| Icons | Lucide React |
| Fonts | Sora (headings) + DM Sans (body) via Google Fonts |
| Deployment | Netlify |

## Design System

- **Background**: `#0B0F1A` (deep space dark)
- **Accent Purple**: `#7C3AED`
- **Accent Blue**: `#2563EB`
- **Cards**: Glassmorphism (`rgba(255,255,255,0.04)` + `backdrop-filter: blur`)
- **Typography**: Sora for headings, DM Sans for body text
- **Animations**: CSS-based fade-up, scale-in, slide-right, infinite horizontal slider

## Getting Started

```bash
npm install
npm run dev       # starts dev server on http://localhost:3000
npm run build     # production build
npm run preview   # preview production build
```

## Routes

| Path | Page |
|------|------|
| `/` | Landing page |
| `/rooms` | Room Allocation |
| `/complaints` | Complaint Management |
| `/notices` | Notice Board |
| `/fees` | Fee Tracking |
| `/students` | Student Records |
| `/admin-dashboard` | Admin Dashboard |
| `/student-dashboard` | Student Dashboard |
| `/warden-dashboard` | Warden Dashboard |
