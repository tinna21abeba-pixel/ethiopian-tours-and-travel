import React from 'react'
import tours from '../../data/tourData'
import TourCard from '../../components/tours/TourCard'

export default function FeaturedTours() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold">Featured Tours</h2>
          <p className="mt-2 text-slate-600">Hand-picked journeys showcasing Ethiopia's most iconic landscapes.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
