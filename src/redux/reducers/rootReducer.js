import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import materialsReducer from "./materialsReducer";

export default combineReducers({
  users: usersReducer,
  materials: materialsReducer,
});
