import { useState } from 'react'
import ServiceCard from './ServiceCard'
import Icon from './Icons'
import { services } from '../data/services'
import { wa } from '../lib/site'

export default function Services() {
  const [activeId, setActiveId] = useState(null)

  const toggle = (id) => setActiveId((cur) => (cur === id ? null : id))

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Услуги</span>
          <h2 className="section-title mt-3">Основные услуги GP Service</h2>
          <p className="section-sub mt-4">
            Выберите направление — мы подберём людей, транспорт или оборудование под вашу задачу.
          </p>
        </div>

        {/* 8 карточек */}
        <div className="reveal mt-12 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              active={activeId === service.id}
              onToggle={() => toggle(service.id)}
            />
          ))}
        </div>

        {/* Нижний CTA */}
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-soft px-6 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[15px] text-ink-900">
            Не нашли нужную услугу? Опишите задачу — подберём людей, транспорт или оборудование.
          </p>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-md shrink-0">
            <Icon name="whatsapp" className="h-[18px] w-[18px]" />
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
