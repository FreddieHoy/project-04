import React from 'react'
import axios from 'axios'
// import { toast } from 'react-toastify'
import Auth from '../../lib/Auth'

import ReactFilestack from 'filestack-react'

class EditProfile extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: Auth.getUser(),
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ formData: res.data }))
      .then(() => console.log(this.state.formData))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`api/users/${Auth.getPayload().sub}/`, this.state.formData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${Auth.getPayload().sub}`))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  handleUploadImages(result) {
    const formData = {...this.state.formData, image: result.filesUploaded[0].url}
    this.setState({ formData })
    console.log(this.state.formData)
  }

  render() {
    return (
      <section className="section register-background">
        <div className="container">
          <div className="box tableBorder">
            <h2 className="title is-3 has-white-text">Edit Profile</h2>
            <p>We are going to share meals bruv</p>
          </div>
          <div className="box tableBorder">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    name="username"
                    value={this.state.formData.username}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={this.state.formData.email}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
              </div>
              <div>
                <hr />
                <label className="label">Image</label>
                <ReactFilestack
                  mode="transform"
                  apikey={process.env.YOUR_API_KEY}
                  buttonText="Upload Photo"
                  buttonClass="button"
                  name="image"
                  className="upload-image"
                  onSuccess={(result) => this.handleUploadImages(result)}
                  preload={true}
                />
                <br />
                <br />
                <div className="box dev-give-height">
                  {!this.state.formData.image && <p className="has-text-centered">Image</p>}
                  {this.state.formData.image && <img src={this.state.formData.image} />}
                  {this.state.errors.image && <small className="help is-danger">{this.state.errors.image}</small>}
                </div>
              </div>
              <hr />
              <div className="field">
                <label className="label">Bio</label>
                <div className="control">
                  <input
                    className="textarea"
                    name="bio"
                    value={this.state.formData.bio}
                    placeholder="A bit about you! Why you love to cook? what your favourite meal is? ..etc"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.bio && <small className="help is-danger">{this.state.errors.bio}</small>}
              </div>
              <hr />
              <button className="button">Submit</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default EditProfile
