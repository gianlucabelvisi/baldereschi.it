import React from "react"
import Link from "gatsby-link"

import "./menu.css"

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="showroom highlight">
          <Link to="/showroom" >Showroom</Link>
          <div className="showroom-dropdown">
            <div className="m-2"><Link to="/showroom">Novelties S22-1 <strong>NEW</strong></Link></div>
            <div className="m-2"><Link to="/showroom">Novelties S22-2 <strong>NEW</strong></Link></div>
            <div className="m-2"><Link to="/showroom">Shearlings <strong>NEW</strong></Link></div>
          </div>
        </li>
        <li>
          <Link to="/exotics">Exotics</Link>
        </li>
        <li>
          <Link to="/shearlings">Shearlings</Link>
        </li>
        <li>
          <Link to="/novelties">Novelties</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="external">
          <a href="https://www.colorcards.it" target="_blank" rel="noreferrer">Colors</a>
        </li>
      </ul>

    </nav>
  )
}

export default Menu