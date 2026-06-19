import Icon from './Icons'
import { quickFacts } from '../data/advantages'

// Полоса «быстрых преимуществ» под hero.
export default function QuickFacts() {
  return (
    <section aria-label="Быстрые преимущества" className="bg-white">
      <div className="container-x -mt-8 pb-4 lg:-mt-12">
        <div className="reveal grid grid-cols-2 gap-3 rounded-3xl border border-line bg-white p-3 shadow-card sm:gap-4 sm:p-4 lg:grid-cols-4">
          {quickFacts.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-warm sm:px-4"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-[14px] font-bold leading-tight text-ink-900 sm:text-[15px]">
                  {f.title}
                </p>
                <p className="text-[12.5px] leading-tight text-muted">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
