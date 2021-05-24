import { DASHBOARD_DATA } from "actions/types";

let initialState;

function dashboard(state = { initialState, loading: true }, action) {
  const { type, payload } = action;

  switch (type) {
    case DASHBOARD_DATA:
      return { initialState: payload, loading: false };
    default:
      return state;
  }
}

export default dashboard;
