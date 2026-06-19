import { useState } from 'react'
import Icon from './Icons'
import { QuoteScene } from './Illustrations'
import { wa, SITE } from '../lib/site'
import { services } from '../data/services'

const EMPTY = { name: '', phone: '', service: '', address: '', when: '', comment: '' }

const trust = [
  'Подберём людей, транспорт или оборудование под задачу',
  'Рассчитаем стоимость после уточнения деталей',
  'Работаем с частными клиентами и бизнесом по договору',
]

export default function QuoteForm() {
  const [form, setForm] = useState(EMPTY)
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const buildText = () =>
    [
      'Здравствуйте! Хочу рассчитать стоимость услуги GP Service.',
      `Имя: ${form.name || '—'}`,
      `Телефон: ${form.phone || '—'}`,
      `Услуга: ${form.service || '—'}`,
      `Адрес / район: ${form.address || '—'}`,
      `Когда нужно: ${form.when || '—'}`,
      `Комментарий: ${form.comment || '—'}`,
    ].join('\n')

  const onSubmit = (e) => {
    e.preventDefault()
    window.open(wa(buildText()), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="quote" className="bg-soft py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal grid overflow-hidden rounded-[32px] border border-line bg-white shadow-soft lg:grid-cols-2">
          {/* Левая часть — описание (светлая, тёплая) */}
          <div className="relative overflow-hidden bg-warm p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/12 blur-3xl" />
            <span className="eyebrow relative">Рассчитать стоимость</span>
            <h2 className="relative mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-ink-900 sm:text-[32px]">
              Рассчитать стоимость задачи
            </h2>
            <p className="relative mt-4 max-w-md text-[15.5px] leading-relaxed text-muted">
              Опишите задачу — мы подберём людей, транспорт или оборудование и ответим в WhatsApp.
            </p>

            <ul className="relative mt-7 space-y-3">
              {trust.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14.5px] text-ink-900/90">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {t}
                </li>
              ))}
            </ul>

            {/* Иллюстрация */}
            <div className="relative mt-8 hidden lg:block">
              <QuoteScene className="h-auto w-[88%] max-w-[360px]" />
            </div>

            <div className="relative mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-brand/15 pt-6 lg:mt-6">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-[15px] font-bold text-ink-900 hover:text-brand">
                <Icon name="phone" className="h-4 w-4 text-brand" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-ink-900 hover:text-brand"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-[#25D366]" />
                Прямо в WhatsApp
              </a>
            </div>
          </div>

          {/* Правая часть — форма */}
          <form onSubmit={onSubmit} className="bg-white p-8 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-name" className="field-label">Имя</label>
                <input id="q-name" type="text" className="field" placeholder="Как к вам обращаться"
                  value={form.name} onChange={update('name')} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="q-phone" className="field-label">Телефон</label>
                <input id="q-phone" type="tel" className="field" placeholder="+7 ___ ___ __ __"
                  value={form.phone} onChange={update('phone')} autoComplete="tel" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="q-service" className="field-label">Услуга</label>
              <select id="q-service" className="field" value={form.service} onChange={update('service')}>
                <option value="">Выберите услугу</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
                <option value="Другое">Другое</option>
              </select>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-address" className="field-label">Адрес / район</label>
                <input id="q-address" type="text" className="field" placeholder="Город, район, адрес"
                  value={form.address} onChange={update('address')} />
              </div>
              <div>
                <label htmlFor="q-when" className="field-label">Когда нужно</label>
                <input id="q-when" type="text" className="field" placeholder="Дата и время"
                  value={form.when} onChange={update('when')} />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="q-comment" className="field-label">Комментарий</label>
              <textarea id="q-comment" rows="3" className="field resize-none"
                placeholder="Опишите задачу: что перевезти, сколько людей, особенности"
                value={form.comment} onChange={update('comment')} />
            </div>

            <button type="submit" className="btn-whatsapp btn-lg mt-5 w-full">
              <Icon name="whatsapp" className="h-5 w-5" />
              Отправить в WhatsApp
            </button>
            <p className="mt-3 text-center text-[13px] text-muted">
              Стоимость рассчитывается индивидуально после уточнения деталей.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
