'use client'

import React, { useState } from 'react';
import { blog_data } from '../Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import FeaturedPost from '../Components/FeaturedPost';
import Header from '../Components/Header';
import BlogCart from '../Components/BlogCart';
import Sidebar from '../Components/Sidebar';

function getCategoryCounts(blogs) {
  const counts = {};
  blogs.forEach((b) => {
    counts[b.category] = (counts[b.category] || 0) + 1;
  });
  return counts;
}

function getPopularPosts(blogs, n = 3) {
  // For demo, just pick first n
  return blogs.slice(0, n);
}

const categoryColors = {
  Technology: 'bg-blue-500',
  Lifestyle: 'bg-green-500',
  Startup: 'bg-purple-500',
  Career: 'bg-yellow-500',
  Design: 'bg-pink-500',
};

export default function Home() {
  const [displayedPosts, setDisplayedPosts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Get the first blog as featured post
  const featuredPost = blog_data[0];
  // Get remaining blogs for the grid
  const regularPosts = blog_data.slice(1, displayedPosts + 1);
  // Get popular posts (first 5 for sidebar)
  const popularPosts = blog_data.slice(0, 5);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayedPosts(prev => Math.min(prev + 3, blog_data.length - 1));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Post Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Post</h2>
          <FeaturedPost blog={featuredPost} />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {regularPosts.map((blog) => (
                  <BlogCart key={blog.id} {...blog} />
                ))}
              </div>
            </div>

            {/* Load More Button */}
            {displayedPosts < blog_data.length - 1 && (
              <div className="text-center">
                <button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Load More Posts'}
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar popularPosts={popularPosts} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold text-gray-900">Blogger</span>
              </div>
              <p className="text-gray-600 mb-4">
                A modern blog platform for sharing your thoughts, ideas, and experiences with the world.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/blogs?category=technology"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blogs?category=lifestyle"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blogs?category=startup"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Startup
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blogs?category=career"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-sm text-center">
              © 2024 Blogger. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}