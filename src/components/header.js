import * as React from "react"
import PropTypes from "prop-types"
import Logo from "./logo"
import Menu from "./menu"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="mb-3">

    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-5">
        <Link to="/"><Logo/></Link>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-7">
        <Menu/>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
