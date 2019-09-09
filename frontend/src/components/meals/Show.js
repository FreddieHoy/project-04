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
        user: Auth.getUser().username,
        timeNow: new Date()
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
      // .then(() => console.log(this.state.meal))
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
      .then(res => this.setState({ meal: res.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">

          {!this.state.meal && <h2 className="title is-2">Loading...</h2>}

          {this.state.meal && <div className="">
            <header>
              <h1 className="title has-text-centered is-2">{this.state.meal.name}</h1>
            </header>

            <hr />
            <div className="is-half is-centered">
              <img className="dev-Show-Image" src={this.state.meal.image} alt={this.state.meal.name}/>
            </div>
            <hr />

            <div className="columns">
              <div className="image column is-one-third profile-pic">
                <div className="is-rounded dev-show-userpic">
                  {this.state.meal.user.image && <img className="is-rounded dev-show-userpic" src={this.state.meal.user.image} alt={this.state.meal.user.username}/>}
                </div>
                <br />
                <div>
                  <p>Username: {this.state.meal.user.username}</p>
                </div>
              </div>

              <div className="column is-two-thirds">
                <p>{this.state.meal.name}</p>
                <br />
                <p>Cuisine: {this.state.meal.cuisine.name}</p>
                <br />
                <p>{this.state.meal.description}</p>
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
            <h2 className="title is-3 has-white-text">Comments</h2>
            <div className="column box is-full">
              <div className="">
                {this.state.meal.comments.map(comment =>
                  <Comment
                    key={comment.id}
                    user={comment.user}
                    createdAt={comment.created_at}
                    content={comment.content}
                    id={comment.id}
                    handleCommentDelete={this.handleCommentDelete}
                  />
                )}
                {Auth.isAuthenticated() && <form onSubmit={this.handleSubmit}>
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
                              <br />
                              <button className="button">Submit</button>
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

export default MealShow
