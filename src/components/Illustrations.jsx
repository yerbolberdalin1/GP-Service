// Чистые векторные сервисные иллюстрации GP Service.
// Без фотографий: фургон, коробки, тележка, рабочий в оранжевой форме, оборудование.
// Палитра: оранжевый #FF6A00 / #E85A00, графит #111, серые #E8E8E8 / #F2F3F5, белый.
import React from 'react'

const C = {
  orange: '#FF6A00',
  orangeDark: '#E85A00',
  orangeLight: '#FFD2AF',
  ink: '#1B1C1E',
  ink2: '#3A3D42',
  gray: '#E8E8E8',
  gray2: '#F2F3F5',
  gray3: '#CDD2D8',
  white: '#FFFFFF',
}

/* ============================================================
   HERO SCENE — фургон + коробки + тележка + рабочий
   Цельная композиция «на сцене», viewBox 0 0 560 470
   ============================================================ */
export function HeroScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 560 470"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Иллюстрация GP Service: фургон, коробки, тележка и рабочий в оранжевой форме"
    >
      <defs>
        <linearGradient id="hsVan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EDEFF2" />
        </linearGradient>
        <linearGradient id="hsCab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.orange} />
          <stop offset="1" stopColor={C.orangeDark} />
        </linearGradient>
        <linearGradient id="hsFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EAECEF" />
          <stop offset="1" stopColor="#EAECEF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* мягкая «тень-пол» */}
      <ellipse cx="285" cy="408" rx="240" ry="34" fill="url(#hsFloor)" />

      {/* ---------- ФУРГОН (слева, позади) ---------- */}
      <g>
        <ellipse cx="170" cy="392" rx="150" ry="16" fill="#111111" opacity="0.06" />
        {/* кузов */}
        <rect x="40" y="196" width="196" height="150" rx="16" fill="url(#hsVan)" stroke={C.gray} strokeWidth="2" />
        {/* кабина */}
        <path d="M236 232 h58 a14 14 0 0 1 12 7 l28 50 a16 16 0 0 1 2 8 v41 a8 8 0 0 1-8 8 h-92 z" fill="url(#hsCab)" />
        {/* стекло кабины */}
        <path d="M252 244 h40 a8 8 0 0 1 7 4 l20 36 h-67 z" fill="#DCEAF5" stroke="#FFFFFF" strokeWidth="2" />
        {/* борт-полосы */}
        <rect x="40" y="300" width="196" height="14" fill={C.gray2} />
        {/* эмблема на борту */}
        <g transform="translate(86 236)">
          <rect x="0" y="0" width="104" height="48" rx="10" fill={C.gray2} />
          <text x="14" y="33" fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="26" fill={C.ink}>
            G<tspan fill={C.orange}>P</tspan>
          </text>
          <rect x="64" y="14" width="28" height="4" rx="2" fill={C.orange} />
          <rect x="64" y="22" width="24" height="4" rx="2" fill={C.orangeLight} />
          <rect x="64" y="30" width="20" height="4" rx="2" fill={C.gray3} />
        </g>
        {/* колёса */}
        <g>
          <circle cx="92" cy="350" r="26" fill={C.ink} />
          <circle cx="92" cy="350" r="11" fill="#5A5E64" />
          <circle cx="262" cy="350" r="26" fill={C.ink} />
          <circle cx="262" cy="350" r="11" fill="#5A5E64" />
        </g>
        {/* фара */}
        <rect x="330" y="320" width="12" height="14" rx="3" fill="#FFD66B" />
      </g>

      {/* ---------- КОРОБКИ (центр-низ) ---------- */}
      <g>
        {/* большая коробка */}
        <g transform="translate(196 300)">
          <rect x="0" y="0" width="92" height="78" rx="6" fill="#F0D7BC" stroke="#E3BE97" strokeWidth="2" />
          <path d="M0 26 h92" stroke="#E3BE97" strokeWidth="2" />
          <rect x="34" y="0" width="24" height="26" fill="#E9C9A6" />
          <rect x="40" y="8" width="12" height="10" rx="2" fill={C.orange} />
        </g>
        {/* малая коробка сверху */}
        <g transform="translate(214 250)">
          <rect x="0" y="0" width="60" height="52" rx="5" fill="#F6E2CB" stroke="#E3BE97" strokeWidth="2" />
          <path d="M0 18 h60" stroke="#E3BE97" strokeWidth="2" />
          <rect x="22" y="0" width="16" height="18" fill="#E9C9A6" />
        </g>
      </g>

      {/* ---------- ТЕЛЕЖКА-РОХЛЯ + коробка (справа от центра) ---------- */}
      <g transform="translate(300 286)">
        <rect x="6" y="0" width="74" height="64" rx="6" fill="#FBEAD6" stroke="#E3BE97" strokeWidth="2" />
        <path d="M6 22 h74" stroke="#E3BE97" strokeWidth="2" />
        <rect x="34" y="0" width="18" height="22" fill="#E9C9A6" />
        {/* платформа тележки */}
        <rect x="0" y="66" width="92" height="10" rx="3" fill={C.ink} />
        <rect x="2" y="64" width="14" height="36" rx="3" fill={C.ink2} />
        <circle cx="20" cy="104" r="9" fill={C.ink} />
        <circle cx="72" cy="104" r="9" fill={C.ink} />
        <circle cx="20" cy="104" r="3.5" fill="#6B6F76" />
        <circle cx="72" cy="104" r="3.5" fill="#6B6F76" />
      </g>

      {/* ---------- РАБОЧИЙ в оранжевой форме (справа, спереди) ---------- */}
      <g transform="translate(398 150)">
        <ellipse cx="44" cy="246" rx="62" ry="13" fill="#111111" opacity="0.07" />
        {/* дальняя нога */}
        <path d="M30 168 h22 v66 a9 9 0 0 1-9 9 h-4 a9 9 0 0 1-9-9 z" fill={C.ink} />
        <rect x="26" y="238" width="30" height="11" rx="4" fill={C.ink2} />
        {/* ближняя нога */}
        <path d="M54 168 h22 v66 a9 9 0 0 1-9 9 h-4 a9 9 0 0 1-9-9 z" fill={C.ink2} />
        <rect x="50" y="238" width="30" height="11" rx="4" fill={C.ink} />
        {/* торс — оранжевый жилет/куртка */}
        <path d="M26 92 q26-12 52 0 l6 70 a10 10 0 0 1-10 11 H30 a10 10 0 0 1-10-11 z" fill="url(#hsCab)" />
        {/* светоотражающие полосы */}
        <rect x="28" y="120" width="50" height="7" rx="3" fill="#FFE7A0" opacity="0.92" />
        <path d="M40 96 l12 78 M64 96 l-12 78" stroke="#FFE7A0" strokeWidth="5" opacity="0.85" strokeLinecap="round" />
        {/* воротник */}
        <path d="M40 90 l12 14 l12-14 z" fill={C.orangeDark} />
        {/* руки */}
        <path d="M26 100 q-16 12-14 40 l10 2 q4-22 12-30 z" fill={C.orange} />
        <rect x="16" y="138" width="14" height="14" rx="6" fill="#F2C9A6" />
        <path d="M78 100 q16 12 12 38 l-10 2 q-2-22-10-30 z" fill={C.orange} />
        <rect x="74" y="136" width="14" height="14" rx="6" fill="#F2C9A6" />
        {/* шея + голова */}
        <rect x="44" y="74" width="16" height="16" rx="6" fill="#F2C9A6" />
        <circle cx="52" cy="58" r="20" fill="#F6D2B0" />
        {/* каска */}
        <path d="M30 56 a22 22 0 0 1 44 0 z" fill={C.orange} />
        <path d="M28 56 h48 v7 a3 3 0 0 1-3 3 H31 a3 3 0 0 1-3-3 z" fill={C.orangeDark} />
        <rect x="48" y="36" width="8" height="10" rx="3" fill={C.orangeDark} />
      </g>
    </svg>
  )
}

