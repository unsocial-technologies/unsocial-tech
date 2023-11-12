import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

import logow from '../public/assets/logow.png';

const Main = () => {
  return (
    <div id='home' className='w-full min-h-screen text-center'>
      <div className='max-w-[1240px] w-full mx-auto p-2 flex flex-col items-center'>
        <div className='max-w-[540px]'>
          <Image src={logow}  />
        </div>
        <div className='text-center'>
          <p className='uppercase text-sm tracking-widest text-gray-300'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-200'>
            We&#39;re a digital agency focused on creative and results-driven solutions.
          </h1>
          <p className='py-4 text-gray-200 max-w-[80%] m-auto'>
            We provide software development and maintenance services to a wide range of clients in India.
            We have a team of highly skilled and experienced professionals who are experts in their respective fields.
            We are committed to providing the best possible services to our clients and strive to exceed their expectations.
            We believe in building long-term relationships with our clients and providing them with the best possible value for their money.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <Link href='https://www.linkedin.com/in/shivangyadav16/'>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <Link href='https://github.com/Shivang-stack'>
                <FaGithub />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <Link href='mailto:shivang1691401@gmail.com'>
                <AiOutlineMail />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <Link href='https://drive.google.com/file/d/1eAITCDdjJdnqHTgvhHo5pUToabFsdUqD/view?usp=sharing'>
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
