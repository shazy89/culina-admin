import React from "react";

const ProjectContact = ({ projectInfo: { contactCompanyName } }) => {
  return (
    <div>
      <h3>Client {contactCompanyName}</h3>
    </div>
  );
};

export default ProjectContact;
