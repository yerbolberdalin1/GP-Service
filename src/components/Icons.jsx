// Лёгкий набор линейных иконок (24×24, currentColor). Без внешних зависимостей.
import React from 'react'

const S = ({ children, className = 'w-6 h-6', sw = 1.7 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
)

const ICONS = {
  // ——— Услуги ———
  workers: (p) => (
    <S {...p}>
      <circle cx="8" cy="6.5" r="2.6" />
      <circle cx="16.5" cy="7.5" r="2.1" />
      <path d="M3.5 19v-1.2A4.3 4.3 0 0 1 7.8 13.5h.4A4.3 4.3 0 0 1 12.5 17.8V19" />
      <path d="M14 19v-1a3.6 3.6 0 0 1 3.6-3.6h.2A3.6 3.6 0 0 1 21 18v1" />
    </S>
  ),
  crane: (p) => (
    <S {...p}>
      <path d="M5 21V4l13 2" />
      <path d="M5 7h13" />
      <path d="M12 6.7V11" />
      <path d="M9.5 14.5h5l-.6 3.2a1 1 0 0 1-1 .8h-1.8a1 1 0 0 1-1-.8z" />
      <path d="M5 21h6" />
    </S>
  ),
  moving: (p) => (
    <S {...p}>
      <rect x="3" y="7" width="11" height="9" rx="1" />
      <path d="M14 10h3.2l2.8 3v3h-6" />
      <path d="M8.5 7v9" />
      <circle cx="8" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </S>
  ),
  truck: (p) => (
    <S {...p}>
      <path d="M3 6h10v9H3z" />
      <path d="M13 9h4l3 3v3h-7z" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
      <path d="M3 15h2M11 15h2.4M21 15h0" />
    </S>
  ),
  tools: (p) => (
    <S {...p}>
      <path d="M14.5 6.2a3.4 3.4 0 0 0-4.6 4l-6 6 2.4 2.4 6-6a3.4 3.4 0 0 0 4-4.6l-2 2-1.8-1.8z" />
      <path d="M14.8 14.5l4 4" />
    </S>
  ),
  courier: (p) => (
    <S {...p}>
      <path d="M3.2 7.5 12 3l8.8 4.5L12 12 3.2 7.5z" />
      <path d="M3.2 7.5V16L12 20.5 20.8 16V7.5" />
      <path d="M12 12v8.5" />
      <path d="M7.6 5.2 16.4 9.8" />
    </S>
  ),
  clean: (p) => (
    <S {...p}>
      <path d="M16 3l1.4 1.4-3.2 3.2" />
      <path d="M13.8 6.2 9 11l4 4 4.8-4.8a2 2 0 0 0 0-2.8l-1.2-1.2a2 2 0 0 0-2.8 0z" />
      <path d="M9 11l-4.2 4.2a2.2 2.2 0 1 0 3.1 3.1L12 14" />
    </S>
  ),
  business: (p) => (
    <S {...p}>
      <rect x="3" y="7.5" width="18" height="12" rx="1.6" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
      <path d="M12 12v1.6" />
    </S>
  ),

  // ——— Преимущества / служебные ———
  calendar: (p) => (
    <S {...p}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </S>
  ),
  mapPin: (p) => (
    <S {...p}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </S>
  ),
  users: (p) => (
    <S {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v1" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 19v-1a5 5 0 0 0-2.3-4.2" />
    </S>
  ),
  contract: (p) => (
    <S {...p}>
      <path d="M6 3h7l5 5v13H6z" />
      <path d="M13 3v5h5" />
      <path d="M9 13h6M9 16.5h4" />
    </S>
  ),
  manager: (p) => (
    <S {...p}>
      <circle cx="12" cy="7.5" r="3.2" />
      <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
      <path d="M12 10.7 10.6 13h2.8z" />
    </S>
  ),
  hardhat: (p) => (
    <S {...p}>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M10 8.4V5.6a1.6 1.6 0 0 1 1.6-1.6h.8A1.6 1.6 0 0 1 14 5.6v2.8" />
      <path d="M3 16h18v2.4H3z" />
    </S>
  ),
  shield: (p) => (
    <S {...p}>
      <path d="M12 3l7 2.5v5c0 4.6-3 8.1-7 9.5-4-1.4-7-4.9-7-9.5v-5z" />
      <path d="M9 12l2 2 4-4" />
    </S>
  ),
  truckFast: (p) => (
    <S {...p}>
      <path d="M9 7h6v8H9z" />
      <path d="M15 10h3l2.5 2.5V15H15z" />
      <circle cx="11.5" cy="17" r="1.4" />
      <circle cx="18" cy="17" r="1.4" />
      <path d="M2.5 9h4M2 12.5h3.5M3 16h2" />
    </S>
  ),
  handCare: (p) => (
    <S {...p}>
      <rect x="8.5" y="3.5" width="8" height="7" rx="1" />
      <path d="M12.5 3.5v7M8.5 7h8" />
      <path d="M3 14.5l3.5-1.2a2.5 2.5 0 0 1 1.6 0L11 14.4a1.4 1.4 0 0 1-.5 2.6H8" />
      <path d="M11 15.4l5.5-1.6a1.5 1.5 0 0 1 1.9 1l.1.3c.2.7-.1 1.4-.8 1.7L11.5 20a3 3 0 0 1-2.3.1L3 18" />
    </S>
  ),
  fleet: (p) => (
    <S {...p}>
      <path d="M3 8h9v7H3z" />
      <path d="M12 10h4l3 3v2h-7z" />
      <circle cx="7" cy="17" r="1.4" />
      <circle cx="16.5" cy="17" r="1.4" />
    </S>
  ),

  // ——— Сегменты бизнеса ———
  warehouse: (p) => (
    <S {...p}>
      <path d="M3 21V8l9-4 9 4v13" />
      <path d="M7 21v-7h10v7" />
      <path d="M7 17.5h10" />
    </S>
  ),
  factory: (p) => (
    <S {...p}>
      <path d="M3 21V10l5 3V10l5 3V10l5 3v8z" />
      <path d="M3 21h18" />
      <path d="M6 17h2M11 17h2M16 17h2" />
    </S>
  ),
  site: (p) => (
    <S {...p}>
      <path d="M4 21V7l8 2" />
      <path d="M4 11l8 2" />
      <path d="M12 9l7 2v10H4" />
      <path d="M9 21v-4h3v4" />
    </S>
  ),
  store: (p) => (
    <S {...p}>
      <path d="M4 9.5 5 4h14l1 5.5a2.4 2.4 0 0 1-4.7.6 2.4 2.4 0 0 1-4.6 0 2.4 2.4 0 0 1-4.7-.6z" />
      <path d="M5 11.5V20h14v-8.5" />
      <path d="M10 20v-5h4v5" />
    </S>
  ),
  office: (p) => (
    <S {...p}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </S>
  ),
  horeca: (p) => (
    <S {...p}>
      <path d="M7 3v7a2 2 0 0 0 4 0V3M9 10v11" />
      <path d="M16 3c-1.4 0-2.5 1.8-2.5 4s1.1 4 2.5 4" />
      <path d="M16 3v18" />
    </S>
  ),

  // ——— UI ———
  chevron: (p) => (
    <S {...p}>
      <path d="M6 9l6 6 6-6" />
    </S>
  ),
  plus: (p) => (
    <S {...p}>
      <path d="M12 5v14M5 12h14" />
    </S>
  ),
  arrowRight: (p) => (
    <S {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </S>
  ),
  check: (p) => (
    <S {...p}>
      <path d="M5 12.5l4.2 4.2L19 7" />
    </S>
  ),
  checkCircle: (p) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.2l2.6 2.6L16 9.4" />
    </S>
  ),
  phone: (p) => (
    <S {...p}>
      <path d="M6.5 4h2l1.4 3.4-1.6 1.2a11 11 0 0 0 4.6 4.6l1.2-1.6L18 14.5v2.2a1.8 1.8 0 0 1-2 1.8A14 14 0 0 1 4 6.5 1.8 1.8 0 0 1 6.5 4z" />
    </S>
  ),
  mail: (p) => (
    <S {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </S>
  ),
  clock: (p) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </S>
  ),
  menu: (p) => (
    <S {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </S>
  ),
  close: (p) => (
    <S {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </S>
  ),
  star: (p) => (
    <S {...p}>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" />
    </S>
  ),
  spark: (p) => (
    <S {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </S>
  ),
  whatsapp: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.34 4.95L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2zm0 1.82c2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.76c0 4.5-3.66 8.15-8.16 8.15a8.1 8.1 0 0 1-4.15-1.14l-.3-.18-3.08.81.82-3-.19-.31a8.1 8.1 0 0 1-1.24-4.33c0-4.5 3.66-8.15 8.16-8.15zm-3.46 4.4c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7.59.26 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.34-.76-1.83-.2-.48-.4-.41-.55-.42z" />
    </svg>
  ),
  instagram: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
}

export default function Icon({ name, className, sw }) {
  const render = ICONS[name]
  if (!render) return null
  return render({ className, sw })
}
