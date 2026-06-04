import { motion } from "framer-motion";

const languages = [
  {
    name: "Indonesian",
    level: "Native",
    description: "Clear daily communication, product discussion, and writing.",
  },
  {
    name: "English",
    level: "Professional",
    description: "Documentation, team collaboration, and technical learning.",
  },
  {
    name: "Chinese",
    level: "Learning",
    description: "Basic communication and ongoing practice.",
  },
];

const LanguageSkill = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {languages.map((language) => (
        <motion.div
          key={language.name}
          whileHover={{ y: -5 }}
          className="glass-panel rounded-[28px] p-6"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] opacity-50">
            {language.level}
          </p>
          <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]">
            {language.name}
          </h3>
          <p className="mt-3 text-sm leading-6 opacity-70">
            {language.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default LanguageSkill;
