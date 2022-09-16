import React from "react"
import Link from "gatsby-link"

import "./menu.css"

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="showroom highlight">
          <a href="#">
            Showroom
          </a>


          <div className="showroom-dropdown">

            <div className="m-2">
              <Link to="/showroom" state={{targetUrl: "https://my.matterport.com/show/?m=RELJaqqPiqD", password: "ss23collectionbalde"}}>
                Leathers FW23/24-1<strong>NEW</strong>
              </Link>
            </div>

            <div className="m-2">
              <Link to="/showroom" state={{targetUrl: "https://my.matterport.com/show/?m=CdU9aSdxMLc", password: "ss23collectionbalde"}}>
                Leathers FW23/24-2<strong>NEW</strong>
              </Link>
            </div>

            <div className="m-2">
              <Link to="/showroom" state={{targetUrl: "https://my.matterport.com/show/?m=9tfUkmrU1AR", password: "ss23collectionbalde"}}>
                Shearlings FW23/24<strong>NEW</strong>
              </Link>
            </div>

            <div className="m-2">
              <Link to="/showroom" state={{targetUrl: "https://my.matterport.com/show/?m=T8n8PQ13uit", password: "ss23collectionbalde"}}>
                Spring Summer 23-1
              </Link>
            </div>

            <div className="m-2">
              <Link to="/showroom" state={{targetUrl: "https://my.matterport.com/show/?m=reGHaDKQzrf", password: "ss23collectionbalde"}}>
                Spring Summer 23-2
              </Link>
            </div>

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