import React from 'react';
import carMgmt from '../assets/carMgmt.gif';
import aiSurvey from '../assets/aiSurvey.webp';
import pong from '../assets/pong.gif'
import { TbBackground } from 'react-icons/tb';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-scnreen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bol inline border-b-4 text-gray-300 border-orange-600'>Projects</p>
                    <p className='py-6'>Check out some of my recent projects</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${carMgmt})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover effect */}
                        <div className='group-hover: opacity-100'>
                            <span className='text-1xl font-bold text-white tracking-wider'>
                                Car Management CRUD Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://drive.google.com/file/d/1MSQMJGqPDB9OrpFX3SokDIO89TzpENH1/preview" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/ameyZd/Car-Management-Application?tab=readme-ov-file" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${aiSurvey})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover effect */}
                        <div className='group-hover: opacity-100'>
                            <span className='text-1xl font-bold text-white tracking-wider'>
                                AI Survey Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${pong})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover effect */}
                        <div className='group-hover: opacity-100'>
                            <span className='text-1xl font-bold text-white tracking-wider'>
                                Pong AI using NEAT
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://drive.google.com/file/d/1QgQIs5_4pYu1a3AMOVUJnwyXZyWAjVOR/view?usp=sharing" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/ameyZd/NEAT-AI-Pong" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Work;