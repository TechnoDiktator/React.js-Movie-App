import React from 'react'
import './style.scss'
import HeroBanner from './topBanner/HeroBanner'
import Trending from './trending/Trending'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

function Home() {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending></Trending>
      <Popular></Popular>
      <TopRated></TopRated>
     
    </div>
  )
}

export default Home