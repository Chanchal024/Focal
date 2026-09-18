import React from 'react'

const navLinks = [
  { label: 'Home',    href: '#home' },
  { label: 'Story',   href: '#story' },
  { label: 'Reserve', href: '#reserve' },
  { label: 'Menu',    href: '#menu' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

const Foot = () => {
  return (
    <footer
      className='w-full bg-zinc-950 text-white rounded-3xl mt-5 overflow-hidden'
      style={{ fontFamily: "'Afacad', sans-serif" }}
    >
      {/* Top accent bar */}
      <div className='h-1 w-full bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500' />

      <div className='max-w-7xl mx-auto px-8 md:px-14 py-14'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>

          {/* Brand */}
          <div className='flex flex-col gap-4'>
            <a href='#' className='flex items-center w-fit'>
              <img src='/Focal.png' alt='FOCAL' className='h-12 w-auto object-contain' />
            </a>
            <p className='text-zinc-400 text-base leading-relaxed max-w-xs'>
              Handcrafted brews, warm ambience, and unforgettable moments — served one cup at a time.
            </p>
            {/* Socials */}
            <div className='flex gap-3 mt-2'>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={s.label}
                  className='w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500 border border-zinc-700 hover:border-orange-400 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300'
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-3'>
            <h4 className='text-xs uppercase tracking-widest font-bold text-zinc-500 mb-1'>
              Quick Links
            </h4>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-zinc-300 hover:text-orange-400 text-base font-medium transition-colors duration-200 w-fit'
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-xs uppercase tracking-widest font-bold text-zinc-500 mb-1'>
              Get In Touch
            </h4>

            <div className='flex flex-col gap-3 text-zinc-300 text-base'>
              <div className='flex items-center gap-3'>
                <span className='w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.91a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <a href='tel:+15552345678' className='hover:text-orange-400 transition-colors'>+1 (555) 234-5678</a>
              </div>

              <div className='flex items-center gap-3'>
                <span className='w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <a href='mailto:hello@focalcafe.com' className='hover:text-orange-400 transition-colors'>hello@focalcafe.com</a>
              </div>

              <div className='flex items-start gap-3'>
                <span className='w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>123 Coffee Lane, Downtown</span>
              </div>

              <div className='flex items-center gap-3'>
                <span className='w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <span>Mon–Sat: 8 AM – 10 PM &nbsp;|&nbsp; Sun: 9 AM – 8 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className='mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-3'>
          <p className='text-zinc-600 text-sm'>
            © {new Date().getFullYear()} <span className='text-orange-400 font-semibold'>Focal Café</span>. All rights reserved.
          </p>
          <p className='text-zinc-700 text-xs tracking-wide'>
            Crafted with ☕ &amp; passion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Foot