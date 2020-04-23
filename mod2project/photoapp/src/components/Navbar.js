import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {

return(

  
  <nav>
   <h1> Picture Portal </h1>
   <ul className="navbar_link">
       <Link to='/Home'>
       <li> Home</li>
       </Link>
       <Link>
       <li> Login</li>
       </Link>
       <Link>
       <li> Signup</li>
       </Link>
       <Link>
       <li> Pictures</li>
       </Link>
       
   </ul>

  </nav>
 

)
}

export default Navbar;