import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["3+", "5+", "10+"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 4],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }
  ]
};
const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 70
        }
      }
    }
  }
};

const DoughnutChart = () => (
  <>
    <div className="header u-margin-top-small u-center-text">
      <div className="links">
        <h4>Employees </h4>
      </div>
    </div>
    <Doughnut
      className="pie_chart"
      data={data}
      width={200}
      height={200}
      options={options}
    />
  </>
);

export default DoughnutChart;
