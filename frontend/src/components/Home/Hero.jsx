import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/images/heros/hero1.png'
import videoFile from '../../assets/videos/mountainraise.mp4'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative h-screen flex items-center" aria-label="Hero">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Ethiopia landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight uppercase">
              DISCOVER ETHIOPIA'S
              <br /> HIDDEN WONDERS
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Join unforgettable journeys across ancient landscapes, dramatic highlands, and vibrant cultures.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link to="/tours" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 px-5 py-3 rounded-md font-medium shadow-md">
                Explore Tours
              </Link>

              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
                </svg>
                Watch Video
              </button>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="space-y-4">
              <motion.div variants={cardVariants} initial="hidden" animate="show" transition={{ delay: 0.15 }} className="w-72 bg-white/8 border border-white/10 rounded-xl p-4 backdrop-blur-sm text-white">
                <h4 className="font-semibold">Local Expert Guides</h4>
                <p className="text-sm mt-1 text-white/80">Guides who know every trail, village and story.</p>
              </motion.div>

              <motion.div variants={cardVariants} initial="hidden" animate="show" transition={{ delay: 0.3 }} className="w-72 bg-white/8 border border-white/10 rounded-xl p-4 backdrop-blur-sm text-white">
                <h4 className="font-semibold">Custom Itineraries</h4>
                <p className="text-sm mt-1 text-white/80">Bespoke trips tailored to your pace and interests.</p>
              </motion.div>

              <motion.div variants={cardVariants} initial="hidden" animate="show" transition={{ delay: 0.45 }} className="w-72 bg-white/8 border border-white/10 rounded-xl p-4 backdrop-blur-sm text-white">
                <h4 className="font-semibold">24/7 Customer Support</h4>
                <p className="text-sm mt-1 text-white/80">Help whenever you need it, on and off the trail.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-slate-950 p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
            >
              Close
            </button>
            <video controls autoPlay className="w-full rounded-xl">
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
