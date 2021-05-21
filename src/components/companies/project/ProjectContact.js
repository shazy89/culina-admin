import React from "react";

const ProjectContact = ({
  projectInfo: {
    contactCompanyName,
    projectName,
    startDate,
    deadLine,
    contract
  }
}) => {
  return (
    <>
      <h2 className="project__info-header text-center">
        {contactCompanyName} &nbsp; {projectName}
      </h2>
      <div className="display-flex u-margin-top">
        <p className="font__size-2 background__color-gray padding--05">
          Start Date - {new Date(startDate).toDateString()}
        </p>
        <p className="font__size-2 background__color-gray-light padding--05">
          Deadline - {new Date(deadLine).toDateString()}
        </p>
      </div>
      <p className="font__size-3 text-center u-margin-top">
        Contract {contract}
      </p>
    </>
  );
};

export default ProjectContact;
