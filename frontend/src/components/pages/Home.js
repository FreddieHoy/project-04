import React from 'react'
import Auth from '../../lib/Auth'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="hero-body image-one">
        <section className="hero is-large">
          <div className="title-container fade-background">
            <h1 className="title has-text-black is-1">YesChef</h1>
            <h2 className="subtitle has-text-black is-4">Share your cooking with London</h2>
            {!Auth.isAuthenticated() && <Link to="/register" className="">Register</Link>}
            {!Auth.isAuthenticated() && <Link to="/login" className="">Login</Link>}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
