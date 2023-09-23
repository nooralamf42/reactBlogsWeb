import React from 'react'
import { Link} from 'react-router-dom'

export default function ({tags,page}) {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index)=>(
      <Link to={`/tags/${tag.replace("/ /g","-")}`} href='' className='mr-2 text-blue-700 underline text-sm font-semibold' key={index}>#{tag}</Link>
    ))}
    </div>
  )
}
