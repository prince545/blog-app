import React from 'react'
import BlogItem from './BlogItem'
import { blog_data } from '../Assets/assets';

const BlogList = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-4 mt-10'>
        <button className='text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150'>All</button>
        <button className='text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150'>Lifestyle</button>
        <button className='text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150'>Startup</button>
        <button className='text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150'>Business</button>
      </div>
      <div className='flex flex-wrap justify-center gap-4 mt-10'>
        {blog_data.map((item, index) => (
          <BlogItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList