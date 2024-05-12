import "./Navbar.css";


import { Link } from "react-router-dom";
import toggle_dark from "../assets/night.png";
import toggle_light from "../assets/day.png";

const Navbar = ({theme, setTheme}) => {

  const toggle_change = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <div className="mr-4">Logo</div>
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
          <li>
            <div className="toggle-icon">
              <img onClick={()=>{toggle_change()}} src={theme == 'light' ? toggle_dark : toggle_light} alt="" className="toggle-img" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
