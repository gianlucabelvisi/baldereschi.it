import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./images.css"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"


const Zoom = ({ location }) => {
  const getProjectRef = () => {
    return location.state ? location.state.projectRef : ""
  }
  const getProjectType = () => {
    return location.state ? location.state.projectType : ""
  }


  return (
    <Layout>
      <Seo title="Showroom" />

      <div className="zoomwrapper">

        <Link to={"/" + getProjectType()} className="goback" title="" />

        {getProjectRef() === "project01" &&
        <div className="row">
          <Carousel className="images col-sm-12 col-md-8 col-lg-9">
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
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/1.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/2.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/3.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/4.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/5.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/6.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/7.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/8.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/9.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/10.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/11.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/12.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/13.jpg" alt="Merinos" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/MERINOS/14.jpg" alt="Merinos" />
            </Carousel.Item>
          </Carousel>
          <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
            <h3>Shearlings<br /> <span>Merinos</span></h3>
            <small>
              <p>Available wool types: Curly, semi-curly, ironed</p>
              <p>Available wool length: from 3 to 20 mm</p>
            </small>
          </div>
        </div>
        }

        {getProjectRef() === "project02" &&
        <div className="row">
          <Carousel className="images col-sm-12 col-md-8 col-lg-9">
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
          <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
            <h3>Shearlings <br /> <span>Toscana</span></h3>
          </div>
        </div>
        }

        {getProjectRef() === "project03" &&
        <div className="row">
          <Carousel className="images col-sm-12 col-md-8 col-lg-9">
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/1.png" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/2.png" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/1.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/2.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/3.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/4.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/5.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/6.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/7.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/8.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/9.jpg" alt="Special Treatments" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/shearlings/SPECIALTREATMENTS/10.jpg" alt="Special Treatments" />
            </Carousel.Item>
          </Carousel>
          <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
            <h3>Shearlings<br /> <span>Specials</span></h3>
            <small>
              <p>Different treatments on hair, wool and suede sides, printing, multiple tippings, embossing, lots of
                finishings. Ask for your custom made look</p>
            </small>
          </div>
        </div>
        }

        {getProjectRef() === "project10" &&
        <div className="row">
          <Carousel className="images col-sm-12 col-md-8 col-lg-9">
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/1.jpg" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/2.jpg" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/3.jpg" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/4.jpg" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/5.jpg" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/6.jpg" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/7.jpg" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/8.jpg" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/old1.png" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/old2.png" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/old3.png" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/old4.png" alt="Alligators" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/ALLIGATORS/old5.png" alt="Alligators" />
            </Carousel.Item>
          </Carousel>
          <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
            <h3>Exotics <br /> <span>Alligators</span></h3>
            <small>
              <p>Available Sizes: 20/24, 25/29, 30/34, 35/39, 40/44, 45/49, 50+ </p>
              <p>Common name: American Alligator</p>
              <p>Scientific name: Alligator Mississipiensis</p>
              <p>Country of origin: USA</p>
              <p>Cites: YES</p>
            </small>
          </div>
        </div>
        }

        {getProjectRef() === "project11" &&
        <div className="row">
          <Carousel className="images col-sm-12 col-md-8 col-lg-9">
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/LIZARDS/1.jpg" alt="Lizards" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/LIZARDS/2.jpg" alt="Lizards" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/LIZARDS/3.jpg" alt="Lizards" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/LIZARDS/4.jpg" alt="Lizards" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/LIZARDS/5.jpg" alt="Lizards" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/LIZARDS/6.jpg" alt="Lizards" />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage src="../images/projects/exotics/LIZARDS/7.jpg" alt="Lizards" />
            </Carousel.Item>
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
          <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
            <h3>Exotics <br /> <span>Lizards</span></h3>
            <small>
              <p>Available Cuts: F/C, B/C</p>
              <p>Available Sizes: 25/29, 30+</p>
              <p>Common name: lizard</p>
              <p>Scientific name: varanus salvator</p>
              <p>Country of origin: Indonesia</p>
              <p>Cites: Yes</p>
            </small>
          </div>
        </div>
        }

        {getProjectRef() === "project12" &&
        <div className="row">
          <Carousel className="images col-sm-12 col-md-8 col-lg-9">
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
          <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
            <h3>Exotics <br /> <span>No Cites Snakes</span></h3>
            <small>
              <p>Available Snakes: Ayers, Elaphe (carinata, radiata), Karung, Enhydris, Mangrovia, Viper</p>
            </small>
          </div>
        </div>
        }

        {getProjectRef() === "project13" &&
        <div className="row">
          <Carousel className="images col-sm-12 col-md-8 col-lg-9">
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
          <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
            <h3>Exotics <br /> <span>Python Molurus</span></h3>
            <small>
              <p>Available Cuts: F/C, B/C</p>
              <p>Available Sizes: 25/29, 30/34, 35+</p>
              <p>Common name: Pitone Moluro</p>
              <p>Scientific name: Python Bivittatus</p>
              <p>Country of origin: Indonesia</p>
              <p>Cites: Yes</p>
            </small>
          </div>
        </div>
        }

        {getProjectRef() === "project14" &&
        <div className="row">
          <Carousel className="images col-sm-12 col-md-8 col-lg-9">
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
          <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
            <h3>Exotics <br /> <span>Python Reticulatus</span></h3>
            <small>
              <p>Available Cuts: F/C, B/C</p>
              <p>Available Sizes: 25/29, 30/34, 35+</p>
              <p>Common name: Pitone Reticulato</p>
              <p>Scientific name: Python Reticulatus</p>
              <p>Country of origin: Indonesia</p>
              <p>Cites: Yes</p>
            </small>
          </div>
        </div>
        }

        {getProjectRef() === "project15" &&
          <div className="row">
            <Carousel className="images col-sm-12 col-md-8 col-lg-9">
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOFIXED/1.jpg" alt="Agnello Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOFIXED/2.jpg" alt="Agnello Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOFIXED/3.jpg" alt="Agnello Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOFIXED/4.jpg" alt="Agnello Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOFIXED/5.jpg" alt="Agnello Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOFIXED/6.jpg" alt="Agnello Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOFIXED/7.jpg" alt="Agnello Fixed" />
              </Carousel.Item>
            </Carousel>
            <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
              <h3>Shearlings <br /> <span>Agnello Fixed</span></h3>
              <small>
                <p>Many types of finishing on the backside.</p>
                <p>Lots of styles: Vintage, Nappa effect, printing, and foils.</p>
                <p>Ask for your custom-made look.</p>
              </small>
            </div>
          </div>
        }


        {getProjectRef() === "project16" &&
          <div className="row">
            <Carousel className="images col-sm-12 col-md-8 col-lg-9">
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOSUEDE/1.jpg" alt="Agnello Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOSUEDE/2.jpg" alt="Agnello Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOSUEDE/3.jpg" alt="Agnello Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOSUEDE/4.jpg" alt="Agnello Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOSUEDE/5.jpg" alt="Agnello Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOSUEDE/6.jpg" alt="Agnello Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/AGNELLOSUEDE/7.jpg" alt="Agnello Suede" />
              </Carousel.Item>
            </Carousel>
            <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
              <h3>Shearlings <br /> <span>Agnello Suede</span></h3>
              <small>
                <p>Skins with a natural finishing on the backside, with a suede look and suede touch.</p>
              </small>
            </div>
          </div>
        }


        {getProjectRef() === "project17" &&
          <div className="row">
            <Carousel className="images col-sm-12 col-md-8 col-lg-9">
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/01.jpg" alt="Merino Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/02.jpg" alt="Merino Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/03.jpg" alt="Merino Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/04.jpg" alt="Merino Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/05.jpg" alt="Merino Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/06.jpg" alt="Merino Fixed" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/07.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/08.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/09.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/10.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/11.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/12.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/13.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOFIXED/14.jpg" alt="" />
              </Carousel.Item>
            </Carousel>
            <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
              <h3>Shearlings <br /> <span>Merino Fixed</span></h3>
              <small>
                <p>Many types of finishing on the backside.</p>
                <p>Lots of styles: Vintage, Nappa effect, printing, and foils.</p>
                <p>Ask for your custom-made look.</p>
              </small>
            </div>
          </div>
        }

        {getProjectRef() === "project18" &&
          <div className="row">
            <Carousel className="images col-sm-12 col-md-8 col-lg-9">
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/01.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/02.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/03.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/04.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/05.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/06.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/07.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/08.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/09.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/10.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/11.jpg" alt="Merino Suede" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/12.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/13.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/14.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/15.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/16.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/projects/shearlings/MERINOSUEDE/17.jpg" alt="" />
              </Carousel.Item>
            </Carousel>
            <div className="slidecontent col-sm-12 col-md-4 col-lg-3">
              <h3>Shearlings <br /> <span>Merino Suede</span></h3>
              <small>
                <p>Skins with a natural finishing on the backside, with a suede look and suede touch.</p>
              </small>
            </div>
          </div>
        }


      </div>
    </Layout>
  )

}

export default Zoom