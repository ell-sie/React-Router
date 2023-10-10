import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVansPrice() {
    const {vans} = useOutletContext()
  return (
    <div>
      <h1 className='text-2xl'><span className='font-bold'>${vans.price}</span>/day</h1>
    </div>
  )
}

export default HostVansPrice
