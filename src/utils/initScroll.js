import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Fade-up reveal for a list of selectors.
 * Each element animates independently as it enters the viewport.
 */
function fadeUp(selector, vars = {}) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: vars.duration ?? 0.9,
        ease: vars.ease ?? 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        ...vars,
      }
    )
  })
}

/**
 * Slide in from left or right.
 */
function slideIn(selector, fromX = -60, vars = {}) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: fromX },
      {
        opacity: 1,
        x: 0,
        duration: vars.duration ?? 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        ...vars,
      }
    )
  })
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function initScroll() {
  // ── 1. Lenis smooth scroll ─────────────────────────────────────────────────
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.5,
  })

  // Keep a reference for cleanup
  const tickerFn = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(tickerFn)
  gsap.ticker.lagSmoothing(0)

  // ── 2. ScrollTrigger global defaults ──────────────────────────────────────
  ScrollTrigger.defaults({ once: true })

  // ── 3. HOME section ───────────────────────────────────────────────────────
  // Home hero text uses animate-arrive CSS — GSAP does NOT touch these
  // to avoid conflicting with the navbar's own built-in CSS animation.

  // S1 icon-card columns
  gsap.utils.toArray('#story .flex-col, .flex-col.items-center.gap-2').forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 55 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        delay: i * 0.12,
        scrollTrigger: { trigger: el, start: 'top 88%' },
      }
    )
  })

  // S2 — image slide in from left, text from right
  slideIn('.s2-image', -70)
  slideIn('.s2-content', 70)

  // Generic text inside story
  fadeUp('#story h2, #story h3', { duration: 1 })
  fadeUp('#story p', { duration: 0.85 })

  // ── 5. RESERVE section ────────────────────────────────────────────────────
  fadeUp('#reserve h2, #reserve h3', { duration: 1 })
  fadeUp('#reserve p', { duration: 0.85 })
  gsap.utils.toArray('#reserve button').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.88 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.65,
        ease: 'back.out(1.6)',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      }
    )
  })

  // ── 6. MENU section ───────────────────────────────────────────────────────
  // catagories.jsx already uses IntersectionObserver — we ONLY animate the
  // section header (OUR MENU title) with GSAP to complement it.
  fadeUp('#menu h2', { duration: 1.1 })
  fadeUp('#menu > section > div > div:first-child p', { duration: 0.9 })

  // ── 7. CONTACT section ────────────────────────────────────────────────────
  fadeUp('#contact h2', { duration: 1 })
  fadeUp('#contact p.mt-3', { duration: 0.85 })

  // The two main columns (info card + form card) slide in from sides
  slideIn('#contact .lg\\:col-span-5', -65, { duration: 1 })
  slideIn('#contact .lg\\:col-span-7', 65, { duration: 1 })

  // ── 8. FOOTER ─────────────────────────────────────────────────────────────
  gsap.fromTo(
    'footer',
    { opacity: 0, y: 35 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: { trigger: 'footer', start: 'top 92%' },
    }
  )

  // Footer inner columns staggered
  ScrollTrigger.batch('footer .grid > div', {
    onEnter: (batch) =>
      gsap.fromTo(batch, { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }),
    start: 'top 90%',
  })

  // ── Return cleanup handle ──────────────────────────────────────────────────
  return { lenis, tickerFn }
}

export function cleanupScroll({ lenis, tickerFn }) {
  if (tickerFn) gsap.ticker.remove(tickerFn)
  if (lenis) lenis.destroy()
  ScrollTrigger.getAll().forEach((t) => t.kill())
}
