import React from 'react'
import {
  Coffee,
  Sparkles,
  Wifi,
  Croissant,
  Music,
  HeartHandshake,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Star,
  Sun,
  Flame,
  Volume2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const experiences = [
  {
    id: 1,
    category: 'craft',
    badge: 'Artisanal Roastery',
    title: 'Precision Brews & Single-Origin Beans',
    desc: 'Every cup is an art form. We source rare single-estate Arabica beans roasted locally in micro-batches, offering pour-over bars, siphon brewing, and tailored espresso profiles.',
    highlights: ['Direct-Trade Micro-Lots', 'Custom Milk & Vegan Foam'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
    icon: Coffee,
  },
  {
    id: 2,
    category: 'ambiance',
    badge: 'Atmospheric Haven',
    title: 'Architectural Warmth & Serene Mood',
    desc: 'Bathed in sunlit glass, living botanicals, and warm handcrafted oakwood. Thoughtfully illuminated for romantic dates, calm reflection, or quiet conversations over steamed matcha.',
    highlights: ['Natural Sunlight & Indoor Greens', 'Handcrafted Solid Wood Seating'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop',
    icon: Sparkles,
  },
  {
    id: 3,
    category: 'bakery',
    badge: 'Artisanal Kitchen',
    title: 'Oven-Fresh Gourmet Delights',
    desc: 'From flaky butter croissants baked at sunrise to open-faced sourdough tartines, our pastry chefs hand-make every delicacy using fresh organic local ingredients daily.',
    highlights: ['100% Cultured French Butter Pastries', 'Gluten-Free & Plant-Based Choices'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    icon: Croissant,
  },
  {
    id: 4,
    category: 'work',
    badge: 'Creative Flow',
    title: 'Work & Creative Sanctuary',
    desc: 'Engineered for uninterrupted productivity. Enjoy lightning-fast gigabit fiber Wi-Fi, ergonomic banquette seating, dedicated silent zones, and accessible power at every corner.',
    highlights: ['Ultra-Fast 300+ Mbps Fiber Wi-Fi', 'Universal Outlets at Every Booth', 'Spacious Desks & Quiet Work Vibe'],
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1000&auto=format&fit=crop',
    icon: Wifi,
  },
  {
    id: 5,
    category: 'culture',
    badge: 'Community Vibe',
    title: 'Workshops & Acoustic Evenings',
    desc: "Focal is more than a cafe - it's a living cultural lounge. Join our weekend barista cupping masterclasses, casual book exchanges, and intimate live acoustic listening sessions.",
    highlights: ['Live Ambient Guitar & Vinyl Nights', 'Community Book & Art Corner'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    icon: Music,
  },
  {
    id: 6,
    category: 'values',
    badge: 'Conscious Sip',
    title: 'Farm-to-Cup & Eco-Minded',
    desc: 'Every sip respects our planet and the grower. We partner directly with sustainable farmers with fair-pay practices, using 100% plant-compostable cups and circular coffee waste.',
    highlights: ['100% Biodegradable Packaging', 'Coffee Grounds Repurposed into Compost'],
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
    icon: Leaf,
  }
]

const sensoryFeatures = [
  {
    icon: Flame,
    title: 'The Aroma',
    text: 'Crisp notes of toasted hazelnut, caramelized sugar, and rich dark Belgian cocoa roasting fresh every hour.'
  },
  {
    icon: Volume2,
    title: 'The Soundscape',
    text: 'A soft blend of vintage vinyl jazz, gentle steam wand hisses, and the comforting hum of good conversation.'
  },
  {
    icon: Sun,
    title: 'The Ambiance',
    text: 'Warm golden hues, lush green botanical corners, and soft architectural textures made to put your soul at ease.'
  },
  {
    icon: HeartHandshake,
    title: 'The Hospitality',
    text: 'Genuine, warm, and attentive baristas who remember your preferred grind, your smile, and your favorite table.'
  }
]

const row1 = [...experiences, ...experiences]

const ExperienceCard = ({ item }) => {
  const IconComponent = item.icon
  return (
    /* ── Outer phone shell ── */
    <div
      className='group relative flex-shrink-0 cursor-pointer h-[500px]'
      style={{ width: '270px' }}
    >
      {/* Side buttons — volume up/down */}
      <div className='absolute -left-[3px] top-20 w-[3px] h-7 bg-zinc-300 rounded-l-sm' />
      <div className='absolute -left-[3px] top-32 w-[3px] h-7 bg-zinc-300 rounded-l-sm' />
      {/* Side button — power */}
      <div className='absolute -right-[3px] top-24 w-[3px] h-10 bg-zinc-300 rounded-r-sm' />

      {/* Phone body — completely white, zero shadow, identical height */}
      <div
        className='relative bg-white rounded-[2.4rem] overflow-hidden border border-zinc-200 h-full flex flex-col'
        style={{ padding: '8px' }}
      >
        {/* Screen bezel */}
        <div className='relative bg-white rounded-[1.9rem] overflow-hidden border border-zinc-100 h-full flex flex-col'>

          {/* Notch bar */}
          <div className='relative flex items-center justify-center bg-white pt-2 pb-1.5 px-4 border-b border-zinc-100 shrink-0'>
            {/* left — time */}
            <span className='absolute left-4 text-[9px] font-semibold text-zinc-800'>9:41</span>
            {/* centre — pill notch */}
            <div className='w-20 h-4 bg-zinc-900 rounded-full flex items-center justify-center gap-1.5'>
              <div className='w-1.5 h-1.5 rounded-full bg-zinc-700' />
              <div className='w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700' />
            </div>
            {/* right — signal dots */}
            <div className='absolute right-4 flex items-center gap-0.5'>
              {[2,3,4,4].map((h,i)=>(
                <div key={i} style={{height:`${h*2}px`}} className='w-[2px] bg-zinc-800 rounded-full' />
              ))}
            </div>
          </div>

          {/* Hero image — fills top portion */}
          <div className='relative h-60 w-full overflow-hidden shrink-0'>
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
              loading='lazy'
            />
            {/* dark gradient overlay for text readability */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

            {/* Badge chip */}
            <div className='absolute top-3 left-3 bg-white text-zinc-900 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-zinc-200 flex items-center gap-1'>
              <IconComponent size={11} className='text-orange-500' />
              {item.badge}
            </div>

            {/* Title over image */}
            <div className='absolute bottom-0 left-0 right-0 p-3'>
              <h3 className='text-sm font-extrabold text-white leading-snug line-clamp-2'>
                {item.title}
              </h3>
            </div>
          </div>

          {/* Content panel — fills remaining height uniformly */}
          <div className='bg-white px-4 pt-3 pb-3 flex-1 flex flex-col justify-between'>
            <div>
              <p className='text-[11px] text-zinc-500 leading-relaxed line-clamp-2'>
                {item.desc}
              </p>

              <div className='mt-2.5 space-y-1.5'>
                {item.highlights.map((h, i) => (
                  <div key={i} className='flex items-center gap-1.5 text-[10px] font-semibold text-zinc-700'>
                    <CheckCircle2 size={11} className='text-orange-500 shrink-0' />
                    <span className='line-clamp-1'>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-2.5 flex items-center text-orange-500 font-bold text-[11px]'>
              <span className='group-hover:translate-x-1 transition-transform inline-flex items-center gap-1'>
                Experience at Focal <ArrowRight size={11} />
              </span>
            </div>
          </div>

          {/* Home indicator bar */}
          <div className='bg-white flex justify-center pb-2 pt-1 shrink-0'>
            <div className='w-16 h-1 bg-zinc-300 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

const Types = () => {
  const scrollRef = React.useRef(null)
  const [isPaused, setIsPaused] = React.useState(false)
  const isInteractingRef = React.useRef(false)
  const resumeTimerRef = React.useRef(null)

  const pauseTemporarily = () => {
    setIsPaused(true)
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      if (!isInteractingRef.current) {
        setIsPaused(false)
      }
    }, 3500)
  }

  React.useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animId
    const scrollStep = () => {
      if (!isPaused && el) {
        el.scrollLeft += 1
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2
        }
      }
      animId = requestAnimationFrame(scrollStep)
    }

    animId = requestAnimationFrame(scrollStep)
    return () => {
      cancelAnimationFrame(animId)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [isPaused])

  const scroll = (direction) => {
    pauseTemporarily()
    const el = scrollRef.current
    if (el) {
      const scrollAmount = 294 // 270px card + 24px gap
      if (direction === 'left' && el.scrollLeft <= 10) {
        el.scrollLeft += el.scrollWidth / 2
      }
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section
        id='Experience'
        className='relative w-full py-12 md:py-20 bg-white text-zinc-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden my-4 md:my-8'
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        <div className='relative z-10'>
          <div className='flex flex-col items-center text-center mb-10 md:mb-16 px-4 sm:px-8 md:px-12 lg:px-20'>
            <h2 className='text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 max-w-3xl leading-tight'>
              More than just a cup. <br className='hidden md:inline' />
              <span className='text-orange-500'>A feeling you carry with you.</span>
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mt-8 md:mt-10 w-full max-w-4xl p-4 sm:p-6 bg-white rounded-2xl border border-zinc-200'>
              <div className='text-center'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-500 flex items-center justify-center gap-1'>
                  4.9 <Star size={20} className='fill-orange-400 text-orange-400' />
                </div>
                <p className='text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1'>Guest Rating</p>
              </div>
              <div className='text-center'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900'>100%</div>
                <p className='text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1'>Single-Origin Beans</p>
              </div>
              <div className='text-center'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900'>Daily</div>
                <p className='text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1'>Oven-Fresh Bakes</p>
              </div>
              <div className='text-center'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900'>Gigabit</div>
                <p className='text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1'>High-Speed Wi-Fi</p>
              </div>
            </div>
          </div>

          {/* Cards Track with Left & Right navigation arrows */}
          <div className='relative w-full mb-6 py-2 px-2 sm:px-6'>
            {/* Left navigation arrow */}
            <button
              type='button'
              onClick={() => scroll('left')}
              aria-label='Scroll Left'
              className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-zinc-800 hover:text-orange-500 hover:bg-orange-50 border border-zinc-200 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer'
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right navigation arrow */}
            <button
              type='button'
              onClick={() => scroll('right')}
              aria-label='Scroll Right'
              className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-zinc-800 hover:text-orange-500 hover:bg-orange-50 border border-zinc-200 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer'
            >
              <ChevronRight size={24} />
            </button>

            {/* Scrolling track */}
            <div className='overflow-hidden w-full'>
              <div
                ref={scrollRef}
                className='flex gap-6 overflow-x-auto no-scrollbar py-3 px-6'
                onTouchStart={() => {
                  isInteractingRef.current = true
                  setIsPaused(true)
                }}
                onTouchEnd={() => {
                  isInteractingRef.current = false
                  pauseTemporarily()
                }}
                onMouseEnter={() => {
                  isInteractingRef.current = true
                  setIsPaused(true)
                }}
                onMouseLeave={() => {
                  isInteractingRef.current = false
                  setIsPaused(false)
                }}
              >
                {row1.map((item, idx) => (
                  <ExperienceCard key={`r1-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Mobile bottom navigation arrows for easy phone thumb tap */}
            <div className='flex items-center justify-center gap-3 mt-4 sm:hidden'>
              <button
                type='button'
                onClick={() => scroll('left')}
                aria-label='Previous card'
                className='w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 active:bg-orange-50 active:text-orange-500 active:scale-95 transition-all cursor-pointer'
              >
                <ChevronLeft size={20} />
              </button>
              <span className='text-xs font-semibold text-zinc-400 uppercase tracking-wider px-2'>
                Swipe or tap arrows
              </span>
              <button
                type='button'
                onClick={() => scroll('right')}
                aria-label='Next card'
                className='w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 active:bg-orange-50 active:text-orange-500 active:scale-95 transition-all cursor-pointer'
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>



          <div className='mt-20 mx-4 sm:mx-8 md:mx-12 lg:mx-20 p-8 md:p-12 rounded-3xl bg-white border border-zinc-200/80 shadow-sm'>
            <div className='text-center max-w-2xl mx-auto mb-10'>
              <span className='text-orange-500 text-sm font-bold tracking-widest uppercase'>Sensory Journey</span>
              <h3 className='text-3xl md:text-4xl font-extrabold text-zinc-900 mt-1'>
                Designed For All Five Senses
              </h3>
              <p className='text-zinc-500 text-base md:text-lg mt-2'>
                From the sound of the steam wand to the texture of raw ceramic cups, every detail is considered.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {sensoryFeatures.map((feature, idx) => {
                const SIcon = feature.icon
                return (
                  <div
                    key={idx}
                    className='p-6 rounded-2xl bg-stone-50 border border-zinc-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 flex flex-col items-start'
                  >
                    <div className='w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4'>
                      <SIcon size={24} />
                    </div>
                    <h4 className='text-xl font-bold text-zinc-900 mb-2'>{feature.title}</h4>
                    <p className='text-sm text-zinc-600 leading-relaxed'>{feature.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='mt-12 md:mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-20 p-6 sm:p-8 md:p-12 rounded-3xl bg-zinc-900 text-white relative overflow-hidden shadow-xl'>
            <div className='absolute -right-10 -bottom-10 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none' />
            <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8'>
              <div className='max-w-2xl'>
                <div className='flex items-center gap-1 text-orange-400 mb-3'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className='fill-orange-400' />
                  ))}
                  <span className='ml-2 text-sm text-zinc-400 font-medium'>Verified Guest Review</span>
                </div>
                <p className='text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-zinc-100'>
                  "Focal has redefined what a morning coffee run feels like. The aroma when you walk in, the kindness of the baristas, and that irresistible warm almond croissant make it the best part of my day."
                </p>
                <div className='mt-4 flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-orange-400 text-zinc-900 font-bold flex items-center justify-center text-sm'>
                    SK
                  </div>
                  <div>
                    <h5 className='font-bold text-base text-white'>Simran Kapoor</h5>
                    <p className='text-xs text-zinc-400'>Architect & Daily Regular</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto'>
                <a
                  href='#reserve'
                  className='px-8 py-3.5 rounded-full bg-orange-400 hover:bg-orange-500 text-zinc-950 font-bold text-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer'
                >
                  Reserve Your Spot
                </a>
                <a
                  href='#Menu'
                  className='px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-center border border-white/20 transition-all duration-300 cursor-pointer'
                >
                  View Handcrafted Menu
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Types
