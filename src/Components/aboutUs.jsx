import React from 'react'
import {
  Coffee,
  Sparkles,
  Leaf,
  Heart,
  Award,
  Sun,
  Flame,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Users
} from 'lucide-react'

const highlights = [
  {
    icon: Leaf,
    title: 'Direct-Trade Micro-Lots',
    desc: 'Ethically sourced from high-altitude regenerative family farms in Ethiopia, Colombia, and Guatemala.',
    badge: '100% Ethical'
  },
  {
    icon: Flame,
    title: 'In-House Micro-Roasting',
    desc: 'Roasted weekly in precise micro-batches to unlock delicate floral aromas, stone fruit, and velvety crema.',
    badge: 'Small Batch'
  },
  {
    icon: Coffee,
    title: 'Masterful Barista Craft',
    desc: 'Every extraction is calibrated to 0.1g accuracy, water mineralized to 150ppm, and poured at exactly 93.5°C.',
    badge: 'Precision Brew'
  },
  {
    icon: Heart,
    title: 'Warm Community Sanctuary',
    desc: 'Architectural oak wood, sunlit greenery, and soothing acoustic warmth curated for genuine human connection.',
    badge: 'Sanctuary'
  }
]

const stats = [
  { value: '14+', label: 'Single-Origin Estates', sub: 'Across 3 continents' },
  { value: '93.5°C', label: 'Optimal Extraction', sub: 'Calibrated daily' },
  { value: '100%', label: 'Directly Traded', sub: 'Fair farmer compensation' },
  { value: '4.9 ★', label: 'Guest Satisfaction', sub: 'Over 20k+ cups served' }
]

