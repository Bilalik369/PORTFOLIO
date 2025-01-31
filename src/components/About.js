import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FadeIn } from '../variants';

const About = () => {
  
  const [ref, inView] = useInView({
    threshold: 0.5, 
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between gap-x-10'>
          {/* Image Section */}
          <motion.div 
            className='w-[50%] h-[640px] bg-about bg-contain bg-no-repeat mix-blend-lighten'
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{
              transform: 'translateY(-80px)',
            }}
          >
          </motion.div>

          {/* Text Section */}
          <motion.div 
            className='w-[50%]'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a developer front-end and back-end with over 1 year of experience.
            </h3>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas sit dolor aut atque distinctio
              nemo sed molestiae, consequuntur alias tempora dolore veniam amet corrupti voluptates autem ipsam eveniet
              deserunt?
            </p>

            {/* Stats Section */}
            <motion.div 
              className='flex gap-x-6 lg:gap-x-10 mb-12'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 1 }}
            >
              <div className='flex items-center'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Months of <br />
                  Experience
                </div>
              </div>
              <div className='flex items-center'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 1 }}
            >
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'> My Portfolio</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
