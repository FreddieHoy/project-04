import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {
      navbarOpen: false
    }
    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  logout() {
    Auth.removeToken()
    Auth.removeUser()
    this.props.history.push('/')
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar is-black">
        <div className="container dev-navbar-styling">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-white">YesChef</Link>
            <Link to="/about" className="navbar-item has-text-white">About</Link>
            <a
              role="button"
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''} has-text-white`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''} is-black`} id='dev-forceBackground'>
            <div className="navbar-start">
              {Auth.isAuthenticated() && <Link to="/newsfeed" className="navbar-item has-text-white">NewsFeed</Link>}
              {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}`} className="navbar-item has-text-white">My Profile</Link>}
            </div>
            <div className="navbar-end">
              {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item has-text-white">Register</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item has-text-white">Login</Link>}
              {Auth.isAuthenticated() && <a onClick={this.logout} className="navbar-item has-text-white">Logout</a>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
