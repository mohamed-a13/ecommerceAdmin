import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import Login from './Log/Login';
import {UidContext} from '../AppContext';

const Reglages = () => {

  const uid = useContext(UidContext);

  return (
    <>
      {uid ? (
        <Navbar content="Reglages" />
        ) : (
        <Login />
        )
      }
    </>
  )
}

export default Reglages;
