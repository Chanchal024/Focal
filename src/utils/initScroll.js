import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// ─── Crisp, elegant easing curve ──────────────────────────────────────────────
const E = 'power3.out'

// ─── Reveal: gentle float up + crisp fade-in ──────────────────────────────────
function reveal(selector, { y = 28, duration = 0.75, delay = 0, stagger = 0, start = 'top 92%', ...rest } = {}) {
  gsap.utils.toArray(selector).forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y, scale: 0.99 },
      {
        opacity: 1, y: 0, scale: 1,
        duration,
        ease: E,
        delay: delay + i * stagger,
        overwrite: 'auto',
        scrollTrigger: {
          trigger: el,
          start,
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          ...rest.scrollTrigger,
        },
      }
    )
  })
}

// ─── Slide: clean horizontal entrance ─────────────────────────────────────────
function slide(selector, fromX, { duration = 0.85, start = 'top 88%', ...rest } = {}) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: fromX },
      {
        opacity: 1, x: 0,
        duration,
        ease: E,
        overwrite: 'auto',
        scrollTrigger: {
          trigger: el,
          start,
          end: 'top 15%',
          toggleActions: 'play none none reverse',
          ...rest.scrollTrigger,
        },
      }
    )
  })
}

// ─── Batch: Crisp One-by-One sequential card appearance ──────────────────────
function batch(selector, { y = 30, stagger = 0.12, duration = 0.75, start = 'top 92%', batchMax = 3 } = {}) {
  const elements = gsap.utils.toArray(selector)
  if (!elements || elements.length === 0) return

  gsap.set(selector, { opacity: 0, y, scale: 0.98 })

  ScrollTrigger.batch(selector, {
    interval: 0.08,
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1, y: 0, scale: 1,
        stagger, duration, ease: E,
        overwrite: 'auto',
      }),
    onLeaveBack: (els) =>
      gsap.to(els, {
        opacity: 0, y: 20, scale: 0.98,
        stagger: stagger * 0.4, duration: 0.35,
        ease: 'power2.in',
        overwrite: 'auto',
      }),
    start,
    batchMax,
  })
}

