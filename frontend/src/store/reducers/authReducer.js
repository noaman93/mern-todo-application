import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADER":
    case "SIGN_UP":
      toast.success("Welcome .......", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
    default:
      return state;
  }
};

export default authReducer;
