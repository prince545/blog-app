'use client';

import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';

const categories = ['Technology', 'Startup', 'Lifestyle', 'Development', 'Design'];

const NewBlogPage = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: categories[0],
    author: '',
    authorImg: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setForm((prev) => ({ ...prev, image: file }));
      if (file) {
        setImagePreview(URL.createObjectURL(file));
      } else {
        setImagePreview(null);
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.title || !form.description || !form.author) {
      toast.error('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      const res = await fetch('/api/blog', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Blog published successfully! 🎉');
        setForm({ title: '', description: '', category: categories[0], author: '', authorImg: '', image: null });
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        toast.error(data.error || 'Failed to create blog. Please try again.');
      }
    } catch (err) {
      toast.error('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const removeImage = () => {
    setForm(prev => ({ ...prev, image: null }));
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/50 p-8 md:p-12 transition-all duration-300">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Create a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">New Story</span>
          </h1>
          <p className="text-gray-500 text-lg">Share your knowledge and ideas with the world.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" encType="multipart/form-data">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Blog Title <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Enter an engaging title..."
                    suppressHydrationWarning
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex-grow flex flex-col">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Content <span className="text-red-500">*</span></label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Write your amazing story here... Make it captivating!"
                  className="w-full h-64 px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none resize-y"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <div className="relative">
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none appearance-none cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              {/* Author & Avatar row if layout is wide, or stacked */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Author Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    placeholder="John Doe"
                    suppressHydrationWarning
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Author Avatar URL (Optional)</label>
                  <input
                    type="url"
                    name="authorImg"
                    value={form.authorImg}
                    onChange={handleChange}
                    placeholder="https://example.com/avatar.jpg"
                    suppressHydrationWarning
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                  />
                </div>
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
                {!imagePreview ? (
                  <div className="mt-2 flex justify-center rounded-2xl border-2 border-dashed border-indigo-200 px-6 py-8 bg-indigo-50/30 hover:bg-indigo-50/80 transition-colors duration-200 group relative">
                    <div className="text-center">
                      <svg className="mx-auto h-10 w-10 text-indigo-400 group-hover:text-indigo-600 transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                      </svg>
                      <div className="mt-3 flex text-sm leading-6 text-gray-600 justify-center">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-none hover:text-indigo-500 transition-colors">
                          <span>Upload an image</span>
                          <input id="file-upload" name="image" type="file" ref={fileInputRef} className="sr-only" accept="image/*" onChange={handleChange} suppressHydrationWarning />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative mt-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imagePreview} alt="Preview" className="w-full h-44 object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={removeImage}
                        className="bg-red-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-red-600 transition-colors backdrop-blur-sm flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8 mt-8 border-t border-gray-100">
            <button
              type="submit"
              disabled={loading}
              suppressHydrationWarning
              className={`w-full md:w-auto md:min-w-[200px] ml-auto flex justify-center items-center py-4 px-8 border border-transparent text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Publishing...
                </>
              ) : (
                'Publish Blog Post'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlogPage; 