import React from 'react'
import './style.scss'
import HeroBanner from './topBanner/HeroBanner'
import Trending from './trending/Trending'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'



function Home() {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending></Trending>
      <div style={{height: 1000}}>
      </div>
    </div>
  )
}

export default Home