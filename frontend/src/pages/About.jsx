import React from 'react'

export default function About() {
  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">About Land of Origins Tours</p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Professional travel planning rooted in Ethiopia</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Land of Origins Tours creates thoughtful, safe, and memorable journeys across Ethiopia. From cultural heritage tours to adventurous treks, every itinerary is tailored to the traveler’s pace and interests.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="font-semibold text-slate-900">Trusted expertise</h2>
              <p className="mt-2 text-sm text-slate-600">Years of experience planning private and group travel with local knowledge.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="font-semibold text-slate-900">Flexible itineraries</h2>
              <p className="mt-2 text-sm text-slate-600">Custom packages for photography, trekking, heritage, and family travel.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="font-semibold text-slate-900">Exceptional service</h2>
              <p className="mt-2 text-sm text-slate-600">Responsive planning, reliable transport, and hands-on support throughout your trip.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
