import "./FormInput.css";

function FormInput(props) {
  return (
    <input
      onChange={props.handleChange}
      className="form-input"
      type="text"
      placeholder={props.placeholder}
    />
  );
}

export default FormInput;
