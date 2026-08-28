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
import { stacks } from "../data/content";

const iconMap = {
  react: SiReact,
  ts: SiTypescript,
  js: SiJavascript,
  tailwind: SiTailwindcss,
  dotnet: SiDotnet,
  node: SiNodedotjs,
  postgres: SiPostgresql,
  mssql: DiMsqlServer,
  python: SiPython,
  pytorch: SiPytorch,
  ml: SiScikitlearn,
  cv: SiOpencv,
};

export default function Techstack() {
  return (
    <div className="stack-logo-grid">
      {stacks.map(({ name, icon }, index) => {
        const Icon = iconMap[icon];
        return (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.24) }}
            className="stack-logo-tile"
            key={name}
            title={name}
          >
            {Icon ? <Icon aria-hidden="true" /> : null}
            <span>{name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
