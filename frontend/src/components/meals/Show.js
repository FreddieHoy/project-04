import React from 'react'
import axios from 'axios'


import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'
import Comment from '../common/Comment'

class PlotsShow extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {
        rating: 1,
        content: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/meals/${this.props.match.params.id}/`)
      .then(res => this.setState({ meal: res.data }))
  }

  handleChange(e) {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}
    this.setState({ formData})
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post(`/api/meals/${this.props.match.params.id}/comments`, this.state.formData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ meal: res.data, formData: { rating: 1, content: ''} }))
  }

  handleDelete(){
    axios.delete(`/api/meals/${this.props.match.params.id}`,{
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(()=> this.props.history.push('/api/meals'))
  }

  handleCommentDelete(e){
    axios.delete(`/api/meals/${this.props.match.params.id}/comments/${e.target.id}`, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ meal: res.data }))
  }

  render() {
    console.log(this.state.meal)
    return (
      <section className="section show-background">
        <div className="container">

          {!this.state.meal && <h2 className="title is-2">Loading...</h2>}

          {this.state.meal && <div className="box tableBorder">
            <header>
              <h1 className="title is-2">{this.state.meal.name}</h1>
              {Auth.isCurrentUser(this.state.meal.user) && <div className="buttons">
                <Link
                  className="button"
                  to={`/meals/${this.state.meal.id}/edit`}
                >Edit</Link>

                <button className="button is-danger"
                  onClick={this.handleDelete}>Delete</button>
              </div>}
            </header>

            <div>
              <p>{this.state.meal.description}</p>
            </div>

            <hr />
            <div className="columns is-multiline">
              <div className="column is-half is-centered">
                <img className="ShowImage" src={this.state.meal.image} alt={this.state.meal.name}/>
              </div>

              <div className="column is-half is-centered">
                <div className="table-container">
                  <table className="table tableBorder">
                    <tbody>
                      <tr>
                        <td><p>Cuisine: </p></td>
                        <td><p>{this.state.meal.cuisine}</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <hr />
            <h2 className="title is-3 has-white-text">Comments</h2>
            <div className="column is-full">
              <div className="column is-full">
                {this.state.meal.comments}
                {Auth.isAuthenticated() && <form onSubmit={this.handleSubmit}>
                  <hr />
                  <div className="table-container">
                    <table className="table is-fullwidth">
                      <tbody>
                        <tr>
                          <td>
                            <div className="field">
                              <label className="label"><h3 className="commentUser">Comment</h3></label>
                              <textarea
                                name="content"
                                className="textarea"
                                placeholder="Add a comment..."
                                onChange={this.handleChange}
                                value={this.state.formData.content}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>}
              </div>
            </div>

          </div>}

        </div>
      </section>
    )
  }
}

export default PlotsShow
