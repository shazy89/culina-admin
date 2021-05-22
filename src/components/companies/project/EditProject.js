import React from "react";
import { connect } from "react-redux";
import Back from "components/reusable/Back";
import ProjectFormFields from "../forms/ProjectFormFields";

const EditProject = ({
  history,
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
      <h2 className="text-center">Edit {projectName}</h2>
    </>
  );
};

export default EditProject;
