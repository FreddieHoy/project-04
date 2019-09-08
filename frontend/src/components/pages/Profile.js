import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

import ProfileCard from '../common/ProfileCard'
import { Link } from 'react-router-dom'

class Profile extends React.Component {

  constructor() {
    super()
    this.state = {
      isHovering: {}
    }

    this.handleMouseHover = this.handleMouseHover.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/users/${Auth.getPayload().sub}/`)
      .then(res => this.setState({ profile: res.data }))
  }


  handleMouseHover(e) {
    if (e.target) {
      this.setState({ isHovering: !this.state.isHovering })
    }
  }


  render() {
    if(!this.state.profile) return <h2 className="title is-2">Loading ...</h2>
    return (
      <section className="section">
        <div className="container">

          <div className="columns">

            <div className="column is-quarter image profile-pic">
              {this.state.profile.image && <img className="is-rounded profile-pic" src={this.state.profile.image} alt={this.state.profile.name}/>}
            </div>

            <div className="column dev-centerthis is-three-quarters">

              <h1>USERNAME: {this.state.profile.username}</h1>
              <h1>EMAIL: {this.state.profile.email}</h1>
              <h1>Number of posts: {this.state.profile.meals.length}</h1>
            </div>

            {Auth.isAuthenticated() && <Link to="/meals/new" className="navbar-item">Post a meal</Link>}
          </div>

          <hr />
          <div className="container columns is-multiline">
            {this.state.profile.meals && this.state.profile.meals.map(meal =>
              <div className="column is-half-desktop" key={meal.id}>
                <Link to={`/meals/${meal.id}`}>
                  <ProfileCard
                    image={meal.image}
                    name={meal.name}
                    handlehover={this.handleMouseHover}
                    ishovering={this.state.isHovering}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Profile
