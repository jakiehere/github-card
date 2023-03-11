import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between h-16 bg-white px-3 md:px-5 2xl:px-8 shadow-md text-lg'>
        <img className='cursor-pointer' src={require('../assets/image.png')} alt="FinzTrust" />
        <h3 className='uppercase font-bold text-[#5FAE16] flex place-items-center'>Github Card</h3>
    </div>
  )
}

export default Navbar