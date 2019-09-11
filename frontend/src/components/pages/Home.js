import React from 'react'
import Auth from '../../lib/Auth'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="hero-body image-one">
        <section className="hero is-large  dev-home-background columns herobody">
          <div className="column has-text-centered">
            <h1 className="title has-text-black is-1">YesChef</h1>
            <h2 className="subtitle has-text-black is-4">Share your home cooking</h2>
          </div>
          <div className="column has-text-centered">
            <div className="columns">
              <div className="column">
                {!Auth.isAuthenticated() && <div><Link to="/register" className="is-size-3">Register</Link></div>}
                {Auth.isAuthenticated() && <Link to="/newsfeed" className="is-size-3">NewsFeed</Link>}
              </div>
              <div className="column">
                {!Auth.isAuthenticated() && <div><Link to="/login" className="is-size-3">Login</Link></div>}
                {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}`} className="is-size-3">My Profile</Link>}
              </div>
            </div>
          </div>
          <div className="dev-raise-home">
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
