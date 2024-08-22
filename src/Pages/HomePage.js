import React, { useState } from "react";
import "./HomePage.css";
import { BsFillFilePersonFill } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa6";

const HomePage = () => {
  const data = [
    {
      name: "May",
      "Our Commission": 10,
      "Total Revenue": 12,
    },
    {
      name: "Jun",
      "Our Commission": 20,
      "Total Revenue": 30,
    },
    {
      name: "Jul",
      "Our Commission": 45,
      "Total Revenue": 56,
    },
    {
      name: "Aug",
      "Our Commission": 45,
      "Total Revenue": 60,
    },
    {
      name: "Sep",
      "Our Commission": 55,
      "Total Revenue": 65,
    },
    {
      name: "Oct",
      "Our Commission": 66,
      "Total Revenue": 80,
    },
    {
      name: "Nov",
      "Our Commission": 78,
      "Total Revenue": 87,
    },
    {
      name: "Dec",
      "Our Commission": 86,
      "Total Revenue": 88,
    },
    {
      name: "Jan",
      "Our Commission": 66,
      "Total Revenue": 76,
    },
    {
      name: "Feb",
      "Our Commission": 34,
      "Total Revenue": 45,
    },
    {
      name: "Mar",
      "Our Commission": 33,
      "Total Revenue": 43,
    },
    {
      name: "Apr",
      "Our Commission": 90,
      "Total Revenue": 100,
    },
  ];

  const revenueData = [
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

  const timelineData = [
    {
      name: "This Year",
      totalConsultations: 40000,
      cancelled: 10000,
      completed: 30000,
    },
  ];

  const [timespan, setTimespan] = useState("Monthly");
  const [service, setService] = useState("All Services");

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <BsFillFilePersonFill
              className="card_icon"
              style={{ color: "CornflowerBlue" }}
            />
            <h3>3540</h3>
          </div>
          <h6>Total Patients</h6>
        </div>
        <div className="card">
          <div className="card-inner">
            <VscPreview className="card_icon" style={{ color: "brown" }} />
            <h3>3540</h3>
          </div>
          <h6>Total TDMs</h6>
        </div>

        <div className="card">
          <div className="card-inner">
            <FaStethoscope className="card_icon" style={{ color: "green" }} />
            <h3>3540</h3>
          </div>
          <h6>Total Doctors</h6>
        </div>

        <div className="card">
          <div className="card-inner">
            <MdOutlineMedicalServices
              className="card_icon"
              style={{ color: "DarkBlue" }}
            />
            <h3>3540</h3>
          </div>
          <h6>Total Consultations</h6>
        </div>

        <div className="card">
          <div className="card-inner">
            <FaStethoscope className="card_icon" style={{ color: "red" }} />
            <h3>3540</h3>
          </div>
          <h6>Active TDMs</h6>
        </div>

        <div className="card">
          <div className="card-inner">
            <VscPreview className="card_icon" style={{ color: "skyblue" }} />
            <h3>3540</h3>
          </div>
          <h6>Active Doctors</h6>
        </div>
      </div>

      <div className="charts">
        <div className="charts-inner-one">
          <div style={{ display: "flex", marginBottom: "10px", gap: "15px" }}>
            <h5
              style={{
                fontSize: "14px",
                marginLeft: "-20px",
                marginTop: "12px",
              }}
            >
              {" "}
              Doctor Acquisition
            </h5>
            <div style={{ marginTop: "10px" }}>
              <button
                style={{
                  height: "25px",
                  padding: "0px 10px",
                  marginRight: "6px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "5px",
                  backgroundColor: "#f0f0f0",
                  fontSize: "10px",
                }}
              >
                This Year
              </button>
              <button
                style={{
                  height: "25px",
                  padding: "0px 10px",
                  marginRight: "6px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  fontSize: "10px",
                }}
              >
                This Month
              </button>
              <button
                style={{
                  height: "25px",
                  padding: "0px 10px",
                  marginRight: "6px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  fontSize: "10px",
                }}
              >
                This Week
              </button>
              <button
                style={{
                  height: "25px",
                  padding: "0px 10px",
                  marginRight: "6px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  fontSize: "10px",
                }}
              >
                Today
              </button>
              <button
                style={{
                  height: "25px",
                  padding: "0px 10px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  fontSize: "10px",
                }}
              >
                Custom
              </button>
            </div>
          </div>
          <ResponsiveContainer
            style={{ marginTop: "-10px" }}
            width="100%"
            height={180}
          >
            <LineChart
              fontSize={12}
              data={data}
              margin={{
                top: 5,
                right: 40,
                left: -10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                fontSize={10}
                scale="linear"
                type="number"
                allowDataOverflow={false}
                tickCount={11}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Total Revenue"
                stroke="Lime"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="charts-inner-two">
          <div
            style={{
              backgroundColor: "white",
              height: "230px",
              width: "92%",
              padding: "20px",
              border: "1px solid #e0e0e0",
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
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
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
              <LineChart
                data={revenueData}
                fontSize={12}
                margin={{
                  top: 5,
                  right: 40,
                  left: -10,
                  bottom: 5,
                }}
              >
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
        </div>
      </div>

      {/*  for lower portion of main */}

      <div className="updated-data">
        <div
          style={{
            height: "288px",
            padding: "12px",
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h5
            style={{
              textAlign: "center",
              marginTop: 2,
              marginLeft: -2,
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Consultation Timeliness: Completed Vs. Cancelled
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <button
              style={{
                padding: "8px 12px",
                marginRight: "8px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                backgroundColor: "#f0f0f0",
                fontSize: "11px",
              }}
            >
              This Year
            </button>
            <button
              style={{
                padding: "8px 12px",
                marginRight: "8px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                backgroundColor: "#fff",
              }}
            >
              This Month
            </button>
            <button
              style={{
                padding: "8px 12px",
                marginRight: "8px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                backgroundColor: "#fff",
              }}
            >
              This Week
            </button>
            <button
              style={{
                padding: "8px 12px",
                marginRight: "8px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                backgroundColor: "#fff",
              }}
            >
              Today
            </button>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                backgroundColor: "#fff",
              }}
            >
              Custom
            </button>
          </div>
          <ResponsiveContainer width="100%" height={190}>
            <BarChart
              data={timelineData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 5,
              }}
              barCategoryGap="15%"
              barGap={20}
            >
              <CartesianGrid strokeDasharray="" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend
                wrapperStyle={{ bottom: 10, fontSize: "12px", left: 15 }}
                iconSize={10}
              />
              <Bar
                dataKey="totalConsultations"
                fill="#0052cc"
                name="Total Consultations"
                legendType="circle"
              />
              <Bar
                dataKey="cancelled"
                fill="#ff6f61"
                name="Cancelled"
                legendType="circle"
              />
              <Bar
                dataKey="completed"
                fill="#8bc34a"
                name="Completed"
                legendType="circle"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="insights-card" style={{ marginBottom: 4 }}>
          <span className="highlights" style={{ marginTop: 15 }}>
            Consultation Insights
          </span>
          <p>
            {" "}
            <span
              className="highlights"
              style={{
                color: "MidnightBlue",
                backgroundColor: "MediumPurple",
                padding: 5,
                borderRadius: 4,
                marginRight: 10,
              }}
            >
              124
            </span>{" "}
            <span style={{ marginRight: 39 }}>Daily Consultation</span>{" "}
          </p>
          <p>
            {" "}
            <span
              className="highlights"
              style={{
                color: "Maroon",
                backgroundColor: "SandyBrown",
                padding: 5,
                borderRadius: 4,
                marginRight: 10,
              }}
            >
              12:00
            </span>{" "}
            <span style={{ marginRight: 3 }}>Consultation Duration</span>{" "}
          </p>
          <p>
            {" "}
            <span
              className="highlights"
              style={{
                color: "green",
                backgroundColor: "PaleGreen",
                padding: 5,
                borderRadius: 4,
                marginRight: 10,
              }}
            >
              &#8377;300
            </span>{" "}
            <span style={{ marginRight: 10 }}>Avg Consultation Fee</span>{" "}
          </p>
          <p>
            {" "}
            <span
              className="highlights"
              style={{
                color: "blue",
                backgroundColor: "LightSkyBlue",
                padding: 5,
                borderRadius: 4,
                marginRight: 10,
              }}
            >
              &#8377;145
            </span>{" "}
            <span style={{ marginRight: 5 }}>Mini-Consultation Fee</span>{" "}
          </p>
          <p>
            {" "}
            <span
              className="highlights"
              style={{
                color: "LightSeaGreen",
                backgroundColor: "PowderBlue",
                padding: 5,
                borderRadius: 4,
                marginRight: 10,
              }}
            >
              &#8377;650
            </span>{" "}
            <span style={{ marginRight: 2 }}>Max-Consultation Fee</span>{" "}
          </p>
        </div>

        <div className="overview">
          <div className="inner-overview">
            <h4>Server Cost And Bandwidth Overview</h4>

            <div className="cost-bandwidth">
              <div className="cost">
                <h4>Server Cost</h4>
                <div className="all-cost">
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "250px",
                        fontSize: 12,
                      }}
                    >
                      <span style={{ color: "gray" }}>
                        Today:{" "}
                        <b style={{ marginLeft: 40, color: "black" }}>₹1,000</b>
                      </span>
                      <span style={{ color: "gray" }}>
                        This Month:{" "}
                        <b style={{ marginLeft: 10, color: "black" }}>₹1,000</b>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "250px",
                        marginTop: 10,
                        fontSize: 12,
                      }}
                    >
                      <span style={{ color: "gray" }}>
                        Last Month:{" "}
                        <b style={{ marginLeft: 12, color: "black" }}>₹1,000</b>
                      </span>
                      <span style={{ color: "gray" }}>
                        Last Year:{" "}
                        <b style={{ marginLeft: 19, color: "black" }}>₹1,000</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bandwidth">
                <h4>Bandwidth Usage</h4>

                <div className="all-bandwidth">
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "250px",
                        fontSize: 11,
                      }}
                    >
                      <span style={{ color: "gray" }}>Today:</span>{" "}
                      <b style={{ marginLeft: 38 }}>300 GB</b>
                      <span style={{ marginRight: 12, color: "gray" }}>
                        Yesterday:{" "}
                      </span>{" "}
                      <b>278 GB</b>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "290px",
                        marginTop: 10,
                        fontSize: 11,
                      }}
                    >
                      <span style={{ color: "gray" }}>7 Day Average: </span>{" "}
                      <b style={{ marginLeft: 4 }}>320 GB</b>
                      <span style={{ marginLeft: 10, color: "gray" }}>
                        Peak Today:
                      </span>{" "}
                      <b>27 Mbps @ 21:00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span style={{ fontSize: "small", marginBottom: 7, color: "gray" }}>
              Last Backup At 20:41 On 21.05.2024
            </span>
          </div>

          <div className="compare-charts" style={{ marginLeft: "150px" }}>
            <a href="" style={{ color: "black" }}>
              <FaArrowRightArrowLeft className="compare-chart-icon" /> compare
              charts{" "}
            </a>
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

export default HomePage;
