import React from "react";
import "../Styles/TeachnologyStack.css";
import ca from "../Assets/ca.png";
import reacticon from "../Assets/dmce.png";


const Education = () => {
  return (
    
    <div className="tech-container">
      <h2>Academic year</h2>
      <div className="stack-icons">
        <view>
          <img src={reacticon} alt="GitHub" className="icon" />
          <h3>UNITED COLLEGE OF</h3> 
          <h3> ENGINEERING AND MANAGEMENT</h3>
          <p>August 2023 to July 2019</p>
        </view>
        <view>
          <img src={ca} alt="React" className="icon" />
          <h3>CENTRAL ACADEMY</h3> 
          <h3>SENIOR SECONDARY SCHOOL</h3>
          <p >2013-2015</p>
       </view>
     </div>
    </div>
  );
};

export default Education;
