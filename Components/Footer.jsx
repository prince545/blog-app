import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Technology', href: '/blogs?category=technology' },
  { name: 'Lifestyle', href: '/blogs?category=lifestyle' },
  { name: 'Startup', href: '/blogs?category=startup' },
  { name: 'Career', href: '/blogs?category=career' },
];

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Blogs', href: '/blogs' },
  { name: 'Write Blog', href: '/blogs/new' },
  { name: 'Subscribe', href: '/newsletter' },
];

const socialLinks = [
  { name: 'Facebook', icon: '/facebook_icon.png', href: 'https://facebook.com' },
  { name: 'Twitter', icon: '/twitter_icon.png', href: 'https://twitter.com' },
  { name: 'Google+', icon: '/googleplus_icon.png', href: 'https://plus.google.com' },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Blogger" width={36} height={36} className="w-9 h-9 object-contain" />
              <span className="text-xl font-bold text-gray-900">Blogger</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 max-w-xs">
              A modern blog platform for sharing your thoughts, ideas, and experiences with the world.
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image src={link.icon} alt={link.name} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">CATEGORIES</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link href={cat.href} className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Blogger. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;