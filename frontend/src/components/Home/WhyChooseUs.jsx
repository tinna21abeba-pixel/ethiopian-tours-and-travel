import React from 'react'
import { FaAward, FaUsers, FaRoute, FaHeadset } from 'react-icons/fa'
import { motion } from 'framer-motion'

const items = [
  { icon: FaAward, title: '15+ Years Experience', desc: 'Decades of expertise crafting safe, authentic journeys.' },
  { icon: FaUsers, title: 'Local Expert Guides', desc: 'Knowledgeable guides who bring stories and landscapes to life.' },
  { icon: FaRoute, title: 'Custom Itineraries', desc: 'Tailored trips focused on your interests and pace.' },
  { icon: FaHeadset, title: '24/7 Support', desc: 'Always-on assistance before, during and after your trip.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold">Why Choose Us</h2>
          <p className="mt-2 text-slate-600">Experience, local knowledge and personalised service.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((it, idx) => {
            const Icon = it.icon
            return (
              <motion.div key={it.title} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }} className="p-6 bg-slate-50 rounded-xl shadow-sm text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-slate-900 text-xl">
                  <Icon />
                </div>
                <h3 className="mt-4 font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
