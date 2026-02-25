# React Bits Integration Map

Alle Pflicht-Elemente wurden als lokale Komponenten unter `/components/reactbits/` umgesetzt und auf den geforderten Seiten platziert.

| Original Name | React Bits URL | Lokaler Pfad | Einsatzort (Route + Section) |
| --- | --- | --- | --- |
| Blur Text | https://reactbits.dev/text-animations/blur-text | `/components/reactbits/blur-text.tsx` | `/` Hero Subheadline; `/ueber-mich` Mission-Zeile |
| Shiny Text | https://reactbits.dev/text-animations/shiny-text | `/components/reactbits/shiny-text.tsx` | `/` Hero Headline Akzent |
| True Focus | https://reactbits.dev/text-animations/true-focus | `/components/reactbits/true-focus.tsx` | `/` Hero H1 (erster Teil); `/referenzen/[slug]` Hero Title |
| Count Up | https://reactbits.dev/text-animations/count-up | `/components/reactbits/count-up.tsx` | `/` Outcomes/Stats; `/referenzen/[slug]` Case Metrics; `/pakete` Value Highlights |
| Glare Hover | https://reactbits.dev/animations/glare-hover | `/components/reactbits/glare-hover.tsx` | `/` Primary CTA + 2 Leistungskarten; `/referenzen` Filter UI; `/pakete` Recommended Card |
| Gradual Blur | https://reactbits.dev/animations/gradual-blur | `/components/reactbits/gradual-blur.tsx` | `/` Footer/CTA Transition; `/kontakt` subtil hinter Kontaktblock |
| Shape Blur | https://reactbits.dev/animations/shape-blur | `/components/reactbits/shape-blur.tsx` | `/` Separator zwischen Leistungen und Prozess; `/referenzen/[slug]` Seitenübergang |
| Reflective Card | https://reactbits.dev/components/reflective-card | `/components/reactbits/reflective-card.tsx` | `/` Referenzen Preview (weitere Cases); `/referenzen` New/Hot + Best Conversion |
| Tilted Card | https://reactbits.dev/components/tilted-card | `/components/reactbits/tilted-card.tsx` | `/` Referenzen Preview (2 Hero Cases); `/referenzen` nur im Featured-Filter |
| Staggered Menu | https://reactbits.dev/components/staggered-menu | `/components/reactbits/staggered-menu.tsx` | `/` Trust/Proof Mini-Menü; `/kontakt` Kontaktoptionen |
| Profile Card | https://reactbits.dev/components/profile-card | `/components/reactbits/profile-card.tsx` | `/ueber-mich` Founder Card |
| Spotlight Card | https://reactbits.dev/components/spotlight-card | `/components/reactbits/spotlight-card.tsx` | `/` Leistungen Top-Leistung; `/referenzen/[slug]` Key Feature Highlights |
| Stepper | https://reactbits.dev/components/stepper | `/components/reactbits/stepper.tsx` | `/` Prozess (4 Schritte) |
| Light Rays (Primary Background) | https://reactbits.dev/backgrounds/light-rays | `/components/reactbits/light-rays.tsx` | `/` Hero Primary Background |

## Motion & Mobile Fallbacks

- `prefers-reduced-motion`: Animationen werden global stark reduziert.
- Mobile/Touch: Tilt/Glare/Spotlight-Effekte werden reduziert oder deaktiviert.
- Hintergrundintensität wird auf kleinen Displays abgeschwächt.
