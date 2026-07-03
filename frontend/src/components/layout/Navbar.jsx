import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])  

  const navBase = 'fixed top-0 left-0 w-full z-50 transition-colors duration-300'
  const navStyle = isSticky
    ? 'bg-white/90 text-slate-800 backdrop-blur-md shadow'
    : 'bg-transparent text-white'

  return (
    <nav className={`${navBase} ${navStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/src/assets/images/logo.svg" alt="Land of Origins Tours logo" className="h-10 w-10 rounded-full object-cover shadow-md" />
              <span className="font-semibold text-lg tracking-wide">Land of Origins Tours</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/tours" className="hover:underline">Tours</Link>
            <Link to="/destinations" className="hover:underline">Destinations</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>

            <button
              aria-label="Search"
              className="p-2 rounded-full hover:bg-black/5"
            >
              <FiSearch className="h-5 w-5" />
            </button>

            <Link to="/booking" className="ml-2 inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 px-4 py-2 rounded-md font-medium shadow-md">
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="bg-black/60 backdrop-blur-sm">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" onClick={() => setOpen(false)} className="block text-white px-2 py-2 rounded hover:bg-white/10">Home</Link>
            <Link to="/tours" onClick={() => setOpen(false)} className="block text-white px-2 py-2 rounded hover:bg-white/10">Tours</Link>
            <Link to="/destinations" onClick={() => setOpen(false)} className="block text-white px-2 py-2 rounded hover:bg-white/10">Destinations</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block text-white px-2 py-2 rounded hover:bg-white/10">About Us</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="block text-white px-2 py-2 rounded hover:bg-white/10">Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block text-white px-2 py-2 rounded hover:bg-white/10">Contact</Link>

            <div className="pt-2">
              <Link to="/booking" onClick={() => setOpen(false)} className="block text-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 px-4 py-2 rounded-md">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}                                                    
   














