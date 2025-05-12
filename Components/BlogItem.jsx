import React from 'react';
import Image from 'next/image';
import { blog_data } from '../Assets/assets';
import arrow from '../Assets/arrow.png';

const BlogItem = ({ title, description, category, image }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black p-4 rounded-md shadow'>
      {image && (
        <Image
          src={image}
          alt={title || 'Blog Image'}
          width={300}
          height={200}
          className='w-full h-40 object-cover rounded-md mb-4'
        />
      )}
      <h2 className='text-lg font-semibold mb-2'>{title || 'Untitled'}</h2>
      <p className='text-sm text-gray-500 mb-2'>Category: {category || 'Uncategorized'}</p>
      <p className='text-sm text-gray-600'>{description || 'No description available.'}</p>
      <div className='flex items-center mt-4'>
        <span className='font-bold text-black mr-2'>Read more</span>
        <Image
          src={arrow}
          alt='arrow'
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default BlogItem;
