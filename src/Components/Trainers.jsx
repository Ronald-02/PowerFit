import React from 'react';
import Topic from './common/Topic';
import Title from './common/Title';
import Subtitle from './common/Subtitle';


const Trainers = () => {
    return (
        <div className='bg-gray-200'>
            <div className="max-w-[1200px] mx-auto">
                <Topic topic="Trainers" />
                <Title title="Meet Our Experienced Trainers" />
                <Subtitle subtitle="Our trainers are the heart of our commitment to your fitness success. Our team of highly qualified professionals is dedicated to providing expert guidance and constant motivation to help you achieve your goals.
                Each of our trainers is selected based on their experience, knowledge and passion for fitness. They understand that there is no one-size-fits-all approach that works for everyone, which is why they adapt their methods to meet your individual needs." />
                <div className='grid grid-cols-1 gap-4 p-6 md:grid-cols-3'>
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <img className='w-auto h-auto' src="https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1664287753712-8WT2EYRGYUG30AWLDN3M/SHOT21_GYM_04429.jpg?format=2500w" alt="" />
                        <p className='p-2 font-semibold text-md'>John Bucker</p>
                        <p className='p-2 font-semibold text-md'>Body Building trainer</p>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <img className='' src="https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1591317153864-DZPEDTAK5Y4MS3WKIQKW/peloton-5.jpg?format=2500w" alt="" />
                        <p className='p-2 font-semibold text-md'>Sarah Jones</p>
                        <p className='p-2 font-semibold text-md'>Body Building Trainer</p>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <img className='' src="https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1591316908481-4RWWFBRR9GLJ5XO824DC/sportsgalleries-46-2.jpg?format=2500w" alt="" />
                        <p className='p-2 font-semibold text-md'>Rachel Dones</p>
                        <p className='p-2 font-semibold text-md'>Yoga Trainer</p>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <img className='' src="https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1591316740659-4LDF8H3XVG9NZHEJ0S35/181103_361_ASHTON_EATON_E_04301-Edit-retouched.jpg?format=2500w" alt="" />
                        <p className='p-2 font-semibold text-md'>Paul Willians</p>
                        <p className='p-2 font-semibold text-md'>Body Building Trainer</p>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <img className='' src="https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1619969450663-49VK301LRTLPZJB77ONO/09_20200725_Ready_AD_Dungeon_C03_0596.jpg?format=2500w" alt="" />
                        <p className='p-2 font-semibold text-md'>Will James</p>
                        <p className='p-2 font-semibold text-md'>Cross Fit</p>
                    </div>
                    <div className='bg-white shadow-lg hover:shadow-2xl'>
                        <img className='' src="https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1591316695898-0ULQUMUTAJD2JW6BPZ5Y/FUNCTIONAL-FITNESS_SARATI_05294.jpg?format=2500w" alt="" />
                        <p className='p-2 font-semibold text-md'>Lily Spacer</p>
                        <p className='p-2 font-semibold text-md'>Cross Fit</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Trainers