import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardSecOne from "./DashboardSecOne";
import DashboardBox from "./DashboardBox";
import { Container, Row, Col } from "react-bootstrap";
import { getCompanies } from "actions/companies";
import { getDashboardInfo } from "actions/dashboardData";
import Alert from "components/layout/Alerts";
import Spinner from "components/layout/Spinner";

const Dashboard = ({
  user,
  companies,
  alert,
  loadingCompanies,
  getDashboardInfo,
  getCompanies,
  dashboardData
}) => {
  useEffect(() => {
    getCompanies();
  }, []);

  return loadingCompanies ? (
    <Spinner />
  ) : (
    <Container>
      <h1 className="u-margin-top-3 grey_bottom-border padding--05 ">
        Welcome Home, {user.name}
      </h1>
      {alert && <Alert />}
      {
        //  <DashboardSecOne companies={companies} dashboardData={dashboardData} />
      }
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
    dashboardData: state.dashboard.initialState
  };
};
export default connect(mapStateToProps, { getCompanies })(Dashboard);
