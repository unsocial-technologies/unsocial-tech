import Link from 'next/link';
import React from 'react';
import Image from "next/image";

import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#54cfdf]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-900 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>UnSocial Technologies</h2>
                <p>contact.Unsocialtech@gmail.com</p>
                <p className='py-4'>
                  We are available for freelance projects. Contact
                  me and let&#39;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Us</p>
                <div className='flex items-center justify-between py-4'>
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
                                <BsFillPersonLinesFill/>
                                </Link>
                                </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-800 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-900'
                      type='text'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-900'
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-900'
                    type='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-900'
                    type='text'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-900' rows='10'></textarea>
                </div>
                <button className='w-full p-4 shadow-xl text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
            <div className='rounded-full shadow-xl shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#54cfdf]' size={30} />
                </div>
            </Link>
        </div>
      </div>
      <p>© designed by Shivang</p>
    </div>
  );
};

export default Contact;
