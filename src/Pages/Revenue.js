import React from "react";
import "./Revenue.css";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Pie } from "react-chartjs-2";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const Revenue = () => {
  const data = [
    { name: "May", commission: 30, revenue: 50 },
    { name: "Jun", commission: 40, revenue: 60 },
    { name: "Jul", commission: 20, revenue: 90 },
    { name: "Aug", commission: 50, revenue: 80 },
    { name: "Sep", commission: 30, revenue: 60 },
    { name: "Oct", commission: 70, revenue: 90 },
    { name: "Nov", commission: 60, revenue: 70 },
    { name: "Dec", commission: 40, revenue: 60 },
    { name: "Jan", commission: 80, revenue: 90 },
    { name: "Feb", commission: 50, revenue: 70 },
    { name: "Mar", commission: 20, revenue: 40 },
    { name: "Apr", commission: 90, revenue: 100 },
  ];

  const pieData = {
    labels: [
      "Online Consultations",
      "Online Consultations",
      "Online Consultations",
      "Online Consultations",
    ],
    datasets: [
      {
        label: "Revenue Distribution",
        data: [30, 20, 40, 10],
        backgroundColor: ["#6F58E9", "#2DDAC1", "#36A2EB", "#94D13D"],
        hoverBackgroundColor: ["#4BC0C0", "#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  const options = {
    legend: {
      display: false, // We hide the default legend
    },
  };

  const [selectedOption, setSelectedOption] = useState("");

  const [timespan, setTimespan] = useState("Monthly");
  const [service, setService] = useState("All Services");

  const [pieTimespan, setPieTimespan] = useState("Weekly");

  const handlePieTimespanChange = (event) => {
    setPieTimespan(event.target.value);
    // Logic to update data based on the selected timespan can be added here
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleExport = () => {
    if (selectedOption) {
      alert(`You chose to export: ${selectedOption}`);
      // Add your export logic here
    } else {
      alert("Please select an option to export.");
    }
  };

  return (
    <main className="revenue-container">
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <h2>Revenue</h2>
        <div className="linear-chart-card">
          {/* Liner revenue chart */}
          <div
            style={{
              border: "1px solid #D2D2D2",
              backgroundColor: "white",
              height: "230px",
              width: "100%",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Income Accumulation Graph
              </span>
              <div style={{ display: "flex", gap: "10px" }}>
                <select
                  value={timespan}
                  onChange={(e) => setTimespan(e.target.value)}
                  style={dropdownStyle}
                >
                  <option value="Monthly">Select Timespan</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Quarterly">Quarterly</option>
                </select>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  style={dropdownStyle}
                >
                  <option value="All Services">Select Service</option>
                  <option value="Service 1">Service 1</option>
                  <option value="Service 2">Service 2</option>
                  <option value="Service 3">Service 3</option>
                </select>
              </div>
            </div>
            <ResponsiveContainer
              style={{ marginTop: "10px" }}
              width="100%"
              height={200}
            >
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend verticalAlign="bottom" />
                <Line
                  type="monotone"
                  dataKey="commission"
                  stroke="#3366cc"
                  name="Our Commission"
                  dot={false}
                  legendType="circle"
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#ffcc00"
                  name="Total Revenue"
                  dot={false}
                  legendType="circle"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* revenue line chart end */}

          <div className="revenue-amount">
            <div className="revenue-card">
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "12px",
                  width: "30%",
                  height: "30%",
                  backgroundColor: "#815CFB",
                  margin: "8px 0px 8px",
                }}
              ></div>
              <span style={{ fontSize: "12px", marginBottom: "7px" }}>
                Total Revenue
              </span>
              <span style={{ fontWeight: "bold" }}>₹ 2,00,000</span>
            </div>

            <div className="revenue-card">
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "12px",
                  width: "30%",
                  height: "30%",
                  backgroundColor: "#815CFB",
                  margin: "8px 0px 8px",
                }}
              ></div>
              <span style={{ fontSize: "12px", marginBottom: "7px" }}>
                Total Commission
              </span>
              <span style={{ fontWeight: "bold" }}>₹ 1,50,000</span>
            </div>

            <div className="revenue-card">
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "12px",
                  width: "30%",
                  height: "30%",
                  backgroundColor: "#815CFB",
                  margin: "8px 0px 5px",
                }}
              ></div>
              <span style={{ fontSize: "12px", marginBottom: "7px" }}>
                Revenue from Online Consultation
              </span>
              <span style={{ fontWeight: "bold", marginBottom: "3px" }}>
                ₹ 10,000
              </span>
            </div>

            <div className="revenue-card">
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "12px",
                  width: "30%",
                  height: "30%",
                  backgroundColor: "#815CFB",
                  margin: "8px 0px 5px",
                }}
              ></div>
              <span style={{ fontSize: "12px", marginBottom: "7px" }}>
                Return of Investment (ROI)
              </span>
              <span style={{ fontWeight: "bold", marginBottom: "3px" }}>
                ₹ 1,50,000
              </span>
            </div>
          </div>

          <div>
            <div style={styles.container}>
              <div style={styles.iconContainer}>
                <i style={styles.icon}>
                  <FaFileExport />
                </i>
              </div>
              <select
                style={styles.select}
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="select">Select the Format</option>
                <option value="current">Export the Current Data</option>
                <option value="whole">Export the Whole Data</option>
              </select>
              <button style={styles.button} onClick={handleExport}>
                Export Data
              </button>
            </div>
          </div>
        </div>

        <div className="revenue-distribution">
          <div
            style={{
              border: "1px solid #D2D2D2",
              borderRadius: "15px",
              backgroundColor: "white",
              width: "340px",
              height: "300px",
              boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ width: "92%", padding: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  marginRight: "30px",
                  marginTop: "-10px",
                }}
              >
                <h4>Revenue Distribution By Source</h4>
                <select
                  style={{
                    width: "40%",
                    marginTop: "-10px",
                    padding: "4px 4px",
                    borderRadius: "5px",
                    border: "1px solid #D2D2D2",
                    fontSize: "11px",
                  }}
                  value={pieTimespan}
                  onChange={handlePieTimespanChange}
                >
                  <option value="Weekly">Select Timespan</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>

              <div
                style={{
                  width: "150px",
                  marginLeft: "85px",
                  marginTop: "15px",
                  marginBottom: "-10px",
                }}
              >
                <Pie data={pieData} options={options} />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginTop: "20px",
                  justifyItems: "center",
                }}
              >
                {pieData.labels.map((label, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "15px",
                        height: "15px",
                        backgroundColor:
                          pieData.datasets[0].backgroundColor[index],
                        borderRadius: "50%",
                        marginLeft: "10px",
                      }}
                    ></span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="average-amount">
              <span>Average Revenue Per Patient</span>
              <span
                style={{
                  fontSize: "20px",
                  backgroundColor: "#eeeded",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              >
                ₹ 565
              </span>
            </div>

            <div className="average-amount" style={{ marginTop: "12px" }}>
              <span>Average Revenue Per Patient</span>
              <span
                style={{
                  fontSize: "20px",
                  backgroundColor: "#eeeded",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              >
                ₹ 565
              </span>
            </div>

            <div className="average-amount" style={{ marginTop: "12px" }}>
              <span>Average Revenue Per TDM Machine</span>
              <span
                style={{
                  fontSize: "20px",
                  backgroundColor: "#eeeded",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              >
                ₹ 5065
              </span>
            </div>

            <div
              className="compare-charts"
              style={{ width: "150px", marginLeft: "470px" }}
            >
              <a href="" style={{ color: "black" }}>
                <FaArrowRightArrowLeft className="compare-chart-icon" /> compare
                charts{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const dropdownStyle = {
  padding: "5px",
  fontSize: "12px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  outline: "none",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #DFDFDF",
    borderRadius: "10px",
    width: "150px",
    backgroundColor: "white",
    marginLeft: "40px",
    height: "215px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  iconContainer: {
    marginBottom: "10px",
    padding: " 25px 45px 15px 45px",
    borderRadius: "15px",
    backgroundColor: "rgb(240, 240, 240)",
    height: "70px",
  },
  icon: {
    fontSize: "55px",
    color: "gray",
  },
  select: {
    marginBottom: "10px",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#26323C",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Revenue;
