'use client'

import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header.jsx';
import Image from 'next/image';

const AboutPage = () => {
  // Animated stats
  const [articles, setArticles] = useState(0);
  const [readers, setReaders] = useState(0);
  const [writers, setWriters] = useState(0);
  const [updates, setUpdates] = useState(0);

  useEffect(() => {
    // Fast animation for each stat
    let a = 0, r = 0, w = 0, u = 0;
    const aTarget = 500, rTarget = 50000, wTarget = 3, uTarget = 24;
    const aStep = Math.ceil(aTarget / 30);
    const rStep = Math.ceil(rTarget / 30);
    const wStep = 1;
    const uStep = 1;
    const interval = setInterval(() => {
      if (a < aTarget) a = Math.min(a + aStep, aTarget);
      if (r < rTarget) r = Math.min(r + rStep, rTarget);
      if (w < wTarget) w = Math.min(w + wStep, wTarget);
      if (u < uTarget) u = Math.min(u + uStep, uTarget);
      setArticles(a);
      setReaders(r);
      setWriters(w);
      setUpdates(u);
      if (a === aTarget && r === rTarget && w === wTarget && u === uTarget) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-8 px-5 md:px-12 lg:px-28">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about sharing insights on technology, startups, and lifestyle 
            to help you stay informed and inspired in today's fast-paced world.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Exploring cutting-edge technologies and their impact on our daily lives.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Providing valuable insights and knowledge to help you grow personally and professionally.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building a community of like-minded individuals passionate about growth and learning.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{articles}+</div>
            <div className="text-gray-600">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{readers.toLocaleString()}+</div>
            <div className="text-gray-600">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{writers}</div>
            <div className="text-gray-600">Expert Writers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{updates}/7</div>
            <div className="text-gray-600">Content Updates</div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Want to collaborate with us?
          </h3>
          <p className="text-gray-600 mb-6">
            We're always open to new ideas and partnerships.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 