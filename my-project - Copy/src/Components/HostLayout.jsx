import React from "react"
import {NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    return (
        <div className="bg-orange-100">
            <nav className="p-10 px-20 flex gap-20 text-2xl font-semibold items-center">
                <NavLink 
                to="."
                end
                className={({isActive}) => isActive ? "active-link" : null}
                >Dashboard</NavLink>

                <NavLink 
                to="income"
                className={({isActive}) => isActive ? "active-link" : null}
                >Income</NavLink>

                <NavLink 
                to="van"
                className={({isActive}) => isActive ? "active-link" : null}
                >Vans</NavLink>

                <NavLink 
                to="reviews"
                className={({isActive}) => isActive ? "active-link" : null}
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}