import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src='/logo.png' alt='Logo' width={50} height={50} />
        <nav>
          <ul className='flex space-x-4'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;