import React from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() {
  const [vans, setVans] = React.useState([])
  React.useEffect(() => {
    fetch("/api/host/van")
    .then(res => res.json())
    .then(data => setVans(data.vans))
  },[])

  const hostVansEls = vans.map(van => (
    <Link
            to={`/host/van/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="flex gap-5 bg-white p-6 border border-white rounded-md" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} className='w-1/6 border rounded-md' />
                <div className="flex flex-col justify-center gap-2">
                    <h3 className='font-bold text-4xl'>{van.name}</h3>
                    <p className='text-2xl'>${van.price}/day</p>
                </div>
            </div>
    </Link>
  ))
  return (
    <section>
            <h1 className="p-10 px-20 text-6xl font-bold">Your listed vans</h1>
            <div className="p-10 px-20">
                {
                    vans.length > 0 ? (
                        <section className='flex flex-col gap-10 '>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
  )
}
