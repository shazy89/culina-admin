import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardBox from "./DashboardBox";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import PropTypes from "prop-types";

const Dashboard = ({ isAuthenticated }) => {
  return (
    <Container>
      <Row>
        <Col>
          <DashboardBox />
        </Col>
        <Col>
          <DashboardBox />
        </Col>
        <Col>
          <DashboardBox />
        </Col>
      </Row>
      <div></div>
      <div></div>
    </Container>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(mapStateToProps)(Dashboard);
