import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import "./SingleFormInput.css";

function SingleFormInput(props) {
    return (
        <div className="single-form-input">
            <FormHeader formTitle={props.formTitle} recommendation={props.recommendation}></FormHeader>
            <FormInput placeholder={props.placeholder}></FormInput>
        </div>
    )
}

export default SingleFormInput;