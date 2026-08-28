import { motion } from "framer-motion";
import HeroScene from "../components/HeroScene";
import { profile, socials } from "../data/content";

const ease = [0.22, 1, 0.36, 1];

const General = ({ theme }) => {
  const portrait = theme === "light" ? profile.portrait.light : profile.portrait.dark;

  return (
    <section id="home" className="hero-section page-shell">
      <HeroScene />
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="hero-copy"
        >
          <div className="hero-overline">
            <p className="eyebrow">Software Engineer Portfolio</p>
            <span className="hero-status">
              <span className="dot" aria-hidden="true" />
              {profile.availability}
            </span>
          </div>

          <h1>
            {profile.name.split(" ").slice(0, 1).join(" ")}{" "}
            <em>{profile.name.split(" ").slice(1).join(" ")}</em>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease }}
            className="hero-subtitle"
          >
            {profile.tagline}
          </motion.p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Contact
            </a>
            <a className="secondary-button" href="#work">
              View Work
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <strong>Based</strong> · {profile.location}
            </span>
            <span>
              <strong>Focus</strong> · Web · Data · Applied AI
            </span>
            <span>
              <strong>Social</strong> ·{" "}
              {socials.map((s, i) => (
                <span key={s.title}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="mono">
                    {s.title}
                  </a>
                  {i < socials.length - 1 ? " / " : ""}
                </span>
              ))}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="hero-portrait-wrap"
        >
          <div className="hero-portrait-card">
            <img
              src={portrait}
              alt="Marwah Kamila Ahmad professional portrait"
              className="hero-portrait"
            />
            <div className="portrait-caption">
              <span>Marwah Kamila Ahmad</span>
              <span>{new Date().getFullYear()}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default General;
