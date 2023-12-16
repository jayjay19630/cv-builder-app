import "./FormInput.css";

function FormInput(props) {
    return (
        <input className="form-input" type="text" placeholder={props.placeholder}/>
    );
}

export default FormInput;