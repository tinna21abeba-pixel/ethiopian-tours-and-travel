import React from 'react'
import { Link, useParams } from 'react-router-dom'
import tours from '../data/tourData'

export default function TourDetails() {
  const { id } = useParams()
  const tour = tours.find((item) => item.id === id)

  if (!tour) {
    return (
      <section className="min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Tour not found</h1>
          <p className="mt-4 text-slate-600">The selected tour is not available right now.</p>
          <Link to="/tours" className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-white">Browse all tours</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img src={tour.image} alt={tour.title} className="h-80 w-full rounded-3xl object-cover shadow-xl" />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-slate-900">{tour.category}</span>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700">{tour.duration}</span>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700">⭐ {tour.rating}</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold text-slate-900">{tour.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{tour.description}</p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Why this tour stands out</h2>
              <ul className="mt-4 space-y-2 text-slate-600">
                {tour.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-yellow-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Tailor-made itinerary</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Book this experience</h2>
            <p className="mt-4 text-slate-600">Let our team design the ideal pace, lodging, and transport for your group.</p>

            <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Starting from</p>
              <p className="mt-2 text-4xl font-bold">${tour.price}</p>
              <p className="mt-2 text-sm text-slate-300">Includes expert guide, transport, and planning support.</p>
            </div>

            <div className="mt-6 space-y-3">
              <Link to="/booking" className="block rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 px-5 py-3 text-center font-semibold text-slate-900 shadow-md">Reserve Now</Link>
              <Link to="/contact" className="block rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50">Ask a Question</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
