import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import EditProfile from './components/auth/EditProfile'
import Login from './components/auth/Login'
import About from './components/pages/About'
import Newsfeed from './components/pages/Newsfeed'
import New from './components/meals/New'
import MealEdit from './components/meals/Edit'
import Profile from './components/pages/Profile'
import MealShow from './components/meals/Show'
// import Footer from './components/common/Footer'

import '@fortawesome/fontawesome-free/js/all.js'
import 'bulma'
import './style.scss'

class App extends React.Component {
  componentDidMount() {
    axios.get('/api/meals/')
    // .then(res => console.log(res.data))
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Navbar />
          <Switch>
            <Route path="/meals/:id/edit" component={MealEdit} />
            <Route path="/users/:id/edit" component={EditProfile} />
            <Route path="/meals/new" component={New} />
            <Route path="/meals/:id" component={MealShow} />
            <Route path="/users/:id" component={Profile} />
            <Route path="/newsfeed" component={Newsfeed} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
