import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Investment from './components/Investment/Investment';


const initialState = {
  show: false,
  route: 'signin',
  isAuthenticated: true
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onShow = (e) => {
    console.log('aqui', this.state.show)
    e.stopPropagation();
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      }
    });
  }

  onShowClose = () => {
    this.setState({ show: false })
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  isAuthenticated = () => {
    this.setState({ isAuthenticated: true });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar show={this.state.show} route={this.state.route} onShow={this.onShow} onRouteChange={this.onRouteChange} />
          <Switch>

            <Route path="/signin" component={(props) =>
              <div className='components-position'>
                <Signin {...props} isAuthenticated={this.isAuthenticated} />
              </div>} />

            <Route path="/" exact component={Dashboard} />
            <Route path="/register" component={(props) =>
              <div className='components-position'>
                <Register {...props} isAuthenticated={this.isAuthenticated} />
              </div>} />
            <Route path="/investments/:id" component={Investment} />
            {/* <Redirect to="/signin" /> */}
          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;
