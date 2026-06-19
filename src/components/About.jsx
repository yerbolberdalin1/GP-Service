import team from '../assets/img/team.jpg'

const stats = [
  { value: '2016', label: 'год основания' },
  { value: '8', label: 'направлений услуг' },
  { value: 'Шымкент', label: 'и область' },
]

export default function About() {
  return (
    <section id="about" className="bg-soft py-16 lg:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Визуал */}
        <div className="reveal relative order-last lg:order-first">
          <div className="overflow-hidden rounded-[28px] border border-line shadow-soft">
            <img
              src={team}
              alt="Команда GP Service в Шымкенте"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-3 -top-3 hidden rounded-2xl border border-line bg-white px-5 py-4 shadow-card sm:block">
            <p className="text-2xl font-extrabold text-ink-900">с 2016</p>
            <p className="text-xs font-medium text-muted">года на рынке</p>
          </div>
        </div>

        {/* Текст */}
        <div className="reveal">
          <span className="eyebrow">О компании</span>
          <h2 className="section-title mt-3">
            GP Service — рабочие руки, транспорт и оборудование под задачу
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">
            С 2016 года помогаем частным клиентам и бизнесу в Шымкенте: грузчики и такелаж,
            переезды и разгрузка, грузоперевозки и спецтехника, аренда оборудования, курьерская
            доставка и клининг. Берём срочные, разовые и проектные задачи — от переезда до
            комплексного обслуживания объекта.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Работаем по договору, с персональным менеджером и бригадиром на объекте. Подберём
            людей, транспорт или оборудование под вашу задачу и рассчитаем стоимость после
            уточнения деталей.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-white p-4 text-center">
                <dt className="text-xl font-extrabold tracking-tight text-ink-900 sm:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[12.5px] leading-tight text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
