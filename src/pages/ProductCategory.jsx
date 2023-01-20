import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Product from '../components/products/Product'
import allProducts from '../data/allProducts';
import { useParams } from 'react-router-dom'

const ProductCategory = () => {
  const {category} = useParams();

  const [products, setProducts] = useState([]);

  useEffect( () => {
     const products = allProducts.filter((product)=> product.category === category)
           setProducts(products);
           }, [category]
   )
  return (
    <div>
        <h3 className='flex items-center justify-center text-xl sm:text-3xl mt-6 pl-8 '>
          {category}
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

export default ProductCategory;

const ProductsGrid = tw.div`
  mt-4 sm:mt-12 mb-12
  flex items-center justify-center px-8 grid grid-cols-1 gap-2 sm:gap-6 
  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3
`;