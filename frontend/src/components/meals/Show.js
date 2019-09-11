import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'
import Comment from '../common/Comment'

class MealShow extends React.Component {
  constructor() {
    super()
    this.state = {
      formData: {
        content: '',
        user: Auth.getUser().username
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.formatDate = this.formatDate.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/meals/${this.props.match.params.id}/`)
      .then(res => this.setState({ meal: res.data }))
      .then(() => console.log(this.state.meal))
  }

  handleChange(e) {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}
    this.setState({ formData})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(`/api/meals/${this.props.match.params.id}/comments/`, this.state.formData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ meal: res.data, formData: { content: ''} }))
  }

  handleDelete(){
    axios.delete(`/api/meals/${this.props.match.params.id}/`,{
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(()=> this.props.history.push('/api/meals'))
  }

  handleCommentDelete(e){
    axios.delete(`/api/meals/${this.props.match.params.id}/comments/${e.target.id}/`, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => axios.get(`/api/meals/${this.props.match.params.id}/`))
      .then(res => this.setState({ meal: res.data }))
  }

  formatDate(date) {
    let newDate = date.slice(0, -16)
    newDate = newDate.replace('T', ' ')
    return newDate
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          {!this.state.meal && <h2 className="title is-2">Loading...</h2>}
          {this.state.meal && <div>
            <header>
              <h1 className="title has-text-centered is-2">{this.state.meal.name}</h1>
            </header>
            <hr />
            <div className="is-half is-centered">
              <img className="dev-Show-Image" src={this.state.meal.image} alt={this.state.meal.name}/>
            </div>
            <hr />
            <div className="columns">
              <Link to={`/users/${this.state.meal.user.id}`} className="column has-text-centered">
                <p className="title is-6">Created by:</p>
                <p className="title is-6">Username: {this.state.meal.user.username}</p>
                <p className="title is-6">Name: {this.state.meal.user.name}</p>
                <br />
                <div className="image column profile-pic">
                  {this.state.meal.user.image && <img className="is-rounded dev-show-userpic dev-center-userimage" src={this.state.meal.user.image} alt={this.state.meal.user.username}/>}
                  <br />
                </div>
              </Link>
              <div className="column is-two-thirds">
                <p className="title is-4">{this.state.meal.name}</p>
                <p className="subtitle is-5">Cuisine: {this.state.meal.cuisine.name}</p>
                <p className="subtitle is-5">Created: {this.formatDate(this.state.meal.created_at)}</p>
                <hr />
                <p className="subtitle is-5">Description:</p>
                <p>{this.state.meal.description}</p>
                <br />
                <br />
                <div>
                  {Auth.isCurrentUser(this.state.meal.user) && <div className="buttons">
                    <Link className="button" to={`/meals/${this.state.meal.id}/edit`}>Edit</Link>
                    <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
                  </div>}
                </div>
              </div>
            </div>
            <hr />
            <h2 className="title is-3 has-text-centered">Comments</h2>
            <div className="column dev-center-comments box is-half">
              <div>
                {this.state.meal.comments && this.state.meal.comments.map(comment =>
                  <Comment
                    key={comment.id}
                    user={comment.user}
                    createdAt={this.formatDate(comment.created_at)}
                    content={comment.content}
                    id={comment.id}
                    handleCommentDelete={this.handleCommentDelete}
                  />
                )}
                {Auth.isAuthenticated() && <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <textarea
                      name="content"
                      className="textarea"
                      placeholder="Add a comment..."
                      onChange={this.handleChange}
                      value={this.state.formData.content}
                    />
                    <br />
                    <button className="button">Submit</button>
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

export default MealShow
