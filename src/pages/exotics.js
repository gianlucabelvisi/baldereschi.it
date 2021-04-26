import React from "react"

import "./images.css"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ImageThumb from "../components/imagethumb"
import styled from "styled-components"
import media from "../components/media"


const ThumbContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
  `};
  ${media.widescreen`
    grid-template-columns: repeat(5, 1fr);
  `};
`

const Shearlings = () => {
  return (
    <Layout>
      <Seo title="Exotics" />

      <ThumbContainer>

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

      </ThumbContainer>

    </Layout>
  )
}

export default Shearlings