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
      user: Auth.getUser()
    }

    this.handleMouseHover = this.handleMouseHover.bind(this)

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

  render() {
    if(!this.state.meals) return <h2 className="title is-2">Loading ...</h2>
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3 has-white-text">Whats been cookin?</h2>
          <hr />

          <div className="columns">
            <div className="column is-two-thirds dev-border-right">
              {this.state.meals && this.state.meals.map(meal =>
                <div className="column is-full-desktop" key={meal.id}>
                  <Link to={`/meals/${meal.id}`}>
                    <Card
                      name={meal.name}
                      image={meal.image}
                      handlehover={this.handleMouseHover}
                      ishovering={this.state.isHovering}
                    />
                  </Link>
                </div>
              )}
            </div>
            <div className="column is-one-third">
              {this.state.user.username}
            </div>
          </div>


        </div>
      </section>
    )
  }
}

export default Profile
