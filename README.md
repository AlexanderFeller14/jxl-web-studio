# JXL Webstudio

Premium, ruhige Multi-Page Website mit Next.js App Router.

## Quick Start

```bash
npm install
npm run dev
```

App läuft standardmäßig auf `http://localhost:3000`.

## Routen

- `/` Home
- `/referenzen`
- `/referenzen/[slug]`
- `/ueber-mich`
- `/pakete`
- `/kontakt`

## Design decisions

- **Primary Background: Light Rays** (`https://reactbits.dev/backgrounds/light-rays`)
- **Begründung:** Light Rays liefert einen hochwertigen, ruhigen Hero-Look ohne visuelle Überladung. Im Vergleich zu Iridescence und Light Pillar passt es besser zu einem klaren Conversion-Fokus und bleibt auf Mobile kontrollierbar (reduzierte Intensität).
- **Motion-Strategie:** maximal ein lauter Effekt pro Section, reduzierte Motion auf Mobile, globale Fallbacks über `prefers-reduced-motion`.
