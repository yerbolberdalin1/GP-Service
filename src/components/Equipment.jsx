import Icon from './Icons'
import { EquipIllustration } from './Illustrations'
import { wa } from '../lib/site'
import { equipment } from '../data/equipment'

const waItem = (item) =>
  wa(`Здравствуйте! Хочу уточнить аренду оборудования у GP Service: ${item}.\nНа какой срок: \nАдрес доставки: `)

export default function Equipment() {
  return (
    <section id="equipment" className="bg-soft py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Аренда оборудования</span>
            <h2 className="section-title mt-3">Аренда оборудования для работы, склада и ремонта</h2>
            <p className="section-sub mt-4">
              Доставим оборудование и проведём инструктаж. Наличие уточняйте в WhatsApp.
            </p>
          </div>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-primary btn-md shrink-0">
            <Icon name="whatsapp" className="h-[18px] w-[18px]" />
            Уточнить наличие
          </a>
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => (
            <a
              key={item.id}
              href={waItem(item.waItem)}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col overflow-hidden hover:-translate-y-1 hover:border-brand/30 hover:shadow-cardHover"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-warm to-white p-7">
                <span className="block h-full w-auto transition-transform duration-500 group-hover:scale-[1.06]">
                  {EquipIllustration[item.art](item.alt)}
                </span>
                <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#25D366] shadow-card opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Icon name="whatsapp" className="h-5 w-5" />
                </span>
              </div>
              <div className="border-t border-line p-5">
                <h3 className="text-[17px] font-bold tracking-tight text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{item.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand">
                  Уточнить наличие
                  <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
