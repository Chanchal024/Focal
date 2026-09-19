import React from 'react'
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react'

const allReviews = [
  // Row 1 (1 to 10)
  {
    id: 1,
    name: 'Aarav Singhania',
    role: 'Coffee Enthusiast',
    rating: 5,
    date: '2 days ago',
    avatarBg: 'from-orange-500 to-amber-600',
    comment: 'The Vietnamese Cold Brew here is legitimately the best I have tasted in the city. Perfectly balanced sweetness and a bold roast finish.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    rating: 5,
    date: '3 days ago',
    avatarBg: 'from-amber-600 to-yellow-600',
    comment: 'Focal’s architectural vibe is breathtaking. Natural lighting, warm oakwood, and soft jazz make it my favorite spot to sketch floor plans.'
  },
  {
    id: 3,
    name: 'Rohan Verma',
    role: 'Software Engineer',
    rating: 5,
    date: '1 week ago',
    avatarBg: 'from-zinc-700 to-zinc-900',
    comment: 'Super fast gigabit Wi-Fi, abundant charging points, and respectful quiet corners. Easily the most productive work-cafe in downtown.'
  },
  {
    id: 4,
    name: 'Ananya Desai',
    role: 'Pastry Chef & Foodie',
    rating: 5,
    date: '5 days ago',
    avatarBg: 'from-orange-400 to-rose-500',
    comment: 'The butter croissants are golden, flaky, and fresh from the oven. Paired with a warm vanilla cappuccino, it is pure morning bliss.'
  },
  {
    id: 5,
    name: 'Kabir Kapoor',
    role: 'Product Manager',
    rating: 5,
    date: 'Yesterday',
    avatarBg: 'from-amber-500 to-orange-600',
    comment: 'Focal Froth is something truly extraordinary. That creamy cocoa crown over the chilled double espresso is unmatched.'
  },
  {
    id: 6,
    name: 'Sneha Patel',
    role: 'Creative Writer',
    rating: 5,
    date: '4 days ago',
    avatarBg: 'from-yellow-500 to-amber-700',
    comment: 'I finished three chapters of my book here. The staff never rushes you, the music volume is dialed in perfectly, and the matcha latte is velvety.'
  },
  {
    id: 7,
    name: 'David Miller',
    role: 'Digital Nomad',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: 'from-emerald-600 to-teal-700',
    comment: 'Travelled across 15 countries and Focal easily ranks in my top 5 coffee houses worldwide. Ethical beans and world-class pour overs.'
  },
  {
    id: 8,
    name: 'Tanya Roy',
    role: 'Brand Strategist',
    rating: 5,
    date: '3 days ago',
    avatarBg: 'from-orange-500 to-red-500',
    comment: 'Every detail feels intentional—from the hand-carved ceramic mugs to the cardamom notes in the Pind Classics. A masterpiece cafe.'
  },
  {
    id: 9,
    name: 'Vikram Sen',
    role: 'Music Producer',
    rating: 5,
    date: 'Last week',
    avatarBg: 'from-zinc-800 to-neutral-900',
    comment: 'Acoustics in this cafe are wonderful. No loud blenders rattling your skull. Just mellow vintage records and exquisite cold brew.'
  },
  {
    id: 10,
    name: 'Meera Joshi',
    role: 'Doctor & Regular',
    rating: 5,
    date: 'Yesterday',
    avatarBg: 'from-amber-600 to-orange-700',
    comment: 'My post-shift sanctuary. The baristas already remember my flat white order the second I walk through the door. 10/10 hospitality!'
  },

  // Row 2 (11 to 20)
  {
    id: 11,
    name: 'Aditya Nair',
    role: 'Architect',
    rating: 5,
    date: '1 day ago',
    avatarBg: 'from-orange-500 to-amber-500',
    comment: 'The Citrus Cold Brew was a revelation. Crisp, effervescent, and clean. You can tell they take their brewing science very seriously.'
  },
  {
    id: 12,
    name: 'Simran Bhasin',
    role: 'Marketing Lead',
    rating: 5,
    date: '3 days ago',
    avatarBg: 'from-rose-500 to-orange-400',
    comment: 'Hosted our client presentation over coffee and pastries here. The clients were thoroughly impressed by the ambiance and presentation.'
  },
  {
    id: 13,
    name: 'Devansh Rao',
    role: 'Startup Founder',
    rating: 5,
    date: '5 days ago',
    avatarBg: 'from-neutral-700 to-zinc-900',
    comment: 'Found my co-founder over a pour-over here. Focal has an inspiring community energy you won’t find at ordinary chain cafes.'
  },
  {
    id: 14,
    name: 'Kritika Bose',
    role: 'Journalist',
    rating: 5,
    date: 'Last week',
    avatarBg: 'from-amber-500 to-yellow-600',
    comment: 'The Thai Latte and Caramelised Banana Latte from House Crafts are unlike anything anywhere else. Creamy, subtle, and decadent.'
  },
  {
    id: 15,
    name: 'Samarth Gupta',
    role: 'Photographer',
    rating: 5,
    date: '4 days ago',
    avatarBg: 'from-orange-600 to-amber-700',
    comment: 'A visual dream. The daylight spilling through the floor-to-ceiling windows makes every cup look straight out of an editorial spread.'
  },
  {
    id: 16,
    name: 'Pooja Reddy',
    role: 'Yoga Instructor',
    rating: 5,
    date: '6 days ago',
    avatarBg: 'from-emerald-600 to-teal-800',
    comment: 'Love their dedication to compostable cups and plant-based milks. Oat milk mocha here is velvety and guilt-free.'
  },
  {
    id: 17,
    name: 'Nikhil Chawla',
    role: 'UI/UX Designer',
    rating: 5,
    date: '2 days ago',
    avatarBg: 'from-zinc-800 to-orange-950',
    comment: 'Clean aesthetics, high ergonomic comfort, and consistent coffee temperature. It is my second home office throughout the week.'
  },
  {
    id: 18,
    name: 'Aisha Khan',
    role: 'University Lecturer',
    rating: 5,
    date: 'Yesterday',
    avatarBg: 'from-amber-600 to-rose-600',
    comment: 'Their weekend cupping workshop broadened my whole perception of coffee origins. The baristas are passionate educators.'
  },
  {
    id: 19,
    name: 'Rhea Malhotra',
    role: 'Event Planner',
    rating: 5,
    date: '3 days ago',
    avatarBg: 'from-orange-500 to-amber-600',
    comment: 'Booked their corner table for our book club meet. The service was seamless, warm, and accommodating. Everyone left delighted.'
  },
  {
    id: 20,
    name: 'Ishaan Trivedi',
    role: 'Barista & Roaster',
    rating: 5,
    date: '5 days ago',
    avatarBg: 'from-yellow-600 to-orange-700',
    comment: 'As a fellow barista, their espresso dial-in and milk microfoam texture are textbook perfection. Total respect for this team’s craft.'
  }
]