/* ============================================================
   QUOTE SCENE — компактная композиция для блока расчёта
   ============================================================ */
export function QuoteScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 360 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Иллюстрация: фургон, коробки и тележка GP Service"
    >
      <defs>
        <linearGradient id="qsCab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.orange} />
          <stop offset="1" stopColor={C.orangeDark} />
        </linearGradient>
      </defs>
      <ellipse cx="180" cy="262" rx="160" ry="20" fill="#111111" opacity="0.05" />

      {/* фургон */}
      <g transform="translate(150 96)">
        <rect x="0" y="20" width="150" height="116" rx="14" fill="#FFFFFF" stroke={C.gray} strokeWidth="2" />
        <path d="M150 52 h40 a12 12 0 0 1 10 6 l20 36 a14 14 0 0 1 2 7 v29 a6 6 0 0 1-6 6 h-66 z" fill="url(#qsCab)" />
        <path d="M162 62 h28 a6 6 0 0 1 5 3 l15 26 h-48 z" fill="#DCEAF5" stroke="#fff" strokeWidth="2" />
        <rect x="0" y="92" width="150" height="11" fill={C.gray2} />
        <g transform="translate(28 44)">
          <text x="0" y="22" fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="22" fill={C.ink}>
            G<tspan fill={C.orange}>P</tspan>
          </text>
        </g>
        <circle cx="42" cy="140" r="20" fill={C.ink} />
        <circle cx="42" cy="140" r="8" fill="#5A5E64" />
        <circle cx="180" cy="140" r="20" fill={C.ink} />
        <circle cx="180" cy="140" r="8" fill="#5A5E64" />
      </g>

      {/* коробки */}
      <g transform="translate(40 150)">
        <rect x="0" y="40" width="78" height="66" rx="6" fill="#F0D7BC" stroke="#E3BE97" strokeWidth="2" />
        <path d="M0 62 h78" stroke="#E3BE97" strokeWidth="2" />
        <rect x="28" y="40" width="22" height="22" fill="#E9C9A6" />
        <rect x="10" y="0" width="54" height="44" rx="5" fill="#F6E2CB" stroke="#E3BE97" strokeWidth="2" />
        <path d="M10 16 h54" stroke="#E3BE97" strokeWidth="2" />
        <rect x="30" y="6" width="14" height="14" rx="2" fill={C.orange} />
      </g>
    </svg>
  )
}

