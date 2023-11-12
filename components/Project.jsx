import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import animekartImg from '../public/assets/projects/AnimeKart.png';
import chatappImg from '../public/assets/projects/charlando-web.png'
import newsappImg from '../public/assets/projects/NewsForYou.png'
import videochatImg from '../public/assets/projects/videochat.png'
import weatherAppImg from '../public/assets/projects/weatherapp.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#54cfdf]'>
          Projects
        </p>
        <h2 className='py-4'>What We have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='E-commerce website'
            backgroundImg={animekartImg}
            projectUrl='https://github.com/Shivang-stack/Mini-project-Animekart'
          />
          <ProjectItem
            title='Chat App'
            backgroundImg={chatappImg}
            projectUrl='https://github.com/Shivang-stack/charlando-web'
          />
          <ProjectItem
            title='News Website'
            backgroundImg={newsappImg}
            projectUrl='https://github.com/Shivang-stack/NewsForYou-web'
          />
          <ProjectItem
            title='Video Chat'
            backgroundImg={videochatImg}
            projectUrl='https://github.com/Shivang-stack/WebrtcApp'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherAppImg}
            projectUrl='https://github.com/Shivang-stack/weatherapp'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
