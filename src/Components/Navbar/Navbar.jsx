import './Navbar.css'
import { NavLink, Link } from 'react-router'

export default function Navbar() {
  return (
    <header className="sf-navbar p-4">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link className="navbar-brand sf-logo text-uppercase text-decoration-none" to="/">START FRAMEWORK</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-md-center">
              <li className="nav-item"><NavLink className="nav-link text-uppercase px-3" to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-uppercase px-3" to="/portofolio">Portfolio</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-uppercase px-3" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
