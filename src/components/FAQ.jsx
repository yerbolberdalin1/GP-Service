import { useState } from 'react'
import Icon from './Icons'
import { wa } from '../lib/site'
import { faq } from '../data/faq'

function FaqItem({ item, isOpen, onToggle, id }) {
  return (
    <div className={`overflow-hidden rounded-2xl border bg-white transition-colors ${isOpen ? 'border-brand/30' : 'border-line'}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${id}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="text-[15.5px] font-semibold text-ink-900 sm:text-[16px]">{item.q}</span>
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 bg-brand text-white' : 'bg-soft text-ink-900'
          }`}
        >
          <Icon name="plus" className="h-4 w-4" />
        </span>
      </button>
      <div id={`faq-${id}`} className={`accordion-grid ${isOpen ? 'open' : ''}`}>
        <div className="accordion-inner">
          <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-muted sm:px-6">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(0)

  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Вопросы и ответы</span>
          <h2 className="section-title mt-3">Частые вопросы</h2>
        </div>

        <div className="reveal mx-auto mt-10 grid max-w-3xl gap-3">
          {faq.map((item, i) => (
            <FaqItem
              key={i}
              id={i}
              item={item}
              isOpen={openId === i}
              onToggle={() => setOpenId(openId === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="reveal mx-auto mt-8 max-w-3xl rounded-2xl border border-line bg-white px-6 py-5 text-center">
          <p className="text-[15px] text-ink-900">Не нашли ответ на свой вопрос?</p>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-md mt-3">
            <Icon name="whatsapp" className="h-[18px] w-[18px]" />
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  )
}
