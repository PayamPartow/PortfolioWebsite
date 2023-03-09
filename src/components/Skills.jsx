import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/Python.png';
import MySQL from '../assets/MySQL.png';

const Skills = () => {
  return (
    <div name= 'skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600  '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {/* shadow-md and shadow-[#040c16] created a box of shadow around the object */}
                {/* hover:scale-110 duration-500 makes the object to get larger upon hover */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* mx-auto auto adjusts the icon in the center */}
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* mx-auto auto adjusts the icon in the center */}
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* mx-auto auto adjusts the icon in the center */}
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* mx-auto auto adjusts the icon in the center */}
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon"/>
                    <p>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* mx-auto auto adjusts the icon in the center */}
                    <img className='w-20 mx-auto' src={Python} alt="Python icon"/>text-white
                    <p>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* mx-auto auto adjusts the icon in the center */}
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon"/>
                    <p>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* mx-auto auto adjusts the icon in the center */}
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"/>
                    <p>Tailwind</p>
                </div>
                <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* mx-auto auto adjusts the icon in the center */}
                    <img  className='w-20 mx-auto ' src={MySQL} alt="MySQL icon"/>
                    <p>My SQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills