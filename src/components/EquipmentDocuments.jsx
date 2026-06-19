import Icon from './Icons'

const documents = [
  {
    title: 'Гидравлический штабелёр',
    description: 'Декларация соответствия ТР ТС 010/2011 на гидравлический штабелёр Sillan.',
    badge: 'Декларация',
    file: '/documents/stacker-declaration.pdf',
    preview: '/documents/stacker-declaration-preview.png',
  },
  {
    title: 'Гидравлическая тележка / рохля',
    description: 'Декларация соответствия ТР ТС 010/2011 на гидравлическую тележку Sillan.',
    badge: 'Декларация',
    file: '/documents/pallet-truck-declaration.pdf',
    preview: '/documents/pallet-truck-declaration-preview.png',
  },
  {
    title: 'ISO 9001:2015',
    description: 'Сертификат системы менеджмента качества производителя оборудования.',
    badge: 'ISO',
    file: '/documents/iso-9001-certificate.jpg',
    preview: '/documents/iso-9001-certificate.jpg',
  },
  {
    title: 'ISO 45001 / ISO 14001',
    description: 'Документы по охране труда, безопасности и экологическому менеджменту производителя оборудования.',
    badge: 'ISO',
    file: '/documents/iso-45001-14001-certificate.jpg',
    preview: '/documents/iso-45001-14001-certificate.jpg',
  },
]

export default function EquipmentDocuments() {
  return (
    <section id="equipment-documents" className="bg-soft py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Документы</span>
          <h2 className="section-title mt-3">Сертификаты и документы на оборудование</h2>
          <p className="section-sub mt-4">
            Всё оборудование имеет подтверждающие документы и сертификаты. Нажмите “Посмотреть”, чтобы
            ознакомиться с документом.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {documents.map((doc) => (
            <article
              key={doc.title}
              className="group flex h-full flex-col rounded-3xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-cardHover"
            >
              <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-2xl border border-line bg-white shadow-[0_10px_28px_-22px_rgba(17,17,17,0.28)] sm:h-[175px]">
                <img
                  src={doc.preview}
                  alt={doc.title}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <span className="inline-flex w-fit rounded-full border border-brand/20 bg-warm px-3 py-1 text-[12px] font-bold text-brand-700">
                  {doc.badge}
                </span>
                <h3 className="mt-3 text-[17px] font-bold leading-snug tracking-tight text-ink-900">{doc.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{doc.description}</p>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-brand/30 bg-white px-4 py-2.5 text-[14px] font-bold text-brand-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                >
                  Посмотреть
                  <Icon name="arrowRight" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
