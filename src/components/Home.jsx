//using rafce to generate a functional components

import React from 'react'
//importing icon from react icons
import {HiArrowNarrowRight} from 'react-icons/hi'
// importing react-scroll for smooth scrolling to different sections of the page
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name= 'home' className='w-full h-screen bg-[#0a192f]'>


        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            {/* sm:text-7xl means anything above a small screen size makes the text size 7xl*/}
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Payam Partow</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '> I'm a Computer Engineering new Grad from Simon Fraser University </h2>
            {/* py-4 is padding from the text above it on the y axis */}
            {/* max-w-[700px] makes the max width of our text to not go over width of 700px for when we make the screen larger */}
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I have substantial experience in mobile software development , full-stack web applications 
                and embedded hardware Programming</p>
            <div>
                {/* border-2 gives us a border around the button */}
                {/*  px-6 py-2 my-2 add padding and margin for the border */}
                {/* using group in both button and span to make the arrow point downward when hover */}
                <button className='text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-pink-600
                 hover:border-pink-600'>
                 <   Link  to="work"  smooth={true} offset={50} duration={500}  >
                    View Work
                    </Link>
                 <span className='group-hover:rotate-90 duration-300'>
                 <HiArrowNarrowRight className='ml-3 hover:'/>
                 </span>
                 
                 </button>
            </div>

        </div>


    </div>
  )
}

export default Home