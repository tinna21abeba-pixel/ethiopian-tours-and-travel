import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import tours from '../../data/tourData'

export default function Footer() {
  const topTours = tours.slice(0, 3)

  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/src/assets/images/logo.svg" alt="Land of Origins Tours logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-semibold text-lg">Land of Origins Tours</span>
            </div>
            <p className="text-sm text-slate-300">Premium small-group and bespoke adventures across Ethiopia — responsible, expert-led and unforgettable.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/tours" className="hover:underline">Tours</Link></li>
              <li><Link to="/destinations" className="hover:underline">Destinations</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Top Tours</h4>
            <ul className="space-y-2 text-sm">
              {topTours.map((t) => (
                <li key={t.id}><Link to={`/tours/${t.id}`} className="hover:underline">{t.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="text-sm text-slate-300 space-y-2">
              <div className="flex items-center gap-2"><FaMapMarkerAlt /> Addis Ababa, Ethiopia</div>
              <div className="flex items-center gap-2"><FaPhone /> +251 9XX XXX XXX</div>
              <div className="flex items-center gap-2"><FaEnvelope /> info@teddyziontours.com</div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="twitter" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><FaTwitter /></a>
              <a href="#" aria-label="facebook" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><FaFacebookF /></a>
              <a href="#" aria-label="instagram" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-sm text-slate-400 text-center">
          © {new Date().getFullYear()} Land of Origins Tours. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
