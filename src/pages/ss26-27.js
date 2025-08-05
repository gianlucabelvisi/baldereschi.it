import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageGallery from "../components/imagegallery"

const SS2627 = () => {
  return (
    <Layout>
      <Seo title="Spring Summer 26/27 Collection" />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ImageGallery 
              folderPath="SPRING SUMMER 26-27"
              title="Spring Summer 26/27 Collection"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SS2627 