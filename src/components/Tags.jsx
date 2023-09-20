import React from 'react'

export default function ({tags}) {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index)=>(
      <a href='' className='mr-2 text-blue-700 underline text-sm font-semibold' key={index}>#{tag.replace(/\s/g, "")}</a>
    ))}
    </div>
  )
}
