import { useEffect, useState } from 'react'
import Logo from './Logo'
import Icon from './Icons'
import { SITE, wa } from '../lib/site'

const NAV = [
  { href: '#services', label: 'Услуги' },
  { href: '#equipment', label: 'Аренда' },
  { href: '#business', label: 'Для бизнеса' },
  { href: '#how', label: 'Как работаем' },
  { href: '#contacts', label: 'Контакты' },
]

const INSTAGRAM_URL = 'https://www.instagram.com/gp_service_/'
const TWO_GIS_URL = 'https://2gis.kz/shymkent/firm/70000001041553395'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-line bg-white/85 backdrop-blur-md shadow-[0_4px_24px_-18px_rgba(17,17,17,0.5)]'
          : 'border-line/70 bg-white'
      }`}
    >
      <div className="header-inner h-[66px]">
        <a href="#top" aria-label="GP Service — на главную" className="header-logo">
          <Logo compact />
        </a>

        <nav className="header-nav hidden xl:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="header-nav-link"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={SITE.phoneHref}
            className="header-phone hidden xl:inline-flex"
            aria-label={SITE.phoneDisplay}
          >
            <Icon name="phone" className="header-phone-icon h-4 w-4 text-brand" />
            <span>{SITE.phoneDisplay}</span>
          </a>

          <div className="header-socials hidden xl:inline-flex" aria-label="Социальные ссылки GP Service">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram GP Service"
              className="header-social-link"
            >
              <Icon name="instagram" className="h-[18px] w-[18px]" />
            </a>
            <a
              href={TWO_GIS_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="2GIS GP Service"
              className="header-social-link header-social-link--2gis"
            >
              <Icon name="mapPin" className="h-[15px] w-[15px]" />
              <span>2GIS</span>
            </a>
          </div>

          <a href={wa()} target="_blank" rel="noopener noreferrer" className="header-whatsapp hidden xl:inline-flex">
            <Icon name="whatsapp" className="h-[18px] w-[18px]" />
            <span className="header-whatsapp-label-full">Написать в&nbsp;WhatsApp</span>
            <span className="header-whatsapp-label-short">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink-900 xl:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`xl:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`overflow-hidden border-t border-line bg-white transition-[max-height,opacity] duration-300 ${
            open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink-900 hover:bg-warm hover:text-brand-700"
              >
                {n.label}
              </a>
            ))}
            <div className="mobile-menu-actions mt-2 pb-2">
              <a href={SITE.phoneHref} className="mobile-action-link" onClick={() => setOpen(false)}>
                <Icon name="phone" className="h-4 w-4 text-brand" />
                <span className="min-w-0 truncate">{SITE.phoneDisplay}</span>
              </a>
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-action-link mobile-action-link--whatsapp"
                onClick={() => setOpen(false)}
              >
                <Icon name="whatsapp" className="h-[18px] w-[18px]" />
                <span className="min-w-0 truncate">WhatsApp</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram GP Service"
                className="mobile-action-link"
                onClick={() => setOpen(false)}
              >
                <Icon name="instagram" className="h-[18px] w-[18px] text-brand" />
                <span className="min-w-0 truncate">Instagram</span>
              </a>
              <a
                href={TWO_GIS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="2GIS GP Service"
                className="mobile-action-link"
                onClick={() => setOpen(false)}
              >
                <Icon name="mapPin" className="h-[18px] w-[18px] text-brand" />
                <span className="min-w-0 truncate">2GIS</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
