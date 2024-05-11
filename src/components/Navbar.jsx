

const Navbar = () => {
  return(
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n name"></div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

