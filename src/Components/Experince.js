import React, { useEffect, useState } from "react";
import "../Styles/exp.css"; 
import { Link } from "react-router-dom";

const Experience = () => {
  const [dynamicExperience, setDynamicExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch('https://shop999backend.vercel.app/api/auth/getexperincedetails');
        const data = await res.json();
        if (res.ok) {
          setDynamicExperience(data.allExperiences);
        } else {
          console.error("Failed to fetch experience data");
        }
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  return (
    <div className="experience-section">
      <h2 className="experience-title">Professional Experience</h2>
      {loading ? (
        <div className="experience-loader">Loading...</div>
      ) : (
        <div className="experience-grid">
          {dynamicExperience.map((exp) => (
            <Link to={`/ibm/`} key={exp._id} className="experience-card">
            <div className="experience-card" key={exp._id}>
              <div className="experience-logo">
                <img
                  src={
                    exp.companylogo.includes("fakepath")
                      ? "https://dummyimage.com/80x80/cccccc/000000&text=Logo"
                      : exp.companylogo
                  }
                  alt={exp.experinceCompany}
                />
              </div>
              <div className="experience-details">
                <h3>{exp.experinceCompany}</h3>
                <p className="experience-dates">
                  {new Date(exp.startdateL).toLocaleDateString()} -{" "}
                  {new Date(exp.enddateL).toLocaleDateString()}
                </p>
                <p className="experience-role">{exp.experinceResponsibilities}</p>
              </div>
            </div>
            </Link>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
