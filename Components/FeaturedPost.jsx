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
    <article className="relative bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Featured Image */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            {blog.category}
          </span>
        </div>

        {/* Featured Badge */}
        <div className="absolute top-6 right-6">
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-4">
          <Image
            src={blog.author_img}
            alt={blog.author}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm text-gray-600">{blog.author}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-500">{formatDate(blog.date)}</span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {blog.title}
        </h2>
        
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          {blog.description}
        </p>

        <Link href={`/blogs/${blog.id}`}>
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <span>Read Full Article</span>
            <Image src={assets.arrow} alt="Arrow" width={16} height={16} />
          </button>
        </Link>
      </div>
    </article>
  )
} 