import React from 'react'
import destinations from '../../data/destinationData'
import { motion } from 'framer-motion'

export default function Destinations() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold">Explore Ethiopia</h2>
          <p className="mt-2 text-slate-600">Discover our highlighted destinations.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <motion.article key={d.id} whileHover={{ scale: 1.03 }} className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={d.image} alt={d.name} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">{d.name}</h3>
                  <p className="text-sm mt-1">{d.excerpt}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
