import React from 'react'
import MainCarousel from '../components/maincarousel/MainCarousel'
import HomeSectionCarousel from '../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../Data/Mens_Kurta'

const Homepage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20  flex flex-col justify-center'>
        <HomeSectionCarousel data={mens_kurta} section={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} section={"Men's Snickers"}/>
        <HomeSectionCarousel data={mens_kurta} section={"Women's Sarees"}/>
        <HomeSectionCarousel data={mens_kurta} section={"Women's Snickers"}/>
      </div>
    </div>
  )
}

export default Homepage
