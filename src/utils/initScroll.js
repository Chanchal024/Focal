import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// ─── Single professional easing used everywhere ────────────────────────────────
const E = 'power4.out'

// ─── Reveal: fade up + scale ──────────────────────────────────────────────────
function reveal(selector, { y = 40, duration = 1, delay = 0, stagger = 0, ...rest } = {}) {
  gsap.utils.toArray(selector).forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1,
        duration,
        ease: E,
        delay: delay + i * stagger,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          ...rest.scrollTrigger,
        },
      }
    )
  })
}

// ─── Slide: horizontal enter ───────────────────────────────────────────────────
function slide(selector, fromX, { duration = 1.1, ...rest } = {}) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: fromX },
      {
        opacity: 1, x: 0,
        duration,
        ease: E,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 15%',
          toggleActions: 'play none none reverse',
          ...rest.scrollTrigger,
        },
      }
    )
  })
}

// ─── Batch: staggered group reveal ────────────────────────────────────────────
function batch(selector, { y = 50, stagger = 0.12, duration = 0.95, start = 'top 87%' } = {}) {
  // Set initial state so there's no flash before ScrollTrigger fires
  gsap.set(selector, { opacity: 0, y, scale: 0.96 })

  ScrollTrigger.batch(selector, {
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1, y: 0, scale: 1,
        stagger, duration, ease: E,
        overwrite: true,
      }),
    onLeaveBack: (els) =>
      gsap.to(els, {
        opacity: 0, y, scale: 0.96,
        stagger: stagger * 0.5, duration: 0.4,
        ease: 'power2.in',
        overwrite: true,
      }),
    start,
    batchMax: 3,
  })
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export function initScroll() {

  // 1. Lenis smooth scroll
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.5,
  })

  const tickerFn = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(tickerFn)
  gsap.ticker.lagSmoothing(0)

  // Keep ScrollTrigger in sync with Lenis
  lenis.on('scroll', ScrollTrigger.update)

  // 2. Page-load: Navbar slides in from top (no ScrollTrigger needed)
  gsap.set('#navbar', { opacity: 0, y: -24 })
  gsap.to('#navbar', {
    opacity: 1, y: 0,
    duration: 1.1, ease: E,
    delay: 0.2,
    clearProps: 'transform', // clean up after done so position:absolute works
  })

  // 3. Page-load: Hero headline + subtitle stagger
  gsap.set('.hero-title', { opacity: 0, y: 32 })
  gsap.set('.hero-sub', { opacity: 0, y: 24 })
  gsap.set('.hero-media', { opacity: 0, y: 16 })

  gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1.1, ease: E, delay: 0.45 })
  gsap.to('.hero-sub',   { opacity: 1, y: 0, duration: 1.0, ease: E, delay: 0.65 })
  gsap.to('.hero-media', { opacity: 1, y: 0, duration: 0.9, ease: E, delay: 0.85 })

  // 4. Story — S1 info cards (3-column stagger)
  batch('.s1-card', { y: 45, stagger: 0.15, duration: 1.0, start: 'top 85%' })

  // 5. Story — S2 image + content slide from sides
  slide('.s2-image', -70, { duration: 1.15 })
  slide('.s2-content', 70, { duration: 1.15 })

  // 6. Story text
  reveal('#story h3', { duration: 1.1, y: 30 })
  reveal('#story p',  { duration: 0.9, y: 24, stagger: 0.06 })

  // 7. Reserve section
  reveal('#reserve h2', { duration: 1.1 })
  reveal('#reserve p',  { duration: 0.9, y: 24 })
  gsap.utils.toArray('#reserve button').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.82, y: 10 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 0.75, ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  // 8. Menu section header
  reveal('#menu h2', { duration: 1.1 })
  reveal('#menu > section > div > div:first-child p', { y: 24, duration: 0.9 })

  // 9. Menu cards — 3-column batch stagger
  batch('.menu-card', { y: 55, stagger: 0.11, duration: 1.0, start: 'top 88%' })

  // 10. Contact section
  reveal('#contact h2',    { duration: 1.0 })
  reveal('#contact p.mt-3', { y: 24, duration: 0.88 })
  slide('#contact .lg\\:col-span-5', -65, { duration: 1.1 })
  slide('#contact .lg\\:col-span-7',  65, { duration: 1.1 })

  // 11. Footer
  gsap.fromTo(
    'footer',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0,
      duration: 1.0, ease: E,
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    }
  )

  gsap.set('footer .grid > div', { opacity: 0, y: 32 })
  ScrollTrigger.batch('footer .grid > div', {
    onEnter: (els) =>
      gsap.to(els, { opacity: 1, y: 0, stagger: 0.13, duration: 0.85, ease: E, overwrite: true }),
    onLeaveBack: (els) =>
      gsap.to(els, { opacity: 0, y: 32, stagger: 0.07, duration: 0.4, ease: 'power2.in', overwrite: true }),
    start: 'top 92%',
    batchMax: 4,
  })

  return { lenis, tickerFn }
}

export function cleanupScroll({ lenis, tickerFn }) {
  if (tickerFn) gsap.ticker.remove(tickerFn)
  if (lenis) lenis.destroy()
  ScrollTrigger.getAll().forEach((t) => t.kill())
}
