import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

import Card from '../common/Card'
import { Link } from 'react-router-dom'

class Profile extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/users/${Auth.getPayload().sub}/`)
      .then(res => this.setState({ profile: res.data }))
  }

  render() {
    if(!this.state.profile) return <h2 className="title is-2">Loading ...</h2>
    return (
      <section className="section">
        <div className="container">
          <div>
            <h1>{this.state.profile.username}</h1>
            {this.state.image && <img className="ShowImage" src={this.state.user.image} alt={this.state.user.name}/>}
          </div>
          <div className="container">
            {this.state.meals && this.state.meals.map(meal =>
              <div className="column is-one-third-desktop" key={meal.id}>
                <Link to={`/meals/${meal._id}`}>
                  <Card
                    name={meal.name}
                    image={meal.image}
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
