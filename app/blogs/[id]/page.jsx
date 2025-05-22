"use client";

import React, { useEffect, useState } from 'react';
import { blog_data, assets } from '@/Assets/assets';
import Link from 'next/link';

const Page = ({ params }) => {
    const unwrappedParams = React.use(params);
    const [data, setData] = useState(null);

    useEffect(() => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(unwrappedParams.id) === blog_data[i].id) {
                setData(blog_data[i]);
                break;
            }
        }
    }, [unwrappedParams.id]);

    return (
        data ? (
            <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <img src="/logo.png" width={180} style={{ height: "auto" }} alt="" className="w-[130px] sm:w-auto" />
                    </Link>
                    <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3">
                        Get started <img src={assets.arrow} alt="" />
                    </button>
                </div>
                <div className="text-center my-24">
                    <img
                        className="mx-auto rounded-xl mb-8 max-h-96 object-cover"
                        src={data.image}
                        alt={data.title}
                    />
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                    <img
                        className="mx-auto mt-6 rounded-full"
                        src={data.author_img}
                        width={80}
                        height={80}
                        alt={data.author}
                    />
                    <p className="mt-2 text-gray-600 font-medium">By {data.author}</p>

                    {/* Introduction Section */}
                    <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
                    <p>{data.description}</p>

                    {/* Steps Section */}
                    <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection</h3>
                    <p className="my-3">
                        Before you can manage your lifestyle, you must have a clear understanding of your current habits and goals.
                    </p>
                    <h3 className="my-5 text-[18px] font-semibold">Step 2: Set Achievable Goals</h3>
                    <p className="my-3">
                        Define what you want to achieve and break it down into manageable steps.
                    </p>
                    <h3 className="my-5 text-[18px] font-semibold">Step 3: Track Your Progress</h3>
                    <p className="my-3">
                        Regularly monitor your progress and adjust your plan as needed.
                    </p>

                    {/* Conclusion Section */}
                    <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
                    <p className="my-3">
                        Managing your lifestyle is a journey that requires self-awareness, planning, and consistent effort.
                    </p>
                    <p className="my-3">
                        <strong>Share this article on social media!</strong>
                    </p>
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )
    );
};

export default Page;