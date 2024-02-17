import { useState } from "react";
import "./EducationSection.css";
import { EducationList } from "./EducationList/EducationList";

function EducationSection() {
  const [educationData, setEducationData] = useState([]);

  const handleClick = () => {
    event.preventDefault();
    setEducationData((prevData) => [
      ...prevData,
      {
        school: "hello",
      },
    ]);
  };

  return (
    <form className="education-section">
      <div className="education-header">Education</div>
      <div className="divider"></div>
      <EducationList educationData={educationData}></EducationList>
      <div className="add-new-education">Add a new education background!</div>
      <button className="add-button" onClick={handleClick}>
        +
      </button>
    </form>
  );
}

export default EducationSection;
