import { motion } from "framer-motion";

const timelineItems = [
  {
    type: "Education",
    period: "University",
    title: "Software Engineering Foundation",
    description:
      "Built core competencies in software development, databases, web programming, and collaborative engineering workflows.",
  },
  {
    type: "Internship",
    period: "LEN Industri",
    title: "Frontend Developer Internship",
    description:
      "Developed React and TypeScript dashboard interfaces for project monitoring and data visualization.",
  },
  {
    type: "Professional Experience",
    period: "HINO Division Website",
    title: "Full Stack Developer",
    description:
      "Delivered an internal investment monitoring platform from database design through backend, frontend, reporting, and documentation.",
  },
  {
    type: "Research Experience",
    period: "NCCU Taiwan",
    title: "TEEP AI Research Intern",
    description:
      "Worked on PyTorch, MeshMamba, computer vision, and ranking-based evaluation for 3D human pose estimation research.",
  },
];

export default function EducationTimeline() {
  return (
    <div className="experience-timeline">
      {timelineItems.map((item, index) => (
        <motion.article
          initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="timeline-item"
          key={item.title}
        >
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-card">
            <span>{item.type}</span>
            <time>{item.period}</time>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
