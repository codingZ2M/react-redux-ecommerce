import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';
import {BsCart2} from "react-icons/bs";
import {AiOutlineMenu, AiOutlineClose}  from "react-icons/ai";
import {useSelector} from 'react-redux'
import Cart from './Cart';

const NavBar = () => {

  const [closeButtonOpen, setCloseButtonOpen] = useState(false);
  const {amount, totalQuantities} = useSelector( (store) => store.cart)
  const [showCart, setShowCart] = useState(false);
  const category= ['Women Dresses', 'Shoes', 'Watches'];

  return (
    <MenuContainer>

      <Header>
          <Link to="/">
                <span className='text-black text-lg sm:text-2xl font-normal'>CZ2M Shopping</span>
          </Link>

          <MenuItems className='hidden sm:flex'>
                <Link to = "/">Home</Link>
                <Link to= {`/productCategory/${category[0]}`}>Women Dresses</Link>
                <Link to= {`/productCategory/${category[1]}`}>Shoes</Link>
                <Link to= {`/productCategory/${category[2]}`}>Watches</Link>
                <Link to = "/">Sunglasses</Link>
                <Link to= "/">Membership</Link>
                <Link to= "/">Blog</Link>
                <Link to= "/">Sign In</Link>
          </MenuItems>  

          <div className='relative flex gap-6 items-center justify-center'>
               <button className='text-black font-medium border-2 border-[#000] px-4 sm:px-6 py-1 sm:py-1.5
                              rounded-full hover:bg-black hover:text-white hover:border-white'>
                   Login
               </button>
               
              <div onClick={()=> setShowCart(true)} className="cursor-pointer">
                  <CartIcon />               
                  <CartItemsCircle>
                      <span className='text-sm'> {totalQuantities} </span>
                  </CartItemsCircle>
              </div>
              <Link to = "#" onClick={ () => setCloseButtonOpen(true)}>
                  <HamburgerMenu/>
              </Link>
          </div>
    </Header>

    {showCart && <Cart showCart={setShowCart}/> }

    <SidebarMenu className = {closeButtonOpen === true ? 'scale-100 opacity-90' : 'scale-0'}>
          <CloseButtonWrapper >
              <span className='text-lg mt-0 cursor-pointer' 
                    onClick={() => setCloseButtonOpen(false)}> <CloseButton/> </span>
          </CloseButtonWrapper>
          
          <Link to = "/" onClick={() => setCloseButtonOpen(false)}>Home</Link>
            <Link to = {`/productCategory/${category[0]}`} 
                      onClick={() => setCloseButtonOpen(false)}>Women Dresses</Link>
            <Link to = {`/productCategory/${category[1]}`} 
                      onClick={() => setCloseButtonOpen(false)}>Shoes</Link>
            <Link to= {`/productCategory/${category[2]}`}
                       onClick={() => setCloseButtonOpen(false)}>Watches</Link>
            <Link to = "/" onClick={() => setCloseButtonOpen(false)}>Sunglasses</Link>
            <Link to= "/" onClick={() => setCloseButtonOpen(false)}>Membership</Link>
            <Link to= "/" onClick={() => setCloseButtonOpen(false)}>Blog</Link>
            <Link to= "/" onClick={() => setCloseButtonOpen(false)}>Sign In</Link>
        </SidebarMenu>
   
    </MenuContainer>
  )
}

export default NavBar

const MenuContainer = tw.div`
  w-full bg-[#ffffff]
`;

const Header = tw.div`
  flex items-center justify-between p-5 max-w-screen-2xl mx-auto
`;

const MenuItems = tw.div`
flex items-center justify-between gap-6 text-base
a {
  font-normal
}

`;

const CartIcon = tw(BsCart2)`
    w-6 h-6 cursor-pointer pt-0 
`;

const CartItemsCircle = tw.div`
  bg-black text-white absolute top-0 left-28 sm:left-32 w-5 h-5 rounded-full 
  flex item-center justify-center
`;

const HamburgerMenu = tw(AiOutlineMenu)`
  w-8 h-8 cursor-pointer pt-0 
`;

const CloseButton = tw(AiOutlineClose)`
    w-8 h-8 cursor-pointer pt-0 
`;

const SidebarMenu = tw.div`
  fixed top-0 bottom-0 right-0 pt-0  list-none bg-black text-white w-72 z-10
  flex flex-col text-start pl-10 gap-6  text-sm origin-left ease-out
`;

const CloseButtonWrapper = tw.div`
  flex flex-row-reverse item-center mt-2 p-2 pr-8
`;