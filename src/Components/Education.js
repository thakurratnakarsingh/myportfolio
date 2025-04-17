import React from "react";
import "../Styles/TeachnologyStack.css";
import shreeram from "../Assets/shreeram.png";
import reacticon from "../Assets/dmce.png";


const Education = () => {
  return (
    
    <div className="tech-container">
      <h2 >Accadmic year</h2>
      <div className="stack-icons">
        <view>
          <img src={reacticon} alt="GitHub" className="icon" />
          <h3>DATTA MEGHE COLLEGE</h3> 
          <h3>OF ENGINEERING</h3>
          <p>19/04/2024 -current </p>
        </view>
        <view>
          <img src={shreeram} alt="React" className="icon" />
          <h3 >SHREERAM POYTECHNIC </h3> 
          <h3>AIROLI NAVI MUMBAI</h3>
          <p >june 2023 to dec 2023</p>
       </view>
       

      </div>
    </div>
  );
};

export default Education;
