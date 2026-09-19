import React from 'react'
import Menu from './menu'

const Content = () => {
  return (
    <div
      className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'
      style={{ fontFamily: "'Afacad', sans-serif" }}
    >
      {/* hero-title — GSAP page-load fade-up */}
      <h1 className='hero-title text-3xl sm:text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight'>
        Brewed with passion, served with love.
      </h1>

      {/* hero-sub — GSAP page-load fade-up with delay */}
      <p className='hero-sub mt-4 md:mt-6 text-base sm:text-lg md:text-2xl text-white/85 max-w-2xl px-2'>
        Your cozy corner for great coffee, delicious bites, and beautiful moments.
      </p>

      <Menu />
    </div>
  )
}

export default Content