import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Iframe from "react-iframe"

const Showroom = ({location}) => {

  return (
    <Layout>
      <Seo title="Showroom" />

      <h4 className="mb-4">{location.state?.title}</h4>

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
}

export default Showroom


