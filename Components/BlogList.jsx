import React from 'react'
import BlogCart from './BlogCart'
import { blog_data } from '../Assets/assets';

const BlogList = () => {
  const [menu, setMenu] = React.useState("All");
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-4 mt-10'>
        <button onClick={() => setMenu('All')} className={`text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 ${menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}`}>All</button>
        <button onClick={() => setMenu('Technology')} className={`text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 ${menu === 'Technology' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}`}>Technology</button>
        <button onClick={() => setMenu('Startup')} className={`text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 ${menu === 'Startup' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}`}>Startup</button>
        <button onClick={() => setMenu('Lifestyle')} className={`text-sm px-6 py-2 border border-black border-solid shadow-[-7px_7px_0px] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 ${menu === 'Lifestyle' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}`}>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-center gap-4 mt-10'>
        {blog_data
          .filter((item) => menu === 'All' ? true : item.category === menu)
          .map((item, index) => (
            <BlogCart
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              author={item.author}
              author_img={item.author_img}
              date={item.date}
            />
        ))}
      </div>
    </div>
  );
};

export default BlogList