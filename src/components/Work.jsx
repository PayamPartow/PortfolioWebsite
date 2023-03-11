import React, { useState }  from 'react'
import StemCell from '../assets/StemCell.png'
import MarkAnthony from '../assets/MarkAnthony.png'
// import realEstate from '../assets/projects/realestate.jpg'
import ReadmoreReadless from './ReadmoreReadless';


// function TextToggler() {
//     const [isTextVisible, setIsTextVisible] = useState(true);
  
//     const toggleText = () => {
//       setIsTextVisible(!isTextVisible);
//     };


const Work = () => {
    
  return (
    <div name= 'work' className='w-full md:h-screen text-white bg-[#0a192f]'>
        <div className='max-w-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 ml-10'>
            <p className='text-4xl font-bold ml-10 inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <ol class="mx-auto py-12 border-l-2 border-inherit border-white">
            <li>
                <div class="flex-start flex items-center">
                <div
                    class="-ml-[9px] mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                
                <h4 class="-mt-2 text-xl font-semibold inline border-b-4 border-pink-600">Help Desk Technician | Mark Anthony Group</h4>
                <div className='w-60 mx-auto'>
                    <img  src={StemCell} alt="Stem Cell Logo"/>
                </div>
                
                </div>
                <div class="ml-6 mb-6 pb-6">
                <a
                    href="#!"
                    class="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Apr, 21 – Dec, 21</a
                >
                <ReadmoreReadless class="mt-2 mb-4 text-white dark:text-neutral-300 list-disk" 
                shortContent="Proficiently managed user accounts, security groups, and domain
                policies in Active Directory to ensure efficient network authentication
                and authorization."
                
                longContent="Supported internal employees, with accounts and computer problems
                using ticketing software, Service-Now to document the issues and
                ensure all notes are properly and efficiently filled out with detail."
                
                longContent2="Supported internal employees, with accounts and computer problems
                using ticketing software, Service-Now to document the issues and
                ensure all notes are properly and efficiently filled out with detail."
                longContent3="Implemented Dynamics 365 CRM software, and carried out IT duties
                including setting permissions for users, creating reports, and
                importing data into the software"
                longContent4="Repaired computer hardware in the case of a workstation failure, and
                used software diagnostic tools and scripts to monitor client health
                with system center configuration manager (SCCM)"/>
                    
                {/* <button
                    type="button"
                    class="inline-block rounded bg-primary px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Read more
                </button> */}
                </div>
            </li>
            <li>
                <div class="flex-start flex items-center">
                <div
                    class="-ml-[9px] mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                <h4 class="-mt-2 text-xl font-semibold inline border-b-4 border-pink-600">Technical Service Representative | Stem Cell Technologies </h4>
                <div className='w-80 mx-auto'>
                    <img  src={MarkAnthony} alt="Mark Anthony Group Logo"/>
                </div>
                </div>
                <div class="ml-6 mb-6 pb-6">
                <a
                    href="#!"
                    class="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Jul, 18 – Dec, 18</a
                >
                <ReadmoreReadless class="mt-2 mb-4 text-white dark:text-neutral-300 list-disk" 
                shortContent="Deployed desktops and peripherals, following deployment
                documentation and checklists."
                
                longContent="Upgraded hardware and/or software on existing equipment."
                
                longContent2="Conducted network connections for desktops and printers."
                longContent3="Troubleshot to determine and resolve the root cause of hardware or
                software malfunctions."
                longContent4="Approached challenges with a solution-oriented mindset and curiosity"
                />
                </div>
            </li>
        
            </ol>
            </div>
        </div>
    </div>
    ) 
}

export default Work