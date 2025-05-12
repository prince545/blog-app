"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., API call or alert
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28 border-b border-gray-200'>
      <div className='flex justify-between items-center'>
        <Image
          src="/logo.png"
          alt="logo"
          width={240}
          height={240}
          className="w-28 h-28 object-contain"
        />
        <button className="text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
          Get started
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-medium mt-4">
          Latest Blogs
        </h1>
        <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-between max-w-[500px] mx-auto mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 rounded-l-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 rounded-r-md"
          >
            Subscribe
          </button>
        </form>
        <nav className="mt-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <a href="/" className="text-sm hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="text-sm hover:underline">About</a>
            </li>
            <li>
              <a href="/contact" className="text-sm hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;