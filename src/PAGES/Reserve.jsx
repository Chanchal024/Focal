import React from 'react'

const Reserve = () => {
  return (
    <div 
      id='reserve' 
      className='relative w-full min-h-screen p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden border-none text-center'
      style={{ fontFamily: "'Afacad', sans-serif" }}
    >
      {/* Background image on the left side with soft faded edges */}
      <div 
        className='absolute inset-y-0 left-150 w-full lg:w-3/5 bg-cover bg-center bg-no-repeat pointer-events-none'
        style={{ 
          backgroundImage: "url('/avocetgeo-bench-7607519.jpg')",
          maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 95%)'
        }}
      />

      {/* Centered Content */}
      <div className='relative mr-150 z-10 flex flex-col items-center justify-center max-w-3xl px-4'>
        <h2 className='text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-4'>
          Secure your spot in the lap of luxury!
        </h2>
        <p className='text-lg md:text-2xl text-black font-medium max-w-2xl mb-8 leading-relaxed'>
          Reserve your table at Openhouse today and let us indulge you!
        </p>
        <button className='rounded-full bg-orange-400 hover:bg-orange-500 px-8 py-3 text-lg font-semibold text-black transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5'>
          Book a Table
        </button>
      </div>
    </div>
  )
}

export default Reserve