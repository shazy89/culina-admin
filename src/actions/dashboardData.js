import api from "utils/api";
import { DASHBOARD_DATA } from "./types";

// Fetch all companies
export const getDashboardInfo = () => async (dispatch) => {
  try {
    const res = await api.get("/companies/all");

    dispatch({
      type: DASHBOARD_DATA,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
