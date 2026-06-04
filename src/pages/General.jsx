import { motion } from "framer-motion";
import personal from "../assets/person.png";
import personaldark from "../assets/personwhite.png";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marwah-kamila-ahmad",
  },
  {
    label: "GitHub",
    href: "https://github.com/Marwahkamilaahmad",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thisismarwah/",
  },
];

const General = ({ theme }) => {
  const portrait = theme === "light" ? personal : personaldark;

  return (
    <section id="home" className="hero-section page-shell">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-copy"
        >
          <span className="eyebrow">Software Engineer Portfolio</span>
          <h1 className="gradient-text">Marwah Kamila Ahmad</h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="hero-subtitle"
          >
            Full Stack Developer and AI Research Intern building clean,
            responsive, data-driven products across web platforms, enterprise
            dashboards, and computer vision research.
          </motion.p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Contact
            </a>
            <a className="secondary-button" href="#projects">
              View Projects
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            {socials.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="hero-portrait-wrap"
        >
          <div className="hero-portrait-card">
            <img
              src={portrait}
              alt="Marwah Kamila Ahmad professional portrait"
              className="hero-portrait"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default General;
