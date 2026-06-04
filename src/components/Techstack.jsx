import { motion } from "framer-motion";
import {
  SiDotnet,
  SiJavascript,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
  SiPython,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const stacks = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "ASP.NET", Icon: SiDotnet },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "SQL Server", Icon: DiMsqlServer },
  { name: "Python", Icon: SiPython },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "Machine Learning", Icon: SiScikitlearn },
  { name: "Computer Vision", Icon: SiOpencv },
];

export default function Techstack() {
  return (
    <div className="stack-logo-grid">
      {stacks.map(({ name, Icon }, index) => (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, scale: 1.04 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.28) }}
          className="stack-logo-tile"
          key={name}
          title={name}
          aria-label={name}
        >
          <Icon aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  );
}
