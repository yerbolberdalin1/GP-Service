import Logo from './Logo'
import Icon from './Icons'
import { wa, SITE } from '../lib/site'
import { services } from '../data/services'

const sections = [
  { href: '#equipment', label: 'Аренда оборудования' },
  { href: '#business', label: 'Для бизнеса' },
  { href: '#about', label: 'О компании' },
  { href: '#how', label: 'Как мы работаем' },
  { href: '#faq', label: 'Вопросы и ответы' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
        {/* Бренд */}
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-white/60">
            Грузчики, такелаж, переезды, грузоперевозки, доставка, аренда оборудования и услуги для
            бизнеса в Шымкенте с 2016 года.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-[#25D366]">
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-brand">
              <Icon name="instagram" className="h-5 w-5" />
            </a>
            <a href={SITE.phoneHref} aria-label="Позвонить"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-brand">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Услуги */}
        <div className="lg:col-span-3">
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/40">Услуги</h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services" className="text-[14px] text-white/70 transition-colors hover:text-brand">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Разделы */}
        <div className="lg:col-span-2">
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/40">Разделы</h3>
          <ul className="mt-4 space-y-2.5">
            {sections.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-[14px] text-white/70 transition-colors hover:text-brand">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Контакты */}
        <div className="lg:col-span-3">
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/40">Контакты</h3>
          <ul className="mt-4 space-y-3 text-[14px]">
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-white/80 hover:text-brand">
                <Icon name="phone" className="h-4 w-4 text-brand" /> {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 break-all text-white/80 hover:text-brand">
                <Icon name="mail" className="h-4 w-4 text-brand" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/80 hover:text-brand">
                <Icon name="instagram" className="h-4 w-4 text-brand" /> @{SITE.instagram}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-white/80">
              <Icon name="mapPin" className="h-4 w-4 text-brand" /> Шымкент и область
            </li>
          </ul>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-md mt-5">
            <Icon name="whatsapp" className="h-[18px] w-[18px]" />
            Написать в WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-[13px] text-white/50 sm:flex-row">
          <p>© {year} GP Service. Шымкент. Все права защищены.</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
