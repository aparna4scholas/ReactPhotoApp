import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Pictures from './components/Pictures.js';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

export default class  extends Component {
  render() {
    return (  
     <Router>
      <div className="App">
       
          <Navbar />
          <Route path="/Home" component={Home} />  
          <Route path="/Login" component={Login} /> 
          <Route path="/Login" component={Login} /> 
          <Login />
          <Signup />
          <Pictures />

           {/*<switch>
          <Route path="/" exact component={Home} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Login" exact exact component={Login} />
          <Route path="/Pictures" exact exact component={Pictures} />
           </switch> */ }
        
        
      </div>
      </Router>
      
    )
  }
}
