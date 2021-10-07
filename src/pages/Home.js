import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import Login from './Log/Login';
import {UidContext} from '../AppContext';


const Home = () => {

  const uid = useContext(UidContext);

  return (
    <>
      {uid ? (
        <Navbar content="Je suis connecter" />
        ) : (
        <Login />
        )
      }
    </>
  )
}

export default Home
