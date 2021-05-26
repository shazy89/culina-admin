import React from "react";
import { Doughnut } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 7
        }
      }
    }
  }
};

const DoughnutChart = ({ chartData, labels, title }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: chartData,
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
        borderWidth: 1,
        responsive: true
      }
    ]
  };
  return (
    <>
      <div className="header  u-center-text">
        <div className="links">
          <h4>{title}</h4>
        </div>
      </div>
      <Doughnut
        className="pie_chart"
        data={data}
        width={150}
        height={150}
        options={options}
      />
    </>
  );
};

export default DoughnutChart;
