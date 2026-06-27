import React, { useState } from 'react'

export default function CallToAction() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder action — integrate with backend or mailing service
    alert(`Thanks! We'll send a quote to ${email}`)
    setEmail('')
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-green-500 to-green-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready for Your Ethiopian Adventure?</h2>
            <p className="mt-2 text-white/90">Tell us your email and we'll prepare a free, customised quote.</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full sm:w-auto flex gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-md text-slate-900 w-full sm:w-72"
            />
            <button className="px-5 py-3 bg-white/90 text-slate-900 rounded-md font-medium">Get Free Quote</button>
          </form>
        </div>
      </div>
    </section>
  )
}
