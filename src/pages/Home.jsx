import { motion } from "framer-motion";
import PortfolioItem from "../components/Portofolio";
import Techstack from "../components/Techstack";
import SocialMedia from "../components/SocialMedia";
import EducationTimeline from "../components/EducationTimeline";

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const profileHighlights = [
  { value: "Frontend", label: "React, TypeScript, responsive UI" },
  { value: "Backend", label: "ASP.NET, APIs, database design" },
  { value: "AI Research", label: "PyTorch, computer vision, evaluation" },
];



const Home = () => {
  return (
    <main className="page-shell">
      <section id="about" className="section-pad">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-80px" }}
            className="profile-panel"
          >
            <span className="eyebrow">Profile</span>
            <h2>
              Full stack engineering with a research-aware mindset and polished
              product delivery.
            </h2>
            <p>
              I build responsive interfaces, integrate backend systems, and
              explore applied AI workflows. My portfolio highlights practical
              product engineering across enterprise dashboards, internal
              platforms, and computer vision research.
            </p>
            <div className="badge-row">
              {["React", "TypeScript", "ASP.NET", "PyTorch"].map((item) => (
                <span className="tech-badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-80px" }}
            className="profile-side-panel"
          >
            <span className="eyebrow">What I Do</span>
            <div className="profile-highlight-list">
              {profileHighlights.map((item) => (
                <div className="profile-highlight-item" key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <a className="profile-link" href="#projects">
              Explore selected work
            </a>
          </motion.aside>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <SectionHeading
          eyebrow="Projects & Experience"
          title="Enterprise builds, full stack ownership, and AI research."
          description="Selected work presented as recruiter-friendly case studies with roles, technologies, achievements, and project visuals from local assets."
        />
        <PortfolioItem />
      </section>

      <section id="technologies" className="section-pad">
        <SectionHeading
          eyebrow="Technology Stack"
          title="A practical stack for modern product engineering."
          description="Frontend craft, backend delivery, and AI research tools organized around the work I want to keep doing."
        />
        <Techstack />
      </section>

      <section id="timeline" className="section-pad">
        <SectionHeading
          eyebrow="Timeline"
          title="Education, internships, professional work, and research."
          description="A concise path through the experiences that shaped my software engineering and AI research direction."
        />
        <EducationTimeline />
      </section>

      <section id="contact" className="section-pad pb-24">
        <SectionHeading
          eyebrow="Contact"
          title="Open to software engineering and AI-focused opportunities."
          description="Reach out for internships, full stack roles, research collaboration, or product engineering work."
        />
        <SocialMedia />
      </section>
    </main>
  );
};

export default Home;