const row1 = allReviews.slice(0, 10)
const row2 = allReviews.slice(10, 20)

const Feedback = () => {
  return (
    <section
      id='reviews'
      className='relative w-full h-full min-h-screen py-12 md:py-16 bg-white text-zinc-900 flex flex-col justify-center overflow-hidden'
      style={{ fontFamily: "'Afacad', sans-serif" }}
    >
      {/* Scoped CSS Keyframes for Railway Scrolling */}
      <style>{`
        @keyframes railwayScrollLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes railwayScrollRightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track-l2r {
          display: flex;
          width: max-content;
          animation: railwayScrollLeftToRight 42s linear infinite;
          will-change: transform;
        }

        .marquee-track-r2l {
          display: flex;
          width: max-content;
          animation: railwayScrollRightToLeft 42s linear infinite;
          will-change: transform;
        }

        .marquee-track-l2r:hover,
        .marquee-track-r2l:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className='flex flex-col items-center text-center px-6 mb-10 shrink-0 z-10'>
        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs md:text-sm font-bold tracking-wider uppercase mb-3 border border-orange-200/70 shadow-xs'>
          <Sparkles size={15} className='text-orange-500' />
          Guest Voices & Stories
        </div>
        <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 max-w-2xl'>
          Loved by Coffee Lovers & <span className='text-orange-500'>Creatives</span>
        </h2>
        <p className='mt-2 text-zinc-500 text-base md:text-lg max-w-xl'>
          Real experiences shared by our wonderful community of regulars, artists, and coffee purists.
        </p>
      </div>

      {/* Marquee Wrapper with Smooth Faded Edge Masks */}
      <div
        className='relative w-full flex flex-col gap-6 overflow-hidden'
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)'
        }}
      >
        {/* Row 1: Railway Scrolling Left to Right */}
        <div className='overflow-hidden w-full'>
          <div className='marquee-track-l2r flex gap-5 py-2'>
            {[...row1, ...row1].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className='w-[310px] sm:w-[350px] md:w-[380px] shrink-0 bg-white/95 rounded-2xl p-5 border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(249,115,22,0.12)] hover:border-orange-300 transition-all duration-300 flex flex-col justify-between select-none'
              >
                <div>
                  {/* Top Bar: Stars + Date */}
                  <div className='flex items-center justify-between mb-3'>
                    <div className='flex items-center gap-1 text-orange-400'>
                      {[...Array(item.rating)].map((_, sIdx) => (
                        <Star key={sIdx} size={15} className='fill-orange-400' />
                      ))}
                    </div>
                    <span className='text-xs font-semibold text-zinc-400'>{item.date}</span>
                  </div>

                  {/* Comment */}
                  <p className='text-zinc-700 text-sm md:text-base leading-relaxed line-clamp-3'>
                    "{item.comment}"
                  </p>
                </div>

                {/* User Info */}
                <div className='mt-4 pt-3.5 border-t border-zinc-100 flex items-center gap-3'>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatarBg} text-white font-extrabold flex items-center justify-center text-sm shadow-xs shrink-0`}>
                    {item.name.charAt(0)}
                  </div>
                  <div className='overflow-hidden'>
                    <div className='flex items-center gap-1.5'>
                      <h4 className='font-bold text-zinc-900 text-sm truncate'>{item.name}</h4>
                      <CheckCircle2 size={13} className='text-orange-500 shrink-0' />
                    </div>
                    <p className='text-xs text-zinc-400 truncate'>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Railway Scrolling Right to Left */}
        <div className='overflow-hidden w-full'>
          <div className='marquee-track-r2l flex gap-5 py-2'>
            {[...row2, ...row2].map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className='w-[310px] sm:w-[350px] md:w-[380px] shrink-0 bg-white/95 rounded-2xl p-5 border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(249,115,22,0.12)] hover:border-orange-300 transition-all duration-300 flex flex-col justify-between select-none'
              >
                <div>
                  {/* Top Bar: Stars + Date */}
                  <div className='flex items-center justify-between mb-3'>
                    <div className='flex items-center gap-1 text-orange-400'>
                      {[...Array(item.rating)].map((_, sIdx) => (
                        <Star key={sIdx} size={15} className='fill-orange-400' />
                      ))}
                    </div>
                    <span className='text-xs font-semibold text-zinc-400'>{item.date}</span>
                  </div>

                  {/* Comment */}
                  <p className='text-zinc-700 text-sm md:text-base leading-relaxed line-clamp-3'>
                    "{item.comment}"
                  </p>
                </div>

                {/* User Info */}
                <div className='mt-4 pt-3.5 border-t border-zinc-100 flex items-center gap-3'>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatarBg} text-white font-extrabold flex items-center justify-center text-sm shadow-xs shrink-0`}>
                    {item.name.charAt(0)}
                  </div>
                  <div className='overflow-hidden'>
                    <div className='flex items-center gap-1.5'>
                      <h4 className='font-bold text-zinc-900 text-sm truncate'>{item.name}</h4>
                      <CheckCircle2 size={13} className='text-orange-500 shrink-0' />
                    </div>
                    <p className='text-xs text-zinc-400 truncate'>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback