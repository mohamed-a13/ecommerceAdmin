import React from 'react';
import {NavLink}  from 'react-router-dom';
import '../../styles/navbar.css';
import '../javascript/navbar';
import axios from 'axios';
import cookie from "js-cookie";

const Navbar = (props) => {

  const removeCookie = (key) => {
    if(window !== "undefined") {
      cookie.remove(key, {expires: 1})
    }
  }

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/admin/logout`,
      withCredentials: true
    })
      .then((rep) => {
        console.log(rep)
        removeCookie('jwt')
      })
      .catch(err => console.log(err))

      window.location = "/login";
  }


  return (
    <div id="body" className="body">

      <header className="header" id="header">
          <div className="header_toggle"> <i className='bx fas fa-bars' id="header-toggle"></i> </div>
      </header>

      <div className="l-navbar" id="nav-bar">

          <nav className="nav">

              <div> 
                <NavLink exact to="/" className="nav_logo"> 
                  <i className='bx fas fa-home nav_logo-icon'></i> 
                  <span className="nav_logo-name">
                    NEW<span style={{color: "#48fb47", fontSize: "1.5rem"}}>S</span>PORTTEAM
                  </span>
                </NavLink>

                <div className="nav_list"> 
                  <NavLink exact to="/commande" className="nav_link"> 
                    <i className='bx fas fa-handshake nav_icon'></i> 
                    <span className="nav_name">Commande</span>
                  </NavLink> 

                  <NavLink exact to="/info" className="nav_link"> 
                    <i className='bx fas fa-info-circle nav_icon'></i> 
                    <span className="nav_name">Informations</span> 
                  </NavLink> 
                  
                  <NavLink exact to="/pub" className="nav_link"> 
                    <i className='bx fas fa-ad nav_icon'></i> 
                    <span className="nav_name">Pub</span> 
                  </NavLink> 
                  
                  <NavLink exact to="/catalogue" className="nav_link"> 
                    <i className='bx fas fa-book nav_icon'></i> 
                    <span className="nav_name">Catalogue</span> 
                  </NavLink> 
                  
                  <NavLink exact to="/reglages" className="nav_link"> 
                    <i className='bx fas fa-cogs nav_icon'></i> 
                    <span className="nav_name">Reglages</span> 
                  </NavLink> 
                  
                  <NavLink exact to="/clients" className="nav_link"> 
                    <i className='bx fas fa-users nav_icon'></i> 
                    <span className="nav_name">Clients</span> 
                  </NavLink> 
                </div>

              </div> 
              
              <NavLink onClick={logout} exact to="/login" className="nav_link"> 
                <i className='bx fas fa-sign-out-alt nav_icon'></i> 
                <span className="nav_name">Deconnexion</span> 
              </NavLink>
          </nav>
      </div>
      
      <div className="height-100 bg-light">
        <h4>{props.content}</h4>
    </div>
    
  </div>
  )
}

export default Navbar;
