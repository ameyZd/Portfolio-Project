import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/logo.png'
import About from './About'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="Logo image" style={{ width: '50px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true}>
                        Contact
                    </Link>
                </li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ?
                'hidden' :
                'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="home" smooth={true}>
                        Home
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true}>
                        About
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true}>
                        Skills
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true}>
                        Projects
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/amey-dhote-65301a166/" target="_blank">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/ameyZd" target="_blank">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <Link className='flex justify-between items-center w-full text-gray-300' to="contact" smooth={true}>
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;