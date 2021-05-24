import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardSecOne from "./DashboardSecOne";
import DashboardBox from "./DashboardBox";
import { Container, Row, Col } from "react-bootstrap";
import { getCompanies } from "actions/companies";
import Alert from "components/layout/Alerts";

const Dashboard = ({ user, companies, alert, loading }) => {
  useEffect(() => {
    if (!companies.length) {
      getCompanies();
    }
  }, [getCompanies, companies]);
  return (
    <Container>
      <h1 className="u-margin-top-3">Welcome Home, {user.name}</h1>
      {alert && <Alert />}
      <DashboardSecOne />
      <div></div>
      <div></div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loading: state.company.loading,
    alert: state.alert,
    companies: state.company.companies
  };
};
export default connect(mapStateToProps, { getCompanies })(Dashboard);
