import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/genre'>Genre</NavLink>
            <NavLink to='/nopage'>NoPage</NavLink>
        </ul>
    </>
  )
}

export default Header