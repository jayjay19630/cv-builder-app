import { Button } from "@mui/material";
import "./experiencelist.css";
import SingleFormInput from "../../ui/SingleFormInput/SingleFormInput";

export const ExperienceList = (props) => {
  const setExperienceData = props.setExperienceData;

  const onDelete = () => {
    setExperienceData({
      occupation: "",
      location: "",
      company: "",
      startDate: "",
      endDate: "",
    });
    props.setOpen(false);
  };

  const onOccupationChange = (e) => {
    setExperienceData((prevData) => ({
      ...prevData,
      occupation: e.target.value,
    }));
  };

  const onLocationChange = (e) => {
    setExperienceData((prevData) => ({
      ...prevData,
      location: e.target.value,
    }));
  };
  const onCompanyChange = (e) => {
    setExperienceData((prevData) => ({
      ...prevData,
      company: e.target.value,
    }));
  };
  const onStartDateChange = (e) => {
    setExperienceData((prevData) => ({
      ...prevData,
      startDate: e.target.value,
    }));
  };
  const onEndDateChange = (e) => {
    setExperienceData((prevData) => ({
      ...prevData,
      endDate: e.target.value,
    }));
  };

  return (
    <div className="experience-list">
      <div className="experience-list-item">
        <SingleFormInput
          formTitle={"Occupation"}
          recommendation={"Recommended"}
          placeholder="Occupation"
          handleChange={onOccupationChange}
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Location"}
          placeholder="Location"
          handleChange={onLocationChange}
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Company"}
          recommendation={"Recommended"}
          placeholder="Company"
          handleChange={onCompanyChange}
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Start Date"}
          placeholder="Start Date"
          handleChange={onStartDateChange}
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"End Date"}
          placeholder="End Date"
          handleChange={onEndDateChange}
        ></SingleFormInput>
        <Button
          sx={{
            backgroundColor: "red",
            color: "white",
            alignSelf: "end",
            margin: 2,
            fontWeight: "bold",
          }}
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
