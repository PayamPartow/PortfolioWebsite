//using rafce to generate a functional components

import React, {useState} from 'react'  //importing useState as well
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaMailBulk } from 'react-icons/fa' //make sure to add /fa at end
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/a (5).png' //importing logo
import { Link } from 'react-scroll'


// used rafce to create a template for navbar object 
const Navbar = () => {
    const[nav , setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const handleDownload = () => {
        const url = 'https://drive.google.com/file/d/1cSITv4qTpz3LypA1hG8Mxz1ylhXOLLLR/view?usp=share_link';
        window.open(url, '_blank');
      };

  return (
    //fixed means it doesn't move when scrolling
    // w-full means full screen width
    //h-[80px] means the height of navbar is 8- pixels 
    //bg-[#0a192f] is the background color value in hex
    //text-gray-300 is the color of the text 
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src= {Logo} alt="Logo Image" style={{width: '50px'}}/> 
            {/* adding the logo */}
        </div>


        {/* menu */}
            {/* creating an unordered list */}
            {/* flex makes each object be in the same line  */}
            {/* hidden md:flex makes the items disappear when we are under medium(768 px) width of screen */}
           <ul className='hidden md:flex'> 
           
            {/* creating a list inside the unordered list */}
            {/* copying the link we got from react scroll documentation */}
            {/* this is the code enabling us to smooth scroll to the section we click on in the nav bar menu */}
            
                <li>
                    {/* to="home is pointing to the div name of home inside our Home.jsx component" */}
                <   Link  to="home"  smooth={true}  duration={500} >
                    {/* the Home here is whats going to show up on the navbar instead of the one below which is a 
                    series of lists we created inside our unordered list*/}
                    Home
                    </Link>
                </li>
                
                <li>
                <   Link  to="about"  smooth={true}  duration={500} >
                    About
                    </Link>
                </li>
            
                <li>
                <   Link  to="skills"  smooth={true}  duration={500} >
                    Skills
                    </Link>
                </li>

                <li>
                <   Link  to="work"  smooth={true}  duration={500} >
                    Projects
                    </Link>
                </li>
               
                <li>
                <   Link  to="work"  smooth={true}  duration={500} >
                    Work
                    </Link>
                </li>
                
                <li>
                <   Link  to="contact"  smooth={true}  duration={500} >
                    Contact
                    </Link>
                </li>
                
            </ul> 
        
        
        {/* Hamburger menu: the three lines for mobile app menus */}
        {/* md:hidden shows the hamburger menue when screen is smaller than medium */}
        {/* z-10 makes out z index to 10 so we can see the hamburger menu on mobile view */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {/* hidden will hide the class */}
            {/* changing the icon from hamburger to cross upon click */}
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>



        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>      
                {/* py-6 is padding of 1.5 rim on the y axis top and bottom  */}
                {/* text-4xl makes the text bigger */}
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
        </ul>



        {/* social icons */}

        {/*hidden and then lg: means anything over the large break point will displace flex, meaning larger screen will make them reappear */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
           
            <ul>
                {/* flex justify-between spreads the icons out  */}
                {/* ml-[-100px] moves back the list to the left by 100 pixels so it hides the written linkein */}
                {/* hover:ml-[-10px] slides everything slightly to write when we hover on it */}
                {/* duration-300 makes the sliding animation slower and smoother */}

                
                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                    
                

                    <a className=' flex justify-between items-center w-full text-gray-300 '

                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href=openInNewTab('https://www.linkedin.com/in/payam-partow/');
                        }}
                     href="/">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                        
                </li>

                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
                    <a className=' flex justify-between items-center w-full text-gray-300 '
                     onClick={(e) => {
                        e.preventDefault();
                        window.location.href=openInNewTab('https://github.com/PayamPartow');
                        }}
                     href="/">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]' >
                    <a className=' flex justify-between items-center w-full text-gray-300 '
                     onClick={(e) => {
                        e.preventDefault();
                        window.location.href=openInNewTab('payampartow@icloud.com');
                        }}
                     href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' >
                    <a className=' flex justify-between items-center w-full text-gray-300 '
                     onClick={handleDownload}
                     href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    
    
    
    </div>
  )
}

export default Navbar