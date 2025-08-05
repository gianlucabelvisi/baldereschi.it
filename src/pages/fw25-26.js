import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageGallery from "../components/imagegallery"

const FW2526 = () => {
  return (
    <Layout>
      <Seo title="Fall Winter 25/26 Collection" />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ImageGallery 
              folderPath="FALL WINTER 25-26"
              title="Fall Winter 25/26 Collection"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FW2526 