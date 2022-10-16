import React from 'react'
import logo  from "../sources/Logo.png"

export function Navbar() {
  return (
    <nav className="menu">
        <img className='logo' src={logo} alt="Haustierfash Logo"></img>
        <ul>
            <li><a className='sign-up' href={"/sign-up"}>Sign Up</a></li>
            <li><a className='log-in' href={"https://www.google.com/"}>Sign In</a></li>
        </ul>
    </nav>
  )
}
