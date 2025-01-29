import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur rounded-full max-w-[460px] mx-auto flex justify-between items-center px-5 text-white">
          
          <Link 
            to="home" 
            activeClass='active' 
            spy={true} 
            smooth={true} 
            duration={500}
            offset={-200}
            className="cursor-pointer hover:text-white/80 transition-colors duration-300"
          >
            <BiHomeAlt size={30} />
          </Link>

          <Link 
            to="about" 
            activeClass='active' 
            spy={true} 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-white/80 transition-colors duration-300"
          >
            <BiUser size={30} />
          </Link>

          <Link 
            to="services"
            activeClass='active'
            spy={true} 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-white/80 transition-colors duration-300"
          >
            <BsClipboardData size={30} />
          </Link>

          <Link 
            to="work" 
            activeClass='active'
            spy={true}  
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-white/80 transition-colors duration-300"
          >
            <BsBriefcase size={30} />
          </Link>

          <Link 
            to="contact" 
            activeClass='active' 
            spy={true} 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-white/80 transition-colors duration-300"
          >
            <BsChatSquare size={30} />
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;
  