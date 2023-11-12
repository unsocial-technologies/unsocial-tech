import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const TeamComponent = ({ teamData }) => {
  if (!teamData || teamData.length === 0) {
    return null; // or some default content or message
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {teamData.map(({ profilepic, name, description , linkedin,github}, index) => (
        <div key={index} className='p-6 shadow-xl rounded-xl backdrop-blur-sm bg-black/30'>
          <div className="grid grid-cols-5 gap-4">
            <div className='col-span-1'>
              <Image
                className='rounded'
                src={profilepic}
                width='250px'
                height='250px'
                alt='/'
              />
            </div>
            <div className='col-span-4'>
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-gray-300">{description}</p>
              <div>
                <div className='p-3 cursor-pointer'>
                    <Link href={linkedin}>
                        <FaLinkedinIn />
                    </Link>
                </div>
                <div className='p-3 cursor-pointer'>
                    <Link href={github}>
                        <FaGithub />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TeamComponent;
