import React, { Component } from 'react'
import { BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Navbar from 'Navbar.js';

export default class  extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App_h">
          <Navbar />
           <switch>
          <Route path="/" exact component={Home} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Login" exact exact component={Login} />
          <Route path="/Pictures" exact exact component={Pictures} />
          </switch> 
        </header>
        
      </div>
      </Router> 
    )
  }
}
