# Innovation Clinic — Landing Page

Build a single responsive landing page at `/` matching the provided spec exactly. All work is frontend/presentation only.

## Design tokens (src/styles.css)
- Primary blue `#2F5CFF`, soft blue `#EAF0FF`, text `#111111`, muted `#6B7280`, white cards.
- Radius: card 28px, pill buttons full.
- Shadow: `0 20px 60px rgba(0,0,0,0.08)`.
- Fonts via `<link>` in `__root.tsx` head: Manrope (700/800) for headings, Inter (400/500) for body. Register `--font-display` and `--font-sans` in `@theme`.
- Decorative hexagon/line SVG pattern as background overlay on blue sections (low opacity).

## Route
- Rewrite `src/routes/index.tsx` with unique `head()` (title "Innovation Clinic — SalvaMedic", description, og/twitter). No og:image (no hosted absolute URL).

## Sections (top-to-bottom, on blue background)

1. **Hero card** (large white rounded container)
   - Inline header: SalvaMedic logo (left) · nav About/Services/Doctors/Contact (center) · address + phone/profile/hamburger icons (right, hamburger = solid black).
   - Left column: H1 "Innovation Clinic" (56–64px Manrope 800), subtext right of title, blue pill "Find Doctor" with circular icon at right end, small rounded interior thumbnail, then 3-col stats (10+ / 20+ / 100%).
   - Right column: small "With Advanced Technologies" heading + paragraph, then full-height rounded doctor photo.
   - 3 floating glass badges on photo: Reliability, Experience, Professional (diagonal).
   - Bottom-right: 3 overlapping avatar circles + arrow.

2. **Statement section** (plain white band on blue bg)
   - Centered 28–32px sentence with inline small icon + inline avatar cluster, selective bold words. Subtext + outline pill "More about us".

3. **Our Medical Services**
   - 2-col header: title + "(what you get)" left; paragraph + "See all →" right.
   - 4×2 grid:
     - Row 1: 01 Family medicine · Blue highlight brand card (SalvaMedic + blobs) · 02 Pediatrics · 03 Women's health
     - Row 2: 04 Cardiology · 05 Ultrasound & Lab · child photo card · doctor-consultation photo card
   - Numbered cards: outline large number top-left, small solid icon, title, 1-line desc, blue "Make an appointment" link + price bottom-right.

4. **Why Choose Us** (blue rounded container)
   - Left: 2-doctor photo with floating labels (Experienced Doctors, Certified Clinic, Modern Equipment) + "FEELS LIKE" tag.
   - Right: `[ Advantages ]` label, white H2 "Why choose us", "PROVIDED BY / Licensed medical experts", 2×2 stats grid (10+ years, 15+ areas, 95% satisfied, 98% accuracy) with descriptions.

## Responsive (real breakpoints, not mockups)
- `<480px`: single-column hero, full-width doctor photo below text, stats stay 3-col compact, "Find Doctor" full-width at bottom of hero card.
- Services grid → 1-column stack; add carousel arrows (outline left, solid blue right) below list.
- Simplified header on mobile (logo + 2 icons).

## Interactions
- Service card hover: scale 1.02 + deeper shadow, 200ms.
- Pill button hover: darken.
- Floating badges: subtle 3s float loop (CSS keyframes, 3–4px).
- Section fade-in-up on scroll via IntersectionObserver hook.

## Images
Use Unsplash source URLs (free, hotlinkable) for: female doctor portrait, two-doctor team, smiling child in clinic, doctor+patient consultation, clinic interior thumbnail, and a few avatar headshots. Reference by absolute URL in `<img>` — no asset generation needed.

## Files touched
- `src/styles.css` — add tokens (blue, soft-blue, muted, shadow), font family vars, hex pattern utility.
- `src/routes/__root.tsx` — add Manrope + Inter `<link>` tags to head.
- `src/routes/index.tsx` — full page implementation, replacing placeholder.
- `src/components/clinic/*` — split into `Hero.tsx`, `Statement.tsx`, `Services.tsx`, `WhyChooseUs.tsx`, `FloatingBadge.tsx`, `ServiceCard.tsx` for readability.

## Out of scope
No backend, no forms wiring, no routing beyond `/`. Nav links are anchors only.