/* ============================================================
   EQUIPMENT — чистые иллюстрации единиц оборудования (1:1)
   ============================================================ */
const EqWrap = ({ children, label }) => (
  <svg viewBox="0 0 160 160" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={label}>
    <rect x="14" y="120" width="132" height="9" rx="4.5" fill={C.gray2} />
    {children}
  </svg>
)

export const EquipIllustration = {
  // Стремянка
  stepladder: (label) => (
    <EqWrap label={label}>
      <path d="M58 36 L40 124" stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
      <path d="M66 36 L84 124" stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
      <path d="M104 40 L116 124" stroke={C.ink2} strokeWidth="6" strokeLinecap="round" />
      <rect x="50" y="34" width="24" height="9" rx="4" fill={C.orange} />
      {[58, 76, 94].map((y, i) => (
        <rect key={i} x={48 + i * 1} y={y} width={32 - i * 0} height="7" rx="3" fill={C.orangeDark} transform={`skewX(0)`} />
      ))}
      <path d="M62 36 L104 40" stroke={C.gray3} strokeWidth="4" strokeLinecap="round" />
    </EqWrap>
  ),
  // Раздвижная лестница
  ladder: (label) => (
    <EqWrap label={label}>
      <path d="M56 26 L40 126" stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
      <path d="M80 26 L96 126" stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
      {[40, 58, 76, 94, 112].map((y, i) => (
        <rect key={i} x={46 - i} y={y} width={44 + i * 2} height="6" rx="3" fill={C.orange} />
      ))}
    </EqWrap>
  ),
  // Рохля (гидравлическая тележка)
  palletJack: (label) => (
    <EqWrap label={label}>
      <rect x="30" y="86" width="92" height="10" rx="4" fill={C.ink} />
      <rect x="30" y="100" width="92" height="10" rx="4" fill={C.ink2} />
      <rect x="112" y="40" width="12" height="56" rx="4" fill={C.orange} />
      <rect x="108" y="34" width="22" height="12" rx="5" fill={C.orangeDark} />
      <path d="M124 46 q22 4 18 40" stroke={C.ink} strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="118" r="9" fill={C.ink} />
      <circle cx="112" cy="118" r="9" fill={C.ink} />
      <circle cx="40" cy="118" r="3.5" fill="#6B6F76" />
      <circle cx="112" cy="118" r="3.5" fill="#6B6F76" />
    </EqWrap>
  ),
  // Платформенная тележка
  cart: (label) => (
    <EqWrap label={label}>
      <rect x="40" y="44" width="50" height="40" rx="5" fill="#F0D7BC" stroke="#E3BE97" strokeWidth="2" />
      <path d="M40 60 h50" stroke="#E3BE97" strokeWidth="2" />
      <rect x="34" y="92" width="86" height="9" rx="4" fill={C.ink} />
      <path d="M118 96 V44 a6 6 0 0 0-6-6" stroke={C.orange} strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="48" cy="116" r="10" fill={C.ink} />
      <circle cx="106" cy="116" r="10" fill={C.ink} />
      <circle cx="48" cy="116" r="4" fill="#6B6F76" />
      <circle cx="106" cy="116" r="4" fill="#6B6F76" />
    </EqWrap>
  ),
  // Вышка-тура
  tower: (label) => (
    <EqWrap label={label}>
      <path d="M48 30 L40 116 M112 30 L120 116" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
      <path d="M50 30 H110" stroke={C.orange} strokeWidth="6" strokeLinecap="round" />
      {[52, 80, 108].map((y, i) => (
        <path key={i} d={`M${44 + i * 1} ${y} H${116 - i * 1}`} stroke={C.gray3} strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M44 30 H116 V40 H44 Z" fill={C.orange} />
      <path d="M44 36 H116" stroke={C.orangeDark} strokeWidth="3" />
      <path d="M48 116 l-8 10 M112 116 l8 10" stroke={C.ink2} strokeWidth="5" strokeLinecap="round" />
    </EqWrap>
  ),
  // Погрузчик
  forklift: (label) => (
    <EqWrap label={label}>
      <path d="M40 60 h44 v44 h-44 z" fill="url(#fkBody)" />
      <defs>
        <linearGradient id="fkBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.orange} />
          <stop offset="1" stopColor={C.orangeDark} />
        </linearGradient>
      </defs>
      <path d="M50 60 V44 h22 a8 8 0 0 1 8 8 v8 z" fill={C.ink} opacity="0.85" />
      <rect x="36" y="92" width="58" height="16" rx="5" fill={C.ink2} />
      <rect x="98" y="40" width="7" height="68" rx="2" fill={C.ink} />
      <rect x="98" y="100" width="34" height="7" rx="2" fill={C.ink} />
      <rect x="108" y="58" width="30" height="9" rx="3" fill="#F0D7BC" stroke="#E3BE97" strokeWidth="2" />
      <rect x="108" y="67" width="30" height="9" rx="3" fill="#F6E2CB" stroke="#E3BE97" strokeWidth="2" />
      <circle cx="50" cy="116" r="11" fill={C.ink} />
      <circle cx="84" cy="116" r="11" fill={C.ink} />
      <circle cx="50" cy="116" r="4" fill="#6B6F76" />
      <circle cx="84" cy="116" r="4" fill="#6B6F76" />
    </EqWrap>
  ),
}
