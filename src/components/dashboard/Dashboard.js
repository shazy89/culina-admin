import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardSecOne from "./DashboardSecOne";
import DashboardBox from "./DashboardBox";
import { Container, Row, Col } from "react-bootstrap";
import { getCompanies } from "actions/companies";
import { getDashboardInfo } from "actions/dashboardData";
import Alert from "components/layout/Alerts";

const Dashboard = ({
  user,
  companies,
  alert,
  loadingCompanies,
  getDashboardInfo,
  companyUsers,
  revenue,
  projects,
  getCompanies
}) => {
  useEffect(() => {
    getCompanies();
  }, []);
  return loadingCompanies ? (
    "LOADING"
  ) : (
    <Container>
      <h1 className="u-margin-top-3 grey_bottom-border padding--05 ">
        Welcome Home, {user.name}
      </h1>
      {alert && <Alert />}
      <DashboardSecOne companies={companies} />
      <div></div>
      <div></div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loadingCompanies: state.company.loading,
    alert: state.alert,
    companies: state.company.companies,
    projects: state.dashboard.projects,
    companyUsers: state.dashboard.companyUsers,
    revenue: state.dashboard.revenue
  };
};
export default connect(mapStateToProps, { getCompanies, getDashboardInfo })(
  Dashboard
);
