import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '../Assets/arrow.png';

const categoryColors = {
  Technology: 'bg-blue-600',
  Startup: 'bg-purple-600',
  Lifestyle: 'bg-green-600',
  Career: 'bg-yellow-500',
  Design: 'bg-pink-500',
};

const BlogCart = ({ title, description, category, image, id, _id, author, author_img, date, onDelete }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className='max-w-[350px] bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
      <Link href={`/blogs/${id || _id}`} className='block'>
        {image && (
          <div className="relative mb-4">
            <Image
              src={image}
              alt={title || 'Blog Image'}
              width={350}
              height={200}
              className='w-full h-48 object-cover rounded-lg'
            />
            <div className="absolute top-2 left-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[category] || 'bg-gray-400'}`}>
                {category || 'Uncategorized'}
              </span>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          <h2 className='text-xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors'>
            {title || 'Untitled'}
          </h2>
          
          <p className='text-sm text-gray-600 line-clamp-3'>
            {description || 'No description available.'}
          </p>
          
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center space-x-2">
              {author_img && (
                <Image
                  src={author_img}
                  alt={author || 'Author'}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="text-sm font-medium text-gray-800">{author || 'Anonymous'}</p>
                <p className="text-xs text-gray-500">{formatDate(date)}</p>
              </div>
            </div>
            
            <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <span className='text-sm font-semibold mr-1'>Read more</span>
              <Image
                src={arrow}
                alt='arrow'
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </Link>
      {/* Show Delete button only for DB blogs */}
      {_id && onDelete && (
        <button
          onClick={() => onDelete(_id)}
          className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default BlogCart;
