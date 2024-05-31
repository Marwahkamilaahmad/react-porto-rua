import LanguageSkill from "../components/LanguageSkill";
import PortfolioItem from "../components/Portofolio";
import Techstack from "../components/Techstack";
import foto from "../assets/personpink.png";
import SocialMedia from "../components/SocialMedia";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = ({ theme, setTheme }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className=" mx-auto max-w-screen-lg text-center">
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="mockup-code bg-white flex  text-center items-center justify-center text-black">
          <pre className="mt-12">
            <code className="">view marwah's resume here</code> <br></br>{" "}
            <a
              className="bg-white px-5 hover:bg-pink-200"
              type="submit"
              href="https://docs.google.com/document/d/1vPYy0H9UPBlwM9DlRXJs_wWVDvS-nVPp/edit?usp=sharing&ouid=108301462787204989460&rtpof=true&sd=true"
            >
              view
            </a>
          </pre>
        </div>
        <div id="technologies"></div>
        <h4 className="text-dark-heading dark:text-light-heading xl:text-3xl xl:leading-tight font-bold mt-10">
          Tech Stack
        </h4>

        <Techstack />
        <h4 className="text-dark-heading mt-10 mb-10 dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Language Proficiency
        </h4>
        <LanguageSkill theme={theme} setTheme={setTheme} />
        <div id="projects"></div>
        <h4 className="text-dark-heading mt-10 mb-10 dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Portofolio
        </h4>
        <PortfolioItem
          image={foto}
          title="Project One"
          link="https://example.com/project-one" 
          theme={theme} setTheme={setTheme}
        />
        <div id="about"></div>
        <h4 className="text-dark-heading mt-10 mb-10 dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Social Media
        </h4>
        <SocialMedia />
      </section>
    </main>
  );
}
export default Home;
