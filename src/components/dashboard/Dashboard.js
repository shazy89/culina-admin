import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardSecOne from "./DashboardSecOne";
import { Container } from "react-bootstrap";
import { getCompanies } from "actions/companies";
import { getDashboardInfo } from "actions/dashboardData";
import Alert from "components/layout/Alerts";
import Spinner from "components/layout/Spinner";
import DashboardCharts from "./DashboardCharts";
import { byDate } from "./handleData";

const Dashboard = ({
  user,
  companies,
  alert,
  loadingCompanies,
  getDashboardInfo,
  getCompanies,
  dashboardData,
  loadingInfo
}) => {
  useEffect(() => {
    if (!companies.length) {
      getCompanies();
    }
    if (!dashboardData) {
      getDashboardInfo();
    }
  }, [companies.length]);

  return loadingCompanies ? (
    <Spinner />
  ) : (
    <Container>
      <h1 className="u-margin-top-3 grey_bottom-border padding--05 ">
        Welcome Home, {!loadingInfo ? user.name : ""}
      </h1>
      {alert && <Alert />}
      {loadingInfo ? (
        <Spinner />
      ) : (
        <DashboardSecOne companies={companies} dashboardData={dashboardData} />
      )}

      <DashboardCharts companies={companies} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loadingCompanies: state.company.loading,
    alert: state.alert,
    companies: state.company.companies,
    dashboardData: state.dashboard.data,
    loadingInfo: state.dashboard.loading
  };
};
export default connect(mapStateToProps, { getCompanies, getDashboardInfo })(
  Dashboard
);
