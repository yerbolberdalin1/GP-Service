import Icon from './Icons'
import { waService } from '../lib/site'

export default function ServiceCard({ service, index, active, onToggle }) {
  const num = String(index + 1).padStart(2, '0')
  const detailsId = `service-details-${service.id}`

  return (
    <article
      className={`group flex flex-col rounded-[24px] border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover ${
        active ? 'border-brand/50 shadow-cardHover ring-1 ring-brand/20' : 'border-line hover:border-brand/30'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
            active ? 'bg-brand text-white' : 'bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white'
          }`}
        >
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <span className="text-[13px] font-bold tabular-nums text-line">{num}</span>
      </div>

      <h3 className="mt-4 text-[18px] font-bold leading-snug tracking-tight text-ink-900">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{service.short}</p>

      <div className="mt-5 flex items-center gap-2.5">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={active}
          aria-controls={detailsId}
          className="btn-ghost btn-md w-full"
        >
          {active ? 'Свернуть' : 'Подробнее'}
          <Icon
            name="chevron"
            className={`h-4 w-4 transition-transform duration-300 ${active ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div id={detailsId} className={`accordion-grid ${active ? 'open' : ''}`} aria-hidden={!active}>
        <div className="accordion-inner">
          {active && (
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-[14px] leading-relaxed text-muted">{service.panel}</p>
              <p className="mt-4 mb-3 text-[11.5px] font-bold uppercase tracking-[0.12em] text-muted">
                Что входит
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.sub.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={waService(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-md mt-5 w-full"
              >
                <Icon name="whatsapp" className="h-[18px] w-[18px]" />
                {service.ctaLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
