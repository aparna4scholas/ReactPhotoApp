import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Pictures from './components/Pictures.js';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  
    return (  
     <Router>
      <div className="App">
       
          <Navbar />
          <Switch>
          <Route path="/" component={Home} />  
          <Route path="/Login" component={Login} /> 
          <Route path="/Signup" component={Signup} /> 
          <Route path="/Pictures" component={Pictures} /> 
          </Switch>
        </div>
      </Router>
      
    );
  }





export default App;