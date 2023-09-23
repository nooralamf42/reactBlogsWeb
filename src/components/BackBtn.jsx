import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackBtn() {
    let navigate = useNavigate()
  return (
    <button
        className="px-3 py-1 border-2 border-gray-200 rounded-md font-semibold"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
  )
}
