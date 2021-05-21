import React from "react";

const ProjectContact = ({
  projectInfo: { contactCompanyName, projectName, startDate }
}) => {
  return (
    <>
      <h2 className="project__info-header text-center">
        {contactCompanyName} {projectName}
      </h2>
      <div className="display-flex">
        <p className="font__size-2 background__color-gray padding--05">
          Start Date {new Date(startDate).toDateString()}
        </p>
        <p className="font__size-2 background__color-gray-light padding--05">
          Start Date {new Date(startDate).toDateString()}
        </p>
      </div>
    </>
  );
};

export default ProjectContact;
