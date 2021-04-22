import React from "react"
import { graphql } from "gatsby"
import Lightbox from "../components/lightbox.js"
import Seo from "../components/seo"
import Layout from "../components/layout"

const Novelties = ({data}) => {
  return (
    <Layout>
      <Seo title="Novelties" />

      <Lightbox images={data.allFile.edges} />

    </Layout>
  )
}

export const indexQuery = graphql`
query noveltiesImages {
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/projects/novelties/"}}) {
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

export default Novelties
