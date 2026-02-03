import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className=' w-full flex flex-col items-center justify-between bg-black py-4 space-y-2'>
        <h3 className='text-white text-sm'>Copyright    2024 | All rights reserved</h3>
        <p className='text-white text-sm'>Designed by <span className='text-blue-400'>Rufai Abdulrahman</span> </p>
        <Link to="/web3" className="text-gray-500 hover:text-purple-400 text-xs transition-colors mt-2">
            Check out Web3 Portfolio
        </Link>
    </div>
    </>
  )
}

export default Footer;