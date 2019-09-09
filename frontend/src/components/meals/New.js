import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

import ReactFilestack from 'filestack-react'

class MealNew extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedPlotTypes: null,
      formData: {
        created_at: new Date()
      },
      dropdownOpen: false,
      errors: {},
      cuisine: {
        name: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleArrayChange = this.handleArrayChange.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCuisineTypeChange = this.handleCuisineTypeChange.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/meals/', this.state.formData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then((res) => this.props.history.push(`/meals/${res.data._id}/`))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData })
  }

  handleArrayChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value.split(',') }
    this.setState({ formData })
  }

  handleCheckbox(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.checked }
    this.setState({ formData })
  }

  toggleDropdown() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen})
  }

  handleCuisineTypeChange(e) {
    const formData = {...this.state.formData, cuisine: e.target.value }
    this.setState({ formData, dropdownOpen: false })

  }

  handleUploadImages(result) {
    const formData = {...this.state.formData, image: result.filesUploaded[0].url}
    this.setState({ formData })
  }


  render() {
    return (
      <section className="section add-background">
        <div className="container">
          <div className="box tableBorder">
            <h2 className="title is-3 has-text-centered">Add a Meal</h2>
          </div>

          <form className="container box" onSubmit={this.handleSubmit}>
            <div className="field columns">

              <div className="column is-half">
                <h1 className="is-size-2 has-text-centered">Upload Image</h1>
                <hr />
                <ReactFilestack
                  mode="transform"
                  apikey={'AuJmPwiDASVidlT638bKCz'}
                  buttonText="Upload Photo"
                  buttonClass="button"
                  className="upload-image"
                  onSuccess={(result) => this.handleUploadImages(result)}
                  preload={true}
                />
                <br />
                <br />
                <div className="box dev-give-height">
                  {!this.state.formData.image && <p className="has-text-centered">Image</p>}
                  {this.state.formData.image && <img src={this.state.formData.image} />}
                </div>
              </div>

              <div className="column is-half">

                <h1 className="is-size-2 has-text-centered">Info</h1>
                <hr />
                <label className="label has-white-text">Name</label>
                <input
                  className="input"
                  name="name"
                  placeholder="Home made pizza"
                  value={this.state.formData.name || ''}
                  onChange={this.handleChange}
                />
                {this.state.errors.name && <small className="help is-danger">{this.state.errors.name}</small>}
                <br />
                <br />
                <div className="field">
                  <label className="label">Description</label>
                  <input
                    className="textarea"
                    type="text"
                    name="description"
                    placeholder="Your inspiration, Ingredients, Method etc"
                    value={this.state.formData.description || ''}
                    onChange={this.handleChange}
                  />
                  {this.state.errors.description && <small className="help is-danger">{this.state.errors.description}</small>}
                </div>
                <div>
                  <label className="label">Choose Cuisine</label>
                  <div className={`dropdown ${this.state.dropdownOpen ? 'is-active' : ''}`} onClick={this.toggleDropdown}>
                    <div className="dropdown-trigger">
                      <button type="button" className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>↓: {this.state.formData.cuisine}</span>
                        <span className="icon is-small">
                          <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='Italian'>Italian</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='Mexican'>Mexican</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='British'>British</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='French'>French</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='Thai'>Thai</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='Indian'>Indian</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='Japanese'>Japanese</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='Chinese'>Chinese</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='African'>African</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='Greek'>Greek</button>
                        <button type="button" className="dropdown-item" onClick={this.handleCuisineTypeChange} value='Chinese'>Chinese</button>
                      </div>
                    </div>
                    {this.state.errors.cuisine && <small className="help is-danger">{this.state.errors.cuisine}</small>}
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <button className="button">Submit</button>
          </form>

        </div>
      </section>
    )
  }
}

export default MealNew
