import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import animekartImg from '../public/assets/projects/AnimeKart.png';
import blogusImg from '../public/assets/projects/blogus.png'
import newsappImg from '../public/assets/projects/NewsForYou.png'
import videochatImg from '../public/assets/projects/videochat.png'
import Ecom from '../public/assets/projects/Ecom.png'
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
            projectUrl='https://mini-project-animekart.vercel.app/'
          />
          <ProjectItem
            title='Blogus'
            backgroundImg={blogusImg}
            projectUrl='https://blogus-delta.vercel.app/'
          />
          <ProjectItem
            title='News Website -SEO Focused'
            backgroundImg={newsappImg}
            projectUrl='https://nextjs-seo-news-app.vercel.app/'
          />
          <ProjectItem
            title='Video Chat'
            backgroundImg={videochatImg}
            projectUrl='https://github.com/Shivang-stack/WebrtcApp'
          />
          <ProjectItem
            title='E-com -SEO Focused'
            backgroundImg={Ecom}
            projectUrl='https://nextjs-seo-ecom.vercel.app/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
