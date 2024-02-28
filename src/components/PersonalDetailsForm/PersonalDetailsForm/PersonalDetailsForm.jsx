import { Button } from "@mui/material";
import SingleFormInput from "../../ui/SingleFormInput/SingleFormInput";
import "./PersonalDetailsForm.css";

const PersonalDetailsForm = (props) => {
  const setPersonalData = props.setPersonalData;

  const onDelete = () => {
    setPersonalData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    props.setOpen(false);
  };

  const onFullNameChange = (e) => {
    setPersonalData((prevData) => ({
      ...prevData,
      fullName: e.target.value,
    }));
  };

  const onEmailChange = (e) => {
    setPersonalData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };
  const onPhoneNumberChange = (e) => {
    setPersonalData((prevData) => ({
      ...prevData,
      phoneNumber: e.target.value,
    }));
  };
  const onAddressChange = (e) => {
    setPersonalData((prevData) => ({
      ...prevData,
      address: e.target.value,
    }));
  };

  return (
    <div className="personal-details-form">
      <SingleFormInput
        formTitle="Full Name"
        placeholder="First and last name"
        handleChange={onFullNameChange}
      ></SingleFormInput>
      <SingleFormInput
        formTitle="Email"
        recommendation="Recommended"
        placeholder="Enter email"
        handleChange={onEmailChange}
      ></SingleFormInput>
      <SingleFormInput
        formTitle="Phone Number"
        recommendation="Recommended"
        placeholder="Enter phone number"
        handleChange={onPhoneNumberChange}
      ></SingleFormInput>
      <SingleFormInput
        formTitle="Address"
        recommendation="Recommended"
        placeholder="Enter city and country"
        handleChange={onAddressChange}
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
  );
};

export default PersonalDetailsForm;
