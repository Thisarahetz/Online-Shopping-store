import React from 'react';


function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a href="" className="navbar-brand">Online Store</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#ccsl"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse justify-content-center" id="ccsl">
          <ul className="navbar-nav">
            <li clasNaclassNames="nav-item"><a href="" className="nav-link">Home</a></li>
            <li className="nav-item active"><a href="" class="nav-link">About</a></li>
            <li className="nav-item"><a href="" className="nav-link">Shop</a></li>
            <li className="nav-item"><a href="" className="nav-link">Help</a></li>
          </ul>
        </div>
        <button className="btn btn-sm btn-light">Your Cart</button>
      </nav>

    )
}

export default Navbar;