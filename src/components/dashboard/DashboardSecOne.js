import React from "react";
import { connect } from "react-redux";
import DashboardBox from "./DashboardBox";
import { Row, Col } from "react-bootstrap";

const DashboardSection1 = () => {
  return (
    <>
      {" "}
      <Row className="u-margin-top-4">
        <Col>
          <DashboardBox boxName="Clients" className="text_color-teal" />
        </Col>
        <Col>
          <DashboardBox boxName="Users" className="text_color-brown" />
        </Col>
        <Col>
          <DashboardBox boxName="Projects" />
        </Col>
      </Row>
    </>
  );
};

export default connect(null, {})(DashboardSection1);
