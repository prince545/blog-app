"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-5 md:px-12 lg:px-28 sticky top-0 z-30">
      <div className="flex items-center justify-between gap-4">
        {/* Logo Only */}
        <Image src="/logo.png" alt="Logo" width={120} height={32} className="object-contain" />

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 mx-auto">
          <Link href="/" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link href="/blogs" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">Blogs</Link>
          <Link href="/about" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Right Side: Search, New Post, Avatar */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <form className="hidden md:block">
            <input
              type="text"
              placeholder="Search articles..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 min-w-[200px]"
            />
          </form>
          {/* New Post Button */}
          <Link href="/blogs/new">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              + New Post
            </button>
          </Link>
          {/* User Avatar */}
          <div className="flex items-center gap-2">
            <img src="/profile_icon.png" alt="Alex Bennett" width={36} height={36} className="rounded-full border-2 border-blue-200" />
            <span className="hidden md:inline text-base font-medium text-gray-800">Alex Bennett</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;