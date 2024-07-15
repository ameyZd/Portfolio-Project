import React from 'react'
import Typewriter from "typewriter-effect";
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-orange-600'>Hi, my name is </p>
                <h1 className='py-2 text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Amey Dhote</h1>
                <h2 className='py-2 text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("I'm a Full Stack Developer")
                            .start();
                    }}
                />
                </h2>
                <p className='text-[#8892b0] py-2 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
                    qui facere, ipsum quod, expedita culpa laboriosam, enim quis tempore unde at similique nihil!
                    A quae neque, laboriosam amet voluptatum dolorem fuga excepturi repudiandae voluptate?</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 duration-300 hover:border-orange-600'>View Work
                        <span className='group-hover:rotate-90 duration-500'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;