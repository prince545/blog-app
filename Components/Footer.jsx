import React from 'react';
import Image from 'next/image';
import logoLight from '../Assets/logo_light.png';
import facebookIcon from '../Assets/facebook_icon.png';
import twitterIcon from '../Assets/twitter_icon.png';
import googlePlusIcon from '../Assets/googleplus_icon.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src={logoLight} alt="Logo" width={50} height={50} />
          <span className="text-lg font-semibold text-white">My Blog</span>
        </div>
        <div className="mt-4 sm:mt-0 text-center sm:text-right">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <Image src={facebookIcon} alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <Image src={twitterIcon} alt="Twitter" width={24} height={24} />
            </a>
            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <Image src={googlePlusIcon} alt="Google Plus" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;