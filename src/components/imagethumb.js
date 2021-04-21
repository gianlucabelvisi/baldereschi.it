import React from "react"

import "../pages/images.css"
import { Link } from "gatsby"

const ImageThumb = ({children, thumbType, projectRef}) => {
  return (
    <div id="work" className="m-2">
      <div className="thumb_proj" id="project01">
        <Link to="/zoom" state={{projectRef: projectRef}}>
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