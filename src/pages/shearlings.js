import React from "react"

import "./imageviewer.css"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Shearlings = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <section id="work">
        <h3>Shearlings</h3>

        <div className="thumb_proj" id="project01">
          <a className="proj four columns" href={"#work-open"}>
            <StaticImage alt="More Info" height="150" src="../images/projects/shearlings/MERINOS/thumb.png" width="220"
                 className="scale-with-grid"/>
          </a>
          <div className="mask">
            <div className="more"/>
          </div>
        </div>

        <div id="work-open">
          <div className="openproject project01">
            <a className="close" href={"#work"} title=""/>

          </div>
        </div>


      </section>
    </Layout>
  )
}

export default Shearlings