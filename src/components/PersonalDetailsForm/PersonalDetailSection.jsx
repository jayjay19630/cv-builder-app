import { useState } from "react";
import "./personaldetailsection.css";
import PersonalDetailsForm from "./PersonalDetailsForm/PersonalDetailsForm";

function PersonalDetailSection(props) {
  const personalData = props.personalData;
  const setPersonalData = props.setPersonalData;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    event.preventDefault();
    setOpen(true);
    setPersonalData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  };

  return (
    <form className="personal-section">
      <div className="personal-header">Personal Details</div>
      <div className="divider"></div>
      <PersonalDetailsForm
        personalData={personalData}
        setPersonalData={setPersonalData}
        setOpen={setOpen}
      ></PersonalDetailsForm>
      {!open && (
        <>
          <div className="add-new-personal">Add Personal Information!</div>
          <button className="add-button" onClick={handleClick}>
            +
          </button>
        </>
      )}
    </form>
  );
}

export default PersonalDetailSection;
