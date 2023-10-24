import React from 'react'
import { products } from '../Constants'
import PopularProductsCard from '../Components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products'
      className='max-container max-sm:mt-12'
    >
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Popular</span> Products</h2>
        <p className='mt-2 font-montserrat text-slate-gray text-xl'>Explore Nike's hottest picks - where performance meets style. These customer-favorite essentials are your gateway to the latest trends and iconic classics. Discover what's making waves in Nike fashion today</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md-grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {products.map((product)=>(
              <PopularProductsCard key={product.name} {...product}/>
          ))}
      </div>

    </section>
  )
}

export default PopularProducts