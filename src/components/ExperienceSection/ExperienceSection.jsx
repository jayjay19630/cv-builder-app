import { useState } from "react";
import "./ExperienceSection.css";
import { ExperienceList } from "./ExperienceList/ExperienceList";
import { ExperienceEdit } from "./ExperienceEdit/ExperienceEdit";

function ExperienceSection() {
  const [experienceData, setExperienceData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    event.preventDefault();
    setOpen(true);
    setExperienceData({
      occupation: "",
      location: "",
      company: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <form className="experience-section">
      <div className="experience-header">Experience</div>
      <div className="divider"></div>
      <ExperienceList
        experienceData={experienceData}
        setExperienceData={setExperienceData}
        setOpen={setOpen}
      ></ExperienceList>
      {!open && (
        <>
          <div className="add-new-experience">Add a new experience</div>
          <button className="add-button" onClick={handleClick}>
            +
          </button>
        </>
      )}
    </form>
  );
}

export default ExperienceSection;
