import React from 'react';
import shivangp from '../public/assets/about/shivang.jpg'
import tanayp from '../public/assets/about/tanay.png'
import aryanp from '../public/assets/about/aryan.jpg'
import TeamComponent from './TeamComponent';
import Slider from 'react-slick';

const About = () => {
  
  const experiences = [
    {
        profilepic: shivangp,
        name: 'Shivang Yadav, Full Stack developer',
        linkedin: 'https://www.linkedin.com/in/shivangyadav16/',
        github:'https://github.com/Shivang-stack',
        description: '',
      },
    {
        profilepic: tanayp,
        name: 'Tanay Jagnani, UI/UX designer And Frontend Developer',
        linkedin: 'https://www.linkedin.com/in/shivangyadav16/',
        github:'https://github.com/Shivang-stack',
        description: '',
    },
    {
        profilepic: aryanp,
        name: 'Aryan Agarwal, Backend developer',
        linkedin: 'https://www.linkedin.com/in/shivangyadav16/',
        github:'https://github.com/Shivang-stack',
        description: '',
    },
  ];
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='container mx-auto px-2 py-16'>
            <p className='text-xl pt-5 tracking-widest uppercase text-[#cfbaec]'>About Us</p>
            <h2 className=''>Our Team</h2>
            <div className='pt-5'>
              <TeamComponent  teamData={experiences}/>
            </div>
            
        </div>
    </div>
  );
};

export default About;
