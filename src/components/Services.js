import React from 'react';
// Icon import
import { BsArrowUpRight } from 'react-icons/bs';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Image Import
import ServiceImage from '../assets/salta-removebg-preview.png';

const services = [
  {
    name: 'UX/UI Design',
    description: 'Creating user-friendly and attractive designs for better user experience.',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description: 'Building dynamic and responsive websites with clean, maintainable code.',
    link: 'Learn more',
  },
  {
    name: 'Programming',
    description: 'Writing efficient algorithms and solving complex programming problems.',
    link: 'Learn more',
  },
  {
    name: 'API Interaction',
    description: 'Connecting and integrating systems using RESTful APIs for seamless data flow.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section ' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Left Section */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView='show'
            className='flex-1 flex flex-col justify-start items-start'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-6'>
              I'm a developer front-end and back-end with over 1 year of experience.
            </h3>
            <button className='btn btn-sm mb-8'>See My Work</button>
            <img
              src={ServiceImage}
              alt='Services'
              className='w-full max-w-[300px] rounded-xl shadow-lg'
            />
          </motion.div>

          {/* Right Section: Service Cards */}
          <div className='flex-1 grid gap-10 md:grid-cols-2'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.3 }}
                className='p-5 bg-gray-800 rounded-2xl transition-all hover:-translate-y-3 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transform hover:shadow-lg hover:shadow-blue-400'
              >
                <h4 className='text-xl font-bold text-white mb-2'>{service.name}</h4>
                <p className='text-sm text-gray-300 mb-4'>{service.description}</p>
                <a href='#' className='flex items-center text-accent hover:underline'>
                  {service.link} <BsArrowUpRight className='ml-2' />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
