import React from "react";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import Back from "components/reusable/Back";
import ProjectFormFields from "./ProjectFormFields";
import Alert from "components/layout/Alerts";
const AddProject = ({
  history,
  match: {
    params: { id }
  },
  alerts
}) => {
  const edit = false;
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      {alerts && <Alert />}
      <h1 className="u-margin-top-3 text-center">New Project</h1>
      <ProjectFormFields id={id} history={history} edit={edit} />
    </>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateProps)(AddProject);
