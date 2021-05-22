import React from "react";
import { connect } from "react-redux";
import Back from "components/reusable/Back";
import ProjectFormFields from "../forms/ProjectFormFields";
import Alert from "components/layout/Alerts";
const EditProject = ({
  history,
  alerts,
  match: {
    params: { id, projectName }
  },
  location: {
    state: { projectInfo }
  }
}) => {
  const edit = true;
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      {alerts && <Alert />}
      <h2 className="text-center">Edit {projectName}</h2>
      <ProjectFormFields
        id={id}
        edit={edit}
        projectInfo={projectInfo}
        history={history}
      />
    </>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});
export default connect(mapStateProps)(EditProject);
