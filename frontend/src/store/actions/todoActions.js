import axios from "axios";
import { url } from "../../api"; //no need name because we have index.js file there

import { toast } from "react-toastify";

//react-thunk allows us to return a function inside our action creater

//action creater for READING the Todos from DB
export const getTodos = (todo) => {
  //return a function with the help of react dunk
  return (dispatch, getState) => {
    axios
      .get(`${url}/todos`)
      .then((todos) => {
        dispatch({
          type: "GET_TODOS",
          todos,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

//action creater for adding a new Todo
export const addTodo = (todo) => {
  //return a function with the help of react dunk
  return (dispatch, getState) => {
    axios
      .post(`${url}/todos`, todo)
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          todo,
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

//action created for UPDATING a Todo
export const updateTodo = (updatedTodo, id) => {
  //return a function with the help of react dunk
  return (dispatch, getState) => {
    axios
      .put(`${url}/todos/${id}`, updatedTodo)
      .then((updatedTodo) => {
        dispatch({
          type: "UPDATE_TODO",
          updatedTodo,
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

//action created for UPDATING isComplete
export const checkTodo = (id) => {
  //return a function with the help of react dunk
  return (dispatch, getState) => {
    axios
      .patch(`${url}/todos/${id}`, {})
      .then((todo) => {
        dispatch({
          type: "CHECK_TODO",
          todo,
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

//action created for DELETING a ToDo
export const deleteTodo = (id) => {
  //return a function with the help of react dunk
  return (dispatch, getState) => {
    axios
      .delete(`${url}/todos/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
          id,
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
