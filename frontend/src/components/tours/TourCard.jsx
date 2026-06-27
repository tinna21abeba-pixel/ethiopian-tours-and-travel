import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

export default function TourCard({ tour }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg group">
      <div className="relative">
        <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-sm font-semibold text-slate-900 px-2 py-1 rounded">{tour.duration}</span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{tour.title}</h3>
        <div className="flex items-center gap-2 text-sm text-yellow-500 mb-2">
          <FaStar />
          <span className="text-slate-700 font-medium">{tour.rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-slate-800 font-bold">${tour.price}</div>
          <Link to={`/tours/${tour.id}`} className="inline-block bg-slate-900 text-white px-3 py-2 rounded hover:opacity-90">View Details</Link>
        </div>
      </div>
    </article>
  )
}
