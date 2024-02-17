import SingleFormInput from "../../ui/SingleFormInput/SingleFormInput";
import "./educationlist.css";

export const EducationList = (props) => {
  if (props.educationData.length === 0) {
    return <></>;
  }
  return (
    <ul className="education-list">
      {props.educationData.map((education, index) => (
        <li key={index} className="education-list-item">
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
