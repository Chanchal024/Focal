import React, { useState, useEffect } from 'react'
import { ArrowUpRight, X, Coffee, Sparkles, Flame, Check } from 'lucide-react'

const categoriesData = [
    {
        id: 1, num: '01', name: 'Local Grind',
        tag: 'Artisanal Single-Origin',
        desc: 'Freshly ground regional beans extracted to highlight rich crema, deep chocolate undertones, and toasted nut aromas.',
        image: '/menu/local-grind.jpg',
        items: [
            { name: 'Americano', price: '₹140', desc: 'Espresso stretched with hot water, bold and refined' },
            { name: 'Cappuccino', price: '₹150', desc: 'Rich espresso topped with a dense cushion of microfoam' },
            { name: 'Mochaccino', price: '₹180', desc: 'Espresso blended with premium Belgian dark chocolate' },
            { name: 'Pour Over', price: '₹180', desc: 'Precision manual drip extracting delicate floral notes' },
        ]
    },
    {
        id: 2, num: '02', name: 'Latte (Hot/Iced)',
        tag: 'Silky & Balanced',
        desc: 'Velvety microfoam hand-poured with bespoke rosetta art over intense espresso shots. Available steaming hot or chilled over ice.',
        image: '/menu/latte.jpg',
        items: [
            { name: 'Cafe Latte', price: '₹160', desc: 'Smooth espresso harmonized with steamed milk and delicate foam' },
            { name: 'Vietnamese Latte', price: '₹170', desc: 'Bold drip brew sweetened with rich condensed milk' },
            { name: 'Thai Latte', price: '₹170', desc: 'Spiced aromatic brew balanced with creamy sweet milk' },
            { name: 'Mocha Latte', price: '₹180', desc: 'Double espresso layered with artisanal chocolate and steamed milk' },
            { name: 'White Latte', price: '₹180', desc: 'Creamy espresso infusion with silky white chocolate notes' },
            { name: 'Pistachio Latte', price: '₹200', desc: 'Earthy roast blended with house-made roasted pistachio paste' },
            { name: 'Matcha Latte', price: '₹210', desc: 'Ceremonial grade Japanese Uji matcha whisked with velvety milk' },
        ]
    },
    {
        id: 3, num: '03', name: 'Focal Froth',
        tag: 'Signature Specialty',
        desc: 'Our signature whipped aerated milk cloud crowning double-shot espresso with a fine dusting of Belgian cocoa.',
        image: '/menu/focal-froth.jpg',
        items: [
            { name: 'Coffee Jolt Frappe', price: '₹200', desc: 'Frosty blitzed espresso with creamy decadent foam' },
            { name: 'Belgian Dark Chocolate', price: '₹210', desc: 'Melted pure Belgian cocoa whipped into a velvety chilled froth' },
            { name: 'Cookies & Cream Dream', price: '₹200', desc: 'Crushed artisan cookies folded with chilled sweet cream' },
            { name: 'Cold Coffee', price: '₹190', desc: 'Classic thick and frothy iced coffee, rich and energizing' },
            { name: 'Mango', price: '₹200', desc: 'Sun-ripened Alphonso mango pulp blended with sweet chilled cream' },
            { name: 'Strawberry', price: '₹200', desc: 'Fresh mountain strawberry reduction folded into silky froth' },
            { name: 'Caramelised Banana', price: '₹210', desc: 'Slow-caramelized banana puree whipped with golden foam' },
        ]
    },
    {
        id: 4, num: '04', name: 'Pind Classics',
        tag: 'Heritage Recipe',
        desc: 'Traditional desi hand-beaten coffee infused with bruised green cardamom and slow-simmered whole milk.',
        image: '/menu/pind-classics.jpg',
        items: [
            { name: 'Sweet and Salt Lassi', price: '₹180', desc: 'Slow-churned creamy heritage yogurt laced with bruised cardamom & rock salt' },
        ],
        addOns: [
            { name: 'Icecream', price: '₹50' },
            { name: 'Chocolate Sauce', price: '₹50' },
            { name: 'Espresso Shot', price: '₹50' },
        ]
    },
    {
        id: 5, num: '05', name: 'Cold Brew',
        tag: '18-Hour Slow Steep',
        desc: 'Steeped cold for 18 hours to unlock ultra-smooth, low-acidity notes. Poured over crystal ice with fresh citrus peel.',
        image: '/menu/cold-brew.jpg',
        items: [
            { name: 'Cold Brew Coffee', price: '₹180', desc: '18-hour slow-steeped single origin, naturally sweet and smooth' },
            { name: 'Vietnamese Cold Brew', price: '₹190', desc: 'Slow-steeped concentrate paired with sweetened condensed milk' },
            { name: 'Citrus Cold Brew', price: '₹190', desc: 'Chilled brew shaken with fresh Valencia orange juice & rosemary' },
            { name: 'Coconut Cold Brew', price: '₹180', desc: 'Smooth steep layered over tender coconut water and crystal ice' },
            { name: 'Iced Tea Kombucha', price: '₹180', desc: 'Artisanal probiotic fermented black tea, tart and sparkling' },
            { name: 'Fermented Ginger Kombucha', price: '₹150', desc: 'Zesty cold-pressed ginger brewed with sparkling live cultures' },
            { name: 'Iced Tea', price: '₹150', desc: 'Hand-picked Nilgiri whole-leaf tea brewed crisp over lemon ice' },
        ]
    },
    {
        id: 6, num: '06', name: 'House Crafts',
        tag: 'Botanical Mixology',
        desc: 'Innovative barista creations blending chilled espresso tonic, fresh rosemary sprigs, and dehydrated blood orange.',
        image: '/menu/house-crafts.jpg',
        items: [
            { name: 'Caramalised Banana Latte/Matcha', price: '₹199', desc: 'Torched banana compote fused with your choice of espresso or matcha' },
            { name: 'Maple Sea Salt Latte/Matcha', price: '₹199', desc: 'Pure Canadian maple syrup, flaky Maldon sea salt, and steamed milk' },
            { name: 'Cherry Vanilla Latte/Matcha', price: '₹199', desc: 'Wild cherry infusion paired with Madagascar bourbon vanilla bean' },
            { name: 'Pea Tea Latte/Matcha', price: '₹199', desc: 'Vibrant butterfly blue pea blossom infused with silky milk foam' },
            { name: 'Strawberry Latte/Matcha', price: '₹199', desc: 'Muddled ripe strawberries swirled with microfoam and matcha/espresso' },
        ]
    },
]

