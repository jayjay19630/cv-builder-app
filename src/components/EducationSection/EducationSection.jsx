import { useState } from "react";
import "./EducationSection.css";
import { EducationList } from "./EducationList/EducationList";

function EducationSection(props) {
  const educationData = props.educationData;
  const setEducationData = props.setEducationData;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    event.preventDefault();
    setOpen(true);
    setEducationData({
      school: "",
      location: "",
      major: "",
      education: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <form className="education-section">
      <div className="education-header">Education</div>
      <div className="divider"></div>
      <EducationList
        educationData={educationData}
        setEducationData={setEducationData}
        setOpen={setOpen}
      />

      {!open && (
        <>
          <div className="add-new-education">
            Add a new education background!
          </div>
          <button className="add-button" onClick={handleClick}>
            +
          </button>
        </>
      )}
    </form>
  );
}

export default EducationSection;
