"use client";

import React, { useEffect, useState } from 'react';
import { blog_data, assets } from '@/Assets/assets';
import Link from 'next/link';
import Image from 'next/image';

const Page = ({ params }) => {
    const unwrappedParams = React.use(params);
    const [data, setData] = useState(null);
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(unwrappedParams.id) === blog_data[i].id) {
                setData(blog_data[i]);
                break;
            }
        }
    }, [unwrappedParams.id]);

    useEffect(() => {
        if (data) {
            // Calculate reading time (average 200 words per minute)
            const wordCount = data.description?.split(' ').length || 0;
            setReadingTime(Math.ceil(wordCount / 200));
        }
    }, [data]);

    // Generate dynamic content based on blog category
    const getCategorySpecificContent = (category) => {
        const contentMap = {
            'Technology': {
                insights: [
                    {
                        title: "Understanding Modern Technology",
                        description: "Technology is rapidly evolving, and staying updated with the latest trends is crucial for career growth. From artificial intelligence to blockchain, understanding these technologies can open new opportunities.",
                        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                        color: "blue"
                    },
                    {
                        title: "Practical Implementation",
                        description: "Learning technology is one thing, but implementing it effectively is another. We'll explore real-world applications and best practices that can help you succeed in the tech industry.",
                        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                        color: "green"
                    },
                    {
                        title: "Advanced Tech Strategies",
                        description: "For experienced developers and tech professionals, we'll dive into advanced concepts, optimization techniques, and cutting-edge technologies that can give you a competitive edge.",
                        icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        color: "purple"
                    }
                ],
                conclusion: "Technology is a field that requires continuous learning and adaptation. By staying curious, practicing regularly, and building real projects, you can achieve remarkable success in the tech industry."
            },
            'Lifestyle': {
                insights: [
                    {
                        title: "Understanding Life Balance",
                        description: "Achieving a balanced lifestyle requires understanding your priorities and making conscious choices. It's about finding harmony between work, health, relationships, and personal growth.",
                        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                        color: "blue"
                    },
                    {
                        title: "Practical Life Applications",
                        description: "Implementing lifestyle changes can be challenging, but with the right approach and consistent effort, you can transform your daily routine and improve your overall well-being.",
                        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                        color: "green"
                    },
                    {
                        title: "Advanced Life Strategies",
                        description: "For those seeking to optimize their lifestyle further, we'll explore advanced techniques for productivity, mindfulness, and personal development that can elevate your quality of life.",
                        icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        color: "purple"
                    }
                ],
                conclusion: "A fulfilling lifestyle is built on conscious choices and consistent habits. Remember that small changes compound over time, and every step toward your ideal lifestyle is progress worth celebrating."
            },
            'Startup': {
                insights: [
                    {
                        title: "Understanding Startup Fundamentals",
                        description: "Building a successful startup requires more than just a good idea. It needs solid fundamentals, market research, and a clear understanding of your target audience and value proposition.",
                        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                        color: "blue"
                    },
                    {
                        title: "Practical Startup Applications",
                        description: "From MVP development to customer acquisition, we'll explore the practical aspects of building and scaling a startup, including funding strategies and team building.",
                        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                        color: "green"
                    },
                    {
                        title: "Advanced Startup Strategies",
                        description: "For established startups looking to scale, we'll cover advanced topics like international expansion, strategic partnerships, and building sustainable competitive advantages.",
                        icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        color: "purple"
                    }
                ],
                conclusion: "Startup success is a journey of continuous learning and adaptation. Stay focused on your vision, be prepared to pivot when necessary, and always prioritize your customers' needs."
            }
        };
        return contentMap[category] || contentMap['Technology'];
    };

    if (!data) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading article...</p>
                </div>
            </div>
        );
    }

    const categoryContent = getCategorySpecificContent(data.category);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/logo.png" width={120} height={32} alt="Blogger" className="w-30 h-8" />
                        </Link>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                            <Link href="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors">Blogs</Link>
                            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
                            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Article Container */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Hero Image */}
                    <div className="relative h-96 md:h-[500px]">
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                    {data.category}
                                </span>
                                <span className="text-sm opacity-90">
                                    {new Date(data.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="text-sm opacity-90">
                                    {readingTime} min read
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                                {data.title}
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 max-w-3xl">
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-8 md:p-12">
                        {/* Author Info */}
                        <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
                            <div className="relative">
                                <Image
                                    src={data.author_img}
                                    alt={data.author}
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{data.author}</h3>
                                <p className="text-gray-600">Author & Content Creator</p>
                            </div>
                            <div className="ml-auto flex space-x-2">
                                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.845-1.682l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                    </svg>
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Article Body */}
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
                                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                    {data.description}
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    In this comprehensive guide, we'll explore the key aspects of {data.category.toLowerCase()} and provide you with actionable insights to help you achieve your goals. Whether you're just starting out or looking to enhance your existing knowledge, this article will serve as your roadmap to success.
                                </p>
                            </section>

                            {/* Key Insights */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Insights</h2>
                                
                                <div className="grid gap-8">
                                    {categoryContent.insights.map((insight, index) => (
                                        <div key={index} className={`bg-gradient-to-r from-${insight.color}-50 to-${insight.color}-100 p-8 rounded-xl border-l-4 border-${insight.color}-500`}>
                                            <div className="flex items-center mb-4">
                                                <div className={`w-12 h-12 bg-${insight.color}-600 rounded-full flex items-center justify-center mr-4`}>
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={insight.icon} />
                                                    </svg>
                                                </div>
                                                <h3 className={`text-xl font-bold text-${insight.color}-900`}>{insight.title}</h3>
                                            </div>
                                            <p className={`text-${insight.color}-800 leading-relaxed`}>
                                                {insight.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Action Steps */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Action Steps</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            step: 1,
                                            title: "Assess Your Current Situation",
                                            description: "Take stock of where you are now and identify areas for improvement. This honest evaluation will serve as your starting point."
                                        },
                                        {
                                            step: 2,
                                            title: "Set Clear Goals",
                                            description: "Define specific, measurable objectives that align with your vision. Make sure your goals are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound."
                                        },
                                        {
                                            step: 3,
                                            title: "Create an Action Plan",
                                            description: "Develop a step-by-step strategy to achieve your goals. Break down large objectives into smaller, manageable tasks."
                                        },
                                        {
                                            step: 4,
                                            title: "Monitor and Adjust",
                                            description: "Regularly review your progress and make necessary adjustments. Stay flexible and be willing to adapt your approach as needed."
                                        }
                                    ].map((item) => (
                                        <div key={item.step} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Conclusion */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
                                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
                                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                        {categoryContent.conclusion}
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Remember, the journey is just as important as the destination. Stay committed to your goals, 
                                        celebrate your progress, and don't hesitate to seek support when needed. Every expert was once a beginner.
                                    </p>
                                </div>
                            </section>

                            {/* Call to Action */}
                            <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 p-8 rounded-xl text-center text-white">
                                <h3 className="text-2xl font-bold mb-4">Ready to Take Action?</h3>
                                <p className="mb-8 text-blue-100 text-lg">
                                    Join our community of learners and stay updated with the latest insights and strategies.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
                                    >
                                        Get in Touch
                                    </Link>
                                    <Link
                                        href="/blogs"
                                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-block"
                                    >
                                        Explore More Articles
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>

                {/* Related Articles */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blog_data
                            .filter(blog => blog.id !== data.id && blog.category === data.category)
                            .slice(0, 3)
                            .map((blog) => (
                                <Link key={blog.id} href={`/blogs/${blog.id}`} className="group">
                                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative h-48">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                                                {blog.category}
                                            </span>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {blog.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                {blog.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;