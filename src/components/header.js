import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link className="navbar-brand" to="/">SandBox</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link exact activeClassName="active" to="/" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link activeClassName="active" className="nav-link" to="webinars">Webinars</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

)

export default Header
