import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import './Home.scss'
import OurProduct from '../../components/OurProduct/OurProduct'
import BestSellers from '../../components/BestSellers/BestSellers'
import NewProducts from '../../components/NewProducts/NewProducts'
import Aksiya from '../../components/Aksiya/Aksiya'
import Recommend from '../../components/Recommend/Recommend'
import Discount from '../../components/Discount/Discount'
import Thought from '../../components/Thought/Thought'
function Home() {
  return (
    <div className='home'>
      <Header/>
      <Hero/>
      <OurProduct/>
      <BestSellers/>
      <NewProducts/>
      <Aksiya/>
      <Recommend/>
      <Discount/>
      <Thought/>
    </div>
  )
}

export default Home