import React from 'react'

const About = () => {
  return (
    // h-screen is a 100 viewpoint heights
    <div name= 'about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                {/*sm:text-right means anything above small makes About jump over to the right */}
                {/* pb-8 is padding bottom of 8 , pl-04 padding to left */}
                <div className='sm:text-right pb-8 pl-04'>
                    <p className='text-4xl font-bold  inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                {/* grid sm:grid-cols-2 for screen size above small makes a grid in column format between each div, 
                gap-8 makes a little gap btween the two texts */}
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm: text-right text-4xl font-bold'>
                        <p>Hi. I'm Payam, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>I am Passionate about building excelent software that improves the lives of those around me.
                        I specialize in creating software that solve problems ranging from mobile apps and websites to 
                        programming FPGA devices and developing embedded software.
                        </p>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default About