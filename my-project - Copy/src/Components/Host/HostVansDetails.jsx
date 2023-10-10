import React from 'react'
import { Outlet, useParams, NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function HostVansDetails() {
  const params = useParams()
  console.log(params)

  const [vans, setVans] = React.useState(null)

  React.useEffect(()=>{
    fetch(`/api/host/van/${params.id}`)
    .then(res => res.json())
    .then(data => setVans(data.vans) )
  },[])

  if (!vans) {
    return <h1>Loading...</h1>
}

  console.log(vans)
  return (
    <>
    <Link
      to=".."
      relative='path'
      className="p-10 px-20 text-xl"
      >&larr; <span>Back to all vans</span>
    </Link>
    <section className='p-10 px-20'>
    <div className='bg-white border p-6 border-white rounded-md'>
    <div className='flex gap-5'>
    <img src= {vans.imageUrl} alt="" className='w-1/4 border rounded-md' />
    <div className='flex flex-col justify-center gap-2'>
    <i className=
            {`${
            vans.type === "simple" ? "bg-orange-400" : 
            vans.type === "luxury" ? "bg-black" : 
            "bg-teal-900"} p-2 flex justify-center w-24 border text-normal text-white rounded-md`}>{vans.type}
    </i>
    <h3 className='font-bold text-4xl'>{vans.name}</h3>
    <h1 className='text-2xl'><span className='font-bold'>${vans.price}</span>/day</h1>
    </div>
    </div>
    <nav className="py-10 flex gap-20 text-lg font-semibold items-center">
    <NavLink 
    to="."
    end
    className={({isActive}) => isActive ? "active-link" : null}
    >Details</NavLink>

    <NavLink 
    to="price"
    className={({isActive}) => isActive ? "active-link" : null}
    >Pricing</NavLink>

    <NavLink 
    to="photos"
    className={({isActive}) => isActive ? "active-link" : null}
    >Photos</NavLink>
    </nav>
    <Outlet context={{vans}}/>
    </div>
    </section>
    </>
  )
}


