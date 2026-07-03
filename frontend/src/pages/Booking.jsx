import React from 'react'
import { Link } from 'react-router-dom'

export default function Booking() {
  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Plan your journey</p>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Reserve your Ethiopian adventure</h1>
            <p className="mt-4 text-lg text-slate-600">
              Share your travel dates and preferences, and our team will craft a customized itinerary for you.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">Email</p>
                <a href="mailto:info@teddyziontours.com" className="mt-1 block text-sm text-slate-600 hover:text-yellow-600">info@teddyziontours.com</a>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">Call us</p>
                <a href="tel:+251913912656" className="mt-1 block text-sm text-slate-600 hover:text-yellow-600">+251 91 391 2656</a>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
              <h2 className="text-xl font-semibold">Why travelers choose Land of Origins Tours</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Tailor-made itineraries for couples, families and private groups</li>
                <li>• Experienced local guides and safe 4x4 transport</li>
                <li>• Flexible planning for culture, trekking and photography trips</li>
              </ul>
            </div>
          </div>

          <form className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone number</label>
                <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="+251..." />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Destination</label>
                <select className="w-full rounded-lg border border-slate-300 px-3 py-2">
                  <option>Danakil Depression</option>
                  <option>Lalibela</option>
                  <option>Simien Mountains</option>
                  <option>Gheralta Trek</option>
                </select>
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Travel dates</label>
                <input type="date" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Travelers</label>
                <input type="number" min="1" className="w-full rounded-lg border border-slate-300 px-3 py-2" defaultValue="2" />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Trip notes</label>
              <textarea rows="4" className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Tell us about your preferred pace, interests, and accommodation style." />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button type="button" className="rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 px-5 py-3 font-semibold text-slate-900 shadow-md">Request Booking</button>
              <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-yellow-600">Or contact us directly</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
