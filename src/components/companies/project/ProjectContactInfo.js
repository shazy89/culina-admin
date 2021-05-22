import React from "react";

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
      <div>
        <div className=" border-bottom background__color-initial-gray">
          <h3 className="padding_lr-1">Contact</h3>
        </div>
        <h3 className="text-center">
          {contactName}&nbsp;&nbsp;&nbsp;{" "}
          <a className="font-size-normal culina--link" href={`mailto:${email}`}>
            {email}
          </a>
        </h3>
        <h4 className="text-center">{contactNumber}</h4>
      </div>
      <div className="border-bottom background__color-initial-gray u-margin-top">
        <h3 className="padding_lr-1">Address </h3>
      </div>
      <div className="text-center">
        <p className="font__size-2">
          {address} / {city}
        </p>
        <p className="font__size-2">
          {state} - {zipCode}
        </p>
      </div>
    </>
  );
};

export default ProjectContactInfo;
