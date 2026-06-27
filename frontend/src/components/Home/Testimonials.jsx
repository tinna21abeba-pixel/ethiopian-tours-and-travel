import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import testimonials from '../../data/testimonialData'
import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold">What Our Customers Say</h2>
          <p className="mt-2 text-slate-300">Real reviews from recent travelers.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm shadow-md">
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{t.name}</h3>
                      <span className="text-sm text-slate-300">• {t.country}</span>
                    </div>
                    <div className="flex items-center text-yellow-400 mt-1">
                      {Array.from({ length: Math.round(t.rating) }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-slate-100">“{t.text}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
