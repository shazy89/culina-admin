import React, { useState } from "react";
import HorizontalChart from "components/layout/VerticalChartBar";
import CircleChart from "components/layout/CircleChart";
import { Row, Col } from "react-bootstrap";
import { chartDataEmployees } from "./handleData";
const DashboardCharts = ({ companies }) => {
  return (
    <Row>
      <Col>
        <HorizontalChart />
      </Col>
      <Col>
        <CircleChart
          chartData={chartDataEmployees(companies)}
          labels={["<2", "3-4", "4+"]}
          title="Employees"
        />
        <CircleChart
          chartData={chartDataEmployees(companies)}
          labels={["erdo", "semra", "turan"]}
          title="Employees"
        />
      </Col>
    </Row>
  );
};

export default DashboardCharts;
