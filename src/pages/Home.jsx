import { motion } from "framer-motion";
import PortfolioItem from "../components/Portofolio";
import Techstack from "../components/Techstack";
import SocialMedia from "../components/SocialMedia";
import EducationTimeline from "../components/EducationTimeline";
import LanguageSkill from "../components/LanguageSkill";
import { profile } from "../data/content";

const SectionHeading = ({ title, description, index }) => (
  <div className="section-heading">
    <span className="section-index mono">{index}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

const ease = [0.22, 1, 0.36, 1];

const Home = () => {
  return (
    <main className="page-shell">
      {/* ── About ──────────────────────────────────────────────────────── */}
      <section id="about" className="section-pad">
        <SectionHeading
          index="01"
          title="About — full stack engineering with a research-aware mindset and polished product delivery."
          description="A profile overview of the technologies, domains, and approach I bring to product engineering."
        />
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
            className="about-panel"
          >
            <h2>
              I build responsive interfaces, integrate backend systems, and explore applied AI
              workflows.
            </h2>
            <p>
              My portfolio highlights practical product engineering across enterprise dashboards,
              internal platforms, and computer vision research. I focus on clean architecture,
              maintainable code, and thoughtful user experiences.
            </p>
            <p>
              Currently pursuing a Software Engineering degree at Universitas Gadjah Mada, I bring
              academic rigor to every project — from database design through deployment documentation.
            </p>
            <div className="badge-row">
              {profile.badges.map((item) => (
                <span className="tech-badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
            className="about-side"
          >
            <p className="eyebrow">Focus Areas</p>
            <div className="highlight-list">
              {profile.highlights.map((item) => (
                <div className="highlight-item" key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
        <LanguageSkill />
      </section>

      {/* ── Work / Projects ────────────────────────────────────────────── */}
      <section id="work" className="section-pad">
        <SectionHeading
          index="02"
          title="Selected projects — enterprise dashboards, full stack platforms, and AI research."
          description="Three projects that represent the breadth of my experience across frontend, backend, and research."
        />
        <PortfolioItem />
      </section>

      {/* ── Stack ──────────────────────────────────────────────────────── */}
      <section id="stack" className="section-pad">
        <SectionHeading
          index="03"
          title="Technologies and tools I work with regularly."
          description="Languages, frameworks, databases, and machine learning tools across the full stack."
        />
        <Techstack />
      </section>

      {/* ── Timeline ───────────────────────────────────────────────────── */}
      <section id="timeline" className="section-pad">
        <SectionHeading
          index="04"
          title="Education, internships, professional work, and research."
          description="A concise path through the experiences that shaped my software engineering and AI research direction."
        />
        <EducationTimeline />
      </section>

      {/* ── Contact ────────────────────────────────────────────────────── */}
      <section id="contact" className="section-pad">
        <div className="contact-block">
          <h2>
            Open to software engineering and <em>AI-focused opportunities</em>.
          </h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <SocialMedia />
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} {profile.initials}</span>
          <span className="mono">Designed &amp; built with React</span>
          <a href="#home" className="mono">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;