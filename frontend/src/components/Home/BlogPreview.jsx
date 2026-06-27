import React from 'react'
import posts from '../../data/blogData'
import { Link } from 'react-router-dom'

export default function BlogPreview() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold">From Our Blog</h2>
          <p className="mt-2 text-slate-600">Insights, travel tips and stories from Ethiopia.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">{new Date(p.date).toLocaleDateString()}</span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm mt-2 text-slate-600">{p.excerpt}</p>
                <div className="mt-4">
                  <Link to={`/blog/${p.id}`} className="text-green-600 font-medium">Read More →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
