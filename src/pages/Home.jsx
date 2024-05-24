import EducationTimeline from "../components/EducationTimeline";
import LanguageSkill from "../components/LanguageSkill";
import PortfolioItem from "../components/Portofolio";
import Techstack from "../components/Techstack";
import foto from "../assets/personpink.png";

export default function Home() {
  return (
    <main className="container mx-auto max-width text-center">
      <section>
        <h4 className="text-dark-heading dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Tech Stack
        </h4>
        <Techstack />
        <h4 className="text-dark-heading mt-10 mb-10 dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Language Proficiency
        </h4>
        <LanguageSkill />
        <h4 className="text-dark-heading mt-10 mb-10 dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Portofolio
        </h4>
        <PortfolioItem
        image={foto}
        title="Project One"
        link="https://example.com/project-one"
      />
        <h4 className="text-dark-heading mt-10 mb-10 dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Education & Timeline
        </h4>
        <EducationTimeline />
      </section>
    </main>
  );
}
