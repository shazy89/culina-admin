import React from "react";

const DashboardBox = ({ className, boxName, data }) => {
  console.log(data);
  return (
    <div className="dashboard__box">
      <div>
        <h2 className={`u-center-text font__size-4 ${className} `}>
          {boxName}
        </h2>
      </div>
    </div>
  );
};

export default DashboardBox;
