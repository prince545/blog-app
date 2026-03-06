'use client'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../Assets/assets'

export default function FeaturedPost({ blog }) {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
      {/* Featured Image */}
      <div className="relative h-80 md:h-[450px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            {blog.category}
          </span>
        </div>

        {/* Featured Badge */}
        <div className="absolute top-6 right-6 z-10">
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
            Featured
          </span>
        </div>

        {/* Content Overlay on Image for larger screens */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center space-x-3 mb-4 opacity-90">
            <Image
              src={blog.author_img}
              alt={blog.author}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border-2 border-white/50"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{blog.author}</span>
              <span className="text-xs text-gray-300">{formatDate(blog.date)}</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
            {blog.title}
          </h2>

          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl line-clamp-2 md:line-clamp-3">
            {blog.description}
          </p>

          <Link href={`/blogs/${blog.id}`}>
            <button className="inline-flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors font-bold group/btn">
              <span>Read Full Article</span>
              <Image src={assets.arrow} alt="Arrow" width={16} height={16} className="transition-transform group-hover/btn:translate-x-2" />
            </button>
          </Link>
        </div>
      </div>
    </article>
  )
} 