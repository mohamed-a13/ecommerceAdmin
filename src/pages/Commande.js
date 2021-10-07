import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import Login from './Log/Login';
import {UidContext} from '../AppContext';

const Commande = () => {

  const uid = useContext(UidContext);

  return (
    <>
      {uid ? (
        <Navbar content="Commande" />
        ) : (
        <Login />
        )
      }
    </>
  )
}

export default Commande;
