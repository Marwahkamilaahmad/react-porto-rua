import { motion } from "framer-motion";
import { languages } from "../data/content";

const LanguageSkill = () => {
  return (
    <div className="language-grid">
      {languages.map((language) => (
        <motion.div
          key={language.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="language-card"
        >
          <span className="mono">{language.level}</span>
          <h3>{language.name}</h3>
          <p>{language.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default LanguageSkill;
