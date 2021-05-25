import { DASHBOARD_DATA } from "actions/types";

function dashboard(state = { data: "", loading: true }, action) {
  const { type, payload } = action;

  switch (type) {
    case DASHBOARD_DATA:
      console.log(payload);
      return { ...state, data: payload, loading: false };
    default:
      return state;
  }
}

export default dashboard;
