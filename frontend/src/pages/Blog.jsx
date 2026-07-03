import React from 'react'
import posts from '../data/blogData'

export default function Blog() {
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Travel journal</p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Stories, tips and inspiration for exploring Ethiopia</h1>
          <p className="mt-4 text-lg text-slate-600">
            Explore cultural highlights, trekking advice and the moments that make Ethiopian travel unforgettable.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img src={featuredPost.image} alt={featuredPost.title} className="h-72 w-full object-cover" />
            <div className="p-8">
              <p className="text-sm font-medium text-yellow-600">Featured article</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">{featuredPost.title}</h2>
              <p className="mt-3 text-slate-600">{featuredPost.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-slate-500">{featuredPost.date}</span>
                <button type="button" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                  Read more
                </button>
              </div>
            </div>
          </article>

          <div className="space-y-4">
            {otherPosts.map((post) => (
              <article key={post.id} className="rounded-3xl bg-white p-5 shadow-lg">
                <img src={post.image} alt={post.title} className="h-36 w-full rounded-2xl object-cover" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>{post.date}</span>
                  <button type="button" className="font-medium text-yellow-600">Read article</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
