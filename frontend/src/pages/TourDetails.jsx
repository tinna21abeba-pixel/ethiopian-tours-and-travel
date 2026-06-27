import React from 'react'
import { useParams } from 'react-router-dom'

export default function TourDetails() {
  const { id } = useParams()

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Tour Details</h1>
        <p className="mt-4 text-slate-600">Details for tour: <strong>{id}</strong></p>
      </div>
    </section>
  )
}