// Pure component — GSAP targets .menu-card via batch() in initScroll.js
// No IntersectionObserver, no React animation state for GSAP — single source of truth
const Catagories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const openCategory = (category) => {
        setSelectedCategory(category)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsOpen(true)
            })
        })
    }

    const closeCategory = () => {
        setIsOpen(false)
        setTimeout(() => {
            setSelectedCategory(null)
        }, 500)
    }

    // Lock body scroll when the bottom pop-up is open
    useEffect(() => {
        if (selectedCategory) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedCategory])

    // Handle ESC key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && selectedCategory) {
                closeCategory()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedCategory])

    return (
        <section
            className='relative w-full min-h-screen bg-white text-zinc-900 px-4 sm:px-8 md:px-12 lg:px-20 pt-8 pb-16 md:pb-20'
            style={{ fontFamily: "'Afacad', sans-serif" }}
        >
            <div className='relative z-10 max-w-7xl mx-auto'>

                {/* Section Header — GSAP reveal('#menu h2') targets this */}
                <div className='flex flex-col items-center text-center mb-10 md:mb-16'>
                    <h2 className='text-orange-400 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-widest mb-3 uppercase'>
                        OUR MENU
                    </h2>
                    <p className='mt-2 text-base sm:text-lg md:text-2xl text-zinc-600 max-w-2xl leading-relaxed font-medium'>
                        Every roast, pour, and froth is handcrafted with uncompromised precision and passion.
                    </p>
                </div>

                {/* Cards grid — each card has class menu-card, GSAP batch handles stagger */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {categoriesData.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => openCategory(category)}
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
                                    View Selection ({category.items.length} items)
                                </span>
                                <div className='w-9 h-9 rounded-full bg-orange-50 border border-orange-200/60 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 shadow-sm'>
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation Pop-Up Modal */}
            {selectedCategory && (
                <div className='fixed inset-0 z-50 flex items-end justify-center'>
                    {/* Backdrop with Fade Transition */}
                    <div
                        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity ease-out ${
                            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        style={{
                            transitionDuration: isOpen ? '1000ms' : '500ms'
                        }}
                        onClick={closeCategory}
                    />

                    {/* Bottom Sheet Modal with 0.5s Delay & 1s Duration Spring Slide Transition */}
                    <div
                        className={`relative z-10 w-full max-w-4xl max-h-[88vh] bg-white rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border-t border-zinc-200 transform transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isOpen ? 'translate-y-0' : 'translate-y-full'
                        }`}
                        style={{
                            transitionDuration: isOpen ? '1000ms' : '500ms',
                            transitionDelay: isOpen ? '500ms' : '0ms'
                        }}
                    >
                        
                        {/* Drag Handle Bar */}
                        <div
                            className='pt-3.5 pb-2 flex justify-center cursor-pointer select-none'
                            onClick={closeCategory}
                        >
                            <div className='w-14 h-1.5 bg-zinc-300 hover:bg-zinc-400 rounded-full transition-colors' />
                        </div>

                        {/* Pop-Up Header */}
                        <div className='px-6 md:px-10 py-4 border-b border-zinc-100 flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img
                                    src={selectedCategory.image}
                                    alt={selectedCategory.name}
                                    className='w-14 h-14 rounded-2xl object-cover shadow-sm'
                                />
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <span className='px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider'>
                                            {selectedCategory.tag}
                                        </span>
                                        <span className='text-xs font-bold text-zinc-400'>
                                            {selectedCategory.num}
                                        </span>
                                    </div>
                                    <h3 className='text-2xl md:text-3xl font-extrabold text-zinc-900 mt-0.5'>
                                        {selectedCategory.name}
                                    </h3>
                                </div>
                            </div>

                            <button
                                onClick={closeCategory}
                                className='w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 flex items-center justify-center transition-colors cursor-pointer'
                                aria-label='Close menu pop-up'
                            >
                                <X size={20} />
                            </button>
                        </div>


                        {/* Scrollable Items List */}
                        <div className='px-6 md:px-10 py-6 overflow-y-auto flex-1 divide-y divide-zinc-100'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-4'>
                                {selectedCategory.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className='p-4 rounded-2xl bg-stone-50/70 hover:bg-orange-50/50 border border-zinc-100 hover:border-orange-200/80 transition-all duration-200 flex items-start justify-between gap-4 group'
                                    >
                                        <div className='flex-1'>
                                            <div className='flex items-center gap-2'>
                                                <h4 className='text-lg md:text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors'>
                                                    {item.name}
                                                </h4>
                                            </div>
                                            {item.desc && (
                                                <p className='text-xs md:text-sm text-zinc-500 mt-1 leading-relaxed'>
                                                    {item.desc}
                                                </p>
                                            )}
                                        </div>
                                        <div className='shrink-0'>
                                            <span className='px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-extrabold text-base shadow-2xs'>
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Add Ons Section (e.g. for Pind Classics) */}
                            {selectedCategory.addOns && selectedCategory.addOns.length > 0 && (
                                <div className='pt-6 mt-4'>
                                    <div className='flex items-center gap-2 mb-4'>
                                        <Sparkles size={18} className='text-orange-500' />
                                        <h4 className='text-lg font-extrabold text-zinc-900 uppercase tracking-wider'>
                                            Custom Add-Ons
                                        </h4>
                                    </div>
                                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                                        {selectedCategory.addOns.map((addon, aIdx) => (
                                            <div
                                                key={aIdx}
                                                className='p-3.5 rounded-xl bg-orange-50/60 border border-orange-100 flex items-center justify-between'
                                            >
                                                <span className='font-bold text-zinc-800 text-sm'>
                                                    {addon.name}
                                                </span>
                                                <span className='text-orange-600 font-extrabold text-sm'>
                                                    +{addon.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className='px-6 md:px-10 py-4 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between'>
                            <p className='text-xs md:text-sm text-zinc-500 font-medium'>
                                Prices are inclusive of all taxes. Freshly handcrafted upon order.
                            </p>
                            <a
                                href='#reserve'
                                onClick={closeCategory}
                                className='px-5 py-2 rounded-full bg-zinc-900 hover:bg-orange-500 text-white font-bold text-sm transition-colors cursor-pointer shadow-sm'
                            >
                                Reserve a Table
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Catagories