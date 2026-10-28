# Vado — Provenance & Compliance Ledger

This ledger records the origin, brand transformation and asset provenance for **Vado**.

## 1. Project Background & Transformation

- **Original Working Directory:** `E:\Projects\landing\next\sierra-ai-landing`
- **Rebuilt Project Name:** `vado-ai`
- **Final Repository:** `https://github.com/JORDANROBERTO74/vado-ai`
- **Live Production URL:** `https://vado-ai.vercel.app`
- **Mode:** Full rebuild of structure, design system and content over the delivered template.

The template was a reconstruction of **sierra.ai**, a real company, and shipped a partial rebrand ("Northstar") applied only to some visible strings. The internal naming still referenced the original brand: `components/sierra/`, `lib/sierra-themes.ts`, the `--font-sierra` variable, `bg-sierra-*` utilities and five `sierra*` button variants. The dashboard sidebar literally rendered the word **SIERRA**. All of it has been renamed.

## 2. Brand & Identity

- **Brand:** Vado — the crossing place. An agent that takes a customer from problem to resolution.
- **Sector:** AI agents for customer experience (chat, voice, email, SMS, social).
- **Visual system:** Paper white, near-black ink (`#0f1110`), clay (`#b4471f`) as the only accent, warm sand (`#f6f2ec`) for alternate sections.
- **Typography:** Instrument Sans for display and UI, Instrument Serif for the wordmark and the hero accent, both self-hosted through `next/font/google`.
- **Locale strategy:** Typed bilingual copy (`en`, `es`) on `/[locale]` routes, negotiated from `Accept-Language` and persisted in the `vado.locale` cookie.

## 3. Third-Party Content Removed

The template used real companies and real people as social proof. None of the following appears in this repository or its history.

### Customer logos (30 removed)

Rocket Mortgage, Gap Inc., Singtel, SiriusXM, SoFi, Wayfair, Sutter Health, GoFundMe, Discord, DIRECTV, Minted, The North Face, Redfin, Rivian, ADT, Sweetgreen, Brex, FINRA, R1 RCM, Sonos, Paychex, CLEAR, Nubank, Docusign, Ramp, ASOS, WeightWatchers, Next, Deliveroo, Safelite.

They were replaced by 25 fictional companies (Almenara, Cardo, Marisma, Siroco, Aljibe, Estela, Menhir, Lontra, Vidria, Ondara, Cinabrio, Buganvilla, Níscalo, Cañaveral, Poniente, Levante Labs, Fauno, Peral, Roble, Aluvión, Aldana, Tersa, Náyade, Quicio, Sirgo), rendered as plain wordmarks.

### Testimonials (4 removed)

The template attributed invented quotes to four real executives: **Caryn Seidman-Becker** (CLEAR), **Alex McGillis** (Rocket Mortgage), **Moshe Pridan** (SiriusXM) and **Sarah Wallis** (Minted). Attributing fabricated statements to identifiable people is the most serious issue in the source material. All four, their quotes, roles and companies were deleted.

They were replaced by four fictional people at four fictional companies (Elena Ferrán / Marisma Health, Marcos Ibáñez / Cardo Retail, Lucía Prats / Siroco Air, Daniel Roca / Almenara Bank).

### Certification marks (7 removed)

The trust section reproduced an **AICPA SOC 2** seal plus ISO 27001, ISO 42001, HIPAA, GDPR and EU AI Act badge artwork. The AICPA seal is a protected mark and the drawings imitated official certification artwork.

They were replaced by six neutral, original badges (generic shield glyph, plain label, plain sub-label) with no seal reproduction, plus a visible note stating the programme is illustrative.

### Other references (4 removed)

