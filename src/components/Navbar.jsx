

import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='links'>
            <Link to="/profile" className='link'>Profile</Link>
            <Link to="/finished" className='link'>Completed Tasks</Link>
        </div>
    </div>
  )
}

export default Navbar