import React from 'react';
import "./Navbar.css"
import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
      <nav className='text text-center fw-bold bg-primary'>DOCTOR LUCY</nav>
      <table class="table table-bordered border-primary">
  <thead>
    <tr>
    
      <th scope="col"><Link className="home"to='/Ill'>Home</Link></th>
      <th scope="col"><Link className="diseases"to='/' >Diseases</Link></th>
      <th scope="col"><Link className="protect"to='/protection'>Others</Link></th>
      <th scope="col"><Link className="protect"to='/contact'>Contact us</Link></th>
    </tr>
  </thead>
      {/* <table className='table table-bordered d-flex justify-content-center justify-content-around'id="table">
        <thead><Link className="home"to='/'>Home</Link></thead>
        <thead><Link className="diseases"to='/Ill' >Diseases</Link></thead>
        <thead><Link className="protect"to='/protect'>protect</Link></thead> */}
      </table>
    
    </div>
  )
}
