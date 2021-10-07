import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import Login from './Log/Login';
import {UidContext} from '../AppContext';

const Clients = () => {

  const uid = useContext(UidContext);

  return (
    <>
      {uid ? (
        <Navbar content="Clients" />
        ) : (
        <Login />
        )
      }
    </>
  )
}

export default Clients;
