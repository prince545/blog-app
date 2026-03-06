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

const BlogCart = ({ title, description, category, image, id, _id, author, author_img, authorImg, date, onDelete }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className='max-w-[350px] group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full'>
      <Link href={`/blogs/${id || _id}`} className='flex flex-col flex-grow'>
        {image && (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={image}
              alt={title || 'Blog Image'}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider text-white shadow bg-opacity-90 backdrop-blur-sm ${categoryColors[category] || 'bg-gray-400'}`}>
                {category || 'Uncategorized'}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow space-y-4">
          <h2 className='text-xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors'>
            {title || 'Untitled'}
          </h2>

          <p className='text-sm text-gray-600 line-clamp-3'>
            {description || 'No description available.'}
          </p>

          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center space-x-2">
              {(authorImg || author_img) && (
                <Image
                  src={authorImg || author_img}
                  alt={author || 'Author'}
                  width={32}
                  height={32}
                  className="rounded-full object-cover w-8 h-8"
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
                style={{ height: 'auto' }}
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
