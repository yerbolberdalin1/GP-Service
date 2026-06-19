import { useEffect } from 'react'

// Лёгкое появление секций при скролле — без сторонних библиотек.
// Навешивает класс .is-visible на элементы с классом .reveal, когда они видны.
export function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = Array.from(document.querySelectorAll('.reveal'))

    if (prefersReduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}
