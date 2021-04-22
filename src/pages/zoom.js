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

      <Link to={"/" + location.state.projectType} className="goback" title=""/>

      {location.state.projectRef === "project01" &&
      <div>
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

      </div>
      }

      {location.state.projectRef === "project02" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/1.png" alt="Toscana" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/2.png" alt="Toscana" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/3.png" alt="Toscana" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/4.png" alt="Toscana" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/TOSCANA/5.png" alt="Toscana" />
        </Carousel.Item>
      </Carousel>
      }

      {location.state.projectRef === "project03" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/1.png" alt="Special Treatments" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/2.png" alt="Special Treatments" />
        </Carousel.Item>
      </Carousel>
      }

      {location.state.projectRef === "project10" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/ALLIGATORS/1.png" alt="Alligators" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/ALLIGATORS/2.png" alt="Alligators" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/ALLIGATORS/3.png" alt="Alligators" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/ALLIGATORS/4.png" alt="Alligators" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/ALLIGATORS/5.png" alt="Alligators" />
        </Carousel.Item>
      </Carousel>
      }

      {location.state.projectRef === "project11" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/LIZARDS/1.png" alt="Lizards" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/LIZARDS/2.png" alt="Lizards" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/LIZARDS/3.png" alt="Lizards" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/LIZARDS/4.png" alt="Lizards" />
        </Carousel.Item>
      </Carousel>
      }

      {location.state.projectRef === "project12" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/1.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/2.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/3.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/4.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/5.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/6.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/7.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/8.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/9.png" alt="No Cites Snakes" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/NOCITESSNAKES/10.png" alt="No Cites Snakes" />
        </Carousel.Item>
      </Carousel>
      }

      {location.state.projectRef === "project13" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/1.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/2.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/3.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/4.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/5.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/6.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/7.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/8.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/9.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/10.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/11.png" alt="Python Molurus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONMOLURUS/12.png" alt="Python Molurus" />
        </Carousel.Item>
      </Carousel>
      }

      {location.state.projectRef === "project14" &&
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONRETICULATUS/1.png" alt="Python Reticulatus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONRETICULATUS/2.png" alt="Python Reticulatus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONRETICULATUS/3.png" alt="Python Reticulatus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONRETICULATUS/4.png" alt="Python Reticulatus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONRETICULATUS/5.png" alt="Python Reticulatus" />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/projects/exotics/PYTHONRETICULATUS/6.png" alt="Python Reticulatus" />
        </Carousel.Item>
      </Carousel>
      }

    </div>
  </Layout>
)

export default Zoom