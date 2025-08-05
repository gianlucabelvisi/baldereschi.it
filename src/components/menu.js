import React from "react"
import Link from "gatsby-link"

import "./menu.css"
import { showRoomData } from "../data/MenuData"

const Menu = () => {

  return (
    <nav className="menu">
      <ul>
        <li className="showroom highlight">
          <span role="button" tabIndex={0}>
            SEASONS
          </span>

          <div className="showroom-dropdown">

            {showRoomData.map((item, index) => {
              return (
                <div className="m-2" key={index}>
                  {item.isPage ? (
                    <Link to={item.link}>
                      {item.title}
                      {item.strong && <strong className="new">NEW</strong>}
                    </Link>
                  ) : (
                    <Link to="/showroom" state={{targetUrl: item.link, title: item.title}}>
                      {item.title}
                      {item.strong && <strong className="new">NEW</strong>}
                    </Link>
                  )}
                </div>
              )
            })}

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