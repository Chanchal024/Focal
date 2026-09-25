import React from 'react'
import { MapPin, Clock, CalendarCheck } from 'lucide-react'

// Pure component — GSAP targets .s1-card via ScrollTrigger.batch in initScroll.js
const S1 = () => {
  return (
    <div className='w-full py-8 sm:py-12 md:py-20'>
      <div className='flex flex-row items-stretch md:items-center justify-between mx-auto w-[96%] sm:w-[90%] md:w-[82%] gap-2 sm:gap-3 md:gap-4 text-center max-w-5xl'>

        <div className='s1-card flex-1 min-w-0 flex flex-col items-center justify-start md:justify-center gap-1 sm:gap-2 md:gap-2 p-2 min-[380px]:p-2.5 sm:p-4 md:p-0 rounded-2xl md:rounded-none bg-orange-50/50 md:bg-transparent border border-orange-100/80 md:border-none shadow-xs md:shadow-none'>
          <div className='p-1.5 sm:p-2 md:p-0 rounded-xl md:rounded-none bg-orange-100/70 md:bg-transparent text-orange-500 md:text-orange-400'>
            <MapPin className='w-4.5 h-4.5 min-[360px]:w-5 min-[360px]:h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 shrink-0' />
          </div>
          <h2 className='text-[11px] min-[360px]:text-xs sm:text-base md:text-[2rem] font-extrabold text-neutral-900 leading-tight'>Locate Us</h2>
          <p className='text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-xl font-medium sm:font-semibold md:font-bold text-neutral-700 md:text-black leading-tight sm:leading-snug md:leading-normal'>123 Coffee Lane, Downtown</p>
        </div>

        <div className='s1-card flex-1 min-w-0 flex flex-col items-center justify-start md:justify-center gap-1 sm:gap-2 md:gap-2 p-2 min-[380px]:p-2.5 sm:p-4 md:p-0 rounded-2xl md:rounded-none bg-orange-50/50 md:bg-transparent border border-orange-100/80 md:border-none shadow-xs md:shadow-none'>
          <div className='p-1.5 sm:p-2 md:p-0 rounded-xl md:rounded-none bg-orange-100/70 md:bg-transparent text-orange-500 md:text-orange-400'>
            <Clock className='w-4.5 h-4.5 min-[360px]:w-5 min-[360px]:h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 shrink-0' />
          </div>
          <h2 className='text-[11px] min-[360px]:text-xs sm:text-base md:text-[2rem] font-extrabold text-neutral-900 leading-tight'>Open Hours</h2>
          <p className='text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-xl font-medium sm:font-semibold md:font-bold text-neutral-700 md:text-black leading-tight sm:leading-snug md:leading-normal'>Mon – Sat, 8AM – 10PM</p>
        </div>

        <div className='s1-card flex-1 min-w-0 flex flex-col items-center justify-start md:justify-center gap-1 sm:gap-2 md:gap-2 p-2 min-[380px]:p-2.5 sm:p-4 md:p-0 rounded-2xl md:rounded-none bg-orange-50/50 md:bg-transparent border border-orange-100/80 md:border-none shadow-xs md:shadow-none'>
          <div className='p-1.5 sm:p-2 md:p-0 rounded-xl md:rounded-none bg-orange-100/70 md:bg-transparent text-orange-500 md:text-orange-400'>
            <CalendarCheck className='w-4.5 h-4.5 min-[360px]:w-5 min-[360px]:h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 shrink-0' />
          </div>
          <h2 className='text-[11px] min-[360px]:text-xs sm:text-base md:text-[2rem] font-extrabold text-neutral-900 leading-tight'>Reservation</h2>
          <p className='text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-xl font-medium sm:font-semibold md:font-bold text-neutral-700 md:text-black leading-tight sm:leading-snug md:leading-normal'>Book your table in advance</p>
        </div>

      </div>
    </div>
  )
}

export default S1