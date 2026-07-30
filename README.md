# HealthCast — website

Redesigned marketing site for **HEALTH CAST SMC PVT LTD.**, built from the
design brief. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

---

## Design direction

The brand mark is a saturated amber. A site flooded in that colour would be
loud and hard to read, so amber is kept as an **accent** and carried by two
calmer neutrals:

| Token | Value | Role |
| --- | --- | --- |
| `canvas` | `#faf8f3` | Warm ivory page background |
| `sand` | `#f2eee3` | Alternating section background |
| `surface` | `#ffffff` | Cards |
| `ink` | `#0c2724` | Deep pine teal — dark sections, headings, body |
| `gold` | `#f0b429` | Brand amber — buttons, highlights, one word per headline |
| `gold-deep` | `#c98b06` | Amber on light backgrounds (contrast-safe) |
| `teal` | `#157f74` | Supporting accent |

Deep teal + warm ivory reads as clinical trust; the amber keeps it from feeling
cold and ties it to the existing logo. Every token lives in
[`src/app/globals.css`](src/app/globals.css) under `@theme` — change it there
and it propagates everywhere.

**Type**: Inter for everything, with *Instrument Serif italic* used for exactly
one phrase per headline. That single contrast does most of the "premium" work.

**Motion**: fade-and-rise on scroll (`Reveal` / `Stagger`), a travelling pulse
trace in the hero, a paused-on-hover logo marquee, counters that animate once
in view, and hover lifts on cards. Everything decorative is switched off under
`prefers-reduced-motion`.

---

## Structure

```
src/
  app/
    page.tsx                  home
    about/ services/ team/ contact/
    services/[slug]/          4 statically generated service pages
    api/contact/route.ts      form endpoint
    not-found.tsx
  components/
    layout/     Header · Footer · Logo · WhatsAppFab
    ui/         Button · Section · Reveal · Counter · PageHero
    home/       Hero · ClientMarquee · AboutStrip · ServicesGrid ·
                Impact · Process · TeamPreview · Testimonials · CTABand
    team/ contact/
  lib/
    site.ts services.ts team.ts testimonials.ts cn.ts
```

All copy and data live in `src/lib/` — the components read from there, so
content edits never require touching layout code.

---

## Contact form

Validates on the client and again on the server, with a honeypot field for
bots. Delivery is via Resend: copy `.env.example` to `.env.local` and set
`RESEND_API_KEY`. Until that is set the form returns a clear "not configured
yet" message plus a pre-filled `mailto:` link, so an enquiry is never lost
without the visitor knowing.

---

## Before launch — content to confirm

These came from the brief or the current site and should be checked:

1. **Statistics** (`src/lib/site.ts`) — *placeholders*. Only "12
   organisations" is grounded (12 client logos were supplied). Confirm the
   campaign count, discipline count and retention figure, or remove the band.
2. **Hero and vitals-card figures** (`src/components/home/Hero.tsx`) —
   `+214%`, `18 studies`, `40+ campaigns`, `99.9% uptime`, `AA passed` are
   illustrative. Replace with real numbers or swap for non-numeric proof.
3. **Testimonials** (`src/lib/testimonials.ts`) — carried over from the current
   site. Replace with attributed quotes (name, role, organisation).
4. **Team** (`src/lib/team.ts`) — the brief listed four names, the live site
   six. All six are included; trim if that is wrong. Bios are drafted and need
   sign-off.
5. **Client logos** (`public/clients/`) — extracted from the brief, so the
   names are unknown and the `alt` text is generic. Supply names, and ideally
   transparent-background versions: a few files have baked-in white or grey
   backgrounds.
6. **Team portraits** — none were supplied, so members render as serif
   monograms. `MemberCard` takes a photo with no layout change.
7. **Social links** (`src/lib/site.ts`) — currently point at platform homepages.

## Deploying

Push to a Git repo and import into Vercel; it needs no configuration beyond the
optional contact-form env vars. Any Node host works via `npm run build && npm start`.
