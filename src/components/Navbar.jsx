import { useState } from "react";
import { navItems, profile } from "../data/content";

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <header className="navbar-shell">
      <nav className="navbar-wrapper" aria-label="Main navigation">
        <a className="navbar-brand" href="#home" aria-label="Marwah Kamila home">
          <span className="brand-mark">{profile.initials}</span>
        </a>

        <ul className={`navbar-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="nav-link" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-theme">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              <span className="theme-icon" aria-hidden="true">
                {isDark ? "☀" : "☾"}
              </span>
              <span className="theme-label">{isDark ? "Light" : "Dark"}</span>
            </button>
          </li>
        </ul>

        <button
          className="nav-burger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
