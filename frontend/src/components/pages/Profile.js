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

  }

  getProfileData() {
    axios.get(`/api/users/${this.props.match.params.id}/`)
      .then(res => this.setState({ profile: res.data }))
  }
  componentDidMount() {
    this.getProfileData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.getProfileData()
    }
  }


  render() {
    if(!this.state.profile) return <h2 className="title is-2">Loading ...</h2>
    return (
      <section className="section">
        <div className="container">

          <div className="columns  is multiline">

            <div className="column is-one-quarter image profile-pic">
              {this.state.profile.image && <img className="is-rounded profile-pic" src={this.state.profile.image} alt={this.state.profile.name}/>}
            </div>

            <div className="column dev-align-title-content is-half">

              <h1>USERNAME: {this.state.profile.username}</h1>
              <h1>NAME: {this.state.profile.name}</h1>
              <h1>EMAIL: {this.state.profile.email}</h1>
              <h1>Number of posts: {this.state.profile.meals.length}</h1>
              <hr />
              <h1>Bio: <br />{this.state.profile.bio}</h1>
            </div>
            <div className="is-one-quarter dev-profile-links">
              {Auth.isCurrentUser(this.state.profile) && <Link to="/meals/new" className="navbar-item title is-5">Post a meal</Link>}
              {Auth.isCurrentUser(this.state.profile) && <Link to={`/users/${this.state.profile.id}/edit`} className="navbar-item title is-5">Edit Profile</Link>}
            </div>

          </div>

          <hr />
          <div className="dev-meals-container" style={{ maxHeight: `${310 * this.state.profile.meals.length}px` }}>
            {this.state.profile.meals && this.state.profile.meals.map(meal =>
              <div className="dev-make-fifty" key={meal.id}>
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
