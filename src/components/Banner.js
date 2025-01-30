import React from 'react';
// images
import Image from '../assets/astr-removebg-preview.png';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// types animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//varion
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 text-center lg:text-left">
          
          <div className="lg:w-1/2 max-w-md">
            <h1 className="text-[50px] font-bold leading-[0.8] lg:text-[90px]">
              IKEN <span className="text-accent">BILAL</span>
            </h1>
            <div className="mb-6 text-[28px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000, 'Programmer', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              I am passionate about creating beautiful and functional solutions.
            </p>
            <div className="flex justify-center lg:justify-start gap-x-6 items-center mb-8">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
            <div className="flex justify-center lg:justify-start text-[20px] gap-x-6">
              <a href="#" className="ml-3">
                <FaLinkedin />
              </a>
              <a href="#" className="ml-3">
                <FaGithub />
              </a>
              <a href="#" className="ml-3">
                <FaInstagram />
              </a>
            </div>
          </div>

          
          <div className="lg:w-1/2 flex justify-center">
            <img src={Image} alt="Profile" className="w-[250px] lg:w-[350px] rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
