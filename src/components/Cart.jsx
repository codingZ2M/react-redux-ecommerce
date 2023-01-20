import React from 'react'
import {BsCart2} from "react-icons/bs";
import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft} from 'react-icons/ai';
import {RiDeleteBinLine} from 'react-icons/ri';
import { useSelector, useDispatch} from 'react-redux'
import { removeItem, incrementItem, decrementItem } from '../features/shoppingcart/cart';

const Cart = ({showCart}) => {
    const {cartItems, totalPrice, totalQuantities } = useSelector( (store) => store.cart)
    const dispatch = useDispatch();


  return (
    <div className='absolute p-4 top-0 right-0 z-20 bg-white w-11/12 sm:w-1/4 h-full border-none drop-shadow-xl'>
          <div className=''>
                <div className="flex items-center justify-start gap-2"  >
                    <AiOutlineLeft className= "cursor-pointer" onClick={()=> showCart(false)}/>
                    <span className='text-small font-medium'>Cart ({totalQuantities}) items</span>
                </div>
        </div> 
        { cartItems.length < 1 && (
            <div className='flex flex-col items-center justify-center'>
                <BsCart2 className='w-20 h-20 text-gray-300'/>
                <span>Your Shopping cart is empty!</span>
            
                <button type="button" onClick={()=>showCart(false)}
                className='my-8 flex items-center justify-center w-40 sm:w-60 text-white bg-black font-medium border-[1px] border-[#fff]  py-2.5
                         hover:bg-white hover:text-black hover:border-black'>
                  Continue Shopping
                </button>
            </div>
        )}

<div className='mt-4 w-full text-base font-normal'>
            {cartItems.length >= 1 && cartItems.map((product)=> (
              <div className='flex py-2  items-start justify-between' key={product.id}>
                <div className='flex gap-3'>
                    <img src={product.image} width={80} height={120}/>
                    <div className='flex flex-col  justify-between'>
                        <span className='w-68'>{product.title}</span>
                        <div className='flex gap-4 items-center justify-center border border-gray-400 w-24 py-1 '>
                          <span onClick={()=> dispatch(decrementItem(product.id))}><AiOutlineMinus/></span>
                          <span onClick="">{product.qty}</span>
                          <span onClick={()=> dispatch(incrementItem(product.id))}><AiOutlinePlus/></span>
                        </div>
                        <button type='button' onClick={()=> dispatch(removeItem(product.id))}>
                            <RiDeleteBinLine className="w-7 w-7 text-red-500" />
                        </button>
                    </div> 
                </div>
                
                <div className='flex  items-start '>
                    <span>${Math.round(product.price * product.qty)}.00</span>
               </div>
              </div>
            ))}

            {cartItems.length >= 1 && (
              <div className='mt-6 flex flex-col'>
                <div className='flex items-center justify-between text-SM font-medium'>
                <span>Sub Total:</span>
                <span>${Math.round(totalPrice)}.00</span>
                </div>
                <div className='flex justify-center py-4'>
                <button className='flex items-center justify-center w-full text-black bg-white font-medium border-[1px] border-[#000]  py-2.5
                               hover:bg-black hover:text-white hover:border-black'
                               onClick="">
                  PAY NOW
                </button>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default Cart