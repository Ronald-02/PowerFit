import React from 'react';
import Topic from './common/Topic';
import Title from './common/Title';
import Subtitle from './common/Subtitle';
import { TiTick } from 'react-icons/ti'
import Button from './common/Button';


const Pricing = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-[1100px] mx-auto p-8'>
                <Topic topic="Pricing" />
                <Title title="Join Suitable Plan" />
                <Subtitle subtitle="We understand that everyone is unique and has different fitness goals. That's why we offer a variety of membership plans designed to meet your individual needs.
                Whether you're looking for a long-term commitment or prefer the flexibility to tailor your plan around your schedule, we have the right option for you. Our plans are designed to give you complete access to our high-quality facilities as well as support services that will help you achieve your goals.
                With our membership plans, you'll have the opportunity to work with our trainers, participate in dynamic classes, use our state-of-the-art equipment, and much more. Whatever your goal, we are here to support you on your fitness journey." />
                <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-3 drop-shadow-lg'>
                    <div className='relative bg-gray-100 shadow-md'>
                        <div className='h-32 py-4 text-center bg-primary'>
                            <h2 className='text-4xl text-white uppercase'>Silver</h2>
                        </div>
                        <div className=' absolute flex flex-col items-center justify-center p-4 h-32 w-32 border-primary bg-white border-4 rounded-full top-[80px] left-[100px]'>
                            <p className='text-2xl font-semibold'>$12.99</p>
                            <p className='text-md'>/Month</p>
                        </div>
                        <div className='p-6 mt-[60px] text-center flex flex-col items-center'>
                            <p className='flex items-center gap-4 py-2 text-lg'> <TiTick />15 Body Building</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />10 Boxing classes</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />5 Massage</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />6 Swiming Sessions </p>
                            <Button name="Select Plan"/>
                        </div>
                    </div>
                    <div className='relative bg-gray-100 shadow-md'>
                        <div className='h-32 py-4 text-center bg-primary'>
                            <h2 className='text-4xl text-white uppercase'>Gold</h2>
                        </div>
                        <div className=' absolute flex flex-col items-center justify-center p-4 h-32 w-32 border-primary bg-white border-4 rounded-full top-[80px] left-[100px]'>
                            <p className='text-2xl font-semibold'>$30.99</p>
                            <p className='text-md'>/Month</p>
                        </div>
                        <div className='p-6 mt-[60px] text-center flex flex-col items-center'>
                            <p className='flex items-center gap-4 py-2 text-lg'> <TiTick />20 Body Building</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />15 Boxing classes</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />10 Massage</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />10 Swiming Sessions </p>
                            <Button name="Select Plan"/>
                        </div>
                    </div>
                    <div className='relative bg-gray-100 shadow-md'>
                        <div className='h-32 py-4 text-center bg-primary'>
                            <h2 className='text-4xl text-white uppercase'>Platinuam</h2>
                        </div>
                        <div className=' absolute flex flex-col items-center justify-center p-4 h-32 w-32 border-primary bg-white border-4 rounded-full top-[80px] left-[100px]'>
                            <p className='text-2xl font-semibold'>$50.99</p>
                            <p className='text-md'>/Month</p>
                        </div>
                        <div className='p-6 mt-[60px] text-center flex flex-col items-center'>
                            <p className='flex items-center gap-4 py-2 text-lg'> <TiTick />30 Body Building</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />20 Boxing classes</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />10 Massage</p>
                            <p className='flex items-center gap-4 py-2 text-lg'><TiTick />12 Swiming Sessions </p>
                            <Button name=""/>
                        </div>
                    </div>
                </div>
            </div>
         /</div>
    )
}

export default Pricing