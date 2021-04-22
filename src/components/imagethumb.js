import React from "react"

import "../pages/images.css"
import { Link } from "gatsby"

const ImageThumb = ({children, projectType, projectRef}) => {
  return (
    <div id="work" className="thumb">
      <div className="thumb_proj" id="project01">
        <Link to="/zoom" state={{projectRef: projectRef, projectType: projectType}}>
          {children}
        </Link>
        <div className="mask">
          <div className="more"/>
        </div>
      </div>
    </div>
  )
}

export default ImageThumb