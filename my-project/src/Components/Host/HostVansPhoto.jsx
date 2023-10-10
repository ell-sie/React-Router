import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVansPhoto() {
    const {vans} = useOutletContext()
  return (
    <div>
      <img src={`${vans.imageUrl}`} alt="" className='w-1/6 border rounded-md' />
    </div>
  )
}

export default HostVansPhoto
