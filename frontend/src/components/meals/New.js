import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

import ReactFilestack from 'filestack-react'

class MealNew extends React.Component {

  constructor() {
    super()
    this.state = {
      cuisines: [],
      formData: {},
      dropdownOpen: false,
      errors: {},
      displayCuisineName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleArrayChange = this.handleArrayChange.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)

  }

  componentDidMount() {
    axios.get('/api/cuisines/')
      .then(res => this.setState({ cuisines: res.data }))
      .then(() => console.log(this.state))
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/meals/', this.state.formData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then((res) => this.props.history.push(`/meals/${res.data.id}/`))
      .catch(err => this.setState({ errors: err.response.data }))

  }

  handleChange(e) {
    let displayCuisineName = ''
    if (e.target.name === 'cuisine') {
      displayCuisineName = (this.state.cuisines.find(cuisine => cuisine.id === +e.target.value)).name
    }
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData, displayCuisineName })
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

  handleUploadImages(result) {
    const formData = {...this.state.formData, image: result.filesUploaded[0].url}
    this.setState({ formData })
  }


  render() {

    if(!this.state.cuisines) return <h2 className="title is-2">Loading ...</h2>
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
                  apikey={process.env.YOUR_API_KEY}
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
                        <span>↓: {this.state.displayCuisineName}</span>
                        <span className="icon is-small">
                          <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">

                        {this.state.cuisines.map(cuisine =>
                          <button
                            key={cuisine.id}
                            className="dropdown-item"
                            type="button"
                            name="cuisine"
                            onClick={this.handleChange}
                            value={cuisine.id}
                          >
                            {cuisine.name}
                          </button>
                        )}

                        <button type="button" className="dropdown-item" onClick={this.handlePlotTypeChange} value='Allotment'>Allotment</button>
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
