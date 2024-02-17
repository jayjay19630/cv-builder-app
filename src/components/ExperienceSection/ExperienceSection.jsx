import { useState } from "react";
import "./ExperienceSection.css";
import { ExperienceList } from "./ExperienceList/ExperienceList";

function ExperienceSection() {
  const [experienceData, setExperienceData] = useState([]);

  const handleClick = () => {
    event.preventDefault();
    setExperienceData((prevData) => [
      ...prevData,
      {
        occupation: "hello",
      },
    ]);
  };

  return (
    <form className="experience-section">
      <div className="experience-header">Experience</div>
      <div className="divider"></div>
      <ExperienceList experienceData={experienceData}></ExperienceList>
      <div className="add-new-experience">Add a new experience</div>
      <button className="add-button" onClick={handleClick}>
        +
      </button>
    </form>
  );
}

export default ExperienceSection;
