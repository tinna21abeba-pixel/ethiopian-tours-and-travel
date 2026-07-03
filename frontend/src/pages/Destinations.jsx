import React from 'react'

const destinations = [
  {
    title: 'Danakil Depression',
    description: 'A surreal desert landscape of volcanoes, salt plains, and geothermal wonders.',
  },
  {
    title: 'Lalibela',
    description: 'The sacred home of Ethiopia’s iconic rock-hewn churches and living heritage.',
  },
  {
    title: 'Simien Mountains',
    description: 'A majestic highland escape with dramatic cliffs, clear air, and unique wildlife.',
  },
  {
    title: 'Gheralta',
    description: 'Remote mountain villages and ancient churches perched above the horizon.',
  },
]

export default function Destinations() {
  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Popular destinations</p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Explore Ethiopia’s most unforgettable places</h1>
          <p className="mt-4 text-lg text-slate-600">Every destination combines dramatic scenery, cultural depth, and local hospitality.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
