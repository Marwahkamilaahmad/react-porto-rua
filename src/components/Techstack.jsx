import { motion } from "framer-motion";

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["ASP.NET", "Node.js", "PostgreSQL", "SQL Server"],
  },
  {
    title: "AI & Research",
    items: ["PyTorch", "Machine Learning", "Deep Learning", "Computer Vision"],
  },
];

export default function Techstack() {
  return (
    <div className="stack-grid">
      {stackGroups.map((group, groupIndex) => (
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
          className="stack-panel"
          key={group.title}
        >
          <p className="stack-index">0{groupIndex + 1}</p>
          <h3>{group.title}</h3>
          <div className="stack-list">
            {group.items.map((item, index) => (
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: groupIndex * 0.08 + index * 0.04,
                }}
                className="tech-pill"
                key={item}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
