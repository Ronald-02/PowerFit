import React from 'react';
import Button from './common/Button';

const Hero = () => {
    return (
        <div className='bg-[url("https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1668567938475-56CZAP4PJTOXZNP49G7U/220825_HYPERICE_VENON_PRELIGHT0567.jpg?format=2500w")] h-[70vh] w-screen bg-no-repeat bg-center bg-cover relative flex justify-center' >
            <div className='absolute top-0 left-0 z-10 bg-black opacity-60 h-[70vh] w-screen'>
                <div className='relative z-20 flex flex-col items-center text-white h-[100%] w-[100%] justify-center gap-4 text-center'>
                    <h1 className='text-5xl'>Your body can withstand almost anything!</h1>
                    <p className='text-lg'>It's your mind that you need to convince!</p>
                    <Button name="" />
                </div>
            </div>
        </div>
    )
}

export default Hero