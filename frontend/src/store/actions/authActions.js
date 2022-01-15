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
      .then((response) => {
        localStorage.setItem("token", response.data);
        dispatch({
          type: "SIGN_UP",
          token: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADER",
        token,
      });
    } else {
      return null;
    }
  };
};
