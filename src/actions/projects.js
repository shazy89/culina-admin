import api from "../utils/api";
import { setAlert } from "./alert";
import { EDIT_COMPANY_PROJECT, NEW_COMPANY_PROJECT } from "./types";

export const newOreditProject =
  (formData, edit, history) => async (dispatch) => {
    try {
      if (edit) {
        const res = await api.put(`/culina/${formData.company}/project/edit`);
        dispatch({
          type: EDIT_COMPANY_USER,
          payload: res.data.company
        });
      }
      if (!edit) {
        const res = await api.post(`/culina/${formData.company}/project/new`);
      }
    } catch (err) {
      if (err) {
        dispatch(setAlert("Please try again", "danger"));
      }
    }
  };
