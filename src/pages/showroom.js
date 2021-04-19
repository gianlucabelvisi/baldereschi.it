import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./showroom.css"
import Iframe from "react-iframe"

const ShowRoom = ({location}) => (
  <Layout>
    <Seo title="Showroom" />

    <Iframe id="showroom"
            width="100%"
            height="800"
            frameBorder="0"
            allowFullScreen="true"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            url={location.state.targetUrl}>
    </Iframe>

  </Layout>
)

export default ShowRoom