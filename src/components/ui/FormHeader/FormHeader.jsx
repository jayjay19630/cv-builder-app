import "./FormHeader.css";

function FormHeader(props) {
    return (
        <div className="form-header">
            <div className="form-title">{props.formTitle}</div>
            <div className="recommendation">{props.recommendation}</div>
        </div>
    );
}

export default FormHeader;