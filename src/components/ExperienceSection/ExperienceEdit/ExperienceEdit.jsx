import SingleFormInput from "../../ui/SingleFormInput/SingleFormInput";

export const ExperienceEdit = () => {
  return (
    <>
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
    </>
  );
};