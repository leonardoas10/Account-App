import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Objetives from './components/Objetives/Objetives';

const initialState = {
  show: false,
  route: 'signin',
  isSignedIn: false,
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

  // renderBody() {
  //   if (this.state.route === '/') {
  //     return <Dashboard/>
  //   }  
  //   else if (this.state.route === 'signin') {
  //     return (
  //       <div className='components-position'>
  //         <Signin isAuthenticated={this.isAuthenticated}/>
  //       </div>
  //     )

  //   }
  //   else  {
  //     return (
  //       <div className='components-position'>
  //         <Register isAuthenticated={this.isAuthenticated}/>
  //       </div>
  //     )
  //   }
  // }

  isAuthenticated = () => {
    this.setState({ isAuthenticated: true });
  }

  render() {
    return (
      <div onClick={this.onShowClose}>
        <BrowserRouter>
          <Navbar show={this.state.show} route={this.state.route} onShow={this.onShow} onRouteChange={this.onRouteChange} />
          <Switch>
            <Route path="/signin" component={() =>
              <div className='components-position'>
                <Signin isAuthenticated={this.isAuthenticated} />
              </div>} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/register" component={() =>
              <div className='components-position'>
                <Register isAuthenticated={this.isAuthenticated} />
              </div>} />
            <Route path="/objetives" component={Objetives} />
            <Redirect to="/signin" />
          </Switch>

        </BrowserRouter>
        {/* {this.renderBody()} */}
      </div>
    )
  }
}

export default App;