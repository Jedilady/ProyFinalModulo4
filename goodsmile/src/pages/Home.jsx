import React from 'react'
import Title from '../components/Title'
import { AllProductsList } from '../components/ProductCard'


const Home = () => {
  return (
    <div>
      <div className='home-banner'></div>
      <Title title="Figuras recientes"/>
      <AllProductsList/>
    </div>
  )
}

export default Home
