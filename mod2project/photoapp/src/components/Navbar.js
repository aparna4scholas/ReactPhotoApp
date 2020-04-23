function  Navbar() {

    const navStyle = {
        color: 'white', 
    }
return (

    <div className="nav-container">
        <ul> 
        
              <Link to="/" style={navStyle}>
                  <li> Home </li>
              </Link> 
            
       </ul>

       



    </div>

)
}

export default Navbar;