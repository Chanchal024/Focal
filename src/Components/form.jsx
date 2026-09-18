import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const Form = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      })
    }, 4000)
  }

  return (
    <div 
      className='w-full max-w-7xl mx-auto px-5 pb-16 md:px-12 lg:px-16'
      style={{ fontFamily: "'Afacad', sans-serif" }}
    >
      {/* Title & Subtitle */}
      <div className='flex flex-col items-center text-center mt-10 md:mt-14 mb-16'>
        <h2 className='text-orange-400 text-5xl md:text-6xl font-extrabold tracking-widest uppercase'>
          CONTACT US
        </h2>
        <p className='mt-3 text-lg md:text-2xl text-zinc-600 max-w-xl font-medium'>
          We’d love to hear from you. Stop by, drop a message, or connect with us on socials.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
        {/* Left Column: Contact Details & Socials */}
        <div className='lg:col-span-5 flex flex-col justify-between space-y-5 bg-zinc-50 border border-zinc-200/80 rounded-3xl p-6 md:p-7 shadow-sm'>
          <div>
            <h3 className='text-2xl font-extrabold text-zinc-900 tracking-wide mb-2'>
              Let’s Connect
            </h3>
            <p className='text-zinc-600 text-base leading-relaxed mb-5'>
              Whether you have questions about our roasts, want to organize private events, or just want to chat coffee, our team is always ready.
            </p>

            {/* Direct Details */}
            <div className='space-y-3.5'>
              <div className='flex items-start gap-3.5'>
                <div className='w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0'>
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className='text-xs uppercase tracking-wider font-bold text-zinc-400'>Call Us</h4>
                  <a href='tel:+15552345678' className='text-lg font-bold text-zinc-900 hover:text-orange-500 transition-colors'>
                    +1 (555) 234-5678
                  </a>
                  <p className='text-xs text-zinc-500'>Available Mon – Sat, 8am – 10pm</p>
                </div>
              </div>

              <div className='flex items-start gap-3.5'>
                <div className='w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0'>
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className='text-xs uppercase tracking-wider font-bold text-zinc-400'>Email Us</h4>
                  <a href='mailto:hello@focalcafe.com' className='text-lg font-bold text-zinc-900 hover:text-orange-500 transition-colors'>
                    hello@focalcafe.com
                  </a>
                  <p className='text-xs text-zinc-500'>We reply within 24 hours</p>
                </div>
              </div>

              <div className='flex items-start gap-3.5'>
                <div className='w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0'>
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className='text-xs uppercase tracking-wider font-bold text-zinc-400'>Visit Our Café</h4>
                  <p className='text-lg font-bold text-zinc-900'>123 Coffee Lane, Downtown</p>
                  <p className='text-xs text-zinc-500'>Valet & bike parking available</p>
                </div>
              </div>

              <div className='flex items-start gap-3.5'>
                <div className='w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0'>
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className='text-xs uppercase tracking-wider font-bold text-zinc-400'>Working Hours</h4>
                  <p className='text-lg font-bold text-zinc-900'>Mon – Sat: 8:00 AM – 10:00 PM</p>
                  <p className='text-xs text-zinc-500'>Sunday: 9:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className='pt-4 border-t border-zinc-200'>
            <h4 className='text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2.5'>
              Follow Our Journey
            </h4>
            <div className='flex flex-wrap gap-2.5'>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-orange-500 border border-zinc-200 hover:border-orange-500 text-zinc-700 hover:text-white transition-all duration-300 shadow-sm text-sm font-semibold'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-orange-500 border border-zinc-200 hover:border-orange-500 text-zinc-700 hover:text-white transition-all duration-300 shadow-sm text-sm font-semibold'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className='lg:col-span-7 bg-white border border-zinc-200/80 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden'>
          {submitted ? (
            <div className='min-h-[460px] flex flex-col items-center justify-center text-center p-6 animate-arrive'>
              <div className='w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-6 shadow-md'>
                <CheckCircle2 size={44} />
              </div>
              <h3 className='text-3xl font-extrabold text-zinc-900 mb-2'>
                Message Sent!
              </h3>
              <p className='text-lg text-zinc-600 max-w-md'>
                Thank you for reaching out! Our team has received your note and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-2'>
                    Your Name <span className='text-orange-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Jane Doe'
                    className='w-full px-5 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all'
                  />
                </div>

                <div>
                  <label className='block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-2'>
                    Email Address <span className='text-orange-500'>*</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='jane@example.com'
                    className='w-full px-5 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-2'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='+1 (555) 000-0000'
                    className='w-full px-5 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all'
                  />
                </div>

                <div>
                  <label className='block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-2'>
                    Inquiring About
                  </label>
                  <select
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-5 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all cursor-pointer'
                  >
                    <option value='General Inquiry'>General Inquiry</option>
                    <option value='Table Reservation'>Table Reservation</option>
                    <option value='Private Event'>Private Event & Catering</option>
                    <option value='Feedback'>Feedback & Compliments</option>
                  </select>
                </div>
              </div>

              <div>
                <label className='block text-sm font-bold uppercase tracking-wider text-zinc-700 mb-2'>
                  Message <span className='text-orange-500'>*</span>
                </label>
                <textarea
                  name='message'
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell us how we can help you or your coffee plans...'
                  className='w-full px-5 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none'
                />
              </div>

              <button
                type='submit'
                className='w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-orange-400 hover:bg-orange-500 text-black font-extrabold text-lg tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer'
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Form