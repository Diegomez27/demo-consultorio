# Clínica Dental Alba — demo-consultorio

Landing page para un consultorio dental ficticio, **Clínica Dental Alba**. 

**Demo en vivo:** [consultorio.diego-gomez-desarrollo-web.com](https://consultorio.diego-gomez-desarrollo-web.com/)

## Qué demuestra

Presencia web que transmite confianza profesional: una sola página, mobile-first, sin backend,
enfocada en convertir visitas en solicitudes de cita.

## Stack

- **Angular 21** — standalone components, Signals, control flow `@if` / `@for`, zoneless.
- **SCSS propio** con tokens de diseño en OKLCH. Sin librerías de UI ni de accordion.
- **Reactive Forms** para el formulario de cita (validación en cliente).
- **Deploy:** Vercel (`vercel.json` incluido).

## Diseño

- **Paleta (Committed):** blanco puro de fondo, azul marino para titulares y una banda
  "drenched" (diferenciadores + footer), y un azul acento para CTAs, íconos y estados activos.
  Sin colores fuera del azul; el rojo aparece solo como color funcional de validación.
- **Tipografía:** **Spectral** (serif racional) en titulares para dar autoridad de consultorio
  establecido + **Hanken Grotesk** (humanista) en cuerpo para cercanía y legibilidad.
- **Motivo de firma:** el arco-sonrisa, repetido en el logo, las etiquetas de sección y como
  textura de fondo de la banda navy.
- **Fotografía moderada:** 1 hero, 1 imagen de tecnología, 3 retratos de equipo. Sin galería.
- Iconos SVG de trazo propios (set coherente, sin emojis ni librerías).
- Movimiento sobrio: reveal on scroll que respeta `prefers-reduced-motion` y nunca oculta
  contenido si no hay JS.

## Secciones

Header · Hero · Servicios · Diferenciadores · Equipo · Formulario de cita · FAQ (accordion) · Footer con mapa.

## Estructura

```
src/
├── app/
│   ├── features/     # hero, services, differentiators, team, appointment, faq, footer
│   ├── shared/       # icon, logo, site-header, whatsapp-fab, reveal, unsplash, data, models
│   ├── app.ts        # shell
│   └── app.config.ts
├── styles/           # _tokens · _reset · _base
└── index.html
```

## Desarrollo

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build de producción → dist/demo-consultorio/browser
```

