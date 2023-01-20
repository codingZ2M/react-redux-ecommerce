import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import {Routes,  Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { useSelector, useDispatch} from 'react-redux'
import { calculateTotals } from './features/shoppingcart/cart'
import ProductDetails from './components/products/ProductDetails'
import ProductCategory from './pages/ProductCategory'

const App = () => {

  const {cartItems} = useSelector( (store) => store.cart)
  const dispatch = useDispatch()
  
   useEffect( () => {
                         return () => {
                         dispatch(calculateTotals());
                        };
                    }, [cartItems]
             )
    
  return (
    <HomeContainer>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productCategory/:category" element={<ProductCategory/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes>
    <Footer/>
    </HomeContainer>
  )
}

export default App

const HomeContainer = tw.div`
  mt-0 flex flex-col min-h-screen w-screen  box-border  
`;
