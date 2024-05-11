
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <div className="navbar-name">Logo</div>
        <span>toggle</span>
      </div>
      <div className="navbar-right">
        <div className="navbar-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
