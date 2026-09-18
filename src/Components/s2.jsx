import React from 'react'

// Pure component — GSAP targets .s2-image and .s2-content via slide() in initScroll.js
const S2 = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center px-10 py-5 relative'>
      <div className='flex items-center w-full max-w-6xl gap-12'>

        {/* s2-image — GSAP slides in from left */}
        <div className='s2-image w-1/2 flex-shrink-0'>
          <img
            src='/DSC06860.JPG'
            alt='Our café'
            className='w-full h-[800px] object-cover rounded-3xl'
            style={{
              maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
            }}
          />
        </div>

        {/* s2-content — GSAP slides in from right */}
        <div className='s2-content w-1/2' style={{ fontFamily: "'Afacad', sans-serif" }}>
          <h3 className='text-orange-400 text-5xl font-extrabold tracking-widest mb-4'>OUR STORY</h3>
          <p className='text-xl leading-relaxed mb-6'>
            Every great café begins with a simple idea — to create a place where good coffee and good moments come together.
          </p>
          <p className='text-xl leading-relaxed mb-6'>
            Our café was born from a love for freshly brewed coffee, comforting food, and the joy of bringing people together. We wanted to create more than just a place to grab a quick cup; we wanted to create a space where you can slow down, catch up with friends, work on your dreams, or simply enjoy a quiet moment with yourself.
          </p>
          <button className='bg-orange-400 text-white px-4 py-2 rounded-xl hover:bg-orange-500 transition-colors'>
            Explore Our Menu
          </button>
          <p className='text-2xl font-bold mt-5'>
            Come for the coffee. Stay for the moments. Leave with a memory.
          </p>
        </div>

      </div>
    </div>
  )
}

export default S2