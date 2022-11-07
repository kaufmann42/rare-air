import React from "react";
import { Line } from "react-chartjs-2";

const data = new Array(7).fill(1).map((d, i) => ({
  label: "",
  them: Math.exp(i),
  us: i > 4 ? 40 : Math.exp(i) / 2,
}));

const BGChart = () => {
  return (
    <Line
      className="absolute bottom-0 left-0"
      options={{
        responsive: true,
        scales: {
          xAxis: {
            display: false,
          },
          yAxis: {
            display: false,
          },
        },
      }}
      data={{
        labels: data.map((d) => d.label),
        datasets: [
          {
            data: data.map((d) => d.us),
            tension: 0.4,
            borderWidth: 4,
            animations: {
              radius: {
                duration: 1000,
                easing: "linear",
                from: 1,
                to: 4,
                loop: true,
              },
            },
          },
          {
            tension: 0.4,
            borderWidth: 4,
            data: data.map((d) => d.them),
          },
        ],
      }}
    />
  );
};

export default BGChart;
