import React from 'react';
import {BsFacebook, BsInstagram,} from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'
import { AiFillLinkedin } from 'react-icons/ai'
import Button from './common/Button2';

const Footer = () => {
    return (
        <div className='bg-black text-gray-200'>
            <div className='grid grid-cols-1 px-16 py-6 gap-6 md:grid-cols-3 drop-shadow-lg'>
                <div>
                    <h3 className='text-xl font-semibold text-white'>About</h3>
                    <p className='text-sm py-4 font-semibold'>Our social media is a place where you can stay up to date with the latest gym news, get information about special events, access training, 
                    nutrition and wellness tips, and interact with our team and other members.</p>
                     <div className='flex gap-4'>
                        <BsFacebook className='bg-primary p-2 cursor-pointer hover:bg-transparent' size={30}/>
                        <BsInstagram className='bg-primary p-2 cursor-pointer hover:bg-transparent' size={30}/>
                        <RiTwitterXFill className='bg-primary p-2 cursor-pointer hover:bg-transparent' size={30} />
                        <AiFillLinkedin className='bg-primary p-2 cursor-pointer hover:bg-transparent' size={30} />
                     </div>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Quick Links</h3>
                    <ul className='text-sm flex flex-row gap-3 mt-4 '>
                        <li className='cursor-pointer font-semibold hover: text-white'>Home</li>
                        <li className='cursor-pointer font-semibold hover: text-white'>About</li>
                        <li className='cursor-pointer font-semibold hover: text-white'>Services</li>
                        <li className='cursor-pointer font-semibold hover: text-white'>Trainers</li>
                        <li className='cursor-pointer font-semibold hover: text-white'>Blog</li>
                        <li className='cursor-pointer font-semibold hover: text-white'>Pricing</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-white'>NewsLetter</h3>
                    <p className='text-sm py-4 font-semibold'>We are excited to bring you the latest news and updates directly from PowerFit. We are committed to keeping you informed and inspired on your health and wellness journey. Here is some of the latest news:</p>
                         <input className='rounded-full py-2 px-6 outline-none text-black mb-4' type='text' placeholder='Enter Email Address'></input>
                         <Button name=""/>
                </div>
            </div>
            <div className='p-4 border-t-2 border-gray-500'>
                <p className='text-lg text-center'> 
                <small className='text-lg font-semibold'>Create by{" "}  <a className='text-primary cursor-pointer font-semibold text-lg' href="https://portifolio-lbhe.vercel.app/"><span> Ronald Da Silva</span></a></small><span> © 2023 All Right Reserved</span></p>
            </div>
        </div>
    )
}

export default Footer