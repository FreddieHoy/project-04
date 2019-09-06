import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

import 'bulma'
import './style.scss'

class App extends React.Component {
  componentDidMount() {
    axios.get('/api/meals')
      .then(res => console.log(res.data))
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Navbar />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
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
