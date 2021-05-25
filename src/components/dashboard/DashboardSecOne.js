import React from "react";
import { connect } from "react-redux";
import DashboardBox from "./DashboardBox";
import { Row, Col } from "react-bootstrap";

const DashboardSection1 = ({ companies, dashboardData }) => {
  console.log();
  return (
    <>
      {" "}
      <Row className="u-margin-top-4">
        <Col>
          <DashboardBox
            boxName="Clients"
            className="text_color-teal"
            data={companies.length}
          />
        </Col>
        <Col>
          <DashboardBox
            boxName="Users"
            className="text_color-brown"
            data={dashboardData.companyUsers}
          />
        </Col>
        <Col>
          <DashboardBox
            boxName="Projects"
            className="text_color-darkgreen"
            data={dashboardData.projects}
          />
        </Col>
        <Col>
          <DashboardBox boxName="Revenue 2021" data={dashboardData.revenue} />
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
