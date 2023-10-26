import React from 'react'
import Topic from './common/Topic'

const AboutUs = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-[1300px] mx-auto grid grid-cols-1 gap-2 items-center p-8 md:grid-cols-2'>
                <div className='rounded-md w-full mx-auto'>
                    <img className='rounded-md w-[80%]' src='https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1668567943245-YE4SHVU4PQ8BQXMVGSIJ/220825_HYPERICE_VENON_PRELIGHT0619.jpg?format=2500w'></img>
                </div>
                <div>
                    <Topic topic="About Us" />
                    <h4 className='text-4xl font-semibold mb-4'>Building a Path Together to the Best Version of Yourself</h4>
                    <p>At PowerFit, our mission is much more than helping people achieve their fitness goals. We are more than a space full of high-tech equipment; We are a community dedicated to inspiring and empowering individuals to transform their lives through fitness.
                       For over 3 years, we've been proud to provide a welcoming, inclusive environment where people of all fitness levels can find the support, resources, and guidance they need to reach their full potential. Here, it doesn't matter if you are an experienced athlete or just starting your fitness journey, everyone is welcome. 
                       Our team of highly qualified trainers is committed to providing personalized training, expert guidance and constant motivation. We believe the key to success is a holistic approach, which includes training, nutrition and general well-being. In addition to physical training, we are committed to giving back to the community. We actively participate in charitable programs, local events and community health initiatives to promote an active and healthy lifestyle.
                       Join us on this journey of discovery, transformation and achievement of goals. At PowerFit, we're here to support you every step of the way.
                       Be part of our community and discover what is possible when you commit to your well-being and success.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs