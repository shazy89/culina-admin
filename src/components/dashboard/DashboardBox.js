import React from "react";
import { Link } from "react-router-dom";

const DashboardBox = ({ className, boxName, data }) => {
  return (
    <div className="dashboard__box">
      <div>
        <h2 className={`u-center-text font__size-4 ${className} `}>
          {boxName}
        </h2>

        <h3 className={`u-center-text font__size-5 u-margin-top-3`}>{data}</h3>
      </div>
    </div>
  );
};

export default DashboardBox;
