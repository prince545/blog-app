"use client";

import React, { useEffect, useState } from 'react';
import { blog_data,assets } from '@/Assets/assets';

const Page = ({ params }) => {
    const unwrappedParams = React.use(params);
    const [data, setData] = useState(null);

    useEffect(() => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(unwrappedParams.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }, [unwrappedParams.id]);

   return (
  data ? (
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <img src="/logo.png" width={180} style={{ height: "auto" }} alt="" className="w-[130px] sm:w-auto" />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3">
          Get started <img src={assets.arrow} alt="" />
        </button>
      </div>
      <div className="text-center my-24">
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <img 
          className="mx-auto mt-6 rounded-full"
          src={data.author_img}
          width={80}
          height={80}
          alt={data.author}
        />
        <p className="mt-2 text-gray-600 font-medium">By {data.author}</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  )
);

};

export default Page;