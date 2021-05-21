import React from "react";
import PropTypes from "prop-types";

const ProjectContactInfo = ({
  projectInfo: {
    contactName,
    contactNumber,
    email,
    address,
    city,
    state,
    zipCode
  }
}) => {
  return (
    <>
      <div className="text-center border-bottom">
        <div className="border-bottom background__color-initial-gray">
          <h3>Contact</h3>
        </div>
        <h3>
          {contactName}&nbsp;&nbsp;&nbsp;{email}
        </h3>
        <h4>{contactNumber}</h4>
      </div>
      <div className="text-center u-margin-top-1">
        <h3>Address </h3>
      </div>
    </>
  );
};

ProjectContactInfo.propTypes = {
  projectInfo: PropTypes.object.isRequired
};

export default ProjectContactInfo;
