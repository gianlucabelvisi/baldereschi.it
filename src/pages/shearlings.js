import React from "react"

import "./images.css"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ImageThumb from "../components/imagethumb"
import styled from "styled-components"
import media from "../components/media"


export const ThumbContainer = styled.div`
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
      <Seo title="Shearlings" />

      <ThumbContainer>

        <ImageThumb projectType="shearlings" projectRef="project01">
          <StaticImage alt="More Info" src="../images/projects/shearlings/MERINOS/thumb.png" width="220" height="150"/>
        </ImageThumb>

        <ImageThumb projectType="shearlings" projectRef="project02">
          <StaticImage alt="More Info" src="../images/projects/shearlings/TOSCANA/thumb.png" width="220" height="150" />
        </ImageThumb>

        <ImageThumb projectType="shearlings" projectRef="project03">
          <StaticImage alt="More Info" src="../images/projects/shearlings/SPECIALTREATMENTS/thumb.png" width="220" height="150" />
        </ImageThumb>

      </ThumbContainer>

    </Layout>
  )
}

export default Shearlings