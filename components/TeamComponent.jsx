import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

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
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SampleNextArrow/>
  };

  return (
    <Slider {...settings} className="mt-7">
      {teamData.map(({ profilepic, name, description, linkedin, github }, index) => (
        <div key={index} className="mx-auto">
          <div className=" backdrop-blur-sm p-6 rounded-lg bg-black/30">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  src={profilepic}
                  width={80}
                  height={80}
                  alt=""
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="text-gray-400">{description}</p>
                <div className="flex space-x-2 mt-4">
                  <Link href={linkedin}>
                    <a target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      <FaLinkedinIn />
                    </a>
                  </Link>
                  <Link href={github}>
                    <a target="_blank" rel="noopener noreferrer" className="text-gray-500">
                      <FaGithub />
                    </a>
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
