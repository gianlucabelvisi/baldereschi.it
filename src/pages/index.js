import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Carousel className="mt-3 mb-3">
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/1.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/2.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/3.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/4.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/5.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/6.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/7.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/8.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/9.png" alt="Slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage src="../images/projects/slider/10.png" alt="Slide"/>
      </Carousel.Item>
    </Carousel>

  </Layout>
)

export default IndexPage