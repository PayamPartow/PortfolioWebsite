import React from 'react'
import Remedi from '../assets/projects/Capture.PNG'
import Swivel from '../assets/projects/Swivel.PNG'

const Projects = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div name= 'projects' className='w-full md:h-screen text-white bg-[#0a192f]'>
      <div className='max-w-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
        <p className='py-6'>//Check out some of my recent Projects</p>
    </div>
    {/* grid container */}
    {/* using `` instead of '' because we are using a template literal */}
   
   
   
   {/* Container */}
   <div 
     className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
       {/* card container */}
       {/* using containwe so we can define our width */}
       {/* adding custom cs with content-div to add out own styling */}
       
       {/* Grid Item */}
       <div 
        style={{backgroundImage: `url(${Remedi})`}}
       className='shadow-lg shadow-[#040c16] group container rounded-md flex 
       justify-center items-center mx-auto content-div'>

        
        
        {/* Hover effects */}
            <div className= 'opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
Remedi: iPhone app and website companion
                </span>
                <div className='pt-8 text-center'>
                    {/* <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                    </a> */}
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '
                         onClick={(e) => {
                          e.preventDefault();
                          window.location.href=openInNewTab('https://github.com/PayamPartow/Remedi-');
                          }}
                       href="/">Code</button>
                    </a>
                </div>

            </div>
        </div> 
        <div 
        style={{backgroundImage: `url(${Swivel})`}}
       className='shadow-lg shadow-[#040c16] group container rounded-md flex 
       justify-center items-center mx-auto content-div'>

        
        
        {/* Hover effects */}
            <div className= 'opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
Swivel: Bike sharing platform
                </span>
                <div className='pt-8 text-center'>
                    {/* <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                    </a> */}
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href=openInNewTab('https://github.com/PayamPartow/Swivel-Project');
                          }}
                       href="/">Code</button>
                    </a>
                </div>

            </div>
        </div> 
 
    </div>
    

</div></div>
  )
}

export default Projects