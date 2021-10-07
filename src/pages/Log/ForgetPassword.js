import React from 'react';
import Logo from '../../asset/logo.png';
import { Link } from 'react-router-dom';
import '../../styles/forgetPassword.css';


  const ForgetPassword = () => {

  return (

    <div className="forgetMdpContainer">
      
      <form id="forgetMdp-form" action="">

      <div className="divImg"><img src={Logo} alt="logo" /></div>

      <div className="email error"></div>

      <div className="divEmail">
      <label htmlFor="email">IDENTIFIANT</label><br />
      <input 
        id="email" 
        type="text" 
        name="email" 
        // value={email} 
        // onChange={e => setEmail(e.target.value)}
        placeholder= "  Identifiant" 
      />
      <br />
      </div>

      <button type="submit">ENVOYER</button>

      <p className="retourConnexion"><Link style={{color: "white", textDecoration: "none"}}  to="log">Revenir à la connexion ?</Link></p>
      </form>


    </div>
  )
}

export default ForgetPassword
