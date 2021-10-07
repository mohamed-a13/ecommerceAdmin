import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import Login from './Log/Login';
import {UidContext} from '../AppContext';

const Info = () => {

  const uid = useContext(UidContext);

  return (
    <>
      {uid ? (
        <Navbar content="Info" />
        ) : (
        <Login />
        )
      }
    </>
  )
}

export default Info;