// ─── Main Initialization ──────────────────────────────────────────────────────
export function initScroll() {

  // 1. Lenis Smooth Scroll Setup (Crisp & Responsive)
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5,
  })

  const tickerFn = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(tickerFn)
  gsap.ticker.lagSmoothing(0)

  // Keep ScrollTrigger in sync with Lenis
  lenis.on('scroll', ScrollTrigger.update)

  // 2. PAGE 1: Home / Hero (Page Load)
  gsap.set('#navbar', { opacity: 0, y: -20 })
  gsap.to('#navbar', {
    opacity: 1, y: 0,
    duration: 0.9, ease: E,
    delay: 0.15,
    clearProps: 'transform',
  })

  gsap.set('.hero-title', { opacity: 0, y: 24 })
  gsap.set('.hero-sub', { opacity: 0, y: 18 })
  gsap.set('.hero-media', { opacity: 0, y: 14 })

  gsap.to('.hero-title', { opacity: 1, y: 0, duration: 0.95, ease: E, delay: 0.35 })
  gsap.to('.hero-sub',   { opacity: 1, y: 0, duration: 0.85, ease: E, delay: 0.5 })
  gsap.to('.hero-media', { opacity: 1, y: 0, duration: 0.8, ease: E, delay: 0.65 })

  // 3. PAGE 2A: About Us Section
  reveal('#about .about-header', { duration: 0.85, y: 28, start: 'top 92%' })
  reveal('#about .about-title', { duration: 0.9, y: 24, start: 'top 92%' })
  reveal('#about .about-desc', { duration: 0.8, y: 18, delay: 0.08, start: 'top 92%' })
  slide('#about .about-visual', -45, { duration: 0.9, start: 'top 88%' })
  slide('#about .about-content', 45, { duration: 0.9, start: 'top 88%' })
  reveal('#about .about-badge-float-1', { duration: 0.7, y: 18, delay: 0.25, start: 'top 88%' })
  reveal('#about .about-badge-float-2', { duration: 0.7, y: 18, delay: 0.35, start: 'top 88%' })
  batch('#about .about-card', { y: 28, stagger: 0.11, duration: 0.75, start: 'top 92%', batchMax: 4 })
  reveal('#about .about-metrics', { duration: 0.85, y: 26, start: 'top 90%' })
  batch('#about .about-stat', { y: 20, stagger: 0.1, duration: 0.7, start: 'top 92%', batchMax: 4 })

  // 3. PAGE 2B: Story Section (Cards appear one by one)
  batch('.s1-card', { y: 28, stagger: 0.12, duration: 0.75, start: 'top 90%', batchMax: 3 })
  slide('.s2-image', -40, { duration: 0.85 })
  slide('.s2-content', 40, { duration: 0.85 })
  reveal('.s2-content h3', { duration: 0.8, y: 22 })
  reveal('.s2-content p',  { duration: 0.75, y: 18, stagger: 0.07 })
  gsap.utils.toArray('.s2-content button').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.9, y: 10 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 0.65, ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: el,
          start: 'top 94%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  // 4. PAGE 3: Reserve Section
  reveal('#reserve h2', { duration: 0.85, y: 26 })
  reveal('#reserve p',  { duration: 0.8, y: 20, delay: 0.08 })
  gsap.utils.toArray('#reserve button').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.88, y: 10 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 0.65, ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: el,
          start: 'top 94%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })
  gsap.utils.toArray('#reserve .pointer-events-none').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 1.03 },
      {
        opacity: 1, scale: 1,
        duration: 1.0, ease: E,
        scrollTrigger: {
          trigger: '#reserve',
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  // 5. PAGE 4: Experience Section — Perfectly Timed One-by-One Reveal
  reveal('#Experience h2', { duration: 0.85, y: 28, start: 'top 92%' })
  reveal('#Experience p',  { duration: 0.75, y: 20, delay: 0.08, start: 'top 92%' })

  // Quick Metrics: 4 stats appear one by one
  batch('.metrics-bar > div', { y: 24, stagger: 0.1, duration: 0.7, start: 'top 92%', batchMax: 4 })

  // Filter Buttons
  reveal('#Experience .flex-wrap', { duration: 0.75, y: 18, delay: 0.1, start: 'top 92%' })

  // Experience Cards: Crisp One-by-One cascade (0.12s stagger, 0.75s duration)
  batch('.experience-card', { y: 32, stagger: 0.12, duration: 0.75, start: 'top 92%', batchMax: 3 })

  // Sensory Journey Section: Cards appear one by one
  reveal('#Experience > div > div:nth-of-type(3) h3, #Experience span:first-child', { duration: 0.8, y: 24, start: 'top 92%' })
  batch('.sensory-card', { y: 26, stagger: 0.1, duration: 0.7, start: 'top 92%', batchMax: 4 })

  // Experience Guest Spotlight Banner
  reveal('.experience-spotlight', { y: 30, duration: 0.85, start: 'top 90%' })

  // 6. PAGE 5: Menu Section — Perfectly Timed One-by-One Reveal
  reveal('[id="Menu" i] h2, [id="menu" i] h2', { duration: 0.85, y: 28, start: 'top 92%' })
  reveal('[id="Menu" i] p, [id="menu" i] p',   { duration: 0.75, y: 20, delay: 0.08, start: 'top 92%' })

  // Menu Category Cards: Crisp One-by-One cascade (0.12s stagger, 0.75s duration)
  batch('.menu-card', { y: 32, stagger: 0.12, duration: 0.75, start: 'top 92%', batchMax: 3 })

  // 7. PAGE 6: Contact Section
  reveal('#contact h2',    { duration: 0.8, y: 26, start: 'top 92%' })
  reveal('#contact p.mt-3', { duration: 0.75, y: 18, delay: 0.08, start: 'top 92%' })
  slide('#contact .lg\\:col-span-5', -35, { duration: 0.85, start: 'top 88%' })
  slide('#contact .lg\\:col-span-7',  35, { duration: 0.85, start: 'top 88%' })

  // 8. PAGE 7: Review / Feedback Section
  reveal('#reviews h2', { duration: 0.85, y: 26, start: 'top 92%' })
  reveal('#reviews p',  { duration: 0.75, y: 18, delay: 0.08, start: 'top 92%' })
  reveal('#reviews .marquee-track-l2r', { duration: 0.9, y: 24, start: 'top 92%' })
  reveal('#reviews .marquee-track-r2l', { duration: 0.9, y: 24, delay: 0.08, start: 'top 92%' })

  // 9. PAGE 8: Footer Section
  gsap.fromTo(
    'footer',
    { opacity: 0, y: 28 },
    {
      opacity: 1, y: 0,
      duration: 0.85, ease: E,
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 94%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    }
  )

  gsap.set('footer .grid > div', { opacity: 0, y: 20 })
  ScrollTrigger.batch('footer .grid > div', {
    onEnter: (els) =>
      gsap.to(els, { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: E, overwrite: 'auto' }),
    onLeaveBack: (els) =>
      gsap.to(els, { opacity: 0, y: 20, stagger: 0.04, duration: 0.3, ease: 'power2.in', overwrite: 'auto' }),
    start: 'top 95%',
    batchMax: 3,
  })

  // Synchronize layout calculations with Lenis
  ScrollTrigger.refresh()

  // 10. Smooth glide to section when opened with a hash in a new tab
  if (typeof window !== 'undefined' && window.location.hash && window.location.hash !== '#' && window.location.hash !== '#home') {
    const rawHash = window.location.hash
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    setTimeout(() => {
      try {
        const target = document.querySelector(rawHash)
        if (target) {
          lenis.scrollTo(target, {
            offset: -20,
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          })
        }
      } catch {
        // Fallback for invalid selectors
      }
    }, 280)
  }

  return { lenis, tickerFn }
}

export function cleanupScroll({ lenis, tickerFn }) {
  if (tickerFn) gsap.ticker.remove(tickerFn)
  if (lenis) lenis.destroy()
  ScrollTrigger.getAll().forEach((t) => t.kill())
}
