import React, { useState } from "react";
import HorizontalChart from "components/layout/HorizontalBarChart";
import CircleChart from "components/layout/CircleChart";
import { Row, Col } from "react-bootstrap";
import { chartDataEmployees } from "./handleData";
const DashboardCharts = ({ companies }) => {
  const [employees, setEmployees] = useState("");

  return (
    <Row>
      <Col>
        <HorizontalChart />
      </Col>
      <Col>
        <CircleChart dataEmployees={chartDataEmployees(companies)} />
        <CircleChart dataEmployees={chartDataEmployees(companies)} />
      </Col>
    </Row>
  );
};

export default DashboardCharts;
