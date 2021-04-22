import React from "react"

import "./images.css"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ImageThumb from "../components/imagethumb"

const Shearlings = () => {
  return (
    <Layout>
      <Seo title="Shearlings" />

      <ImageThumb projectType="shearlings" projectRef="project01">
        <StaticImage alt="More Info" src="../images/projects/shearlings/MERINOS/thumb.png" width="220" height="150"/>
      </ImageThumb>

      <ImageThumb projectType="shearlings" projectRef="project02">
        <StaticImage alt="More Info" src="../images/projects/shearlings/TOSCANA/thumb.png" width="220" height="150" />
      </ImageThumb>

      <ImageThumb projectType="shearlings" projectRef="project03">
        <StaticImage alt="More Info" src="../images/projects/shearlings/SPECIALTREATMENTS/thumb.png" width="220" height="150" />
      </ImageThumb>



    </Layout>
  )
}

export default Shearlings