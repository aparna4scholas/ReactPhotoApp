import React, { Component } from 'react'
//import { BrowserRouter as Router,Link} from 'react-router-dom';
//import Route from 'react-router-dom/Route';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Pictures from './components/Pictures.js';

export default class  extends Component {
  render() {
    return (
     
      <div className="App">
       
          <Navbar />
          <Home />
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
      
    )
  }
}
