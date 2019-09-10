import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

import Card from '../common/Card'
import { Link } from 'react-router-dom'


class Profile extends React.Component {

  constructor() {
    super()
    this.state = {
      isHovering: {},
      user: JSON.parse(Auth.getUser())
    }

    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.sortedMeals = this.sortedMeals.bind(this)

  }

  componentDidMount() {
    axios.get('/api/meals/')
      .then(res => this.setState({ meals: res.data }))
  }

  handleMouseHover(e) {
    if (e.target) {
      this.setState({ isHovering: !this.state.isHovering })
    }
  }

  sortedMeals() {
    const mealsToDisplay = this.state.meals.sort(function(a, b) {
      b.created_at - a.created_at
    })
    return mealsToDisplay
  }

  render() {
    if(!this.state.meals) return <h2 className="title is-2">Loading ...</h2>
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3 has-white-text">Whats been cookin?</h2>
          <hr />

          <div className="columns">
            <div className="column is-two-thirds dev-border-right">
              {this.state.meals && this.sortedMeals().map(meal =>
                <div className="column is-full-desktop" key={meal.id}>
                  <Link to={`/meals/${meal.id}`}>
                    <Card
                      name={meal.name}
                      image={meal.image}
                      handlehover={this.handleMouseHover}
                      ishovering={this.state.isHovering}
                      user={meal.user}
                    />
                  </Link>
                </div>
              )}
            </div>
            <div className="column is-one-third">
              <div className="image column is-one-third profile-pic">
                <Link to={`/users/${Auth.getPayload().sub}`} className="is-rounded is-pulled-right">
                  {this.state.user.image && <img className="is-rounded is-pulled-right" src={this.state.user.image} alt={this.state.user.username}/>}
                </Link>
              </div>
              <div className="column dev-card-title">
                <h2 className="subtitle is-5">{this.state.user.username}</h2>
              </div>
            </div>
          </div>


        </div>
      </section>
    )
  }
}

export default Profile
