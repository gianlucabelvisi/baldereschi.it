import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
      <StaticImage
        src="../images/logo.png"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Baldereschi.it"
        loading="eager"
      />
  )
}

export default Logo