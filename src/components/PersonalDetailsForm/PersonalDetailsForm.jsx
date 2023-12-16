import SingleFormInput from "../ui/SingleFormInput/SingleFormInput";
import "./PersonalDetailsForm.css";

function PersonalDetailsForm() {
    return (
        <div className="personal-details-form">
            <SingleFormInput formTitle="Full Name" placeholder="First and last name"></SingleFormInput>
            <SingleFormInput formTitle="Email" recommendation="Recommended" placeholder="Enter email"></SingleFormInput>
            <SingleFormInput formTitle="Phone Number" recommendation="Recommended" placeholder="Enter phone number"></SingleFormInput>
            <SingleFormInput formTitle="Address" recommendation="Recommended" placeholder="Enter city and country"></SingleFormInput>
        </div>
    );
}

export default PersonalDetailsForm;