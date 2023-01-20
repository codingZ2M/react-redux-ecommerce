import React from 'react'
import { motion } from 'framer-motion'

const HeroBanner = () => {
  return (
    <div className='flex items-center justify-center mt-0'>

      <motion.img  initial={{ opacity: 0 }} animate={{ opacity: 1}}  transition={{ duration: 1 }}
      className='w-full h-full brightness-50'
           src="/images/hero-banner.jpg"/>
      
      <div className="absolute top-22 sm:top-72 left-0 sm:left-48  z-1 text-white flex flex-col gap-4 sm:gap-12">
       <div className='flex flex-col gap-0 sm:gap-2'>
        <motion.h3 animate={{ x: 100, opacity: 1 }} initial={{opacity: 0}} transition={{ease: "easeOut", duration: 2}}
            className='text-base sm:text-7xl'>Summer Sale & Collections</motion.h3>
        <motion.p animate={{ x: 100, opacity: 1 }} initial={{opacity: 0}} transition={{ease: "easeOut", duration: 3}} 
                className='w-72 sm:w-full text-sm sm:text-2xl'>Casual Dress Collections - Special Offers & Discounts</motion.p>
       </div>
       <div className='flex flex-col gap-0 sm:gap-2'>
        <motion.p animate={{ x: 100, opacity: 1 }} initial={{opacity: 0}} transition={{ease: "easeOut", duration: 4}}
        className='text-base sm:text-5xl'>30% Off</motion.p>
        <motion.p animate={{ x: 100, opacity: 1 }} initial={{opacity: 0}} transition={{ease: "easeOut", duration: 4}}
         className='text-sm sm:text-2xl'>15th Jan 2023</motion.p>
        <motion.button animate={{ x: [0, 100, 0] }} initial={{opacity: 0}} transition={{ease: "easeOut", duration: 4}}
        className='hidden sm:flex items-center justify-center mt-10 w-60 text-white font-medium border-2 border-[#fff] px-6 py-2.5
                              rounded-full hover:bg-black hover:text-white hover:border-white'>
                  Shop Now
        </motion.button>
      </div>
      </div>
      
    </div>
  )
}

export default HeroBanner