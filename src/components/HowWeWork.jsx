import Icon from './Icons'
import { wa } from '../lib/site'
import { steps } from '../data/steps'

export default function HowWeWork() {
  return (
    <section id="how" className="bg-soft py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Как мы работаем</span>
          <h2 className="section-title mt-3">Просто и предсказуемо — от заявки до результата</h2>
        </div>

        <div className="relative mt-12">
          {/* горизонтальная линия на desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[26px] hidden lg:block"
          >
            <div className="mx-auto h-[2px] w-[86%] bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0" />
          </div>

          <ol className="reveal grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((s) => (
              <li key={s.n} className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-brand text-[18px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(255,106,0,0.7)] ring-4 ring-soft">
                  {s.n}
                </span>
                <div className="lg:mt-4">
                  <h3 className="text-[16px] font-bold tracking-tight text-ink-900">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted lg:px-1">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal mt-12 text-center">
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
            <Icon name="whatsapp" className="h-5 w-5" />
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
