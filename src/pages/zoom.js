import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./images.css"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Zoom = ({location}) => (
  <Layout>
    <Seo title="Showroom" />

    <div className="zoomwrapper">

      <Link to="/shearlings" className="goback" title=""/>

      {location.state.projectRef === "project01" &&
      <Carousel className="images">
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/MERINOS/1.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/MERINOS/2.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/MERINOS/3.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/MERINOS/4.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/MERINOS/5.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/MERINOS/6.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/MERINOS/7.png" alt="Merinos" />
        </Carousel.Item>
      </Carousel>
      }

      {location.state.projectRef === "project02" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/1.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/2.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/3.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/4.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/5.png" alt="Merinos" />
        </Carousel.Item>
      </Carousel>
      }

      {location.state.projectRef === "project03" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/1.png" alt="Merinos" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/2.png" alt="Merinos" />
        </Carousel.Item>
      </Carousel>
      }

    </div>
  </Layout>
)

export default Zoom