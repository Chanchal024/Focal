import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const categoriesData = [
    {
        id: 1,
        num: '01',
        name: 'Local Grind',
        tag: 'Artisanal Single-Origin',
        desc: 'Freshly ground regional beans extracted to highlight rich crema, deep chocolate undertones, and toasted nut aromas.',
        image: '/menu/local-grind.jpg',
    },
    {
        id: 2,
        num: '02',
        name: 'Latte (Hot/Iced)',
        tag: 'Silky & Balanced',
        desc: 'Velvety microfoam hand-poured with bespoke rosetta art over intense espresso shots. Available steaming hot or chilled over ice.',
        image: '/menu/latte.jpg',
    },
    {
        id: 3,
        num: '03',
        name: 'Focal Froth',
        tag: 'Signature Specialty',
        desc: 'Our signature whipped aerated milk cloud crowning double-shot espresso with a fine dusting of Belgian cocoa.',
        image: '/menu/focal-froth.jpg',
    },
    {
        id: 4,
        num: '04',
        name: 'Pind Classics',
        tag: 'Heritage Recipe',
        desc: 'Traditional desi hand-beaten coffee infused with bruised green cardamom and slow-simmered whole milk.',
        image: '/menu/pind-classics.jpg',
    },
    {
        id: 5,
        num: '05',
        name: 'Cold Brew',
        tag: '18-Hour Slow Steep',
        desc: 'Steeped cold for 18 hours to unlock ultra-smooth, low-acidity notes. Poured over crystal ice with fresh citrus peel.',
        image: '/menu/cold-brew.jpg',
    },
    {
        id: 6,
        num: '06',
        name: 'House Crafts',
        tag: 'Botanical Mixology',
        desc: 'Innovative barista creations blending chilled espresso tonic, fresh rosemary sprigs, and dehydrated blood orange.',
        image: '/menu/house-crafts.jpg',
    },
]

const Catagories = () => {
    const [visibleItems, setVisibleItems] = useState(new Set())
    const [headerVisible, setHeaderVisible] = useState(false)
    const headerRef = useRef(null)
    const itemRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === headerRef.current) {
                            setHeaderVisible(true)
                        } else {
                            const attr = entry.target.getAttribute('data-index')
                            if (attr !== null) {
                                setVisibleItems((prev) => new Set([...prev, Number(attr)]))
                            }
                        }
                    }
                })
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px 40px 0px',
            }
        )

        if (headerRef.current) observer.observe(headerRef.current)
        itemRefs.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section
            className='relative w-full min-h-screen bg-white text-zinc-900 px-6 pt-8 pb-20 md:px-12 lg:px-20'
            style={{ fontFamily: "'Afacad', sans-serif" }}
        >
            <div className='relative z-10 max-w-7xl mx-auto'>
                {/* Header with scroll arrival animation */}
                <div
                    ref={headerRef}
                    className={`flex flex-col items-center text-center mb-16 transition-all duration-800 ease-out ${
                        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className='text-orange-400 text-5xl md:text-6xl font-extrabold tracking-widest mb-3 uppercase'>
                        OUR MENU
                    </h2>

                    <p className='mt-2 text-lg md:text-2xl text-zinc-600 max-w-2xl leading-relaxed font-medium'>
                        Every roast, pour, and froth is handcrafted with uncompromised precision and passion.
                    </p>
                </div>

                {/* 6 Category Cards Grid with Glassmorphism */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {categoriesData.map((category, index) => {
                        const isVisible = visibleItems.has(index)
                        const staggerDelay = (index % 3) * 120

                        return (
                            <div
                                key={category.id}
                                ref={(el) => (itemRefs.current[index] = el)}
                                data-index={index}
                                style={{ transitionDelay: `${staggerDelay}ms` }}
                                className={`group relative bg-white/80 hover:bg-white backdrop-blur-xl border border-zinc-200/80 hover:border-orange-300/90 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(249,115,22,0.14)] rounded-3xl p-5 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer hover:-translate-y-2 ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 translate-y-16 scale-[0.97]'
                                }`}
                            >
                                <div>
                                    {/* Photo Container */}
                                    <div className='relative w-full h-64 rounded-2xl overflow-hidden mb-5 bg-zinc-100 shadow-sm'>
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                                            loading='lazy'
                                        />

                                        {/* Glass Badge */}
                                        <div className='absolute top-3 left-3 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-white border border-white/25 shadow-sm'>
                                            {category.tag}
                                        </div>

                                        {/* Number index badge */}
                                        <div className='absolute top-3 right-3 bg-white/85 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-zinc-900 border border-white/60 shadow-sm'>
                                            {category.num}
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className='text-2xl md:text-3xl font-extrabold text-zinc-900 group-hover:text-orange-600 transition-colors duration-300'>
                                        {category.name}
                                    </h3>

                                    <p className='mt-2.5 text-zinc-600 text-base md:text-lg leading-relaxed font-medium'>
                                        {category.desc}
                                    </p>
                                </div>

                                {/* Footer action button */}
                                <div className='mt-6 pt-4 border-t border-zinc-200/70 flex items-center justify-between'>
                                    <span className='text-xs text-zinc-400 group-hover:text-zinc-700 uppercase tracking-widest font-bold transition-colors'>
                                        Explore Type
                                    </span>

                                    <div className='w-9 h-9 rounded-full bg-orange-50 border border-orange-200/60 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 shadow-sm'>
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Catagories