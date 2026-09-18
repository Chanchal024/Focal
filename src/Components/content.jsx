import React from 'react'
import Menu from './menu'

const Content = () => {
  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'
         style={{ fontFamily: "'Afacad', sans-serif" }}>
      <h1 className='text-5xl md:text-7xl font-bold text-white animate-arrive'>
        Brewed with passion, served with love.
      </h1>
      <p className='mt-6 text-lg md:text-2xl text-white/80 max-w-2xl animate-arrive-delay'>
        Your cozy corner for great coffee, delicious bites, and beautiful moments.
      </p>
      <Menu/>
    </div>
  )
}

export default Content