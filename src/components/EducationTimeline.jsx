import { motion } from "framer-motion";
import { timeline } from "../data/content";

export default function EducationTimeline() {
  return (
    <div className="experience-timeline">
      {timeline.map((item, index) => (
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="timeline-item"
          key={item.title}
        >
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-card">
            <time>{item.period}</time>
            <div>
              <p className="timeline-type">{item.type}</p>
              <h3>{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
              <p>{item.description}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
