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
    e.stopPropagation();
    console.log('aqui', this.state.show)

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
      <div onClick={this.onShowClose}>
        <BrowserRouter>
          <Navbar show={this.state.show} route={this.state.route} onShow={this.onShow} onRouteChange={this.onRouteChange} />
          <Switch>
            <Route path="/signin" exact component={() =>
              <div className='components-position'>
                <Signin isAuthenticated={this.isAuthenticated} />
              </div>} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/register" exact component={() =>
              <div className='components-position'>
                <Register isAuthenticated={this.isAuthenticated} />
              </div>} />
            <Route path="/investment" component={Investment} />
            <Redirect to="/signin" />
          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;
