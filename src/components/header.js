import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="nav-primary">
      <div className="wrapper">
        <div className="primary-section">
          <Link to="/" className="nav-link logo">
            {siteTitle}
          </Link>
        </div>
        <div className="secondary-section">
          <Link to="/gallery" activeClassName='active' className="nav-link">Gallery</Link>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
