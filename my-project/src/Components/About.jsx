import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="bg-orange-100 bg-no-repeat bg-cover ">
            <img src='/images/image54.svg' className="w-screen h-1/2" />
            <div className="flex flex-col gap-20 p-10 px-20">
                <h1 className="text-6xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="text-3xl">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className="text-3xl">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="p-10 px-20">
                <div className=" p-10 bg-orange-300 flex flex-col gap-5 border border-orange-300 rounded-md">
                <h2 className="text-3xl font-semibold">Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="bg-black text-white font-semibold border border-black rounded-md p-3 w-40" to="/vans">Explore our vans</Link>
                </div>
            </div>
        </div>
    );
}