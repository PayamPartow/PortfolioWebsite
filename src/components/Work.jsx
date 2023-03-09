import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
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
                <h4 class="-mt-2 text-xl font-semibold inline border-b-4 border-pink-600">Title of section 1</h4>
                </div>
                <div class="ml-6 mb-6 pb-6">
                <a
                    href="#!"
                    class="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >4 February, 2022</a
                >
                <p class="mt-2 mb-4 text-white dark:text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <button
                    type="button"
                    class="inline-block rounded bg-primary px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Read more
                </button>
                </div>
            </li>
            <li>
                <div class="flex-start flex items-center">
                <div
                    class="-ml-[9px] mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                <h4 class="-mt-2 text-xl font-semibold inline border-b-4 border-pink-600">Title of section 2</h4>
                </div>
                <div class="ml-6 mb-6 pb-6">
                <a
                    href="#!"
                    class="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >12 January, 2022</a
                >
                <p class="mt-2 mb-4 text-white dark:text-neutral-200">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt.
                </p>
                <button
                    type="button"
                    class="inline-block rounded bg-primary px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Read more
                </button>
                </div>
            </li>
        
            </ol>
            </div>
        </div>
    </div>
  )
}

export default Work