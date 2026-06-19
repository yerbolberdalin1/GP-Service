import Icon from './Icons'
import { advantages } from '../data/advantages'

export default function Advantages() {
  return (
    <section id="advantages" className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Почему GP Service</span>
          <h2 className="section-title mt-3">Почему выбирают GP Service</h2>
          <p className="section-sub mt-4">
            Работаем с частными клиентами и бизнесом по Шымкенту и области с 2016 года.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="group rounded-3xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-cardHover"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={a.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-[15.5px] font-bold leading-snug tracking-tight text-ink-900">
                {a.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
