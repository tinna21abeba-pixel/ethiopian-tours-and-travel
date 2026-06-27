import React, { useMemo, useState } from 'react'
import toursData from '../data/tourData'
import TourCard from '../components/tours/TourCard'

const allCategories = Array.from(new Set(toursData.map((t) => t.category)))

export default function Tours() {
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [maxDays, setMaxDays] = useState(10)
  const [maxPrice, setMaxPrice] = useState(2000)

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const filtered = useMemo(() => {
    return toursData.filter((t) => {
      const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = selectedCategories.length ? selectedCategories.includes(t.category) : true
      const matchesDays = t.durationDays <= maxDays
      const matchesPrice = t.price <= maxPrice
      return matchesQuery && matchesCategory && matchesDays && matchesPrice
    })
  }, [query, selectedCategories, maxDays, maxPrice])

  return (
    <section className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Tours</h1>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 flex flex-col sm:flex-row items-center gap-3">
            <input
              type="search"
              placeholder="Search tours..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:max-w-md px-4 py-2 rounded-md border"
            />

            <div className="flex items-center gap-2">
              <label className="text-sm">Max days</label>
              <input type="number" min={1} value={maxDays} onChange={(e) => setMaxDays(Number(e.target.value))} className="w-20 px-2 py-2 rounded-md border" />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm">Max price</label>
              <input type="number" min={0} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-28 px-2 py-2 rounded-md border" />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-md shadow">
              <h4 className="font-semibold mb-2">Categories</h4>
              <div className="flex flex-col">
                {allCategories.map((cat) => (
                  <label key={cat} className="inline-flex items-center gap-2 text-sm mb-2">
                    <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} />
                    <span>{cat}</span>
                  </label>
                ))}
                <button onClick={() => { setSelectedCategories([]); setQuery(''); setMaxDays(10); setMaxPrice(2000); }} className="mt-2 text-sm text-slate-500">Clear</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 text-sm text-slate-600">Showing {filtered.length} tours</div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
