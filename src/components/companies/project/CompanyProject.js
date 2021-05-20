import React, { useState, useEffect } from "react";
import Back from "components/reusable/Back";
import api from "utils/api";
import Spinner from "components/layout/Spinner";
import { Edit } from "react-feather";

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
    <>
      <div>
        <Back history={history} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <Edit />
          </div>
          <h1>HI there</h1>
        </div>
      )}
    </>
  );
};

export default CompanyProject;
