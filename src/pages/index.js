import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel, Image } from "react-bootstrap"

import slide01 from "../images/projects/slider/1.png"
import slide02 from "../images/projects/slider/2.png"
import slide03 from "../images/projects/slider/3.png"
import slide04 from "../images/projects/slider/4.png"
import slide05 from "../images/projects/slider/5.png"
import slide06 from "../images/projects/slider/6.png"
import slide07 from "../images/projects/slider/7.png"
import slide08 from "../images/projects/slider/8.png"
import slide09 from "../images/projects/slider/9.png"
import slide10 from "../images/projects/slider/10.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Carousel className="mt-3 mb-3">
      <Carousel.Item>
        <img src={slide01} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide02} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide03} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide04} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide05} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide06} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide07} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide08} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide09} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide10} alt="" />
      </Carousel.Item>
    </Carousel>

  </Layout>
)

export default IndexPage

