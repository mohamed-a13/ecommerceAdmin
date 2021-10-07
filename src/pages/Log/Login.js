import React from 'react';
import axios from 'axios';
import Logo from '../../asset/logo.png';
import { Link } from 'react-router-dom';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import '../../styles/login.css';


const Login = (props) => {

  return (
    <div className="connexionContainer">

      <form id="sign-up-form" action="">

      <div className="divImg"><img src={Logo} alt="logo" /></div>

      <div className="text-center" style={{color: "red", fontSize: "1.5rem"}}>{window.name && window.name}</div>
      <div className="divEmail">
      <label htmlFor="email">IDENTIFIANT</label><br />
      <input 
        id="email" 
        type="text" 
        name="email" 
        value={props.values.email} 
        onChange={props.handleChange} 
        onBlur={props.handleBlur}
        placeholder= "  Identifiant" 
      />
      <div style={{color: "red", fontSize: "1.5rem"}}>{props.touched.email && props.errors.email && props.errors.email}</div>
      <br />
      </div>

      <div className="divPassword">
      <label htmlFor="password">Mot de passe</label><br />
      <input 
        id="password" 
        type="password" 
        name="password" 
        value={props.values.password} 
        onChange={props.handleChange} 
        onBlur={props.handleBlur}
        minLength="8"
        maxLength="8"
        placeholder="  Password"
      />
      <div style={{color: "red", fontSize: "1.5rem"}}>{props.touched.password && props.errors.password && props.errors.password}</div>
      <br />
      </div>

      <button type="submit" onClick={props.handleSubmit}>CONNEXION</button>

      <p className="mdpForgot"><Link style={{color: "white", textDecoration: "none"}}  to="forgetPassword">Mot de passe oublié ?</Link></p>
      </form>
    </div>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    success: false
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
                .email("L'adresse mail n'est pas valide !")
                .max(100)
                .required("L'adresse mail est obligatoire !"),
    password: Yup.string()
                .required('Le mot de passe est obligatoire')
                .min(8, "Le mot de passe doit comporter 8 caractères !")
                .max(8, "Le mot de passe doit comporter 8 caractères !")
                // .matches(
                //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                //   "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial !"
                // )
  }),
  handleSubmit: async (values, {props}) => {

    const {email, password} = values

      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/admin/login`,
        withCredentials: true,
        data: {
          email,
          password
        }
      })
        .then(rep => {
          if(rep.data.errors) {
            if(rep.data.errors.email){
              window.name = rep.data.errors.email
            } else {
              console.log(rep.data.errors.password)
              window.name = rep.data.errors.password
            }
          } else {
            window.location = '/';
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  

})(Login);
