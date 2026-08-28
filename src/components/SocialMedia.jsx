import { motion } from "framer-motion";
import { socials } from "../data/content";

export default function SocialMedia() {
  return (
    <div className="social-grid">
      {socials.map((item) => (
        <motion.a
          key={item.title}
          whileHover={{ y: -2 }}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div>
            <span className="mono">{item.title}</span>
            <h3>{item.handle}</h3>
          </div>
          <span className="social-arrow" aria-hidden="true">
            ↗
          </span>
        </motion.a>
      ))}
    </div>
  );
}
