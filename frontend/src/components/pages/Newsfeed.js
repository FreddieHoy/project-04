import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

import Card from '../common/Card'
import { Link } from 'react-router-dom'


class Profile extends React.Component {

  constructor() {
    super()
    this.state = {
      user: JSON.parse(Auth.getUser())
    }
    this.sortedMeals = this.sortedMeals.bind(this)
  }

  componentDidMount() {
    axios.get('/api/meals/')
      .then(res => this.setState({ meals: res.data }))
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

          <div className="columns">

            <div className="column">
              <h2 className="title is-3 dev-newsfeed-title">Whats been cookin?</h2>
            </div>

            <Link className="column" to={`/users/${Auth.getPayload().sub}`}>
              <div className="columns">
                <div className="column dev-news-logged-in">
                  <h2 className="subtitle is-5 dev-newsfeed-title is-pulled-right">Logged in: {this.state.user.username}</h2>
                </div>

                <div className="image column is-one-quarter is-pulled-right">
                  {this.state.user.image && <img id="make-small-image" className="is-rounded is-centered" src={this.state.user.image} alt={this.state.user.username}/>}
                </div>
              </div>
            </Link>
          </div>

          <hr />


          <div className="dev-news-meals-container">

            {this.state.meals && this.sortedMeals().map(meal =>
              <div className="div-news-meal" key={meal.id}>
                <Link to={`/meals/${meal.id}`}>
                  <Card
                    name={meal.name}
                    image={meal.image}
                    handlehover={this.handleMouseHover}
                    user={meal.user}
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
