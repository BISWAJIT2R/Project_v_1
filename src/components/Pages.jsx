import React from 'react'
import { Outlet } from 'react-router-dom'

const Pages = () => {
  return (
    <div className='outlet'>
       <Outlet/>
    </div>
  )
}

export default Pages