- **"Atelier Playa Mujeres"** (real hotel) inside the feature mock → **Casa Marisma** references in the fictional customer copy.
- **"ChatGPT-style Deep Research"** (OpenAI mark) → "Ask a question in plain language".
- **"WhatsApp"** and **"ChatGPT"** in the channel and product copy → "chat, voice, email, SMS and social".
- **"Vintage Guitars"** (possible real retailer) in the studio mock → removed with the mock rewrite.

## 4. Design-System Repair

The delivered template had a broken type scale: `globals.css` defined `--section-padding` in `:root` and used `text-display`, `text-section`, `text-eyebrow`, `py-section-padding`, `text-sierra-heading` and `text-sierra-logo-gray` in components, but there was **no `@theme` block and no Tailwind config**, so none of those utilities compiled. The page rendered at browser-default sizes.

The rebuild defines the tokens in `@theme` with the names the components already used, adds `--text-*--line-height` and `--text-*--letter-spacing` pairs, and removes `tailwind-merge` from the typography primitives (it was silently dropping `text-section` when merged with `text-ink`, because both belong to the same merge group).

## 5. Code Removed

- **49 of 52 files in `components/ui/`** (~230 KB): accordion, alert-dialog, avatar, badge, breadcrumb, calendar, card, chart, checkbox, collapsible, command, context-menu, custom-context-menu, dashboardGraphic, dialog, drawer, dropdown-menu, form, input, input-with-context, inputPassword, label, Level2VsParentChart, markdown, OverallCompanySummary, OverallCompanyTrendChart, pagination, popover, progress, radio-group, resizable, scroll-area, select, selectMultiInput, separator, sidebar, skeleton, slider, spinner, switch, table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip, use-toast.
- **12 mock components** in `components/landing/mocks/` that were only referenced by dead code.
- **7 orphaned components**: agent-studio-showcase, build-optimize-row, data-platform-features, data-platform, ghostwriter-block, product-feature-grid, brand-logo-lockup.
- **Dependencies dropped:** `shadcn`, `@base-ui/react`, `tw-animate-css`, `@radix-ui/react-dialog`, `@radix-ui/react-slot`, `@radix-ui/react-tabs`, `class-variance-authority`, `embla-carousel-react`, `lucide-react`. The mobile menu is a plain panel, the testimonial carousel is CSS scroll-snap, and icons are inline SVG.
- **Build escape hatches removed:** `typescript.ignoreBuildErrors`, `images.unoptimized` and the `exclude: ["components/ui/**"]` in `tsconfig.json`. ESLint and a `typecheck` script were added.

## 6. Assets

- **Zero images.** Every visual on the page is a CSS/SVG illustration built for this project: the conversation demo, the dashboard, the studio panels, the charts, the trace view and the brand marks.
- **Brand mark:** custom SVG waveform (`src/app/icon.svg` and `VadoMark`).
- **Favicon and OpenGraph card** are generated from the same tokens and dictionaries as the page.
- **Runtime dependencies:** no remote font networks, image hosts, CDNs or icon services.

## 7. Copy & Localisation

- All English copy was written for this project; the Spanish version is an original adaptation, not machine output pasted verbatim.
- Company names, people, quotes, metrics and conversation transcripts are fictional.
- The contact address uses the reserved `.example` TLD so no real mailbox is implied.
- The compliance note ("Illustrative compliance programme for this demo") is shown in the UI, not only in this file.

## 8. Architectural Verification

- Next.js 16.4.3 App Router with Turbopack; React 19.3; strict TypeScript.
- `/en` and `/es` are statically generated; `/` returns `307` to the negotiated locale.
- A `[locale]/[...rest]` catch-all renders the styled 404 for unknown paths.
- `pnpm typecheck`, `pnpm lint` and `pnpm build` complete without errors or warnings.
- `robots.txt`, a multilingual `sitemap.xml`, `hreflang` alternates and a generated 1200×630 OpenGraph card are in place.
- Motion uses `MotionConfig reducedMotion="user"` and a global `prefers-reduced-motion` rule; the page renders complete with JavaScript disabled.
