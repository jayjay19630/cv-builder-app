import SingleFormInput from "../../ui/SingleFormInput/SingleFormInput";
import "./experiencelist.css";

export const ExperienceList = (props) => {
  if (props.experienceData.length === 0) {
    return <></>;
  }
  return (
    <ul className="experience-list">
      {props.experienceData.map((experience, index) => (
        <li key={index} className="experience-list-item">
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
          <div className="divider"></div>
        </li>
      ))}
    </ul>
  );
};
