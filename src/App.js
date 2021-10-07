import React, { useState, useEffect } from 'react';
import Routes from './routes';
import { UidContext } from './AppContext';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAdmin } from './actions/adminActions';


function App() {

  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {

    const fetchToken = async () => {

      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
        .then(rep => {
          setUid(rep.data)
        })
        .catch(err => {
          console.log('No token: ' + err)
        })
    }
    fetchToken();
    if(uid) dispatch(getAdmin(uid))
  }, [uid])

  return (
      <UidContext.Provider value={uid}>
        <Routes />
      </UidContext.Provider>
  );
}

export default App;
