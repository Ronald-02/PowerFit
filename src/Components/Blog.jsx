import React from 'react'
import Topic from './common/Topic'
import Title from './common/Title'
import Subtitle from './common/Subtitle'
import Button from './common/Button3'

const Blog = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto'>
                <Topic topic="Our Blog" />
                <Title title="Latest From Our Blog" />
                <Subtitle subtitle="Our blog is where we share knowledge, practical tips, success stories and up-to-date health and fitness information. We believe that education is the key to long-term success, which is why we are committed to providing valuable content to our members and everyone seeking a healthier life.
                Our articles cover a range of topics, from training, nutrition and wellness tips to inspiring stories from clients who have transformed their lives through fitness. Our goal is to empower you with the knowledge and motivation needed to achieve your goals.
                Explore our blog and discover a rich source of information about health, wellness and fitness. We're here to support you every step of the way so you can live life with energy, vitality and confidence." />
            </div>
            <div className='grid grid-cols-1 gap-4 p-6 md:grid-cols-3 drop-shadow-lg'>
                <div className='bg-white'>
                    <img className='' src="https://www.creativefabrica.com/wp-content/uploads/2023/09/16/12-Fitness-Blog-Lightroom-presets-Graphics-79403627-1-580x387.jpg" alt="" />
                    <div className='bg-white shadow-lg hover:shadow-2xl p-2'>
                        <p className='p-2 font-semibold text-md'>View 100k</p>
                        <p className='p-2 font-semibold text-md'>07/06/2021</p>
                        <p className='p-2 font-semibold text-md'>How to Start an Exercise Routine at Home: </p>
                        <Button name= ""/>
                    </div>
                </div>
                <div className='bg-white'>
                    <img className='' src="https://www.creativefabrica.com/wp-content/uploads/2023/09/16/12-Fitness-Blog-Lightroom-presets-Graphics-79403627-1-580x387.jpg" alt="" />
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <p className='p-2 font-semibold text-md'>View 250k</p>
                        <p className='p-2 font-semibold text-md'>18/08/2021</p>
                        <p className='p-2 font-semibold text-md'>Stretching Tips for Better Flexibility: </p>
                        <Button name= ""/>

                    </div>
                </div>
                <div className='bg-white'>
                    <img className='' src="https://www.creativefabrica.com/wp-content/uploads/2023/09/16/12-Fitness-Blog-Lightroom-presets-Graphics-79403627-1-580x387.jpg" alt="" />
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <p className='p-2 font-semibold text-md'>View 300k</p>
                        <p className='p-2 font-semibold text-md'>02/11/2021</p>
                        <p className='p-2 font-semibold text-md'>Resistance Training vs. Cardiovascular Training:</p>
                        <Button name= ""/>

                    </div>
                </div>
                <div className='bg-white'>
                    <img className='' src="https://www.creativefabrica.com/wp-content/uploads/2023/09/16/12-Fitness-Blog-Lightroom-presets-Graphics-79403627-1-580x387.jpg" alt="" />
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <p className='p-2 font-semibold text-md'>View 400k</p>
                        <p className='p-2 font-semibold text-md'>25/09/2022</p>
                        <p className='p-2 font-semibold text-md'>Client Transformation Stories:</p>
                        <Button name= ""/>

                    </div>
                </div>
                <div className='bg-white'>
                    <img className='' src="https://www.creativefabrica.com/wp-content/uploads/2023/09/16/12-Fitness-Blog-Lightroom-presets-Graphics-79403627-1-580x387.jpg" alt="" />
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <p className='p-2 font-semibold text-md'>View 800k</p>
                        <p className='p-2 font-semibold text-md'>14/11/2022</p>
                        <p className='p-2 font-semibold text-md'>Benefits of Functional Training</p>
                        <Button name= ""/>

                    </div>
                    </div>
                    <div className='bg-white'>
                    <img className='' src="https://www.creativefabrica.com/wp-content/uploads/2023/09/16/12-Fitness-Blog-Lightroom-presets-Graphics-79403627-1-580x387.jpg" alt="" />
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <p className='p-2 font-semibold text-md'>View 1M</p>
                        <p className='p-2 font-semibold text-md'>13/03/2023</p>
                        <p className='p-2 font-semibold text-md'>How to Maintain Motivation in Fitness:</p>
                        <Button name= ""/>

                    </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Blog