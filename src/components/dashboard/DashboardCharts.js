import React from "react";
import HorizontalChart from "components/layout/HorizontalBarChart";
import CircleChart from "components/layout/CircleChart";
import { Row, Col } from "react-bootstrap";
const DashboardCharts = () => {
  return (
    <Row>
      <Col>
        <HorizontalChart />
      </Col>
      <Col>
        <CircleChart />
        <CircleChart />
      </Col>
    </Row>
  );
};

export default DashboardCharts;
