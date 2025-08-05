import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageGallery from "../components/imagegallery"

const SS2526 = () => {
  return (
    <Layout>
      <Seo title="Spring Summer 25/26 Collection" />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ImageGallery 
              folderPath="SPRING SUMMER 25-26"
              title="Spring Summer 25/26 Collection"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SS2526 