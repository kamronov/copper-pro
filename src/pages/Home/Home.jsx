import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import './Home.scss'
import OurProduct from '../../components/OurProduct/OurProduct'
function Home() {
  return (
    <div className='home'>
      <Header/>
      <Hero/>
      <OurProduct/>
    </div>
  )
}

export default Home