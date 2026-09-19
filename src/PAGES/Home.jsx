import React from 'react'
import Nav from '../Components/nav'
import Box from '../Components/box'
import Content from '../Components/content'
import Media from '../Components/media'

export const Home = () => {
  return (
    <div id='home' className='relative w-full h-screen overflow-hidden rounded-[2rem]'>
        <Box/>  
        <Nav/>
        <Content/>
        <Media/>
    </div>
  )
}

export default Home;
