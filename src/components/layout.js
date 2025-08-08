/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./theme.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {children}

      <footer className="justify-content-center mt-5">
          <div className="col-12 text-center">
            <small>
              Baldereschi srl, VIA DELLA PESA 41 Santa Croce sull’Arno (Pi) – Italia – P.I. 02186340507
              <br/>
              <br/>
              © {new Date().getFullYear()}, Website built with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a> {` `} by Gianluca Belvisi
            </small>
          </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
