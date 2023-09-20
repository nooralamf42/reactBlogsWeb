import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-11/12 max-w-[672px] mx-auto'>{children}</div>
  )
}
