import React from 'react'
import Topic from './common/Topic'
import Title from './common/Title'
import Subtitle from './common/Subtitle'
import { CgGym } from 'react-icons/cg'
import { GiHotMeal } from 'react-icons/gi'
import { TbYoga } from 'react-icons/tb'


const Services = () => {
    return (
        <div className='bg-gray-200'>
            <div className='max-w-[1200px] mx-auto p-6'>
                <Topic topic="Services" />
                <Title title="Discover Our Exclusive and Personalized Services to Achieve Your Fitness Goals." />
                <Subtitle subtitle="Achieve Your Goals with Our Expert Guidance!" />
                <div className='grid grid-cols-1 gap-4 p-6 md:grid-cols-2 drop-shadow-lg'>
                    <div className=' flex items-center gap-4 bg-white'>
                        <div className=' p-2 bg-orange-100 border rounded-full border-primary'>
                            <CgGym className='text-primary' size={50} />
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-semibold'>Body Building</h2>
                            <p className='text-md'>We believe in the power of bodybuilding to transform lives. Our strength facilities are designed to boost your performance, shape your body and elevate your confidence.
                            Body building is not just about appearance, but about strength, health and well-being. With the support of our highly qualified coaches, you will have the guidance you need to achieve your goals. 
                            Whether you're an experienced athlete or someone just starting their fitness journey, you'll find the welcoming environment and resources you need to thrive.</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 bg-white'>
                        <div className=' p-2 bg-orange-100 border rounded-full border-primary'>
                            <GiHotMeal className='text-primary' size={50} />
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-semibold'>Meal Plan</h2>
                            <p className='text-md'>Our nutritionists and fitness experts work closely with you to create a tailored meal plan that meets your specific needs. Whether you're an athlete looking to optimize performance, someone looking to lose weight effectively, or simply someone looking to live a healthier lifestyle, our meal plans are designed to work.
                             We believe nutrition doesn't have to be complicated. That's why we develop practical, balanced plans that fit into your daily routine. With our support, you'll learn how to make smart food choices and maximize your progress.</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 bg-white'>
                        <div className=' p-2 bg-orange-100 border rounded-full border-primary'>
                            < TbYoga className='text-primary' size={50} />
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-semibold'>Yoga</h2>
                            <p className='text-md'>We believe in the power of yoga to nourish the body, calm the mind and create lasting balance. Our yoga classes are designed to offer you a break from the hustle and bustle of everyday life and a path to reconnecting with yourself.
                            Yoga is more than a physical practice; it is a commitment to holistic well-being. In our classes, you will explore the harmony between body and mind, strengthening yourself, stretching and finding an inner tranquility that will help you face life's challenges in a more serene way.
                            Our yoga instructors are experienced</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 bg-white'>
                        <div className=' p-2 bg-orange-100 border rounded-full border-primary'>
                            <CgGym className='text-primary' size={50} />
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-semibold'>Schedule</h2>
                            <p className='text-md'>We value your convenience and want to make managing your time as simple as possible. That's why we offer an intuitive scheduling system, allowing you to plan and manage your training efficiently.
                            Our online booking system allows you to choose from a range of available times, booking classes to suit your schedule. Whether you prefer a morning workout session to start your day off right or an evening class to relax after work, the choice is in your hands.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services