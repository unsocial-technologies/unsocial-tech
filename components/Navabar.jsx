import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import{BsPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router';

import logow from '../public/assets/logownav.png'

const Navbar =() =>{
    const [nav, setNav] =useState(false)
    
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#50a4d1');
    const [linkColor, setLinkColor] = useState('#50a4d1');
    const router = useRouter();

    useEffect(() => {
        if (
          router.asPath === '/animekart' ||
          router.asPath === '/chatapp' ||
          router.asPath === '/newswebsite' ||
          router.asPath === '/videochat' ||
          router.asPath === '/weatherapp'
        ) {
          setNavBg('bg-gradient-to-r from-blue-800 to-gray-900');
          setLinkColor('#1f2937');
        } else {
          setNavBg('#ecf0f3');
          setLinkColor('#50a4d1');
        }
      }, [router]);
    
    const handleNav =()=>{
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);

    return(
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
           <Link href='/'>
           <Image src={logow} alt="" width='121' height='70' />
           </Link>
            <div className="font-['ES_build']">
                <ul style={{ color: `${linkColor}` }}  className="hidden md:flex">
                    <Link  href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>
                    <Link  href="/#about">
                    <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link>
                    <Link  href="/#skills">
                    <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link>
                    <Link  href="/#projects">
                    <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </Link>
                    <Link  href="/#contact">
                    <li className="ml-10 text-sm uppercase hover:border-b">Contacts</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className=' md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>
            <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
                <div className={nav
                    ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[75%] h-screen bg-[#1f2937] p-10 ease-in duration-500'
                    : ' fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }>
                    <div>
                        <div className=' flex w-full items-center justify-between'>
                            <Image src={logow} width='250' height='150'/>
                            <div  onClick={handleNav} className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className=' border-b border-gray-800 my-4'>
                            <p className=' w-[85%] md:w-[90%] py-4'>Let&#39;s bulid something legendary together</p>
                        </div>
                    </div>
                    <div className=' py-4 flex flex-col'>
                        <ul className=' uppercase'>
                            <Link href='/'> 
                            <li onClick={() => setNav(false)} className=' py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'> 
                            <li onClick={() => setNav(false)} className=' py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'> 
                            <li onClick={() => setNav(false)} className=' py-4 text-sm'>Skill</li>
                            </Link>
                            <Link href='/#projects'> 
                            <li onClick={() => setNav(false)} className=' py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'> 
                            <li onClick={() => setNav(false)} className=' py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className=' pt-10'>
                            <p className='uppercase tracking-widest text-[#50a4d1] '>Let&#39;s Connect</p>
                            <div className=' flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://www.linkedin.com/in/shivangyadav16/'>
                                <FaLinkedinIn/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://github.com/Shivang-stack'>
                                <FaGithub/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://mail.google.com/mail/u/shivang1691401@gmail.com'>
                                <AiOutlineMail/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://drive.google.com/file/d/1eAITCDdjJdnqHTgvhHo5pUToabFsdUqD/view?usp=sharing'>
                                <BsPersonLinesFill/>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar