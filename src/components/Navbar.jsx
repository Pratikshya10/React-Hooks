import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to = '/home' className='link'>Home</Link>
        <Link to='/students' className='link'>Students</Link>
        <Link to='/contact' className='link'>Contact</Link>


    </div>
  )
}

export default Navbar