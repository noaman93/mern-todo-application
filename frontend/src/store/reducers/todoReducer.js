import { toast } from "react-toastify";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "ADD_TODO":
      toast.success("A Todo was added .....", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      // console.log(action);
      return [action.todo.data, ...state]; //console.log(action) ==> {type:"ADD_TODO",todo:{data:{name:"Ali",iscomplete:false}}}
    case "UPDATE_TODO":
      toast.success("A Todo was updated .....", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.updatedTodo.data._id
          ? action.updatedTodo.data
          : todo
      );
    case "CHECK_TODO":
      toast.success("The Todo status was changed .....", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "DELETE_TODO":
      toast.success("The Todo was deleted .....", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.filter((todo) => todo._id !== action.id);
    default:
      return state;
  }
};

export default todoReducer;
