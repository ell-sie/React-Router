import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
        <>
        <h1 className="text-5xl font-bold px-20 p-10">Explore our van options</h1>
        <div className="px-20 p-10 flex justify-between items-center">
          <button className="p-2 w-28 border rounded-md bg-orange-200">Simple</button>
          <button className="p-2 w-28 border rounded-md bg-orange-200">Luxury</button>
          <button className="p-2 w-28 border rounded-md bg-orange-200">Rugged</button>
          <p className="underline">Clear fitlters</p>
    </div>
    <div className="p-10 grid grid-cols-2 gap-10 max-w-6xl mx-auto">
    { 
    vans.map(van => (
        <div key={van.id} className="flex flex-col gap-3">
            <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl} className="border rounded-lg"/>
            <div className="flex justify-between">
                <h3 className="text-3xl font-semibold">{van.name}</h3>
                <p><p className="text-3xl font-semibold">${van.price}</p><span>/day</span></p>
            </div>
            <i className=
            {`${
            van.type === "simple" ? "bg-orange-400" : 
            van.type === "luxury" ? "bg-black" : 
            "bg-teal-900"} p-2 px-6 border text-white rounded-md`}>{van.type}
            </i>
            </Link>
        </div>
      
    ))
    }
    </div>
        </>
    )
}