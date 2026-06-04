import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const projects = [
  {
    title: "LEN Bitrix Dashboard",
    role: "Frontend Developer",
    assetFolder: "magang len",
    description:
      "Dashboard Bitrix untuk visualisasi data dan monitoring proyek divisi perusahaan, dikembangkan sebagai peningkatan dari dashboard sebelumnya.",
    responsibilities: [
      "Developed a dashboard website using React.js and TypeScript.",
      "Integrated RESTful APIs from backend services.",
      "Built responsive UI components.",
      "Implemented data visualization features.",
      "Collaborated with backend developers in Agile development processes.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
      "REST API",
    ],
    highlights: [
      "Improved monitoring efficiency through real-time visualization.",
      "Created responsive and reusable frontend components.",
      "Enhanced user experience compared to previous dashboard version.",
    ],
  },
  {
    title: "HINO Division Website",
    role: "Full Stack Developer",
    assetFolder: "magang hino",
    description:
      "Website internal untuk pengelolaan dan pemantauan investasi finansial, dibangun end-to-end dari database hingga frontend dan backend.",
    responsibilities: [
      "Developed the entire system independently.",
      "Designed and implemented database architecture.",
      "Built frontend and backend features using ASP.NET.",
      "Developed reporting and investment tracking modules.",
      "Created comprehensive documentation and user manuals.",
    ],
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "Bootstrap"],
    highlights: [
      "Delivered end-to-end full stack solution.",
      "Produced user documentation exceeding 90 pages.",
      "Improved investment monitoring and reporting process.",
    ],
  },
  {
    title: "TEEP Taiwan Research Internship",
    role: "AI Research Intern",
    assetFolder: "research teep",
    rotateImage: true,
    description:
      "Research internship at National Chengchi University, Taiwan, focused on machine learning experimentation and human pose estimation systems.",
    responsibilities: [
      "Conducted machine learning research and experimentation.",
      "Developed PyTorch-based MeshMamba scoring pipeline.",
      "Implemented ranking-based evaluation systems.",
      "Performed model performance analysis and optimization.",
      "Conducted comparative studies on human pose estimation models.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "MeshMamba",
      "Deep Learning",
      "Computer Vision",
      "Human Pose Estimation",
    ],
    highlights: [
      "Developed a scoring pipeline for 3D human pose estimation.",
      "Improved hypothesis selection through ranking-based evaluation.",
      "Conducted research under international internship program.",
    ],
  },
];

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
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button className="modal-close" type="button" onClick={onClose}>
            Close
          </button>
          <div
            className={`project-modal-image-wrap ${
              project.rotateImage ? "is-rotated" : ""
            }`}
          >
            <img src={project.image} alt={`${project.title} cover`} />
          </div>
          <div className="project-modal-body">
            <p className="project-role">{project.role}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <h4>Responsibilities</h4>
            <ul>
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Achievement Highlights</h4>
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

  const enrichedProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        image: pickProjectImage(project.assetFolder),
      })),
    []
  );

  return (
    <>
      <div className="project-grid">
        {enrichedProjects.map((project, index) => (
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            key={project.title}
            className="project-card"
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
              <p className="project-role">{project.role}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="badge-row">
                {project.technologies.map((tag) => (
                  <span className="tech-badge" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-highlight">
                <span>Highlight</span>
                <p>{project.highlights[0]}</p>
              </div>
              <button
                className="secondary-button"
                type="button"
                onClick={() => setSelectedProject(project)}
              >
                View Details
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
