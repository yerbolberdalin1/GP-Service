import Logo from './Logo'
import Icon from './Icons'
import { wa, SITE } from '../lib/site'

const rows = [
  { icon: 'phone', label: 'Телефон', value: SITE.phoneDisplay, href: SITE.phoneHref },
  { icon: 'whatsapp', label: 'WhatsApp', value: SITE.phoneDisplay, href: wa(), external: true },
  { icon: 'mail', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'instagram', label: 'Instagram', value: `@${SITE.instagram}`, href: SITE.instagramUrl, external: true },
]

export default function Contacts() {
  return (
    <section id="contacts" className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Контакты</span>
          <h2 className="section-title mt-3">Свяжитесь с GP Service</h2>
          <p className="section-sub mt-4">
            Шымкент и область • срочный выезд • для частных клиентов и бизнеса.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-6 lg:grid-cols-2">
          {/* Контактные данные */}
          <div className="grid gap-3 sm:grid-cols-2">
            {rows.map((r) => (
              <a
                key={r.label}
                href={r.href}
                {...(r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-cardHover"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted">{r.label}</span>
                  <span className="block truncate text-[15px] font-semibold text-ink-900">{r.value}</span>
                </span>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-soft p-4 sm:col-span-2">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon name="mapPin" className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wide text-muted">Город</span>
                <span className="block text-[15px] font-semibold text-ink-900">Шымкент и Туркестанская область</span>
              </div>
            </div>
          </div>

          {/* CTA-панель — светлая, тёплая */}
          <div className="relative overflow-hidden rounded-[28px] border border-brand/20 bg-warm p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
            <div className="relative">
              <Logo />
              <p className="mt-4 text-[15px] text-muted">{SITE.tagline}</p>
              <p className="mt-6 text-xl font-bold leading-snug text-ink-900">
                Опишите задачу в WhatsApp — ответим и рассчитаем стоимость.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg flex-1">
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Написать в WhatsApp
                </a>
                <a href={SITE.phoneHref} className="btn-primary btn-lg flex-1">
                  <Icon name="phone" className="h-5 w-5" />
                  Позвонить
                </a>
              </div>
              <p className="mt-4 text-[13px] text-muted">Заявка за минуту — без звонков и ожидания.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
