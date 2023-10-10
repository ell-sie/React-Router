import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVansInfo() {
    const {vans} = useOutletContext()
  return (
    <div className='flex flex-col gap-10 text-xl'>
      <p><span className='font-bold'>Name:</span>{vans.name}</p>
      <p><span className='font-bold'>Category:</span>{vans.type}</p>
      <p><span className='font-bold'>Description:</span>{vans.description}</p>
      <p><span className='font-bold'>Visibilty:</span>Public</p>
    </div>
  )
}

export default HostVansInfo
