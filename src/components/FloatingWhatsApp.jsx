import { useEffect, useState } from 'react'
import Icon from './Icons'
import { wa } from '../lib/site'

// Плавающая кнопка WhatsApp — появляется после небольшого скролла.
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={wa()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-300 hover:bg-[#1ebe5b] sm:h-16 sm:w-16 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
      <Icon name="whatsapp" className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  )
}
