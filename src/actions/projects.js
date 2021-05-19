import api from "../utils/api";
import { setAlert } from "./alert";
import {} from "./types";

export const newOreditProject = () => async (dispatch) => {
  try {
  } catch (err) {
    if (err) {
      dispatch(setAlert("Please try again", "danger"));
    }
  }
};
