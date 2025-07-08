'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '../Assets/assets';

export default function Sidebar({ popularPosts }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    { name: 'Technology', count: 5, color: 'bg-blue-100 text-blue-800' },
    { name: 'Lifestyle', count: 4, color: 'bg-green-100 text-green-800' },
    { name: 'Startup', count: 4, color: 'bg-purple-100 text-purple-800' },
    { name: 'Career', count: 2, color: 'bg-orange-100 text-orange-800' },
    { name: 'Design', count: 1, color: 'bg-pink-100 text-pink-800' }
  ];

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <span className="text-gray-700">{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="flex space-x-3">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
        <p className="text-blue-100 text-sm mb-4">
          Get the latest posts and updates delivered to your inbox.
        </p>
        {!isSubscribed ? (
          <form onSubmit={handleNewsletterSignup} className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit"
              className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-200 text-sm">✅ Successfully subscribed!</p>
            <button 
              onClick={() => setIsSubscribed(false)}
              className="mt-2 text-blue-200 text-sm hover:text-white transition-colors"
            >
              Subscribe another email
            </button>
          </div>
        )}
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-3">
          <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Image src={assets.facebook_icon} alt="Facebook" width={16} height={16} />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
            <Image src={assets.twitter_icon} alt="Twitter" width={16} height={16} />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Image src={assets.googleplus_icon} alt="Google+" width={16} height={16} />
          </a>
        </div>
      </div>
    </aside>
  );
} 