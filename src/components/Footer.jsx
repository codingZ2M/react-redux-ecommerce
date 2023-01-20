import React from 'react'
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
        <Logo>CZ2M Shopping</Logo>
        <Link to = "/">Home</Link>
        <Link to= "/">Membership</Link>
        <Link to= "/">Blog</Link>
        <Link to= "/">Sign In</Link>
        <span className='mt-6 sm:mt-0'>© 2022 by CODINGZ2M</span>
   </FooterContainer> 
  )
}

export default Footer


const FooterContainer = tw.div`
  flex flex-col sm:flex-row gap-1 sm:gap-6 items-center justify-center relative bottom-0 left-0 right-0 
  sm:h-20 h-60 z-10 bg-black text-white text-sm
`;
const Logo = tw.span`
  text-small text-white cursor-pointer
`;
