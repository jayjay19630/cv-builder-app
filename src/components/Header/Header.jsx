import "./Header.css";
function Header() {
    return (
        <div className="header">
            <div className="left-header">
                <img className="logo" src="src/assets/images/logo.png"></img>
                <p className="header-text">YOUR PROFESSIONAL CV MAKER</p>
            </div>
            <div className="right-header">
                <button className="delete-content">Delete Content</button>
                <button className="load-sample">Load Sample</button>
            </div>
        </div>
    )
}

export default Header;