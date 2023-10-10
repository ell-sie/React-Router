import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
      <section className=' flex justify-between p-10 px-20 items-center bg-orange-100 '>
        <Link to="/" className='text-5xl font-bold'>#VANLIFE</Link>
        <div className=' flex gap-20 text-2xl font-semibold'>
        <NavLink 
        to="/host"
        className={({isActive})=> isActive? "active-link" : null}
        >Host</NavLink>
        <NavLink 
        to="/about"
        className={({isActive})=> isActive? "active-link" : null}
        >About</NavLink>
      <NavLink 
        to="/vans"
        className={({isActive})=> isActive? "active-link" : null}
        >Vans</NavLink>
        </div>
      </section>
    </>
  )
}

export default Header
