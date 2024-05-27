import EducationTimeline from "../components/EducationTimeline";
import LanguageSkill from "../components/LanguageSkill";
import PortfolioItem from "../components/Portofolio";
import Techstack from "../components/Techstack";
import foto from "../assets/personpink.png";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <main className=" mx-auto max-w-screen-lg text-center">
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="mockup-code bg-cream flex  text-center items-center justify-center text-black">
          <pre className="mt-12">
            <code className="">view marwah's resume here</code> <br></br> <button className="bg-white px-5 hover:bg-pink-200" type="submit">view</button>
          </pre>
        </div>
        <h4 className="text-dark-heading dark:text-light-heading xl:text-3xl xl:leading-tight font-bold mt-10">
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
          Social Media
        </h4>
        <SocialMedia />
        {/* <EducationTimeline /> */}
      </section>
    </main>
  );
}
