import React from 'react'
import { Hero } from '../component/UI/Hero'
import { FeatureProduct } from '../component/UI/FeatureProduct'
import { PopularProducts } from '../component/UI/PopularProducts'
import { Client } from '../component/UI/Client'

export const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureProduct />
      <PopularProducts />
      <Client />
    </div>
  )
}