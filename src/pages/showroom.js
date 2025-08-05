import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Iframe from "react-iframe"

const Showroom = ({location}) => {
  
  // Handle case when no state is provided
  if (!location.state?.targetUrl) {
    return (
      <Layout>
        <Seo title="Showroom" />
        <div className="container">
          <h4 className="mb-4">Showroom</h4>
          <p>No showroom selected. Please go back and select a showroom from the menu.</p>
        </div>
      </Layout>
    )
  }

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


