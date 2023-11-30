import React from 'react'
import '../App.css'
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Main = () => {

    return (
        <div className='bg-transparent h-full py-8 lg:py-22 mt-18 md:py-20 sm:py-18 p-2 overflow-hidden flex flex-col lg:flex-row justify-between' style={{ paddingTop: '12rem' }} id='home'>
            <div className="flex flex-col">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <div className="lg:w-1/2">
                            <h2 id="entry-text" className="text-xl sm:text-xl font-bold tracking-tight text-gray-600">
                                HI👋, I'm <span className="text-blue-400"> MOHAMMAD AGUS SALIM</span>
                            </h2>
                            <p id="entry-paragraph1" className="mt-2 text-lg sm:text-xl leading-8 text-gray-600">Student & Front-end Web Developer</p>
                            <p id="entry-paragraph2" className="mt-6 text-base sm:text-lg leading-7 text-gray-600">
                                Welcome to my personal blog, a place where stories and knowledge meet! In our hero
                                section,
                                you will immediately feel the energetic vibrations of the interesting topics we discuss.
                                With captivating titles and high-quality images or videos, we invite you to reflect and
                                explore the unique world we present. Every design element is carefully chosen to provide
                                a
                                compelling experience, from calls to action that invite you to read more to short
                                descriptions that encapsulate the beauty of our blog content. We believe that a clean,
                                responsive layout is the key to providing information in the most understandable way.

                            </p>
                            <div className='p-4 items-center justify-center flex space-x-4 mt-6'>
                                <a href="https://www.instagram.com/agsslmmm_/" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500">
                                    <FaInstagram size={30} className='hover:scale-110 transition-all duration-500' />
                                </a>
                                <a href="https://github.com/Agsslmmmmm" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500">
                                    <FaGithub size={30} className='hover:scale-110 transition-all duration-500' />
                                </a>
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl lg:max-w-lg lg:mx-0 lg:flex-2">
                            <div className="md:flex-shrink-0 md:flex-grow">
                                <img
                                    src="../image/profile.png" alt="Your Image" id="entry-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
