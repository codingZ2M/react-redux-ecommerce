import React, {useEffect, useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import tw from "tailwind-styled-components"
import Product from '../components/products/Product'
import allProducts from '../data/allProducts';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
     const products = allProducts.filter((product)=> product.curatedProduct === true)
           setProducts(products);
           }, []
   )
  return (
    <div>
        <HeroBanner/>
        <h3 className='flex items-center justify-center text-xl sm:text-3xl mt-12 pl-8 '>
          Curated Products
        </h3>
        <ProductsGrid >
       {
         products.map( (product) => (
            <Product key={product.id} product = {product}/> 
         ))      
       }
     </ProductsGrid>
    </div>
  )
}

export default Home

const ProductsGrid = tw.div`
  mt-0 sm:mt-12 mb-12
  flex items-center justify-center px-8 grid grid-cols-1 gap-2 sm:gap-6 
  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3
`;