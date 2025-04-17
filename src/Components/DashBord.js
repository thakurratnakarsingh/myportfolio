import React, { useState } from "react";
import {
  FaUser,
  FaBox,
  FaShoppingCart,
  FaCog,
  FaChartBar,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../Styles/Dashboard.css";
import Experince from "./Experince";
import Project from "./Project";
import Education from "./Education";

const DashBord = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [expformData, expsetFormData] = useState({
    experinceCompany: "",
    companylogo: "",
    experinceYear: "",
    startdateL: "",
    enddateL: "",
    experinceResponsibilities: ""
  });

  const sections = [
    { name: "TECH STACK", icon: <FaChartBar />, key: "dashboard" },
    { name: "EXPERIENCE", icon: <FaUser />, key: "experience" },
    { name: "EDUCATION", icon: <FaBox />, key: "education" },
    { name: "PROJECTS", icon: <FaShoppingCart />, key: "projects" },
    { name: "SETTINGS", icon: <FaCog />, key: "settings" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    expsetFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://shop999backend.vercel.app/api/auth/experince",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(expformData),

        }
      );
      const result = await response.json()
      if (response.ok) {
        alert("User created successfully");
        console.log(result);
        if (response.status === 201) {
          window.location.href = "/";

        }
        expsetFormData({
          experinceCompany: "",
          companylogo: "",
          experinceYear: "",
          startdateL: "",
          enddateL: "",
          experinceResponsibilities: ""

        })
      } else {
        alert("Failed to create experince details");

      }
    } catch (error) {
      console.log("Error", error)
      alert("Something went wrong. Please try again.");

    }
  };

  const renderForm = () => {
    const data = expformData[activeSection] || {};

    switch (activeSection) {
      case "experience":
        return (
          <form className="admin-form" onSubmit={handleSubmit}>
                        <label>Enter Company name</label>

            <input
              type="text"
              name="experinceCompany"
              placeholder="Company"
              value={expformData.experinceCompany}
              onChange={handleInputChange}
            /> 
                       <label>Uploade company logo</label>

            <input
              name="companylogo"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
            />
            <label>Enter your Total work of experince</label>
            <input
              name="experinceYear"
              type="number"
              placeholder="experinceYear"
              value={expformData.experinceYear}
              onChange={handleInputChange}
            />
            <label>Start date</label>
            <input
              name="startdateL"
              placeholder="startdateL"
              type="date"
              value={expformData.startdateL}
              onChange={handleInputChange}
            />
                        <label>End DATE</label>

            <input
              name="enddateL"
              type="date"
              placeholder="startdateL"
              value={expformData.enddateL}
              onChange={handleInputChange}
            />
            <input
              name="experinceResponsibilities"
              type="text"
              placeholder="experinceResponsibilities"
              value={expformData.experinceResponsibilities}
              onChange={handleInputChange}
            />
            <button type="submit">Add Experience</button>
          </form>
        );
      case "education":
        return (
          <form className="admin-form" onSubmit={handleSubmit}>
            <input name="school" placeholder="School" value={data.school || ""} onChange={handleInputChange} />
            <input name="degree" placeholder="Degree" value={data.degree || ""} onChange={handleInputChange} />
            <input name="year" placeholder="Year" value={data.year || ""} onChange={handleInputChange} />
            <button type="submit">Add Education</button>
          </form>
        );
      case "projects":
        return (
          <form className="admin-form" onSubmit={handleSubmit}>
            <input name="title" placeholder="Project Title" value={data.title || ""} onChange={handleInputChange} />
            <input name="description" placeholder="Description" value={data.description || ""} onChange={handleInputChange} />
            <input name="tech" placeholder="Tech Stack" value={data.tech || ""} onChange={handleInputChange} />
            <button type="submit">Add Project</button>
          </form>
        );
      case "dashboard": 
        return (
          <form className="admin-form" onSubmit={handleSubmit}>
            <input name="tech" placeholder="Technology" value={data.tech || ""} onChange={handleInputChange} />
            <input name="level" placeholder="Proficiency" value={data.level || ""} onChange={handleInputChange} />
            <button type="submit">Add Tech</button>
          </form>
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <>
            <Dashboard />
            {renderForm()}
          </>
        );
      case "experience":
        return (
          <>
            <Experince />
            {renderForm()}
          </>
        );
      case "education":
        return (
          <>
            <Education />
            {renderForm()}
          </>
        );
      case "projects":
        return (
          <>
            <Project />
            {renderForm()}
          </>
        );
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2>Admin Panel</h2>
        <nav className="admin-nav">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => {
                setActiveSection(section.key);
                setSidebarOpen(false);
              }}
              className={activeSection === section.key ? "active" : ""}
            >
              {section.icon} {section.name}
            </button>
          ))}
        </nav>
      </aside>

      <main className="admin-main">
        <div className="admin-content">{renderContent()}</div>
      </main>
    </div>
  );
};

const Dashboard = () => <Section title="Tech Stack" />;
const Settings = () => <Section title="Settings" />;
const Section = ({ title }) => (
  <div>
    <h2>{title}</h2>
    <p>Manage {title.toLowerCase()} from here.</p>
  </div>
);

export default DashBord;
