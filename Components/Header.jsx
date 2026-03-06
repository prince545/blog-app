"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../app/context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-5 md:px-12 lg:px-28 sticky top-0 z-50 transition-all shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="group">
          <Image src="/logo.png" alt="Logo" width={130} height={36} style={{ height: 'auto' }} className="object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 mx-auto">
          {['Home', 'Blogs', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative text-base font-semibold text-gray-700 hover:text-blue-600 transition group py-2"
            >
              {item}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        {/* Right Side: Search, New Post, Avatar */}
        <div className="flex items-center gap-5">
          {/* Search Bar */}
          <form className="hidden xl:block relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              suppressHydrationWarning
              className="pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-gray-50/50 min-w-[220px] text-sm transition-all"
            />
          </form>

          {user ? (
            <>
              {/* New Post Button */}
              <Link href="/blogs/new">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  New Post
                </button>
              </Link>
              {/* User Avatar */}
              <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-200">
                <img src={user.profileImage || "/profile_icon.png"} alt={user.name} width={40} height={40} className="rounded-full border-2 border-white shadow-sm ring-2 ring-transparent hover:ring-blue-100 transition-all cursor-pointer" />
                <div className="hidden md:flex flex-col">
                  <span className="text-sm font-bold text-gray-900 leading-none">{user.name}</span>
                  <button
                    onClick={logout}
                    className="text-xs text-gray-400 hover:text-red-500 transition text-left mt-1 font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-600 hover:text-blue-600 font-semibold transition text-sm">
                Log in
              </Link>
              <Link href="/register" className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;