import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [addbutton, setaddbutton] = useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
              className="login-btn"
              onClick={() => {
                  setaddbutton(addbutton === "Login" ? "Logout" : "Login");
                }}
    >   
              {addbutton}
            </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;