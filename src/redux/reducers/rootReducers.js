import { combineReducers } from "redux";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  blogData: blogReducer,
});

export default rootReducer;