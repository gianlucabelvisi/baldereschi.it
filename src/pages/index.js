import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />

    <Carousel className="mt-3 mb-3">
      {data.allFile.edges.map(edge => {
        return (
          <Carousel.Item>
            <GatsbyImage image={getImage(edge.node)}/>
          </Carousel.Item>
        )
      })}
    </Carousel>

  </Layout>
)


export const indexQuery = graphql`
query SliderImages {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/projects/slider/"}}) {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
}
`

export default IndexPage
