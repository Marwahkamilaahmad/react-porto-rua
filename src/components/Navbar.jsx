import "./Navbar.css";

import { Link } from "react-router-dom";
import toggle_dark from "../assets/night.png";
import toggle_light from "../assets/day.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ theme, setTheme }) => {
  const [checked, setChecked] = useState("checked");

  const toggle_change = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const checked_change = () => {
    checked ? setChecked(false) : setChecked(true);
  };
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <div className="mr-4 font-bold">Marwah</div>
      </div>

      <div className="navbar-right">
        <ul className="flex">
          <li className="sub-list">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              about
            </Link>
          </li>
          <li className="sub-list">
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              projects
            </Link>
          </li>
          <li className="sub-list">
            <Link
              to="technologies"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              technologies
            </Link>
          </li>
          <li className="mt-2">
            <input
              type="checkbox"
              id="toggle-dark"
              checked={checked}
              className={`toggle border-none  hover:bg-red-700' ${
                checked
                  ? " [--tglbg:white] bg-yellow-300"
                  : " [--tglbg:grey] bg-white"
              }`}
              onClick={() => {
                toggle_change();
                checked_change();
              }}
            />
          </li>
          <li className="w-10">
            <div className="toggle-icon">
              <img
                onClick={() => {
                  toggle_change();
                }}
                src={theme == "light" ? toggle_light : toggle_dark}
                alt=""
                className="toggle-img"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
