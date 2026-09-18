import React, { useEffect } from 'react'
import Home from './PAGES/Home'
import Story from './PAGES/Story' 
import Reserve from './PAGES/reserve' 
import Menu from './PAGES/Menu'
import Contact from './PAGES/Contact'
import Footer from './PAGES/Footer'
import { initScroll, cleanupScroll } from './utils/initScroll'

const App = () => {
  useEffect(() => {
    const handle = initScroll()
    return () => cleanupScroll(handle)
  }, [])

  return (
    <div className='relative w-full min-h-screen overflow-x-hidden p-5'>
      <Home/>
      <Story/>
      <Reserve/>
      <Menu/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App