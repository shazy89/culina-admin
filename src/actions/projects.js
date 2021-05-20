import api from "../utils/api";
import { setAlert } from "./alert";
import { EDIT_COMPANY_PROJECT, NEW_COMPANY_PROJECT } from "./types";

export const newOreditProject =
  (formData, edit, history) => async (dispatch) => {
    try {
      if (edit) {
        const res = await api.put(`/culina/${formData.company}/project/edit`);
        dispatch({
          type: EDIT_COMPANY_PROJECT,
          payload: res.data.companyProject
        });
      }
      if (!edit) {
        const res = await api.post(`/culina/${formData.company}/project/new`);
        dispatch({
          type: NEW_COMPANY_PROJECT,
          payload: res.data.companyProject
        });
      }
    } catch (err) {
      if (err) {
        dispatch(setAlert("Please try again", "danger"));
      }
    }
  };
