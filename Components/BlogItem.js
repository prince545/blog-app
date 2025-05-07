import React from 'react';
import Image from 'next/image';
import { blog_data } from '../Assets/assets';

const BlogItem = () => {
  const blog = blog_data[0];

  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black p-4 rounded-md shadow'>
      <Image
        src={blog.image}
        alt="blog"
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
      <p className="text-sm text-gray-600">
        {blog.description}
      </p>
    </div>
  );
};

export default BlogItem;
