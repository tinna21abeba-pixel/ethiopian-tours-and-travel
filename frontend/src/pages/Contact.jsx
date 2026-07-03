import React from 'react'

export default function Contact() {
  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Contact Land of Origins Tours</p>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Let’s plan your next Ethiopia trip</h1>
            <p className="mt-4 text-lg text-slate-600">
              From cultural expeditions to trekking adventures, our team is ready to help you find the right tour.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Email</p>
                <a href="mailto:info@teddyziontours.com" className="mt-1 block text-slate-600 hover:text-yellow-600">info@teddyziontours.com</a>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Phone</p>
                <a href="tel:+251913912656" className="mt-1 block text-slate-600 hover:text-yellow-600">+251 91 391 2656</a>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Office</p>
                <p className="mt-1 text-slate-600">Mekelle, Tigray, Ethiopia</p>
              </div>
            </div>
          </div>

          <form className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">What would you like to ask?</label>
              <textarea rows="5" className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Tell us about your travel dates, group size, and interest in cultural or adventure tours." />
            </div>
            <button type="button" className="mt-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 px-5 py-3 font-semibold text-slate-900 shadow-md">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
