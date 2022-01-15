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
    case "SIGN_IN":
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
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast.success("GOOD BYE .......", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
