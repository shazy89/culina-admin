import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Back from "components/reusable/Back";
import api from "utils/api";
import Spinner from "components/layout/Spinner";
import { Edit } from "react-feather";
import ProjectContact from "./ProjectContact";
import ProjectContractInfo from "./ProjectContactInfo";

const CompanyProject = ({
  history,
  location: {
    state: { companyId, projectId }
  }
}) => {
  const [projectInfo, setProjectInfo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjectInfo = async () => {
      const res = await api.get(`/culina/${companyId}/project/${projectId}`);
      setProjectInfo(res.data);
      setLoading(false);
    };
    fetchProjectInfo();
  }, []);

  return (
    <div className="h-100">
      <div>
        <Back history={history} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-100">
          <>
            {
              <h4 className="user__profile-edit">
                Edit{" "}
                <Link className="culina--link" to="#">
                  {" "}
                  <Edit className="company__edit--button" />{" "}
                </Link>
              </h4>
            }
          </>
          <div className="project__box ">
            <div className="project__info">
              <div className="project__info--box-1">
                <ProjectContact projectInfo={projectInfo} />
              </div>
              <div className="project__info--box-2">
                <ProjectContractInfo projectInfo={projectInfo} />
              </div>
            </div>
            <div className="project__info--box-3"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProject;
