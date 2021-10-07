import axios from "axios";

export const GET_ADMIN = "GET_ADMIN";

export const getAdmin = (uid) => {
  return (dispatch) => {
    return axios
            .get(`${process.env.REACT_APP_API_URL}api/admin/${uid}`)
            .then(rep => {
              dispatch({ type: GET_ADMIN, payload: rep.data })
            })
            .catch(err => console.log(err));
  }
}