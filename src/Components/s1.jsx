import React from 'react'
import { MapPin, Clock, CalendarCheck } from 'lucide-react'

// Pure component — GSAP targets .s1-card via ScrollTrigger.batch in initScroll.js
const S1 = () => {
  return (
    <div className='w-full py-20'>
      <div className='flex justify-between mx-auto w-[82%] text-[2rem] font-extrabold max-w-5xl'>

        <div className='s1-card flex flex-col items-center gap-2'>
          <MapPin size={36} className='text-orange-400' />
          <h2>Locate Us</h2>
          <p className='text-xl font-bold text-black'>123 Coffee Lane, Downtown</p>
        </div>

        <div className='s1-card flex flex-col items-center gap-2'>
          <Clock size={36} className='text-orange-400' />
          <h2>Open Hours</h2>
          <p className='text-xl font-bold text-black'>Mon – Sat, 8AM – 10PM</p>
        </div>

        <div className='s1-card flex flex-col items-center gap-2'>
          <CalendarCheck size={36} className='text-orange-400' />
          <h2>Reservation</h2>
          <p className='text-xl font-bold text-black'>Book your table in advance</p>
        </div>

      </div>
    </div>
  )
}

export default S1