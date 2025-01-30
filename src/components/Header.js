import React from 'react';
//images
import Logo from '../assets/hh-removebg-preview.png';

const Header = () => {
  return (
    <header className='py-8 mb-14 h-[10px]'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          
          <a href='#'>
            <img src={Logo} alt="Logo" className="w-[80px] h-[80px]" />
          </a>

          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
