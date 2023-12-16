import "./UserInput.css";
function UserInput(props) {
    return (
        <div className="user-input">{props.children}</div>
    );
}
export default UserInput;