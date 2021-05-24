import React from "react";
import { connect } from "react-redux";
import DashboardBox from "./DashboardBox";
import { Row, Col } from "react-bootstrap";

const DashboardSection1 = ({ companies }) => {
  return (
    <>
      {" "}
      <Row className="u-margin-top-4">
        <Col>
          <DashboardBox
            boxName="Clients"
            className="text_color-teal"
            data={companies}
          />
        </Col>
        <Col>
          <DashboardBox
            boxName="Users"
            className="text_color-brown"
            data={companies}
          />
        </Col>
        <Col>
          <DashboardBox boxName="Projects" data={companies} />
        </Col>
      </Row>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    companies: state.company.companies
  };
};
export default connect(mapStateToProps)(DashboardSection1);
