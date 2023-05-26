import React from 'react'
import { Link } from 'react-router-dom'
import "./Dbody.css"

export const Body = () => {
  return (
    <div className='container border-primary'>
  
   
  <div className="nav-item dropdown">
   
  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Types of diseases we deal with are:</Link>
 
  <ul className="dropdown-menu">
   
    <li><Link className="dropdown-item" to="/libido">Low libido</Link></li>
    <li><Link className="dropdown-item" to="/infertility">Infantility</Link></li>
    <li><Link className="dropdown-item" to="/Typhoid">Typhoid</Link></li>
    <li><Link className="dropdown-item" to="/Diabeties">Diabeties</Link></li>
    <li><Link className="dropdown-item" to="/pressure">pressure</Link></li>
    <li><Link className="dropdown-item" to="/Skin">Skin diseases</Link></li>
    <li><Link className="dropdown-item" to="/Arthritis">Arthritis</Link></li>
    <li><Link className="dropdown-item" to="/stis">STIs</Link></li>
    <li><Link className="dropdown-item" to="/ulcers">Ulcers</Link></li>
  </ul>
</div>
</div>
  )
}
