import React from 'react'

// Pure component — GSAP targets .s2-image and .s2-content via slide() in initScroll.js
const S2 = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-10 py-10 relative'>
      <div className='flex flex-col lg:flex-row items-center w-full max-w-6xl gap-8 lg:gap-12'>

        {/* s2-image — GSAP slides in from left */}
        <div className='s2-image w-full lg:w-1/2 flex-shrink-0'>
          <img
            src='/DSC06860.JPG'
            alt='Our café'
            className='w-full h-[320px] sm:h-[450px] lg:h-[600px] object-cover rounded-3xl shadow-sm'
          />
        </div>

        {/* s2-content — GSAP slides in from right */}
        <div className='s2-content w-full lg:w-1/2 text-center lg:text-left' style={{ fontFamily: "'Afacad', sans-serif" }}>
          <h3 className='text-orange-400 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest mb-4'>OUR STORY</h3>
          <p className='text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6'>
            Every great café begins with a simple idea — to create a place where good coffee and good moments come together.
          </p>
          <p className='text-base sm:text-lg md:text-xl leading-relaxed mb-6'>
            Our café was born from a love for freshly brewed coffee, comforting food, and the joy of bringing people together. We wanted to create more than just a place to grab a quick cup; we wanted to create a space where you can slow down, catch up with friends, work on your dreams, or simply enjoy a quiet moment with yourself.
          </p>
          <a href='#Menu' className='inline-block bg-orange-400 text-white px-6 py-3 rounded-xl hover:bg-orange-500 transition-colors font-bold text-base shadow-sm'>
            Explore Our Menu
          </a>

          {/* Signatures in horizontal format */}
          <div className='mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-6 sm:gap-10'>
            <img
              src='/sig1 (1).png'
              alt='Founder Signature 1'
              className='h-12 sm:h-16 md:h-20 w-auto object-contain max-w-[130px] sm:max-w-[170px]'
            />
            <img
              src='/sig1 (2).png'
              alt='Founder Signature 2'
              className='h-12 sm:h-16 md:h-20 w-auto object-contain max-w-[130px] sm:max-w-[170px]'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default S2