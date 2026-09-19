import React, { useState } from 'react'
import {
  Coffee,
  Sparkles,
  Wifi,
  Croissant,
  Music,
  HeartHandshake,
  Award,
  Leaf,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Sun,
  Flame,
  Volume2
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
    color: 'from-amber-500/20 to-orange-500/10'
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
    color: 'from-orange-500/20 to-amber-600/10'
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
    color: 'from-yellow-500/20 to-orange-500/10'
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
    color: 'from-amber-600/20 to-zinc-600/10'
  },
  {
    id: 5,
    category: 'culture',
    badge: 'Community Vibe',
    title: 'Workshops & Acoustic Evenings',
    desc: 'Focal is more than a café — it’s a living cultural lounge. Join our weekend barista cupping masterclasses, casual book exchanges, and intimate live acoustic listening sessions.',
    highlights: [ 'Live Ambient Guitar & Vinyl Nights', 'Community Book & Art Corner'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    icon: Music,
    color: 'from-orange-400/20 to-yellow-600/10'
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
    color: 'from-emerald-500/20 to-teal-600/10'
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

const Types = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filterOptions = [
    { key: 'all', label: 'All Experiences' },
    { key: 'craft', label: 'Coffee & Craft' },
    { key: 'ambiance', label: 'Ambiance' },
    { key: 'bakery', label: 'Fresh Bakery' },
    { key: 'work', label: 'Work Friendly' },
    { key: 'culture', label: 'Community' }
  ]

  const filteredItems = activeFilter === 'all'
    ? experiences
    : experiences.filter(item => item.category === activeFilter)

  return (
    <section
      id='Experience'
      className='relative w-full py-20 px-6 md:px-12 lg:px-20 bg-white text-zinc-900 rounded-[2.5rem] overflow-hidden my-8'
      style={{ fontFamily: "'Afacad', sans-serif" }}
    >
      {/* Subtle decorative background gradient circles */}
      <div className='absolute -top-40 -left-40 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none' />

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='flex flex-col items-center text-center mb-16'>
          <h2 className='text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 max-w-3xl leading-tight'>
            More than just a cup. <br className='hidden md:inline' />
            <span className='text-orange-500'>A feeling you carry with you.</span>
          </h2>
          {/* Quick Metrics Bar */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 w-full max-w-4xl p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-zinc-200/80 shadow-sm'>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-extrabold text-orange-500 flex items-center justify-center gap-1'>
                4.9 <Star size={22} className='fill-orange-400 text-orange-400' />
              </div>
              <p className='text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1'>Guest Rating</p>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-extrabold text-zinc-900'>100%</div>
              <p className='text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1'>Single-Origin Beans</p>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-extrabold text-zinc-900'>Daily</div>
              <p className='text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1'>Oven-Fresh Bakes</p>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-extrabold text-zinc-900'>Gigabit</div>
              <p className='text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1'>High-Speed Wi-Fi</p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className='flex flex-wrap items-center justify-center gap-2 mt-10'>
            {filterOptions.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-base font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === f.key
                    ? 'bg-zinc-900 text-white shadow-md scale-105'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredItems.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.id}
                className='group relative bg-white rounded-3xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5'
              >
                {/* Image Container with dynamic hover zoom */}
                <div className='relative h-60 w-full overflow-hidden bg-zinc-100'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />

                  {/* Badge */}
                  <div className='absolute top-4 left-4 bg-white/95 backdrop-blur-md text-zinc-900 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5'>
                    <IconComponent size={14} className='text-orange-500' />
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div className='p-6 md:p-8 flex-1 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-2xl font-bold text-zinc-900 group-hover:text-orange-500 transition-colors leading-snug'>
                      {item.title}
                    </h3>
                    <p className='mt-3 text-base text-zinc-600 leading-relaxed'>
                      {item.desc}
                    </p>

                    {/* Feature Highlights */}
                    <div className='mt-6 space-y-2.5 pt-4 border-t border-zinc-100'>
                      {item.highlights.map((h, i) => (
                        <div key={i} className='flex items-center gap-2.5 text-sm font-semibold text-zinc-700'>
                          <CheckCircle2 size={16} className='text-orange-500 shrink-0' />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-6 pt-4 flex items-center justify-between text-orange-500 font-bold text-sm'>
                    <span className='group-hover:translate-x-1 transition-transform inline-flex items-center gap-1'>
                      Experience this at Focal
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Sensory Experience Row */}
        <div className='mt-20 p-8 md:p-12 rounded-3xl bg-white border border-zinc-200/80 shadow-sm'>
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

        {/* Ambient Guest Quote Spotlight */}
        <div className='mt-16 p-8 md:p-12 rounded-3xl bg-zinc-900 text-white relative overflow-hidden shadow-xl'>
          <div
            className='absolute -right-10 -bottom-10 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none'
          />
          <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='max-w-2xl'>
              <div className='flex items-center gap-1 text-orange-400 mb-3'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className='fill-orange-400' />
                ))}
                <span className='ml-2 text-sm text-zinc-400 font-medium'>Verified Guest Review</span>
              </div>
              <p className='text-xl md:text-2xl font-light italic leading-relaxed text-zinc-100'>
                “Focal has redefined what a morning coffee run feels like. The aroma when you walk in, the kindness of the baristas, and that irresistible warm almond croissant make it the best part of my day.”
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
  )
}

export default Types