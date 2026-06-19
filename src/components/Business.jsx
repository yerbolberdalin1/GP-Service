import Icon from './Icons'
import { wa } from '../lib/site'
import { businessSegments } from '../data/business'

const BUSINESS_WA =
  'Здравствуйте! Хочу получить предложение для бизнеса от GP Service.\nКомпания / сфера: \nЗадача: \nОбъём и сроки: '

export default function Business() {
  return (
    <section id="business" className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="overflow-hidden rounded-[32px] border border-line bg-soft">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-12">
            {/* Левая часть */}
            <div className="reveal">
              <span className="eyebrow">Для бизнеса</span>
              <h2 className="section-title mt-3">Закрываем задачи бизнеса без лишнего найма</h2>
              <p className="section-sub mt-4 max-w-lg">
                Предоставляем рабочих, грузчиков, курьеров, клининг-персонал, транспорт и
                оборудование под проект, сезонную нагрузку или срочный заказ.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {['Работа по договору', 'Оплата за результат', 'Масштабируем под нагрузку', 'Персональный менеджер'].map(
                  (b) => (
                    <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-[13px] font-medium text-ink-900">
                      <Icon name="check" className="h-4 w-4 text-brand" />
                      {b}
                    </span>
                  )
                )}
              </div>

              <a
                href={wa(BUSINESS_WA)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg mt-8"
              >
                <Icon name="arrowRight" className="h-5 w-5" />
                Получить предложение в WhatsApp
              </a>
            </div>

            {/* Правая часть — сегменты */}
            <div className="reveal grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              {businessSegments.map((seg) => (
                <div
                  key={seg.title}
                  className="group rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-cardHover"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={seg.icon} className="h-6 w-6" />
                  </span>
                  <p className="mt-3.5 text-[14.5px] font-semibold leading-snug text-ink-900">{seg.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
