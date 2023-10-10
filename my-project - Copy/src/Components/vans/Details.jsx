import React from 'react'
import { useParams, Link } from 'react-router-dom'
function Details() {
    const params = useParams()
    console.log(params)
    const [van, setVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])
  return (
    <div>
      {van ? (
                <>
                    <div className='flex flex-col gap-10 p-10 px-20'>
                    <Link
                    to=".."
                    relative='path'
                    className=" text-xl"
                    > &larr;<span className='underline'>Back to all vans</span></Link>
                    <img src={van.imageUrl} className='border rounded-md'/>
                    <i className={`${
                    van.type === "simple" ? "bg-orange-400" : 
                    van.type === "luxury" ? "bg-black" : 
                    "bg-teal-900"} p-2 w-32 flex justify-center items-center border text-white rounded-md`}>{van.type}
                    </i>
                    <h3 className="text-3xl font-semibold">{van.name}</h3>
                    <p className='flex gap-1 items-center'><p className="text-3xl font-semibold">${van.price}</p><span className='text-2xl'>/day</span></p>
                    <p className='text-2xl'>{van.description}</p>
                    <button className="p-3 bg-orange-400 flex justify-center items-center border rounded-md">Rent this van</button>
                    </div>
                </>
            ) : <h2>Loading...</h2>}
    </div>
  )
}

export default Details
