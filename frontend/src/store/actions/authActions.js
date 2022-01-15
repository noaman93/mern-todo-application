import axios from "axios";
import { url } from "../../api"; //no need name because we have index.js file there

import { toast } from "react-toastify";

//react-thunk allows us to return a function inside our action creater

//action creater for SIGNINGUP the User
export const signUp = (user) => {
  //return a function with the help of react dunk
  return (dispatch, getState) => {
    axios
      .post(`${url}/signup`, user)
      .then((token) => {
        localStorage.setItem("token", taken.data);
        dispatch({
          type: "SIGN_UP",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
