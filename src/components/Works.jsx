import worker from '../assets/img/worker-portrait.jpg'
import courier from '../assets/img/courier.jpg'
import van from '../assets/img/van.jpg'
import forklift from '../assets/img/forklift.jpg'

const shots = [
  { img: worker, label: 'Специалисты в форме GP Service', span: '' },
  { img: courier, label: 'Курьерская доставка по городу', span: '' },
  { img: van, label: 'Свой транспорт — Газель', span: 'sm:col-span-2' },
  { img: forklift, label: 'Спецтехника и погрузчики', span: '' },
]

export default function Works() {
  return (
    <section id="works" className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Наши работы</span>
          <h2 className="section-title mt-3">Команда, транспорт и оборудование</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">
            Работаем в фирменной форме, со своим транспортом, инструментом и спецтехникой.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-soft ${s.span}`}
            >
              <img
                src={s.img}
                alt={s.label}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent p-4">
                <figcaption className="text-[13.5px] font-semibold text-white">{s.label}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
