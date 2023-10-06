import Image from 'next/image'
import React from 'react'
import logo from "../../images/logo1.png";

const Footer = () => {
  return (
    <div className='w-full h-20 bg-slate-900 text-gray-300 flex items-center justify-center gap-4'>
        <Image className='w-24' src={logo} alt='logo' />
        <p className='text-sm -mt-4 hover:underline decoration-[-1px] cursor-pointer duration-300'>All rights reserved @reacted .com</p>
    </div>
  )
}

export default Footer