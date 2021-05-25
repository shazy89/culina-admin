import React from "react";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import Back from "components/reusable/Back";
import AddUserFormFields from "./UserFormFields";
import Alert from "components/layout/Alerts";

const AddUser = ({
  match: {
    params: { id }
  },
  location: {
    state: { companyName }
  },
  history,
  alerts
}) => {
  let edit = false;
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      {alerts && <Alert />}
      <h1 className="u-margin-top-3 text-center">New {companyName} user</h1>
      <AddUserFormFields id={id} history={history} edit={edit} />
    </>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateProps)(AddUser);
