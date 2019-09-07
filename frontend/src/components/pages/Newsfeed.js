import React from 'react'
import axios from 'axios'

import Card from '../common/Card'
import { Link } from 'react-router-dom'


class Profile extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/meals/')
      .then(res => this.setState({ meals: res.data }))
  }

  render() {
    console.log(this.state.meals)
    if(!this.state.meals) return <h2 className="title is-2">Loading ...</h2>
    return (
      <section className="section">
        <div className="container">
          {this.state.meals && this.state.meals.map(meal =>
            <div className="column is-two-thirds-desktop" key={meal.id}>
              <Link to={`/meals/${meal._id}`}>
                <Card
                  name={meal.name}
                  image={meal.image}
                />
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default Profile
