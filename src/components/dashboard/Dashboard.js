import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardSecOne from "./DashboardSecOne";
import DashboardBox from "./DashboardBox";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = ({ user }) => {
  console.log(user);
  return (
    <Container>
      <h1 className="u-margin-top-3">Welcome Home, {user.name}</h1>
      <DashboardSecOne />
      <div></div>
      <div></div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps)(Dashboard);
