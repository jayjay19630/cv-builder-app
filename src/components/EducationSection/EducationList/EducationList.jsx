import { Button } from "@mui/material";
import SingleFormInput from "../../ui/SingleFormInput/SingleFormInput";
import "./educationlist.css";

export const EducationList = (props) => {
  if (props.educationData === null) {
    return <></>;
  }

  const onDelete = () => {
    props.setEducationData(null);
    props.setOpen(false);
  };

  return (
    <div className="education-list">
      <div className="education-list-item">
        <SingleFormInput
          formTitle={"School"}
          recommendation={"Recommended"}
          placeholder="School"
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Location"}
          placeholder="Location"
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Major"}
          placeholder="Major"
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Education Level"}
          placeholder="Education Level"
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Start Date"}
          placeholder="Start Date"
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"End Date"}
          placeholder="End Date"
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
