import React from 'react'
import tw from "tailwind-styled-components"
import {BsCart2} from "react-icons/bs";
import { addToCart} from '../../features/shoppingcart/cart';
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast';

const Product = ( {product} ) => {
  const dispatch = useDispatch();
  const notify = () => toast.success(`${product.title} added into cart`);
  
  return (
  
    <ProductContainer>
      
        <ProductDetails>
            <Link to={`/product/${product.id}`}>
              <motion.img  whileHover={{scale: 0.9,transition: { duration: 1 },}} src={product.image}  />
            </Link>
          
            <Details className='flex  items-center justify-center'>
                <span className='w-72 px-4 uppercase text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap '>{product.title}</span>
                <span className='text-sm font-semibold'>${product.price}.00</span>
               <div className='flex gap-2'>
                 <CartIcon/>
                 <span className='text-xs cursor-pointer' 
                    onClick={()=> {dispatch( addToCart(product));  notify()} }
                  >ADD TO CART</span>
                   <Toaster />
               </div>
            </Details>
        </ProductDetails>
     
    </ProductContainer>

  )
}

export default Product

const ProductContainer= tw.div`
  flex flex-col items-center justify-center my-2 sm:my-0 
`;

const ProductDetails = tw.div`
  flex flex-col gap-3 items-center justify-center border-2 pt-0 pb-6
`;

const Details = tw.div`
    flex flex-col gap-1 items-center justify-center mt-2
`;

const CartIcon = tw(BsCart2)`
    w-4 h-4 cursor-pointer
`;
