import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {

return(

  
  <nav>
   <h1> Picture Portal </h1>
   <ul className="navbar_link">
       <li> Home</li>
       <li> Login</li>
       <li> Signup</li>
       <li> Pictures</li>
       
   </ul>

  </nav>
 

)
}

export default Navbar;