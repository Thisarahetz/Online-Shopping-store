import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(){
    return(
      
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a href="" className="navbar-brand">Online Store</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#ccsl"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse justify-content-center" id="ccsl">
          <ul className="navbar-nav">
            <li clasNaclassNames="nav-item"><Link href="" className="nav-link">Home</Link></li>
            <li className="nav-item active"><Link to="/about" class="nav-link">About</Link></li>
            <li className="nav-item"><Link href="" className="nav-link">Shop</Link></li>
            <li className="nav-item"><Link href="" className="nav-link">Help</Link></li>
          </ul>
        </div>
        <button className="btn btn-sm btn-light">Your Cart</button>
      </nav>

    )
}

export default Navbar;