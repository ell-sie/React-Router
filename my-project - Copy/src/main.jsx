import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <section className=' flex justify-between p-10 px-20 items-center bg-orange-100 '>
        <Link to="/" className='text-5xl font-bold'>#VANLIFE</Link>
        <div className=' flex gap-5 text-2xl font-semibold'>
        <Link to="/about" >About</Link>
        <Link to="/vans">Vans</Link>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className='bg-zinc-900'>
      <section className=' flex p-10 justify-center items-center text-white '>
       <p className='text-slate-600'>@2022 #VANLIFE</p>
      </section>
      </footer>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);