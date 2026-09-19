import React, { useState, useEffect } from 'react'
import Nav from './Components/nav'
import Home from './PAGES/Home'
import Story from './PAGES/Story' 
import Reserve from './PAGES/Reserve'
import Menu from './PAGES/Menu'
import Contact from './PAGES/Contact'
import Footer from './PAGES/Footer'
import Experience from './PAGES/Experience'
import Review from './PAGES/Review'
import { initScroll, cleanupScroll } from './utils/initScroll'

const getActiveSection = () => {
  if (typeof window === 'undefined') return ''

  // 1. Read clean slash path (e.g. /menu, /about, or /Chanchal024/Focal/menu)
  const pathParts = window.location.pathname.toLowerCase().split('/').filter(Boolean)
  const lastSegment = pathParts[pathParts.length - 1] || ''
  if (['about', 'story', 'experience', 'menu', 'contact', 'reserve', 'review', 'reviews'].includes(lastSegment)) {
    return lastSegment
  }

  // 2. Query parameter fallback (?page=menu)
  const params = new URLSearchParams(window.location.search)
  const pageParam = (params.get('page') || params.get('section') || '').toLowerCase().trim()
  if (['about', 'story', 'experience', 'menu', 'contact', 'reserve', 'review', 'reviews'].includes(pageParam)) {
    return pageParam
  }

  // 3. Hash fallback (#menu)
  const hash = window.location.hash.toLowerCase().replace('#', '').trim()
  if (['about', 'story', 'experience', 'menu', 'contact', 'reserve', 'review', 'reviews'].includes(hash)) {
    return hash
  }

  return ''
}

const App = () => {
  const [section, setSection] = useState(getActiveSection)

  useEffect(() => {
    const handleNavigation = () => {
      setSection(getActiveSection())
    }
    window.addEventListener('popstate', handleNavigation)
    window.addEventListener('hashchange', handleNavigation)
    return () => {
      window.removeEventListener('popstate', handleNavigation)
      window.removeEventListener('hashchange', handleNavigation)
    }
  }, [])

  useEffect(() => {
    const handle = initScroll()
    return () => cleanupScroll(handle)
  }, [section])

  // If a specific section is opened in this tab/page, render ONLY that section content
  if (section) {
    return (
      <div className='relative w-full min-h-screen overflow-x-hidden p-2 sm:p-4 md:p-5 bg-white'>
        {/* Navigation Bar for standalone section page */}
        <div className='relative w-full pt-20 sm:pt-24 pb-2'>
          <Nav />
        </div>

        {/* ONLY the clicked section's content is displayed */}
        <main className='w-full'>
          {(section === 'about' || section === 'story') && <Story />}
          {section === 'experience' && <Experience />}
          {section === 'menu' && <Menu />}
          {section === 'contact' && <Contact />}
          {section === 'reserve' && <Reserve />}
          {(section === 'review' || section === 'reviews') && <Review />}
        </main>

        <Footer />
      </div>
    )
  }

  // Default: Render the entire website
  return (
    <div className='relative w-full min-h-screen overflow-x-hidden p-2 sm:p-4 md:p-5'>
      <Home/>
      <Story/>
      <Reserve/>
      <Experience/>
      <Menu/>
      <Contact/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App