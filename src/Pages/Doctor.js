import React from "react";
import "./DoctorPage.css";

const Doctor = () => {
  const doctors = [
    {
      name: "Bessie Cooper",
      id: "#51674738",
      email: "debra.holt@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Devon Lane",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Kristin Watson",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Cameron Will",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Cameron Will",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Cameron Will",
      id: "#51674738",
      email: "bill.sanders@example.com",
      location: "City, Pin-00000",
      contact: "0000000000",
      image: "https://via.placeholder.com/40",
    },
  ];

  return (
    <main className="doctor-container">
      <div style={{ padding: "20px" }}>
        <h2>Doctor Added In The Month Of October</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid rgb(210, 210, 210)",
            borderRadius: "10px",
            overflow: "hidden",
            color: "rgb(60, 60, 60)",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead style={{ borderBottom: "rgb(210, 210, 210)" }}>
            <tr style={{ backgroundColor: "white", textAlign: "left" }}>
              <th
                style={{
                  padding: "10px 20px",
                  borderTop: "none",
                  borderBottom: "2px solid rgb(210, 210, 210)",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                Doctor Name
              </th>
              <th
                style={{
                  padding: "15px 10px",
                  borderTop: "none",
                  borderBottom: "2px solid rgb(210, 210, 210)",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                Doctor ID
              </th>
              <th
                style={{
                  padding: "15px 10px",
                  borderTop: "none",
                  borderBottom: "2px solid rgb(210, 210, 210)",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: "15px 10px",
                  borderTop: "none",
                  borderBottom: "2px solid rgb(210, 210, 210)",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                Location
              </th>
              <th
                style={{
                  padding: "15px 10px",
                  borderTop: "none",
                  borderBottom: "2px solid rgb(210, 210, 210)",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                Contact Number
              </th>
              <th
                style={{
                  padding: "15px 10px",
                  borderTop: "none",
                  borderBottom: "2px solid rgb(210, 210, 210)",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              ></th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>
            {doctors.map((doctor, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    style={{ borderRadius: "50%", marginRight: "10px" }}
                  />
                  {doctor.name}
                </td>
                <td style={{ padding: "10px" }}>{doctor.id}</td>
                <td style={{ padding: "10px" }}>{doctor.email}</td>
                <td style={{ padding: "10px" }}>{doctor.location}</td>
                <td style={{ padding: "10px" }}>{doctor.contact}</td>
                <td style={{ padding: "10px" }}>
                  <button
                    style={{
                      backgroundColor: "rgb(60, 60, 60)",
                      color: "#fff",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Doctor;
