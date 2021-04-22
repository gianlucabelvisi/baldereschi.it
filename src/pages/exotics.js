import React from "react"

import "./images.css"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ImageThumb from "../components/imagethumb"

const Shearlings = () => {
  return (
    <Layout>
      <Seo title="Exotics" />

      <div id="thumbcontainer">

        <ImageThumb projectType="exotics" projectRef="project10">
          <StaticImage alt="More Info" src="../images/projects/exotics/ALLIGATORS/thumb.png" width="220" height="150"/>
        </ImageThumb>

        <ImageThumb projectType="exotics" projectRef="project11">
          <StaticImage alt="More Info" src="../images/projects/exotics/LIZARDS/thumb.png" width="220" height="150"/>
        </ImageThumb>

        <ImageThumb projectType="exotics" projectRef="project12">
          <StaticImage alt="More Info" src="../images/projects/exotics/NOCITESSNAKES/thumb.png" width="220" height="150"/>
        </ImageThumb>

        <ImageThumb projectType="exotics" projectRef="project13">
          <StaticImage alt="More Info" src="../images/projects/exotics/PYTHONMOLURUS/thumb.png" width="220" height="150"/>
        </ImageThumb>

        <ImageThumb projectType="exotics" projectRef="project14">
          <StaticImage alt="More Info" src="../images/projects/exotics/PYTHONRETICULATUS/thumb.png" width="220" height="150"/>
        </ImageThumb>

      </div>

    </Layout>
  )
}

export default Shearlings