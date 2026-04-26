# AGENTS.md

## Project Overview

A dark-themed, futuristic Hostel Management System SPA built with TanStack Start. All data is mock/static — no backend, no database, no auth. The app demonstrates a complete product UI across 9 routes.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR-capable React meta-framework) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + inline styles |
| Icons | Lucide React |
| Fonts | Sora + DM Sans (Google Fonts via CSS @import) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx              # Root shell: html, head, body, HeadContent, Scripts
    index.tsx               # Landing page (hero, features, slider, roles, dashboard preview, CTA, footer)
    rooms.tsx               # /rooms — Room Allocation with filterable table
    complaints.tsx          # /complaints — Complaint Management
    notices.tsx             # /notices — Notice Board with detail panel
    fees.tsx                # /fees — Fee Tracking with progress bar
    students.tsx            # /students — Student Records with profile panel
    admin-dashboard.tsx     # /admin-dashboard — Admin overview with sidebar
    student-dashboard.tsx   # /student-dashboard — Personal student view
    warden-dashboard.tsx    # /warden-dashboard — Block-level monitoring
  components/
    Nav.tsx                 # Shared floating glassmorphism navigation bar
  styles.css                # Global CSS: Tailwind + design tokens + animations + utility classes
  router.tsx                # Router setup (imports auto-generated routeTree)
```

## Architecture

### File-Based Routing
- Every file in `src/routes/` becomes a route automatically
- Export pattern: `export const Route = createFileRoute('/path')({ component: Foo })`
- `__root.tsx` wraps all routes in the HTML shell
- **Never** use `react-router-dom` — use `Link`, `useRouterState` from `@tanstack/react-router`

### Styling Strategy
- **Tailwind classes** for layout structure (`grid`, `flex`, spacing)
- **Custom CSS classes** in `styles.css` for reusable patterns:
  - `.glass`, `.glass-md` — glassmorphism cards
  - `.gradient-text`, `.gradient-text-alt` — purple-to-blue gradient text
  - `.btn-glow`, `.btn-ghost` — primary and secondary buttons
  - `.card-hover` — lift + glow on hover
  - `.badge-green/yellow/red/blue/purple` — status pill colors
  - `.a-fadeUp`, `.a-fadeUp-1/2/3`, `.a-scaleIn`, `.a-slideR`, `.a-float` — entry animations
  - `.slider-track` — infinite horizontal scroll animation
  - `.tr-hover` — table row hover background
- **Inline styles** for precise per-element effects (colors, shadows, specific borders)
- Google Fonts loaded via `@import url(...)` at top of `styles.css` before Tailwind

## Design System

```
Background:    #0B0F1A   (deep space dark)
Secondary bg:  #0D1221
Purple:        #7C3AED
Blue:          #2563EB
Text primary:  #EEF2FF
Text muted:    #94A3B8
Text faint:    #475569
Glass:         rgba(255,255,255,0.04) + backdrop-filter: blur(14px)
```

## Conventions

### Adding a new route
1. Create `src/routes/[name].tsx`
2. `export const Route = createFileRoute('/name')({ component: YourComponent })`
3. Import `Nav` from `@/components/Nav` and render it first in the component
4. Set top-level div: `background: '#0B0F1A', minHeight: '100vh', color: '#EEF2FF'`
5. Content wrapper: `maxWidth: 1160, margin: '0 auto', padding: '88px 24px 48px'`
6. Add to `Nav.tsx` link arrays if it should appear in navigation

### Data patterns
- All data is inline mock arrays at the top of route files
- Use `useState` for filter/search state; no global state needed
- Status lookup maps: `const statusCls: Record<string, string> = { 'Active': 'badge-green', ... }`

### TypeScript
- Strict mode on; `@/` path alias for `src/`
- Prefer `Record<string, string>` for badge/color lookup maps
- Use `type` keyword for type-only imports

## Non-Obvious Decisions

- **Inline styles for colors**: Tailwind CSS 4 with CSS variables in arbitrary values is unreliable for complex glassmorphism. Colors use inline styles or CSS classes.
- **Nav `position: fixed` at `top: 14px`**: All page wrappers need `padding-top: 88px` to avoid content hidden under nav.
- **Slider duplication**: Render `[...cards, ...cards]` so the CSS `sliderScroll` animation loops seamlessly.
- **`IntersectionObserver` in landing page**: Triggers the dashboard preview fade-in when scrolled into view. Uses a ref to avoid re-triggering.
- **No Chart.js on landing page**: The original template used Chart.js; the new landing page uses pure CSS/SVG bar chart mockups to avoid heavy dependencies.
