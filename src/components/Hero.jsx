import { useEffect, useState } from 'react'
import Icon from './Icons'
import { wa } from '../lib/site'
import { heroBadges } from '../data/advantages'

// «Рассчитать стоимость» ведёт в WhatsApp с готовым текстом расчёта.
const CALC =
  'Здравствуйте! Хочу рассчитать стоимость услуги GP Service.\nУслуга: \nАдрес / район: \nКогда нужно: \nКомментарий: '

const floating = [
  { icon: 'truck', label: 'Свой транспорт', pos: 'left-5 top-[22%] sm:left-8 lg:left-2 lg:top-14' },
  { icon: 'contract', label: 'Работа по договору', pos: 'right-2 top-[28%] sm:right-8 lg:right-0 lg:top-20' },
  { icon: 'truckFast', label: 'Срочный выезд', pos: 'left-1/2 bottom-8 -translate-x-1/2 lg:bottom-12' },
]

const orbitItems = [
  { id: 'van', src: '/assets/hero-orbit/cut/van-cut.png', alt: 'Фургон GP Service' },
  { id: 'forklift', src: '/assets/hero-orbit/cut/forklift-cut.png', alt: 'Погрузчик GP Service' },
  { id: 'worker', src: '/assets/hero-orbit/cut/worker-cut.png', alt: 'Специалист GP Service' },
  { id: 'pallet', src: '/assets/hero-orbit/cut/pallet-cut.png', alt: 'Рохля GP Service' },
]

const orbitSlots = ['front', 'right', 'back', 'left']

function HeroActions({ className = '' }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row lg:justify-start">
        <a
          href={wa(CALC)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary h-[54px] w-full px-7 text-[15px] sm:w-auto"
        >
          <Icon name="checkCircle" className="h-5 w-5" />
          Рассчитать стоимость
        </a>
        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp h-[54px] w-full px-7 text-[15px] sm:w-auto"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Написать в WhatsApp
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2.5 lg:justify-start">
        {heroBadges.map((b) => (
          <li
            key={b}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-[13px] font-medium text-ink-900 shadow-[0_1px_2px_rgba(17,17,17,0.04)]"
          >
            <Icon name="check" className="h-4 w-4 text-brand" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

function HeroOrbit() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % orbitItems.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="hero-orbit-card">
      <div className="hero-orbit-glow hero-orbit-glow--main" />
      <div className="hero-orbit-glow hero-orbit-glow--soft" />
      <div className="hero-orbit-dots" />
      <div className="hero-orbit-ellipse" />
      <div className="hero-orbit-ground" />

      <div className="hero-orbit-stage" aria-label="GP Service: фургон, погрузчик, рабочий и рохля">
        {orbitItems.map((item, index) => {
          const slot = orbitSlots[(index - active + orbitItems.length) % orbitItems.length]

          return (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              data-item={item.id}
              data-slot={slot}
              className="hero-orbit-item"
            />
          )
        })}
      </div>

      <div className="hero-orbit-proof" aria-label="GP Service">
        GP Service
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-warm">
      {/* фон: лёгкий тёплый градиент + оранжевый glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-warm via-warm to-white" />
        <div className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-brand/10 blur-[130px]" />
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="container-x relative grid items-center gap-8 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:py-20">
        {/* ЛЕВАЯ КОЛОНКА — текст */}
        <div className="reveal order-1 min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-700 shadow-[0_1px_2px_rgba(17,17,17,0.04)] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            GP Service • Шымкент и область
          </span>

          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.06] tracking-tight text-ink-900 sm:text-[44px] lg:text-[56px]">
            Такелаж, грузчики, переезды и доставка <span className="text-brand">в&nbsp;Шымкенте</span>
          </h1>

          <p className="mt-5 max-w-[600px] text-[16px] leading-relaxed text-muted sm:text-[18px]">
            Комплексные услуги для частных клиентов и бизнеса: грузчики, переезды, разгрузка,
            такелаж, доставка, аренда оборудования и рабочий персонал под задачу.
          </p>

          <HeroActions className="mt-7 hidden lg:block" />
        </div>

        {/* ПРАВАЯ КОЛОНКА — визуальная композиция */}
        <div className="reveal relative order-2 min-w-0">
          <div className="relative mx-auto h-[390px] w-full max-w-[700px] sm:h-[470px] lg:h-[540px] lg:max-w-[780px]">
            <HeroOrbit />

            {/* плавающие карточки */}
            {floating.map((f) => (
              <span
                key={f.label}
                className={`hero-floating-pill absolute z-40 inline-flex items-center gap-2 rounded-2xl px-3.5 py-2 text-[12.5px] font-semibold text-ink-900 ${f.pos}`}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon name={f.icon} className="h-4 w-4" />
                </span>
                {f.label}
              </span>
            ))}
          </div>
        </div>

        <HeroActions className="reveal order-3 text-center lg:hidden" />
      </div>
    </section>
  )
}
