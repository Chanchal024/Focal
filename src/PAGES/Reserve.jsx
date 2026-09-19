import React from 'react'

const Reserve = () => {
  return (
    <div 
      id='reserve' 
      className='relative w-full min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-12 flex items-center justify-center md:justify-start overflow-hidden border-none'
      style={{ fontFamily: "'Afacad', sans-serif" }}
    >
      {/* Background image pinned to the right side */}
      <div 
        className='absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-3/5 bg-cover bg-center bg-no-repeat pointer-events-none opacity-25 md:opacity-90 lg:opacity-100'
        style={{ 
          backgroundImage: "url('/avocetgeo-bench-7607519.jpg')",
          maskImage: 'radial-gradient(ellipse 70% 70% at 70% 50%, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 70% 50%, black 30%, transparent 85%)'
        }}
      />

      {/* Content — Firmly on the left side of the page */}
      <div className='relative z-10 w-full md:w-1/2 lg:max-w-xl flex flex-col items-center md:items-start text-center md:text-left'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight mb-4 leading-tight'>
          Secure your spot in the lap of luxury!
        </h2>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-black font-medium max-w-lg mb-8 leading-relaxed'>
          Reserve your table at Openhouse today and let us indulge you!
        </p>
        <a 
          href='#contact' 
          className='rounded-full bg-orange-400 hover:bg-orange-500 px-8 py-3.5 text-base sm:text-lg font-semibold text-black transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5'
        >
          Book a Table
        </a>
      </div>
    </div>
  )
}

export default Reserve