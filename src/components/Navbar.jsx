import "./Navbar.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#technologies" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const isDark = theme === "dark";

  return (
    <header className="navbar-shell">
      <nav className="navbar-wrapper" aria-label="Main navigation">
        <a className="navbar-brand" href="#home" aria-label="Marwah Kamila home">
          <span className="brand-mark">MK</span>
          <span>Marwah Kamila</span>
        </a>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              <span>{isDark ? "Light" : "Dark"}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
