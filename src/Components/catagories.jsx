import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const categoriesData = [
    {
        id: 1, num: '01', name: 'Local Grind',
        tag: 'Artisanal Single-Origin',
        desc: 'Freshly ground regional beans extracted to highlight rich crema, deep chocolate undertones, and toasted nut aromas.',
        image: '/menu/local-grind.jpg',
    },
    {
        id: 2, num: '02', name: 'Latte (Hot/Iced)',
        tag: 'Silky & Balanced',
        desc: 'Velvety microfoam hand-poured with bespoke rosetta art over intense espresso shots. Available steaming hot or chilled over ice.',
        image: '/menu/latte.jpg',
    },
    {
        id: 3, num: '03', name: 'Focal Froth',
        tag: 'Signature Specialty',
        desc: 'Our signature whipped aerated milk cloud crowning double-shot espresso with a fine dusting of Belgian cocoa.',
        image: '/menu/focal-froth.jpg',
    },
    {
        id: 4, num: '04', name: 'Pind Classics',
        tag: 'Heritage Recipe',
        desc: 'Traditional desi hand-beaten coffee infused with bruised green cardamom and slow-simmered whole milk.',
        image: '/menu/pind-classics.jpg',
    },
    {
        id: 5, num: '05', name: 'Cold Brew',
        tag: '18-Hour Slow Steep',
        desc: 'Steeped cold for 18 hours to unlock ultra-smooth, low-acidity notes. Poured over crystal ice with fresh citrus peel.',
        image: '/menu/cold-brew.jpg',
    },
    {
        id: 6, num: '06', name: 'House Crafts',
        tag: 'Botanical Mixology',
        desc: 'Innovative barista creations blending chilled espresso tonic, fresh rosemary sprigs, and dehydrated blood orange.',
        image: '/menu/house-crafts.jpg',
    },
]

// Pure component — GSAP targets .menu-card via batch() in initScroll.js
// No IntersectionObserver, no React animation state — single source of truth
const Catagories = () => {
    return (
        <section
            className='relative w-full min-h-screen bg-white text-zinc-900 px-6 pt-8 pb-20 md:px-12 lg:px-20'
            style={{ fontFamily: "'Afacad', sans-serif" }}
        >
            <div className='relative z-10 max-w-7xl mx-auto'>

                {/* Section Header — GSAP reveal('#menu h2') targets this */}
                <div className='flex flex-col items-center text-center mb-16'>
                    <h2 className='text-orange-400 text-5xl md:text-6xl font-extrabold tracking-widest mb-3 uppercase'>
                        OUR MENU
                    </h2>
                    <p className='mt-2 text-lg md:text-2xl text-zinc-600 max-w-2xl leading-relaxed font-medium'>
                        Every roast, pour, and froth is handcrafted with uncompromised precision and passion.
                    </p>
                </div>

                {/* Cards grid — each card has class menu-card, GSAP batch handles stagger */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {categoriesData.map((category) => (
                        <div
                            key={category.id}
                            className='menu-card group relative bg-white/80 hover:bg-white backdrop-blur-xl border border-zinc-200/80 hover:border-orange-300/90 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(249,115,22,0.14)] rounded-3xl p-5 transition-[border-color,box-shadow,transform] duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-2'
                        >
                            <div>
                                {/* Photo */}
                                <div className='relative w-full h-64 rounded-2xl overflow-hidden mb-5 bg-zinc-100 shadow-sm'>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                                        loading='lazy'
                                    />
                                    <div className='absolute top-3 left-3 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-white border border-white/25 shadow-sm'>
                                        {category.tag}
                                    </div>
                                    <div className='absolute top-3 right-3 bg-white/85 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-zinc-900 border border-white/60 shadow-sm'>
                                        {category.num}
                                    </div>
                                </div>

                                <h3 className='text-2xl md:text-3xl font-extrabold text-zinc-900 group-hover:text-orange-600 transition-colors duration-300'>
                                    {category.name}
                                </h3>
                                <p className='mt-2.5 text-zinc-600 text-base md:text-lg leading-relaxed font-medium'>
                                    {category.desc}
                                </p>
                            </div>

                            {/* Footer */}
                            <div className='mt-6 pt-4 border-t border-zinc-200/70 flex items-center justify-between'>
                                <span className='text-xs text-zinc-400 group-hover:text-zinc-700 uppercase tracking-widest font-bold transition-colors'>
                                    Explore Type
                                </span>
                                <div className='w-9 h-9 rounded-full bg-orange-50 border border-orange-200/60 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 shadow-sm'>
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Catagories