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
          
          
          <div
            className='w-[50%] h-[640px] bg-about bg-contain bg-no-repeat mix-blend-lighten'
          >
          </div>

          
          <div className='w-[50%]'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a developer front-end and back-end with over 1 year of experience.
            </h3>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas sit dolor aut atque distinctio
              nemo sed molestiae, consequuntur alias tempora dolore veniam amet corrupti voluptates autem ipsam eveniet
              deserunt?
            </p>

            
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Months of <br />
                  Experience
                </div>
              </div>
            </div>

            
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'> My Portfolio</a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
