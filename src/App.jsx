import React, { useEffect } from 'react'
import Home from './PAGES/Home'
import Story from './PAGES/Story' 
import Reserve from './PAGES/Reserve'
import Menu from './PAGES/Menu'
import Contact from './PAGES/Contact'
import Footer from './PAGES/Footer'
import Experience from './PAGES/Experience'
import Review from './PAGES/Review'
import { initScroll, cleanupScroll } from './utils/initScroll'

const App = () => {
  useEffect(() => {
    const handle = initScroll()
    return () => cleanupScroll(handle)
  }, [])

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