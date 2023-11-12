import Image from 'next/image';
import React from 'react';

import htmllogo from '../public/assets/skills/html.png'
import csslogo from '../public/assets/skills/css.png'
import firebaselogo from '../public/assets/skills/firebase.png'
import github1logo from '../public/assets/skills/github1.png'
import javascriptlogo from '../public/assets/skills/javascript.png'
import nodelogo from '../public/assets/skills/node.png'
import mongologo from '../public/assets/skills/mongo.png'
import reactlogo from '../public/assets/skills/react.png'
import shopifylogo from '../public/assets/skills/shopify.png'
import tailwindlogo from '../public/assets/skills/tailwind.png'
import springlogo from '../public/assets/skills/spring.svg'
import hibernatelogo from '../public/assets/skills/hibernate.png'



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#54cfdf]'>
          Skills
        </p>
        <h2 className='py-4'>What Services we provide</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={htmllogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={nodelogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={mongologo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={springlogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Java Springboot</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={hibernatelogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Hibernate</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={csslogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={javascriptlogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={reactlogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={tailwindlogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={firebaselogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={github1logo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={shopifylogo}
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Shopify</h3>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Skills;
