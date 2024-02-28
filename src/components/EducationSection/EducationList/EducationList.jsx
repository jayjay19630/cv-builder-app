import { Button } from "@mui/material";
import SingleFormInput from "../../ui/SingleFormInput/SingleFormInput";
import "./educationlist.css";

export const EducationList = (props) => {
  const setEducationData = props.setEducationData;

  const onDelete = () => {
    props.setEducationData({
      school: "",
      location: "",
      major: "",
      education: "",
      startDate: "",
      endDate: "",
    });
    props.setOpen(false);
  };

  const onSchoolChange = (e) => {
    setEducationData((prevData) => ({
      ...prevData,
      school: e.target.value,
    }));
  };

  const onLocationChange = (e) => {
    setEducationData((prevData) => ({
      ...prevData,
      location: e.target.value,
    }));
  };
  const onMajorChange = (e) => {
    setEducationData((prevData) => ({
      ...prevData,
      major: e.target.value,
    }));
  };
  const onEducationChange = (e) => {
    setEducationData((prevData) => ({
      ...prevData,
      education: e.target.value,
    }));
  };
  const onStartDateChange = (e) => {
    setEducationData((prevData) => ({
      ...prevData,
      startDate: e.target.value,
    }));
  };
  const onEndDateChange = (e) => {
    setEducationData((prevData) => ({
      ...prevData,
      endDate: e.target.value,
    }));
  };

  return (
    <div className="education-list">
      <div className="education-list-item">
        <SingleFormInput
          formTitle={"School"}
          recommendation={"Recommended"}
          placeholder="School"
          handleChange={onSchoolChange}
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Location"}
          placeholder="Location"
          handleChange={onLocationChange}
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Major"}
          placeholder="Major"
          handleChange={onMajorChange}
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Education Level"}
          placeholder="Education Level"
          handleChange={onEducationChange}
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
            margin: 2,
            alignSelf: "end",
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
