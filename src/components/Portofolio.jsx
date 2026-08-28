import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";

const assetModules = import.meta.glob(
  [
    "../assets/magang len/*.{png,jpg,jpeg,webp}",
    "../assets/magang hino/*.{png,jpg,jpeg,webp}",
    "../assets/research teep/*.{png,jpg,jpeg,webp}",
  ],
  {
    eager: true,
    import: "default",
  }
);

const pickProjectImage = (folderName) => {
  const normalizedFolder = folderName.toLowerCase();
  const match = Object.entries(assetModules).find(([path]) =>
    path.toLowerCase().includes(`/assets/${normalizedFolder}/`)
  );
  return match?.[1];
};

const ProjectModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.article
          className="project-modal"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(event) => event.stopPropagation()}
        >
          <button className="modal-close" type="button" onClick={onClose}>
            ✕ Close
          </button>
          <div
            className={`project-modal-image-wrap ${
              project.rotateImage ? "is-rotated" : ""
            }`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} detail`}
                className="project-image"
              />
            ) : (
              <div className="project-image-placeholder">{project.title}</div>
            )}
          </div>
          <div className="project-modal-body">
            <span className="project-role">{project.role}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <h4>Responsibilities</h4>
            <ul>
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Technologies</h4>
            <div className="badge-row">
              {project.technologies.map((tag) => (
                <span className="tech-badge" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <h4>Highlights</h4>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.article>
      </motion.div>
    )}
  </AnimatePresence>
);

const PortfolioItem = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const items = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        image: pickProjectImage(project.assetFolder),
      })),
    []
  );

  return (
    <>
      <div className="project-list">
        {items.map((project, index) => (
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="project-card"
            key={project.title}
          >
            <div
              className={`project-image-wrap ${
                project.rotateImage ? "is-rotated" : ""
              }`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} cover`}
                  className="project-image"
                  loading="lazy"
                />
              ) : (
                <div className="project-image-placeholder">{project.title}</div>
              )}
            </div>

            <div className="project-card-body">
              <span className="project-index">{project.index}</span>
              <p className="project-role">{project.role}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-highlight">
                <span>Highlight</span>
                <p>{project.highlights[0]}</p>
              </div>

              <div className="badge-row">
                {project.technologies.slice(0, 4).map((tag) => (
                  <span className="tech-badge" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="secondary-button"
                type="button"
                onClick={() => setSelectedProject(project)}
                style={{ marginTop: 6, alignSelf: "flex-start" }}
              >
                View Details →
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default PortfolioItem;
