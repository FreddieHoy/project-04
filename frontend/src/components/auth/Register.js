import React from 'react'
import axios from 'axios'
// import { toast } from 'react-toastify'

import ReactFilestack from 'filestack-react'
import { Link } from 'react-router-dom'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {
        meals: []
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    console.log(this.state.formData)
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('reading this?')
    axios.post('/api/register/', this.state.formData)
      .then(res => {
        console.log(res)
        this.props.history.push('/login/')
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }

  handleUploadImages(result) {
    const formData = {...this.state.formData, image: result.filesUploaded[0].url}
    this.setState({ formData })
  }

  render() {
    return (
      <section className="section register-background">
        <div className="container">
          <div className="box tableBorder">
            <h2 className="title is-3 has-white-text">Register</h2>
            <p>Welcome!</p>
          </div>
          <div className="box tableBorder">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input is-rounded"
                    name="username"
                    placeholder="eg: Chef Dave"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input is-rounded"
                    type="email"
                    name="email"
                    placeholder="eg: cook@yeschef.co"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input is-rounded"
                    type="password"
                    name="password"
                    placeholder="eg: ••••••••"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className="input is-rounded"
                    type="password"
                    name="password_confirmation"
                    placeholder="eg: ••••••••"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.password_confirmation && <small className="help is-danger">{this.state.errors.password_confirmation}</small>}
              </div>
              <div>
                <hr />
                <label className="label">Image</label>
                <ReactFilestack
                  mode="transform"
                  apikey={process.env.YOUR_API_KEY}
                  buttonText="Upload Photo"
                  buttonClass="button"
                  className="upload-image is-rounded"
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
                    className="textarea is-rounded"
                    name="bio"
                    placeholder="A bit about you! Why you love to cook? what your favourite meal is? ..etc"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.bio && <small className="help is-danger">{this.state.errors.bio}</small>}
              </div>
              <hr />
              <button className="button is-rounded">Submit</button>
              <br />
              <br />
              <div>Already registered? Login in Here:
                <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
