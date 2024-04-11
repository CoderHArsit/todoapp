import React from 'react'
import logo from '../public/assets/images/newlogo.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className=' w-full  h-screen max-h-48  bg-black/30  align-middle justify-center text-center'>
    <div className=' mt-3 ml-3 font-bold text-white flex-col align-middle justify-center text-center'>
       <ul className='text-center'>
        <li className='mb-4 '  > <Image src={logo}
        width={50}
        height={50}
        className='rounded-full object-contain ml-auto mr-auto justify-center align-middle '
        ></Image><a className='text-3xl mt-1 orange_gradient'>
            Implemented Ideas
       </a> </li>
        <li>
       <a href='https://www.linkedin.com/in/harshit-saxena-35b70b211/' className='text-white'>About Us</a></li>
       <li>Contact Us</li></ul>
       </div>
        
       {/* <div className='  text-xs text-white   mt-auto ml-auto mr-auto  mb-auto'>@madebyharshit</div> */}
    </div>
    
  )
}

export default Footer
