import { combineReducers } from "redux";
import company from "./company";
import auth from "./auth";
import alert from "./alert";
import dashboard from "./dashboard";

export default combineReducers({
  company,
  auth,
  alert,
  dashboard
});
