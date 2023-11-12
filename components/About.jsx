import React from 'react';
import shivangp from '../public/assets/about/shivang.jpg'
import tanayp from '../public/assets/about/tanay.png'
import aryanp from '../public/assets/about/aryan.jpg'
import TeamComponent from './TeamComponent';

const About = () => {
  const experiences = [
    {
        profilepic: shivangp,
        name: 'Shivang Yadav, Full Stack developer',
        linkedin: 'https://www.linkedin.com/in/shivangyadav16/',
        github:'https://github.com/Shivang-stack',
        description: 'In my 2 years as a full stack developer in the node js react and next js space in startup space.I have gained a lot of experience and knowledge. I have worked on various projects, both big and small, and have learned a lot along the way.I have also gained a lot of experience in working with different teams and clients,and have learned how to manage and communicate with them effectively.I am also well-versed in the latest tools and technologies, and am always keen to learn new things.',
      },
    {
        profilepic: tanayp,
        name: 'Tanay Jagnani, UI/UX designer And Frontend Developer',
        linkedin: 'https://www.linkedin.com/in/shivangyadav16/',
        github:'https://github.com/Shivang-stack',
        description: 'Hi, I am Tanay Janani and I am a designer and front-end developer. I have worked on a variety of projects, from small websites to large enterprise applications. I am always looking to push my boundaries and learn new technologies.',
    },
    {
        profilepic: aryanp,
        name: 'Aryan Agarwal, Backend developer',
        linkedin: 'https://www.linkedin.com/in/shivangyadav16/',
        github:'https://github.com/Shivang-stack',
        description: 'My name is Aryan Agarwal and I am a backend developer with experience in Java Springboot.I have a strong educational background in business, which gives me a unique perspective on developing software solutions. I am always looking for ways to improve my skills and learn new technologies.',
    },
  ];
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto px-2 py-16'>
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
