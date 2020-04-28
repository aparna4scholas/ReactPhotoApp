import React from 'react';


function Login () {
    return (
        <div className="main-div">
        <div className="form-group"> 
        <label for="inputEmail"> Email</label>
        <input className="form-control" type="email" name="Email" placeholder="email "/> </div> ,
       
      <div class="form-group">
         <label for="pwd"> Password</label>
        <input className="form-control" type="password" name="password" placeholder="password "/>
        </div> 
        </div> );

        }
    

export default Login;