import React, { useState } from 'react'
import Button from './common/Button'
import{AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
    
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

 



    return (
        <div className='text-white bg-black'>
            <div className='max-w-[1350px] flex justify-between items-center px-6 mx-auto py-4'>
              <h1 className='text-4xl font-bold font-logo'>Power<span className='text-primary'>Fit</span></h1>  
              <div className=' hidden md:flex'>
                <ul className='flex items-center gap-4 text-md uppercase'>
                    <li className='cursor-pointer hover:text-primary'>Home</li>
                    <li className='cursor-pointer hover:text-primary'>About</li>
                    <li className='cursor-pointer hover:text-primary'>Services</li>
                    <li className='cursor-pointer hover:text-primary' >Trainers</li>
                    <li className='cursor-pointer hover:text-primary'>Pricecs</li>
                    <li className='cursor-pointer hover:text-primary'>Blog</li>
                    <Button name= ""/>
                </ul>
              </div>

              <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        </div>
        <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full border-r-gray-900 bg-black ease-in-out duration-500 z-50 md:hidden' : 'fixed left-[-170px] ease-out duration-500'}>
        <h1 className='text-4xl font-bold font-logo '><span className='text-primary'></span></h1>  
              <div className='z-50 block md:hidden'>
                <ul className='pt-24 p-4 uppercase flex flex-col gap-6'>
                    <li className='cursor-pointer hover:text-primary'>Home</li>
                    <li className='cursor-pointer hover:text-primary'>About</li>
                    <li className='cursor-pointer hover:text-primary'>Services</li>
                    <li className='cursor-pointer hover:text-primary' >Trainers</li>
                    <li className='cursor-pointer hover:text-primary'>Pricecs</li>
                    <li className='cursor-pointer hover:text-primary'>Blog</li>
                    <Button name= ""/>
                </ul>
             </div> 
        </div>
    </div>
    )
}

export default Navbar;