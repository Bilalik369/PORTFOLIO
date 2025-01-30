import React from 'react';
//images
import Image from '../assets/astr-removebg-preview.png';
//icones
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
//types animation 
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//varion
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div >
            <h1 >
              IKEN <span>BILAL</span>
            </h1>
            <div>
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Programmer',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-1 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
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
        </div>
        <div>
          <img src={Image} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
