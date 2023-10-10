import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import Vans from './Components/vans/Vans'
import Details from './Components/vans/Details'
import './App.css'
import "./server"
import Layout from './Components/Layout';
import Dashboard from './Components/Host/Dashboard';
import Income from './Components/Host/Income';
import Reviews from './Components/Host/Reviews';
import HostLayout from './Components/HostLayout';
import HostVans from './Components/Host/HostVans'
import HostVansDetails from './Components/Host/HostVansDetails';
import HostVansInfo from './Components/Host/HostVansInfo';
import HostVansPrice from './Components/Host/HostVansPrice';
import HostVansPhoto from './Components/Host/HostVansPhoto';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Details />} />

        <Route path="host" element={<HostLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="van" element={<HostVans />} />
        <Route path="van/:id" element={<HostVansDetails />}>
        <Route index element={<HostVansInfo />} />
        <Route path="price" element={<HostVansPrice />} />
        <Route path="photos" element={<HostVansPhoto />} />
        </Route>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);