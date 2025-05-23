import React from 'react'

export default function MainBtn({children,type}) {
  return (
    <button type={type} className='main-btn'>{children}</button>
  )
}
