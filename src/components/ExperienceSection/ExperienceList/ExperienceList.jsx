import { Button } from "@mui/material";
import "./experiencelist.css";
import SingleFormInput from "../../ui/SingleFormInput/SingleFormInput";

export const ExperienceList = (props) => {
  const experienceData = props.experienceData;
  if (experienceData === null) {
    return <></>;
  }
  const onDelete = () => {
    props.setExperienceData(null);
    props.setOpen(false);
  };
  return (
    <ul className="experience-list">
      <div className="experience-list-item">
        <SingleFormInput
          formTitle={"Occupation"}
          recommendation={"Recommended"}
          placeholder="Occupation"
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Location"}
          placeholder="Location"
        ></SingleFormInput>
        <SingleFormInput
          formTitle={"Company"}
          recommendation={"Recommended"}
          placeholder="Company"
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
            alignSelf: "end",
            margin: 2,
            fontWeight: "bold",
          }}
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </ul>
  );
};
