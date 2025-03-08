import React from 'react'
import { CategoryFilterList } from '../components/ProductCard'
import Title from '../components/Title'

const AllProducts = () => {
  return (
    <div>
      <Title title="Figuras"/>
      <CategoryFilterList category={"Figuras"}/>
      <Title title="Accesorios"/>
      <CategoryFilterList category={"Accesorios"}/>
    </div>
  )
}

export default AllProducts