const AboutUs = () => {
  return (
    <section
      id='about'
      className='relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-white text-zinc-900'
      style={{ fontFamily: "'Afacad', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap');
      `}</style>

      {/* Subtle warm ambient background glow */}
      <div className='absolute top-0 right-0 -z-10 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-10 left-0 -z-10 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto'>

        {/* Section Header */}
        <div className='about-header text-center max-w-3xl mx-auto mb-14 sm:mb-18 md:mb-20'>
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-xs'>
            <Sparkles className='w-3.5 h-3.5 text-orange-500' />
            <span>About Focal Café</span>
          </div>

          <h2
            className='about-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-5'
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Crafted with Precision, <br className='hidden sm:block' />
            <span className='text-orange-500 italic font-semibold'>Brewed with Soul.</span>
          </h2>

          <p className='about-desc text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto font-medium'>
            We are an independent specialty café and micro-roastery dedicated to slow mornings, exceptional single-estate beans, and the timeless art of heartfelt hospitality.
          </p>
        </div>

        {/* Main Split Showcase: Visuals & Narrative */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20'>

          {/* Left Column: Visual Collage with Overlays */}
          <div className='about-visual lg:col-span-6 relative'>
            <div className='relative rounded-3xl overflow-hidden shadow-xl border border-zinc-100 aspect-[4/3] sm:aspect-[16/11]'>
              <img
                src='https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop'
                alt='Barista crafting artisanal pour-over coffee at Focal Café'
                className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

              {/* In-image caption badge */}
              <div className='absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white'>
                <div className='flex items-center gap-2 text-xs uppercase tracking-widest text-orange-300 font-bold mb-1'>
                  <Sun className='w-3.5 h-3.5' />
                  <span>The Morning Pour</span>
                </div>
                <p className='text-sm sm:text-base font-medium text-white/95 line-clamp-2'>
                  Specialty grade beans roasted to highlight delicate floral notes and smooth velvet chocolate.
                </p>
              </div>
            </div>

            {/* Floating Glassmorphism Badge 1 — Quality Standard */}
            <div className='about-badge-float-1 absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md border border-orange-100 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 max-w-[220px] sm:max-w-[250px]'>
              <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-500 shrink-0'>
                <Award className='w-5 h-5' />
              </div>
              <div>
                <p className='text-xs font-bold text-neutral-900 leading-tight'>100% Arabica Specialty</p>
                <p className='text-[11px] text-zinc-500 font-medium'>Q-Grader certified 85+ score</p>
              </div>
            </div>

            {/* Floating Glassmorphism Badge 2 — Guest Trust */}
            <div className='about-badge-float-2 absolute -top-4 -right-3 sm:-top-5 sm:-right-5 bg-white/95 backdrop-blur-md border border-orange-100 shadow-xl rounded-2xl p-3 sm:p-3.5 flex items-center gap-2.5'>
              <div className='w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 text-xs font-extrabold'>
                ★
              </div>
              <div>
                <p className='text-xs font-bold text-neutral-900 leading-tight'>4.9 / 5 Rating</p>
                <p className='text-[10px] text-zinc-500 font-medium'>Loved by coffee purists</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Philosophy, & Highlights */}
          <div className='about-content lg:col-span-6 flex flex-col justify-center'>
            <span className='text-orange-500 font-bold text-sm tracking-wider uppercase mb-2'>
              Our Philosophy & Standard
            </span>

            <h3
              className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 leading-snug mb-5'
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Cup is a Dialogue Between Earth, Craft, and You.
            </h3>

            <p className='text-base sm:text-lg text-zinc-600 leading-relaxed mb-6 font-medium'>
              At Focal, we believe coffee is never just an afterthought — it is a deliberate sensory ritual. From the mist-covered slopes where our beans mature under native shade trees, to our state-of-the-art bar where water chemistry and grind micron sizes are monitored by the hour, we pour our hearts into every extraction.
            </p>

            {/* Checklist / Features list */}
            <div className='space-y-3 mb-8'>
              <div className='flex items-start gap-3'>
                <CheckCircle2 className='w-5 h-5 text-orange-500 shrink-0 mt-0.5' />
                <p className='text-sm sm:text-base text-zinc-700 font-medium'>
                  <strong className='text-neutral-900 font-bold'>Altitude-Grown Micro-Lots:</strong> Handpicked at peak brix ripeness and slow-dried on raised African beds.
                </p>
              </div>
              <div className='flex items-start gap-3'>
                <CheckCircle2 className='w-5 h-5 text-orange-500 shrink-0 mt-0.5' />
                <p className='text-sm sm:text-base text-zinc-700 font-medium'>
                  <strong className='text-neutral-900 font-bold'>Artisanal Kitchen Pairings:</strong> Daily fresh bakes crafted with French cultured butter and seasonal organic fruits.
                </p>
              </div>
              <div className='flex items-start gap-3'>
                <CheckCircle2 className='w-5 h-5 text-orange-500 shrink-0 mt-0.5' />
                <p className='text-sm sm:text-base text-zinc-700 font-medium'>
                  <strong className='text-neutral-900 font-bold'>Architectural Calm:</strong> Natural light, warm solid oak, ergonomic banquettes, and fiber-optic Wi-Fi for your flow state.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
              <a
                href='#menu'
                className='inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5'
              >
                <span>View Full Menu</span>
                <ArrowRight className='w-4 h-4 text-orange-400' />
              </a>
              <a
                href='#reserve'
                className='inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-neutral-950 px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer transform hover:-translate-y-0.5'
              >
                <span>Reserve a Table</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className='mb-16 sm:mb-20'>
          <div className='text-center max-w-xl mx-auto mb-10'>
            <h4
              className='text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2'
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Focal Difference
            </h4>
            <p className='text-sm sm:text-base text-zinc-600 font-medium'>
              Four foundational commitments that guide every cup we serve.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {highlights.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className='about-card p-6 rounded-2xl bg-stone-50/70 hover:bg-white border border-stone-200/70 hover:border-orange-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group'
                >
                  <div>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='w-12 h-12 rounded-xl bg-orange-100/80 group-hover:bg-orange-500 text-orange-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs'>
                        <IconComp className='w-6 h-6' />
                      </div>
                      <span className='text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100'>
                        {item.badge}
                      </span>
                    </div>

                    <h5 className='text-lg font-bold text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors duration-200'>
                      {item.title}
                    </h5>
                    <p className='text-sm text-zinc-600 leading-relaxed font-medium'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Metrics Bar */}
        <div className='about-metrics p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-neutral-950 text-white shadow-xl border border-zinc-800 relative overflow-hidden'>
          {/* Subtle gold accent light */}
          <div className='absolute top-0 right-1/4 w-72 h-32 bg-orange-500/15 rounded-full blur-3xl pointer-events-none' />

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-zinc-800'>
            {stats.map((stat, i) => (
              <div key={i} className='about-stat pt-4 sm:pt-0 sm:px-4 flex flex-col items-center justify-center'>
                <span
                  className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 mb-1'
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </span>
                <span className='text-sm sm:text-base font-bold text-white mb-0.5'>
                  {stat.label}
                </span>
                <span className='text-xs text-zinc-400 font-medium'>
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs
